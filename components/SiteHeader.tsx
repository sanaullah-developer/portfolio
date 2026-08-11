import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "#contact" }
];

export function SiteHeader() {
  return (
    <header className="section-shell pt-8">
      <div className="panel flex items-center justify-between px-5 py-4 md:px-6">
        <Link href="/" className="font-heading text-lg font-semibold text-textmain">
          AI Engineer
        </Link>
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-6 text-sm text-textmuted md:flex">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="link-hover">
                {link.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
