import "./globals.css";

export const metadata = {
  title: {
    default: "Auto Glass Repair & Windshield Replacement in Dallas | GlassGo",
    template: "%s | GlassGo"
  },
  description:
    "Mobile windshield replacement, auto glass repair, and residential glass services across Dallas. Same‑day service, lifetime warranty, and free estimates.",
  keywords: [
    "windshield replacement Dallas",
    "auto glass repair Dallas",
    "mobile windshield repair",
    "residential glass replacement",
    "car window repair Dallas"
  ],
  alternates: {
    canonical: "https://glassgollc.com/"
  },
  openGraph: {
    title: "Auto Glass Repair & Windshield Replacement in Dallas | GlassGo",
    description:
      "Affordable, reliable mobile auto glass and residential glass services in Dallas. Free quotes and lifetime warranty.",
    url: "https://glassgollc.com/",
    siteName: "GlassGo",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Glass Repair & Windshield Replacement | GlassGo",
    description:
      "Need expert glass replacement in Dallas? Get fast, affordable service with a lifetime warranty from GlassGo."
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mytheme">
      <body>{children}</body>
    </html>
  );
}
