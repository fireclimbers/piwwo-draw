import './globals.css';

export const metadata = {
  metadataBase: new URL('https://pillowdear.com'),
  title: "PillowDraw",
  description: "Archive of Piwwo Art",
  openGraph: {
    title: "PillowDraw",
    description: "Archive of Piwwo Art",
    url: "https://pillowdear.com",
    siteName: "PillowDraw",
    images: [
      {
        url: "/preview-img.jpg",
        width: 1200,
        height: 628,
        alt: "PillowDraw - Archive of Piwwo Art",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PillowDraw",
    description: "Archive of Piwwo Art",
    images: ["/preview-img.jpg"], 
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
