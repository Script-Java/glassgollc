"use client";

import React, { useEffect, useState } from "react";

export default function TrustindexWidget() {
  const [iframeHeight, setIframeHeight] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleMessage = (event) => {
      if (
        event.origin.includes("trustindex.io") &&
        event.data?.height &&
        typeof event.data.height === "number"
      ) {
        setIframeHeight(`${event.data.height}px`);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <section className="px-4 max-w-7xl mx-auto py-10">
      <div className="mx-auto max-w-7xl">
        <iframe
          src="https://cdn.trustindex.io/amp-widget.html#fcce08d46d0063531896f3d2dbd"
          style={{
            display: "block",
            width: "100%",
            height: iframeHeight || "1000px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "transparent",
            transition: "height 0.3s ease",
          }}
          scrolling="no"
          loading="lazy"
          title="Trustindex Reviews"
        ></iframe>
      </div>
    </section>
  );
}
