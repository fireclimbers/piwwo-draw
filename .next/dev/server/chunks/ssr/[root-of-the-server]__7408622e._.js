module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/other/tweet-app/lib/firebase.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/other/tweet-app/node_modules/firebase/app/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/other/tweet-app/node_modules/@firebase/app/dist/esm/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/other/tweet-app/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/other/tweet-app/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
// lib/firebase.js
"use client";
;
;
const firebaseConfig = {
    apiKey: "AIzaSyB-qaY3Vr5M8qqPfzsdK8xkX1jC5PTNggE",
    authDomain: "piwwo-a7e36.firebaseapp.com",
    projectId: "piwwo-a7e36",
    storageBucket: "piwwo-a7e36.firebasestorage.app",
    messagingSenderId: "543668179634",
    appId: "1:543668179634:web:552247a8f5a25610d16fab"
};
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFirestore"])(app);
}),
"[project]/other/tweet-app/app/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/other/tweet-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/other/tweet-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/other/tweet-app/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/other/tweet-app/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/other/tweet-app/lib/firebase.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Home() {
    const PAGE_SIZE = 50;
    const [tweets, setTweets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadingMore, setLoadingMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastDoc, setLastDoc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hasMore, setHasMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchTweets();
    }, []);
    async function fetchTweets() {
        try {
            setLoading(true);
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], "tweets"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])("tags", "array-contains", "pillowdraw"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])("timestamp", "desc"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["limit"])(PAGE_SIZE));
            const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
            const newTweets = snap.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }));
            setTweets(newTweets);
            setLastDoc(snap.docs[snap.docs.length - 1]);
            if (snap.docs.length < PAGE_SIZE) setHasMore(false);
        } finally{
            setLoading(false);
        }
    }
    async function fetchMoreTweets() {
        if (!lastDoc || loadingMore || !hasMore) return;
        try {
            setLoadingMore(true);
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], "tweets"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])("tags", "array-contains", "pillowdraw"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])("timestamp", "desc"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startAfter"])(lastDoc), (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["limit"])(PAGE_SIZE));
            const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
            const newTweets = snap.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }));
            // Dedupe by tweet ID
            setTweets((prev)=>{
                const all = [
                    ...prev,
                    ...newTweets
                ];
                return Array.from(new Map(all.map((t)=>[
                        t.id,
                        t
                    ])).values());
            });
            setLastDoc(snap.docs[snap.docs.length - 1]);
            if (snap.docs.length < PAGE_SIZE) setHasMore(false);
        } finally{
            setLoadingMore(false);
        }
    }
    // Infinite scroll
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function onScroll() {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 && !loadingMore && hasMore) {
                fetchMoreTweets();
            }
        }
        window.addEventListener("scroll", onScroll);
        return ()=>window.removeEventListener("scroll", onScroll);
    }, [
        loadingMore,
        hasMore,
        lastDoc
    ]);
    function buildTweetUrl(tweet) {
        return `https://twitter.com/${tweet.username}/status/${tweet.id}`;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            padding: 20,
            paddingLeft: "15%",
            paddingRight: "15%",
            fontFamily: "Arial, sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "#pillowdraw"
            }, void 0, false, {
                fileName: "[project]/other/tweet-app/app/page.jsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/other/tweet-app/app/page.jsx",
                lineNumber: 108,
                columnNumber: 19
            }, this),
            !loading && tweets.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "No tweets found."
            }, void 0, false, {
                fileName: "[project]/other/tweet-app/app/page.jsx",
                lineNumber: 109,
                columnNumber: 43
            }, this),
            tweets.map((tweet)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: ()=>window.open(buildTweetUrl(tweet), "_blank"),
                    style: {
                        borderBottom: "1px solid #ddd",
                        marginBottom: 10,
                        paddingBottom: 10,
                        padding: 10,
                        cursor: "pointer",
                        borderRadius: 8,
                        transition: "background 0.15s"
                    },
                    onMouseEnter: (e)=>e.currentTarget.style.background = "#f7f7f7",
                    onMouseLeave: (e)=>e.currentTarget.style.background = "transparent",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 8
                            },
                            children: [
                                tweet.profilePic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: tweet.profilePic,
                                    alt: "Profile",
                                    style: {
                                        width: 40,
                                        height: 40,
                                        borderRadius: "50%"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/other/tweet-app/app/page.jsx",
                                    lineNumber: 130,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: tweet.displayName
                                        }, void 0, false, {
                                            fileName: "[project]/other/tweet-app/app/page.jsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "#555"
                                            },
                                            children: [
                                                "@",
                                                tweet.username
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/other/tweet-app/app/page.jsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            style: {
                                                color: "#888",
                                                fontSize: 12,
                                                marginLeft: 6
                                            },
                                            children: new Date(tweet.timestamp).toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/other/tweet-app/app/page.jsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/other/tweet-app/app/page.jsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/other/tweet-app/app/page.jsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                margin: "8px 0"
                            },
                            children: tweet.text
                        }, void 0, false, {
                            fileName: "[project]/other/tweet-app/app/page.jsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        tweet.media && tweet.media.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 8
                            },
                            children: tweet.media.map((m, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "relative",
                                        width: 200,
                                        height: 200,
                                        borderRadius: 6,
                                        overflow: "hidden"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: m.url,
                                            alt: m.type,
                                            style: {
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                display: "block"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/other/tweet-app/app/page.jsx",
                                            lineNumber: 162,
                                            columnNumber: 19
                                        }, this),
                                        m.type === "video" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
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
                                                justifyContent: "center"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 0,
                                                    height: 0,
                                                    borderTop: "12px solid transparent",
                                                    borderBottom: "12px solid transparent",
                                                    borderLeft: "18px solid white",
                                                    marginLeft: 4
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/other/tweet-app/app/page.jsx",
                                                lineNumber: 190,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/other/tweet-app/app/page.jsx",
                                            lineNumber: 175,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/other/tweet-app/app/page.jsx",
                                    lineNumber: 152,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/other/tweet-app/app/page.jsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this)
                    ]
                }, tweet.id, true, {
                    fileName: "[project]/other/tweet-app/app/page.jsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this)),
            loadingMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Loading more tweets…"
            }, void 0, false, {
                fileName: "[project]/other/tweet-app/app/page.jsx",
                lineNumber: 209,
                columnNumber: 23
            }, this),
            !hasMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$other$2f$tweet$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    opacity: 0.6
                },
                children: "No more tweets."
            }, void 0, false, {
                fileName: "[project]/other/tweet-app/app/page.jsx",
                lineNumber: 210,
                columnNumber: 20
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/other/tweet-app/app/page.jsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7408622e._.js.map