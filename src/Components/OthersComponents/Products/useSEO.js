import { useEffect } from "react";

const setMeta = (attr, key, content) => {
    if (!content) return;
    let el = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute("content", content);
};

// This is a client-rendered SPA with no SSR/prerendering, so this only
// updates tags after the JS bundle runs — it helps the browser tab, social
// shares, and crawlers that execute JS, but isn't a substitute for
// server-rendered meta tags. Good enough for now; revisit if/when this site
// moves to SSR.
const useSEO = ({ title, description, keywords }) => {
    useEffect(() => {
        const prevTitle = document.title;
        if (title) document.title = title;
        setMeta("name", "description", description);
        setMeta("name", "keywords", keywords);
        setMeta("property", "og:title", title);
        setMeta("property", "og:description", description);
        setMeta("property", "twitter:title", title);
        setMeta("property", "twitter:description", description);

        return () => {
            document.title = prevTitle;
        };
    }, [title, description, keywords]);
};

export default useSEO;
