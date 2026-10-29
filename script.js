:root {
  --bg: #060b17;
  --bg-elevated: #0d1425;
  --panel: rgba(17, 24, 39, 0.8);
  --panel-strong: #111827;
  --text: #f8fafc;
  --muted: #a6b1c3;
  --border: rgba(148, 163, 184, 0.2);
  --primary: #8b5cf6;
  --primary-soft: rgba(139, 92, 246, 0.18);
  --accent: #22d3ee;
  --success: #34d399;
  --shadow: rgba(15, 23, 42, 0.4);
}

body[data-theme='sunset'] {
  --bg: #180d16;
  --bg-elevated: #24131f;
  --panel: rgba(42, 23, 33, 0.8);
  --panel-strong: #2a1823;
  --text: #fff7ed;
  --muted: #f7c7a8;
  --border: rgba(251, 146, 60, 0.2);
  --primary: #f97316;
  --primary-soft: rgba(249, 115, 22, 0.18);
  --accent: #fb7185;
  --success: #fbbf24;
}

body[data-theme='aurora'] {
  --bg: #071b1a;
  --bg-elevated: #0f2a2b;
  --panel: rgba(12, 36, 39, 0.8);
  --panel-strong: #10333a;
  --text: #ecfeff;
  --muted: #a7f3d0;
  --border: rgba(45, 212, 191, 0.2);
  --primary: #10b981;
  --primary-soft: rgba(16, 185, 129, 0.18);
  --accent: #2dd4bf;
  --success: #67e8f9;
}

body[data-theme='pearl'] {
  --bg: #f8f7f4;
  --bg-elevated: #f2efe8;
  --panel: rgba(255, 255, 255, 0.8);
  --panel-strong: #ffffff;
  --text: #1a202c;
  --muted: #52607a;
  --border: rgba(148, 163, 184, 0.35);
  --primary: #4f46e5;
  --primary-soft: rgba(79, 70, 229, 0.1);
  --accent: #0ea5e9;
  --success: #14b8a6;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(139, 92, 246, 0.18), transparent 25%),
    radial-gradient(circle at bottom right, rgba(34, 211, 238, 0.18), transparent 20%),
    var(--bg);
  color: var(--text);
  transition: background 0.3s ease, color 0.3s ease;
}

img {
  max-width: 100%;
  display: block;
}

