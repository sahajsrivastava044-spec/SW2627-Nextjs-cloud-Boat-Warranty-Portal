import '../styles/globals.css';

export const metadata = {
  title: 'boAt — Warranty Lookup | Verify Your Warranty Instantly',
  description:
    'Enter your product serial number to verify warranty status, view repair history and download your warranty certificate. Quick, easy and 100% genuine.',
  keywords: 'boAt warranty, warranty verification, serial number check, boAt support, warranty certificate',
  openGraph: {
    title: 'boAt Warranty Lookup',
    description: 'Verify your boAt product warranty instantly',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
