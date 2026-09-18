// Native Web Animations: no network dependency and no hidden fallback content.
const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
let animationScope;

function startInteractions() {
  animationScope?.abort();
  animationScope = new AbortController();
  const { signal } = animationScope;
  const activeAnimations = new Set();
  const play = (element, frames, options) => {
    const animation = element.animate(frames, options);
    activeAnimations.add(animation);
    animation.finished.then(() => activeAnimations.delete(animation)).catch(() => {});
    return animation;
  };
  const progress = document.querySelector('.reading-progress');
  const updateProgress = () => {
    const length = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${length > 0 ? scrollY / length : 0})`;
  };
  addEventListener('scroll', updateProgress, { passive: true, signal });
  addEventListener('resize', updateProgress, { passive: true, signal });
  updateProgress();
  if (motionPreference.matches) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      play(entry.target, [
        { opacity: .3, translate: '0 20px' },
        { opacity: 1, translate: '0 0' }
      ], { duration: 650, easing: 'cubic-bezier(.22,1,.36,1)' });
      if (entry.target.matches('.video-visual')) {
        entry.target.querySelectorAll('.frame').forEach((frame, index) => {
          play(frame, [{ translate: '0 26px', opacity: .2 }, { translate: '0 0' }],
            { duration: 850, delay: index * 130, easing: 'cubic-bezier(.22,1,.36,1)' });
        });
      }
    });
  }, { threshold: .12 });
  document.querySelectorAll('.hero-copy,.portrait-stage,.capability-card,.project-copy,.video-visual,.project-compact,.paper-item,.timeline-item,.contact-card')
    .forEach(element => observer.observe(element));
  signal.addEventListener('abort', () => {
    observer.disconnect();
    activeAnimations.forEach(animation => animation.cancel());
  });

  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  document.querySelectorAll('.capability-card,.project-compact').forEach(card => {
    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`);
      card.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`);
    }, { signal, passive: true });
  });
  document.querySelectorAll('.button,.nav-contact').forEach(button => {
    button.addEventListener('pointerdown', () => {
      play(button, [{ scale: '1' }, { scale: '.96' }, { scale: '1' }],
        { duration: 300, easing: 'ease-out' });
    }, { signal });
  });
}
startInteractions();
motionPreference.addEventListener('change', startInteractions);