button {
  font: inherit;
  cursor: pointer;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.page-shell {
  min-height: 100vh;
}

.topbar {
  padding: 24px 0 8px;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 20px;
  border: 1px solid var(--border);
  background: rgba(15, 23, 42, 0.2);
  backdrop-filter: blur(16px);
  border-radius: 20px;
  box-shadow: 0 18px 40px var(--shadow);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.brand-mark {
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: white;
  font-weight: 800;
  box-shadow: 0 12px 30px rgba(91, 95, 255, 0.35);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-links a,
.footer a {
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-links a:hover,
.footer a:hover {
  color: var(--text);
}

.nav-actions,
.cta-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.primary-btn,
.secondary-btn,
.ghost-btn {
  border: 1px solid transparent;
  border-radius: 12px;
  padding: 12px 18px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.primary-btn {
  color: white;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  box-shadow: 0 18px 30px rgba(99, 102, 241, 0.28);
}

.secondary-btn {
  color: var(--text);
  background: transparent;
  border-color: var(--border);
}

.ghost-btn {
  color: var(--text);
  background: var(--panel);
  border-color: var(--border);
}

.primary-btn:hover,
.secondary-btn:hover,
.ghost-btn:hover,
.theme-btn:hover {
  transform: translateY(-1px);
}

.large {
  padding: 15px 24px;
}

.hero {
  padding: 70px 0 32px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 40px;
}

.eyebrow,
.section-label {
  margin: 0 0 12px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.74rem;
  font-weight: 700;
  color: var(--accent);
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.8rem, 6vw, 5.1rem);
  line-height: 0.95;
  letter-spacing: -0.06em;
}

.subtext {
  font-size: 1.08rem;
  line-height: 1.7;
  color: var(--muted);
  max-width: 560px;
  margin-top: 20px;
}

.trust-row {
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.trust-row div {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.trust-row strong {
  font-size: 1.4rem;
}

.trust-row span {
  color: var(--muted);
  font-size: 0.85rem;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.mock-window {
  position: relative;
  width: min(100%, 520px);
  border: 1px solid var(--border);
  background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
  border-radius: 28px;
  box-shadow: 0 28px 80px rgba(15, 23, 42, 0.35);
  padding: 16px;
}

.window-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px 18px;
}

.window-bar span {
  width: 12px;
  height: 12px;
  display: inline-block;
  border-radius: 50%;
  background: rgba(148, 163, 184, 0.9);
}

.window-body {
  display: grid;
  gap: 18px;
  background: var(--panel-strong);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 22px;
}

.mini-card,
.feature-card,
.price-card,
.showcase-item {
  border: 1px solid var(--border);
  background: var(--panel);
  border-radius: 18px;
}

.highlight-card {
  background: linear-gradient(135deg, var(--primary-soft), rgba(255,255,255,0.02));
  padding: 18px 20px;
}

.highlight-card p,
.mini-card p {
  margin: 0 0 8px;
  color: var(--muted);
}

.highlight-card h3 {
  margin: 0;
  font-size: 2rem;
  letter-spacing: -0.05em;
}

.chart-card {
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 20px 18px 12px;
}

.chart-bars {
  display: flex;
  align-items: end;
  gap: 10px;
  height: 130px;
}

.chart-bars span {
  flex: 1;
  display: block;
  border-radius: 999px 999px 0 0;
  background: linear-gradient(180deg, var(--accent), var(--primary));
  box-shadow: 0 16px 18px rgba(94, 92, 255, 0.15);
}

.task-list {
  display: grid;
  gap: 12px;
}

.task-row {
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: 12px;
  color: var(--muted);
}

.task-row.active {
  color: var(--text);
  background: rgba(255,255,255,0.02);
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--success);
  box-shadow: 0 0 0 5px rgba(52, 211, 153, 0.15);
}

.theme-selector {
  padding: 10px 0 40px;
}

.theme-switcher {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.theme-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 999px;
  background: var(--panel);
  color: var(--text);
  border: 1px solid var(--border);
  transition: all 0.2s ease;
}

.theme-btn.is-active {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px var(--primary-soft);
}

.swatch {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  display: inline-block;
}

.swatch.midnight { background: linear-gradient(135deg, #4f46e5, #0f172a); }
.swatch.sunset { background: linear-gradient(135deg, #f59e0b, #f43f5e); }
.swatch.aurora { background: linear-gradient(135deg, #10b981, #22d3ee); }
.swatch.pearl { background: linear-gradient(135deg, #a78bfa, #e2e8f0); }

.features,
.showcase,
.pricing {
  padding: 60px 0;
}

.section-heading {
  margin-bottom: 24px;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.1;
  letter-spacing: -0.05em;
}

.center {
  text-align: center;
}

.feature-grid,
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.feature-card,
.price-card {
  padding: 28px 22px;
}

.icon-wrap {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: var(--primary-soft);
  color: var(--primary);
  font-size: 1.4rem;
  margin-bottom: 16px;
}

.feature-card h3,
.showcase-item h3,
.price-card h3 {
  margin: 0 0 10px;
  letter-spacing: -0.04em;
}

.feature-card p,
.showcase-copy p,
.price-card ul,
.footer p,
.footer a {
  color: var(--muted);
  line-height: 1.7;
}

.showcase {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 28px;
  align-items: center;
}

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.showcase-item {
  min-height: 220px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  overflow: hidden;
  position: relative;
}

.showcase-item.large {
  grid-column: 1 / -1;
  min-height: 260px;
}

.showcase-item::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(15,23,42,0.45));
}

.item-one {
  background: linear-gradient(135deg, rgba(139,92,246,0.9), rgba(34,211,238,0.5));
}

.item-two {
  background: linear-gradient(135deg, rgba(16,185,129,0.8), rgba(59,130,246,0.6));
}

.item-three {
  background: linear-gradient(135deg, rgba(249,115,22,0.8), rgba(236,72,153,0.6));
}

.showcase-item > * {
  position: relative;
  z-index: 1;
}

.pill {
  display: inline-flex;
  align-self: flex-start;
  padding: 7px 10px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.22);
  border: 1px solid rgba(255,255,255,0.18);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.9);
  margin-bottom: 12px;
}

.price-card {
  display: flex;
  flex-direction: column;
}

.tier {
  margin: 0 0 8px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
}

.price-card h3 {
  font-size: clamp(2rem, 4vw, 3rem);
  letter-spacing: -0.06em;
}

.price-card h3 span {
  font-size: 1rem;
  color: var(--muted);
}

.price-card ul {
  list-style: none;
  padding: 0;
  margin: 20px 0 0;
  display: grid;
  gap: 12px;
}

.price-card li::before {
  content: '✓';
  color: var(--success);
  margin-right: 8px;
}

.featured {
  border-color: var(--primary);
  box-shadow: 0 20px 40px rgba(79, 70, 229, 0.18);
  transform: translateY(-8px);
}

.full {
  width: 100%;
  margin-top: 22px;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  padding: 20px 0 48px;
  border-top: 1px solid var(--border);
  margin-top: 30px;
}

@media (max-width: 900px) {
  .hero,
  .showcase,
  .feature-grid,
  .pricing-grid {
    grid-template-columns: 1fr;
  }

  .nav {
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav-links {
    order: 3;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  .footer {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 560px) {
  .nav-actions,
  .cta-row {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  .hero {
    padding-top: 42px;
  }

  .section-heading h2,
  .hero-copy h1 {
    letter-spacing: -0.04em;
  }

  .showcase-grid {
    grid-template-columns: 1fr;
  }
}
