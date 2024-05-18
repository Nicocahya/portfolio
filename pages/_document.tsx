import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth" style={{ scrollBehavior: "smooth" }} lang="en">
      <Head />
      <body className="font-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
