(() => {
  const track = document.querySelector('#project-slides');
  if (!track) return;
  const slides = [...track.children];
  const pickers = [...document.querySelectorAll('[data-project]')];
  const previous = document.querySelector('[data-project-prev]');
  const next = document.querySelector('[data-project-next]');
  const count = document.querySelector('.project-count');
  let current = 0;
  let target = 0;
  let settling;
  const offset = index => slides[index].getBoundingClientRect().left - track.getBoundingClientRect().left + track.scrollLeft;
  function reflect(index) {
    current = index;
    pickers.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
    previous.disabled = index === 0;
    next.disabled = index === slides.length - 1;
    count.textContent = `${String(index + 1).padStart(2, '0')} / 03`;
  }
  function go(index, instant = false) {
    target = Math.max(0, Math.min(slides.length - 1, index));
    reflect(target);
    track.scrollTo({ left: offset(target), behavior: instant || matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }
  pickers.forEach(button => button.addEventListener('click', () => go(Number(button.dataset.project))));
  previous.addEventListener('click', () => go(target - 1));
  next.addEventListener('click', () => go(target + 1));
  track.addEventListener('keydown', event => {
    const directions = { ArrowLeft: -1, ArrowRight: 1 };
    if (!(event.key in directions)) return;
    event.preventDefault();
    go(current + directions[event.key]);
  });
  const sync = () => {
    const nearest = slides.reduce((best, _, index) => Math.abs(offset(index) - track.scrollLeft) < Math.abs(offset(best) - track.scrollLeft) ? index : best, 0);
    target = nearest;
    reflect(nearest);
  };
  track.addEventListener('scroll', () => { clearTimeout(settling); settling = setTimeout(sync, 140); }, { passive: true });
  new ResizeObserver(() => go(current, true)).observe(track);
  reflect(0);
})();
