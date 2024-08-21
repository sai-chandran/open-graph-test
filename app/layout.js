import "./globals.css";

export const metadata = {
  title: "Open Graph Test",
  description: "Social media banner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content="Cloud Infrastructure Compliance and Enhanced CyberSecurity | iCompaas" />
        <meta property="og:description" content="iCompaas is a Cloud Infrastructure CyberSecurity, Compliance and Cost Optimization Tool. Cloud Security Posture Management Tool." />
        <meta property="og:image" content="/banner.jpg" />
        <meta property="og:url" content="https://www.icompaas.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
