import "./globals.css";

export const metadata = {
  title: "GlassGo",
  description: "Need expert glass replacement and repair in Dallas? We offer the most affordable, experienced, and reliable auto glass services for homes and vehicles in Dallas and surrounding areas. Get a free estimate today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mytheme">
      <body>{children}</body>
    </html>
  );
}
