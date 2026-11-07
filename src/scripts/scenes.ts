/**
 * Plays the product scenes of the home journey.
 *
 * Without this script (or with reduced motion) every scene shows its finished
 * state, which is the markup as written. With it:
 * - each scene is "armed" (reset to its first frame) and plays once when it
 *   scrolls into view; CSS owns the choreography through `[data-play]`;
 * - `[data-replay]` replays a scene, `[data-count-to]` counts a figure up
 *   inside `data-count-template` (e.g. `# € / mois`),
 *   `[data-tab]` switches a view, `[data-approve]` approves a draft.
 */
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const scenes = Array.from(document.querySelectorAll<HTMLElement>('[data-scene]'));

const COUNT_MS = 900;

function countUp(el: HTMLElement): void {
  const target = Number(el.dataset.countTo);
  const delay = Number(el.dataset.countDelay ?? 0);
  const format = new Intl.NumberFormat(document.documentElement.lang || undefined, {
    maximumFractionDigits: 0,
  });
  // The finished text is in the markup; `#` in the template marks the figure.
  const template = el.dataset.countTemplate ?? '#';
  const render = (value: number) => {
    el.textContent = template.replace('#', format.format(value));
  };
  render(0);
  window.setTimeout(() => {
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / COUNT_MS);
      const eased = 1 - Math.pow(1 - t, 3);
      render(Math.round(target * eased));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, delay);
}

function play(scene: HTMLElement): void {
  scene.removeAttribute('data-play');
  scene.removeAttribute('data-approved');
  // Reading layout restarts the CSS animations on the next attribute change.
  void scene.offsetWidth;
  scene.setAttribute('data-play', '');
  if (!reduced) scene.querySelectorAll<HTMLElement>('[data-count-to]').forEach(countUp);
}

for (const scene of scenes) {
  scene.querySelector('[data-replay]')?.addEventListener('click', () => play(scene));

  scene.querySelectorAll<HTMLButtonElement>('[data-tab]').forEach((tab) => {
    tab.addEventListener('click', () => {
      scene.dataset.view = tab.dataset.tab;
      scene.querySelectorAll<HTMLButtonElement>('[data-tab]').forEach((other) => {
        other.setAttribute('aria-pressed', String(other === tab));
      });
    });
  });

  scene.querySelector('[data-approve]')?.addEventListener('click', () => {
    scene.setAttribute('data-approved', '');
  });
}

/**
 * Hero window: the before / after switch plays on its own, one side every
 * HERO_TAB_MS, while the window is on screen and the page is visible. The
 * first pointer or key inside the window hands control to the visitor.
 */
const HERO_TAB_MS = 5000;

function autoplayHeroTabs(hero: HTMLElement): void {
  const radios = Array.from(hero.querySelectorAll<HTMLInputElement>('.hw-radio'));
  if (radios.length < 2) return;
  let onScreen = true;
  const timer = window.setInterval(() => {
    if (!onScreen || document.hidden) return;
    const current = radios.findIndex((radio) => radio.checked);
    radios[(current + 1) % radios.length].checked = true;
  }, HERO_TAB_MS);
  const stop = () => {
    window.clearInterval(timer);
    hero.removeAttribute('data-auto');
  };
  hero.addEventListener('pointerdown', stop, { once: true });
  hero.addEventListener('keydown', stop, { once: true });
  new IntersectionObserver(([entry]) => {
    onScreen = entry.isIntersecting;
  }).observe(hero);
  hero.style.setProperty('--hw-cycle', `${HERO_TAB_MS}ms`);
  hero.setAttribute('data-auto', '');
  // The markup shows the last state (after TblFlow); the story starts before.
  radios[0].checked = true;
}

const heroWindow = document.querySelector<HTMLElement>('.hw');
if (heroWindow && !reduced && 'IntersectionObserver' in window) autoplayHeroTabs(heroWindow);

if (!reduced && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        play(entry.target as HTMLElement);
      }
    },
    { threshold: 0.35 }
  );
  for (const scene of scenes) {
    scene.setAttribute('data-armed', '');
    observer.observe(scene);
  }
}
