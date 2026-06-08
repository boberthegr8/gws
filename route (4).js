import "./globals.css";

export const metadata = {
  title: "GWS — Great White Streams",
  description:
    "Great White Streams (GWS) — premium streaming with apex performance. Hush & Pure Vision setup, updates, free trials and support.",
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml," +
          encodeURIComponent(
            `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='%2338d6ff'/><stop offset='100%' stop-color='%232f7bff'/></linearGradient></defs><rect width='64' height='64' rx='14' fill='%23061226'/><path d='M14 44 C 26 40 40 26 50 10 C 50 28 46 40 40 44 Z' fill='url(%23g)'/><path d='M8 50 q 8 -6 16 0 t 16 0 t 12 0' fill='none' stroke='%232f7bff' stroke-width='3' stroke-linecap='round'/></svg>`
          ),
      },
    ],
  },
};

export const viewport = {
  themeColor: "#03060f",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
