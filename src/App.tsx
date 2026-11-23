// Hlavní komponenta: viditelný obsah aplikace.
// Zde je zobrazený název aplikace a ukázková navigace.

const navItems = ["Home", "Projects", "About", "Contact"];

export default function App() {
  return (
    <main className="app">
      <nav className="nav" aria-label="Hlavní navigace">
        <ul>
          {navItems.map((item) => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </nav>

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
    </main>
  );
}
