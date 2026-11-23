// Hlavní komponenta: viditelný obsah aplikace.
// Zde je zobrazený název aplikace a ukázková navigace.

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "#" },
  { label: "About", href: "#" },
  { label: "Kontakt", href: "/contact" },
];

function ContactPage() {
  return (
    <section className="contact-section" aria-labelledby="contact-title">
      <div className="contact-intro">
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">Pojďme společně naplánovat vaši zahradu.</h2>
        <p className="lead">
          Napište nám pár slov o svém projektu a představě.
        </p>
      </div>
      <form className="contact-form">
        <label>
          Jméno
          <input name="name" autoComplete="name" placeholder="Vaše jméno" required />
        </label>
        <label>
          E-mail
          <input name="email" type="email" autoComplete="email" placeholder="vas@email.cz" required />
        </label>
        <label>
          Zpráva
          <textarea name="message" rows={4} placeholder="Popište nám svůj projekt" required />
        </label>
        <button className="button" type="button">Odeslat zprávu</button>
      </form>
    </section>
  );
}

export default function App() {
  const isContactPage = window.location.pathname.replace(/\/+$/, "") === "/contact";

  return (
    <main className="app">
      <nav className="nav" aria-label="Hlavní navigace">
        <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {isContactPage ? (
        <ContactPage />
      ) : (
        <header className="hero">
          <h1>Garden Studio</h1>
          <p className="lead">
            Startovní projekt pro kurz Webdesign a UX/UI pro moderní webové
            aplikace.
          </p>
          <a className="button" href="#">
            Začít
          </a>
        </header>
      )}
    </main>
  );
}
