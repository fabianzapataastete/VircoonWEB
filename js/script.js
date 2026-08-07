document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.menu-button');
  const nav = document.querySelector('.site-header nav');
  if (button && nav) {
    button.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
  }



  const rotatingWord = document.querySelector('.rotating-word');
  const rotatingWords = ['transforma.', 'funciona.', 'se aplica.', 'genera impacto.', 'deja huella.'];
  let rotatingWordIndex = 0;

  if (rotatingWord) {
    rotatingWord.innerHTML = `<span class="rotating-word-current">${rotatingWords[0]}</span>`;
    window.setInterval(() => {
      const current = rotatingWord.querySelector('.rotating-word-current');
      rotatingWordIndex = (rotatingWordIndex + 1) % rotatingWords.length;
      const next = document.createElement('span');
      next.className = 'rotating-word-next is-entering';
      next.textContent = rotatingWords[rotatingWordIndex];
      rotatingWord.appendChild(next);
      current.classList.add('is-exiting');
      window.setTimeout(() => {
        current.remove();
        next.className = 'rotating-word-current';
      }, 780);
    }, 4000);
  }
  document.querySelectorAll('.project-video').forEach(video => {
    video.addEventListener('contextmenu', event => event.preventDefault());
    video.addEventListener('dragstart', event => event.preventDefault());
  });

  const testimonialTrack = document.querySelector('.testimonial-track');
  const testimonialCards = Array.from(document.querySelectorAll('.testimonial-card'));
  const testimonialPrev = document.querySelector('[data-testimonial-prev]');
  const testimonialNext = document.querySelector('[data-testimonial-next]');
  let testimonialIndex = 0;

  const getVisibleTestimonials = () => {
    if (window.matchMedia('(max-width: 640px)').matches) return 1;
    if (window.matchMedia('(max-width: 1000px)').matches) return 2;
    return 3;
  };

  const updateTestimonials = () => {
    if (!testimonialTrack || !testimonialCards.length) return;
    const card = testimonialCards[0];
    const gap = parseFloat(getComputedStyle(testimonialTrack).gap) || 0;
    const visible = getVisibleTestimonials();
    const maxIndex = Math.max(0, testimonialCards.length - visible);
    testimonialIndex = Math.min(testimonialIndex, maxIndex);
    testimonialTrack.style.transform = `translateX(-${testimonialIndex * (card.offsetWidth + gap)}px)`;
    if (testimonialPrev) testimonialPrev.disabled = testimonialIndex === 0;
    if (testimonialNext) testimonialNext.disabled = testimonialIndex === maxIndex;
  };

  if (testimonialTrack && testimonialPrev && testimonialNext) {
    testimonialPrev.addEventListener('click', () => {
      testimonialIndex = Math.max(0, testimonialIndex - 1);
      updateTestimonials();
    });
    testimonialNext.addEventListener('click', () => {
      testimonialIndex += 1;
      updateTestimonials();
    });
    window.addEventListener('resize', updateTestimonials);
    updateTestimonials();
  }
  const form = document.querySelector('.contact-form');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`Consulta Vircoon: ${data.get('tipo') || 'Proyecto'}`);
    const body = encodeURIComponent(`Nombre: ${data.get('nombre')}\nEmpresa: ${data.get('empresa')}\nCorreo: ${data.get('email')}\n\nNecesidad:\n${data.get('mensaje')}`);
    window.location.href = `mailto:vircoon.soluciones@gmail.com?subject=${subject}&body=${body}`;
    const note = form.querySelector('.form-note');
    if (note) note.hidden = false;
  });
});
