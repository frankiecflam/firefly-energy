import "./globals.css";

export const metadata = {
  title: "Firefly Energy",
  description:
    "Access your account to see your bills, consumption, meter readings and account details.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
