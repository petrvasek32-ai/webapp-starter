# webapp-starter

Startovní projekt pro lekci 18 kurzu **Webdesign a UX/UI pro moderní webové aplikace**
(React, TypeScript, Vite).

## Spuštění

V **kořeni projektu** (tam, kde je `package.json`, ne uvnitř `src`):

```bash
npm install
npm run dev
```

Vyžaduje Node.js 20.19+ nebo 22.12+ (ověříte `node -v`).

Otevřete přesně tu adresu, kterou vypíše terminál (např. `http://localhost:5173/`).
Zavřením terminálu se vývojový server ukončí.

## Struktura

| Cesta | Role |
| --- | --- |
| `package.json` | popis projektu pro npm, balíčky a scripts (`dev`, `build`) |
| `package-lock.json` | přesné verze balíčků – nemazat, ručně neupravovat |
| `index.html` | HTML kostra s prvkem `#root`, načítá `src/main.tsx` |
| `src/main.tsx` | vstup aplikace – načte styly a vykreslí komponentu `App` |
| `src/App.tsx` | hlavní komponenta – název aplikace a ukázková navigace |
| `src/styles.css` | styly a design tokeny (např. `--color-primary`) |
| `public/` | veřejné statické soubory (nikdy hesla ani klíče) |
| `.env.example` | vzor názvů proměnných **bez hodnot** |
| `.gitignore` | co Git nesleduje (`node_modules`, `.env`) |

## Pravidla

- Do projektu, chatu ani commitu nikdy nevkládejte heslo, token ani serverový API klíč.
- Před každou změnou `git status`, před commitem `git diff`.
