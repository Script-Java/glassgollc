"use client";

export default function TrustindexWidget() {
  return (
    <section className="px-4 max-w-7xl mx-auto">
      <div className="text-center mx-auto">
        <iframe
          src="https://cdn.trustindex.io/amp-widget.html#fcce08d46d0063531896f3d2dbd"
          style={{
            display: "block",
            width: "100%",
            height: "901px", // Match what Trustindex recommends
            border: "0",
            borderRadius: "12px",
            backgroundColor: "transparent",
            overflowX: "hidden",
          }}
          scrolling="no"
          loading="lazy"
          title="Trustindex Reviews"
        ></iframe>
      </div>
    </section>
  );
}
