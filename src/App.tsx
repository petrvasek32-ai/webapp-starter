// Hlavní komponenta: viditelný obsah aplikace.
// Zde je zobrazený název aplikace a ukázková navigace.

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
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

const projects = [
  {
    number: "01",
    title: "Zahrada ve stínu",
    type: "Městský dvůr",
    description: "Klidné zákoutí s kapradinami, měkkým posezením a rostlinami, kterým se daří i bez přímého slunce.",
    visual: "project-visual project-shade",
    detail: "Stínomilná výsadba",
  },
  {
    number: "02",
    title: "Louka u domu",
    type: "Rodinná zahrada",
    description: "Přirozeně působící výsadba, která propojuje terasu s okolní zelení a zve k objevování.",
    visual: "project-visual project-meadow",
    detail: "Přírodní charakter",
  },
  {
    number: "03",
    title: "Zelená terasa",
    type: "Městská terasa",
    description: "Promyšlené nádoby, popínavá zeleň a místo pro odpočinek i na menším prostoru.",
    visual: "project-visual project-terrace",
    detail: "Malý prostor, velký klid",
  },
];

function ProjectsPage() {
  return (
    <section className="projects-section" aria-labelledby="projects-title">
      <header className="projects-heading">
        <p className="eyebrow">Ukázkové koncepty</p>
        <h1 id="projects-title">Projects</h1>
        <p className="lead">
          Prohlédněte si zahradní koncepty od stinného dvora a přírodní louky
          až po zelenou městskou terasu.
        </p>
      </header>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className={project.visual} aria-hidden="true">
              <span>{project.detail}</span>
            </div>
            <div className="project-copy">
              <p className="project-meta">{project.number} · {project.type}</p>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const principles = [
  {
    number: "01",
    title: "Nasloucháme místu",
    description: "Vycházíme z charakteru zahrady, jejího okolí i z toho, jak ji chcete každý den používat.",
  },
  {
    number: "02",
    title: "Tvoříme s citem",
    description: "Propojujeme zeleň, materiály a praktické potřeby do klidného a přirozeného celku.",
  },
  {
    number: "03",
    title: "Myslíme na budoucnost",
    description: "Navrhujeme zahrady, které mohou dobře růst, měnit se a dělat radost dlouhodobě.",
  },
];

function AboutPage() {
  return (
    <section className="about-section" aria-labelledby="about-title">
      <header className="about-heading">
        <p className="eyebrow">O našem studiu</p>
        <h1 id="about-title">Něco o nás</h1>
        <p className="lead">
          Garden Studio navrhuje zahrady, které přirozeně navazují na dům,
          okolní krajinu i každodenní život jejich majitelů.
        </p>
      </header>
      <div className="about-story">
        <p className="eyebrow">Naše představa</p>
        <h2>Prostor, ve kterém se dobře žije.</h2>
        <p>
          Každý návrh začíná rozhovorem a poznáním místa. Hledáme rovnováhu
          mezi krásou, funkčností a přírodou, aby výsledná zahrada působila
          osobitě a byla příjemná v každém ročním období.
        </p>
      </div>
      <div className="about-principles">
        {principles.map((principle) => (
          <article className="principle-card" key={principle.number}>
            <span className="principle-number">{principle.number}</span>
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const isContactPage = currentPath === "/contact";
  const isAboutPage = currentPath === "/about";
  const isProjectsPage = currentPath === "/projects";

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
      ) : isAboutPage ? (
        <AboutPage />
      ) : isProjectsPage ? (
        <ProjectsPage />
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
