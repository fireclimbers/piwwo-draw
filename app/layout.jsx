export const metadata = {
  title: "PillowDraw",
  description: "Archive of Piwwo Art"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
