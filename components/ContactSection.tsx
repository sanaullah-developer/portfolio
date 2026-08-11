import Link from "next/link";

const contactItems = [
  {
    label: "Email",
    value: "sanaullahafd07@gmail.com",
    href: "mailto:sanaullahafd07@gmail.com"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sana-ullah-afridi",
    href: "https://linkedin.com/in/sana-ullah-afridi"
  },
  {
    label: "GitHub",
    value: "github.com/sanaullah-developer",
    href: "https://github.com/sanaullah-developer"
  }
];

export function ContactSection() {
  return (
    <section id="contact" className="section-shell pb-20 pt-20 md:pb-24 md:pt-24">
      <div className="panel px-6 py-8 md:px-10 md:py-10">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          Open to internships and full-time roles in AI engineering, computer
          vision, and ML platform development.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-xl border border-borderline bg-slatebase/60 p-4 transition-colors duration-200 hover:border-accent/60"
            >
              <p className="text-xs uppercase tracking-wider text-textmuted">
                {item.label}
              </p>
              <p className="mt-2 text-sm font-medium text-textmain">{item.value}</p>
            </Link>
          ))}
          <Link
            href="/resume.pdf"
            className="rounded-xl bg-accent p-4 text-slatebase transition-colors duration-200 hover:bg-accentsoft"
          >
            <p className="text-xs uppercase tracking-wider">Resume</p>
            <p className="mt-2 text-sm font-semibold">Download PDF</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
