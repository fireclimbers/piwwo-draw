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

  const [currentPage, setCurrentPage] = useState('draw');
  const [outfit, setOutfit] = useState('current');

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
    <main style={{ fontFamily: "Arial, sans-serif", backgroundColor:"#FCEDF1",
      backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
      backgroundSize: '40px 40px' }}>

      <div className="columns" style={{margin:0}}>
        <div className="column" style={{padding:0}}></div>
        <div className="column is-4" style={{padding:0}}>
          <img src="/pillowdear_logo.png" alt="PillowDear" className="logo"/>
        </div>
        <div className="column" style={{padding:0}}></div>
      </div>


      <div className="columns" style={{margin:0}}>

        <div className="column" style={{padding:0}}></div>
        <div className="column is-8" style={{padding:0}}>
          <div className="buttons">
            <button onClick={()=>{setCurrentPage('draw')}} className={"button"+(currentPage === 'draw' ? ' is-info': ' is-white')}>#pillowdraw</button>
            <button onClick={()=>{setCurrentPage('references')}} className={"button"+(currentPage === 'references' ? ' is-info': ' is-white')}>References</button>
            <button onClick={()=>{setCurrentPage('other')}} className={"button"+(currentPage === 'other' ? ' is-info': ' is-white')}>Resources</button>
          </div>

          {currentPage === 'draw' && <p style={{marginBottom:12}}>Art made by the Piwwo community! Any post with the #pillowdraw tag will appear here</p>}
          {currentPage === 'references' && <p style={{marginBottom:12}}>Design references of all PillowDear outfits</p>}
          {currentPage === 'other' && <p style={{marginBottom:12}}>Other resources and assets</p>}


          {currentPage === 'draw' && <div className="post-padding" style={{border:"#F4BBBF 6px solid", borderRadius:'12px', backgroundColor:"#ffffffa0"}}>

            {loading && <p>Loading...</p>}
            {!loading && tweets.length === 0 && <p>No tweets found.</p>}

            {tweets.map(tweet => (
              <div
                key={tweet.id}
                onClick={() => window.open(buildTweetUrl(tweet), "_blank")}
                style={{
                  borderBottom: "1px solid #ddd",
                  marginBottom: 24,
                  paddingBottom: 10,
                  padding: 24,
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
          </div>}

          {currentPage === 'references' && <div className="post-padding" style={{border:"#F4BBBF 6px solid", borderRadius:'12px', backgroundColor:"#ffffffa0"}}>
            <div className="buttons">
              <button onClick={()=>{setOutfit('current')}} className={"button is-small "+(outfit === 'current' ? 'is-info':'is-white')}>CURRENT</button>
              <button onClick={()=>{setOutfit('nurse')}} className={"button is-small "+(outfit === 'nurse' ? 'is-info':'is-white')}>Nurse</button>
              <button  onClick={()=>{setOutfit('casual')}} className={"button is-small "+(outfit === 'casual' ? 'is-info':'is-white')}>Casual</button>
              <button  onClick={()=>{setOutfit('casual-1.0')}} className={"button is-small "+(outfit === 'casual-1.0' ? 'is-info':'is-white')}>Casual (1.0)</button>
              <button  onClick={()=>{setOutfit('pajama')}} className={"button is-small "+(outfit === 'pajama' ? 'is-info':'is-white')}>Pajama</button>
              <button  onClick={()=>{setOutfit('gothic')}} className={"button is-small "+(outfit === 'gothic' ? 'is-info':'is-white')}>Gothic</button>
              <button  onClick={()=>{setOutfit('original')}} className={"button is-small "+(outfit === 'original' ? 'is-info':'is-white')}>Original</button>
              <button  onClick={()=>{setOutfit('mascot')}} className={"button is-small "+(outfit === 'mascot' ? 'is-info':'is-white')}>Mascot (piwwo)</button>
            </div>
            <img src={"/"+outfit+"_ref.jpg"} alt={"PillowDear "+outfit} />
          </div>}

          {currentPage === 'other' && <div className="post-padding" style={{border:"#F4BBBF 6px solid", borderRadius:'12px', backgroundColor:"#ffffffa0"}}>
            <p><b>Links:</b></p>
            <p>
              <a href="https://pillowdearvt.com" target="_blank"><span className="icon-text">
                <span style={{marginLeft:4}}>🌈 💌 Official Website</span>
              </span></a>
            </p>
            <p>
              <a href="https://www.youtube.com/@pillowdear" target="_blank"><span className="icon-text">
                <span className="icon has-text-danger">
                  <i className="fab fa-youtube fa-fw"></i>
                </span>
                <span>PillowDear</span>
              </span></a>
            </p>
            <p>
              <a href="https://www.youtube.com/@CushionHunASMR" target="_blank"><span className="icon-text">
                <span className="icon has-text-danger">
                  <i className="fab fa-youtube fa-fw"></i>
                </span>
                <span>CushionHun ASMR</span>
              </span></a>
            </p>

            <p>
              <a href="https://x.com/pillowdearASMR" target="_blank"><span className="icon-text">
                <span className="icon has-text-black">
                  <i className="fab fa-x-twitter fa-fw"></i>
                </span>
                <span>PillowDearASMR</span>
              </span></a>
            </p>
            <p>
              <a href="https://merch.kawaentertainment.com/collections/pillowdear" target="_blank"><span className="icon-text">
                <span className="icon has-text-info">
                  <i className="fa-solid fa-store fa-fw"></i>
                </span>
                <span>Current Merch (kawa entertainment)</span>
              </span></a>
            </p>
            <p>
              <a href="https://uwumarket.us/collections/pillowdearasmr" target="_blank"><span className="icon-text">
                <span className="icon has-text-primary">
                  <i className="fa-solid fa-store fa-fw"></i>
                </span>
                <span>Past Merch (uwumarket)</span>
              </span></a>
            </p>
            <p>
              <a href="https://discord.gg/pillowdear" target="_blank"><span className="icon-text">
                <span className="icon has-text-link">
                  <i className="fab fa-discord fa-fw"></i>
                </span>
                <span>PiwwoCord (fan-run)</span>
              </span></a>
            </p>
            <hr/>

            <p><b>3D Models:</b></p>
            <p><a href="https://drive.google.com/drive/folders/1qyO-4bEuuX2r_ECB0gPKDZtUUhzMNkym?usp=sharing" target="_blank">Nurse and casual (low poly)</a></p>
            <p><a href="https://drive.google.com/drive/folders/1WFyOOsfnu0Lg1OVtvgIloH2EIvh5tZx_" target="_blank">Pajama (low poly)</a></p>
            <p><a href="https://drive.google.com/drive/folders/1H_VlR9Gq8Lp-Mon8IAVEucweY61O8-YO" target="_blank">Pillow Plush</a></p>
            <p><a href="https://x.com/moon_8_shadow/status/1904195250824130742?s=46" target="_blank">Piwwo</a></p>
            <p><a href="https://drive.google.com/drive/folders/1LCOlC_FZIRToZ2d_GsnCozyQzi24_5NC" target="_blank">Piwwo Live2D</a></p>
            <p><a href="https://vrchat.com/home/world/wrld_53edc4f1-2fca-4c96-8587-ab93a798313a/info" target="_blank">Pillow Basement VRChat World</a></p>
            <hr/>


            <p><b>Official daki designs:</b></p>
            <p>You will need to find a website that makes custom dakis and send in these images.</p>
            <br/>
            <div className="columns">
            <div className="column">
            <img src={"/casual_front.png"} alt={"Daki casual front"} />
            </div>
            <div className="column">
            <img src={"/casual_back.png"} alt={"Daki casual back"} />
            </div>
            <div className="column">
            <img src={"/nurse_front.png"} alt={"Nurse casual front"} />
            </div>
            <div className="column">
            <img src={"/nurse_back.png"} alt={"Nurse casual back"} />
            </div>
            </div>

          </div>}
        </div>
        <div className="column" style={{padding:0}}></div>

      </div>
    </main>
  );
}
