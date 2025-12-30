"use client";

import { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  getDocs
} from "firebase/firestore";
import { db } from "../lib/firebase";

export default function Home() {
  const PAGE_SIZE = 50;

  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [lastDoc, setLastDoc] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchTweets();
  }, []);

  async function fetchTweets() {
    try {
      setLoading(true);

      const q = query(
        collection(db, "tweets"),
        where("tags", "array-contains", "pillowdraw"),
        orderBy("timestamp", "desc"),
        limit(PAGE_SIZE)
      );

      const snap = await getDocs(q);

      const newTweets = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      setTweets(newTweets);
      setLastDoc(snap.docs[snap.docs.length - 1]);

      if (snap.docs.length < PAGE_SIZE) setHasMore(false);
    } finally {
      setLoading(false);
    }
  }

  async function fetchMoreTweets() {
    if (!lastDoc || loadingMore || !hasMore) return;

    try {
      setLoadingMore(true);

      const q = query(
        collection(db, "tweets"),
        where("tags", "array-contains", "pillowdraw"),
        orderBy("timestamp", "desc"),
        startAfter(lastDoc),
        limit(PAGE_SIZE)
      );

      const snap = await getDocs(q);

      const newTweets = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      // Dedupe by tweet ID
      setTweets(prev => {
        const all = [...prev, ...newTweets];
        return Array.from(new Map(all.map(t => [t.id, t])).values());
      });

      setLastDoc(snap.docs[snap.docs.length - 1]);

      if (snap.docs.length < PAGE_SIZE) setHasMore(false);
    } finally {
      setLoadingMore(false);
    }
  }

  // Infinite scroll
  useEffect(() => {
    function onScroll() {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
        !loadingMore &&
        hasMore
      ) {
        fetchMoreTweets();
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [loadingMore, hasMore, lastDoc]);

  function buildTweetUrl(tweet) {
    return `https://twitter.com/${tweet.username}/status/${tweet.id}`;
  }

  return (
    <main style={{ padding: 20, paddingLeft: "15%", paddingRight: "15%", fontFamily: "Arial, sans-serif" }}>
      <h1>#pillowdraw</h1>

      {loading && <p>Loading...</p>}
      {!loading && tweets.length === 0 && <p>No tweets found.</p>}

      {tweets.map(tweet => (
        <div
          key={tweet.id}
          onClick={() => window.open(buildTweetUrl(tweet), "_blank")}
          style={{
            borderBottom: "1px solid #ddd",
            marginBottom: 10,
            paddingBottom: 10,
            padding: 10,
            cursor: "pointer",
            borderRadius: 8,
            transition: "background 0.15s",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "#f7f7f7")}
          onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
        >
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {tweet.profilePic && (
              <img
                src={tweet.profilePic}
                alt="Profile"
                style={{ width: 40, height: 40, borderRadius: "50%" }}
              />
            )}
            <div>
              <strong>{tweet.displayName}</strong>{" "}
              <span style={{ color: "#555" }}>@{tweet.username}</span>{" "}
              <small style={{ color: "#888", fontSize: 12, marginLeft: 6 }}>
                {new Date(tweet.timestamp).toLocaleString()}
              </small>
            </div>
          </div>

          {/* Text */}
          <p style={{ margin: "8px 0" }}>{tweet.text}</p>

          {/* Media */}
          {tweet.media && tweet.media.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {tweet.media.map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    position: "relative",
                    width: 200,
                    height: 200,
                    borderRadius: 6,
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={m.url}
                    alt={m.type}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  {m.type === "video" && (
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        background: "rgba(0,0,0,0.5)",
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          width: 0,
                          height: 0,
                          borderTop: "12px solid transparent",
                          borderBottom: "12px solid transparent",
                          borderLeft: "18px solid white",
                          marginLeft: 4,
                        }}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {loadingMore && <p>Loading more tweets…</p>}
      {!hasMore && <p style={{ opacity: 0.6 }}>I have not archived past this point. :(</p>}
    </main>
  );
}
