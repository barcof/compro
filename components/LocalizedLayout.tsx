import Navbar from "./Navbar";
import Footer from "./Footer";
import type { Lang } from "./site-data";
export default function LocalizedLayout({
  lang,
  path = "/",
  children,
}: {
  lang: Lang;
  path?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar lang={lang} path={path} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang} />
    </div>
  );
}
