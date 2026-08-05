export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body style={{ margin: 0, background: "#fff" }}>{children}</body>
    </html>
  );
}
