import './globals.css';

export const metadata = {
  title: "PillowDraw",
  description: "Archive of Piwwo Art",
  openGraph: {
    title: "PillowDraw",
    description: "Archive of Piwwo Art",
    url: "https://pillowdear.com",
    siteName: "PillowDraw",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PillowDraw",
    description: "Archive of Piwwo Art",
    images: ["/icon.png"], 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css"/>
      </head>
      <body style={{margin:0}}>{children}</body>
    </html>
  );
}
