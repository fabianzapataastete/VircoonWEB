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



  document.querySelectorAll('.rotating-word').forEach(rotatingWord => {
    const rotatingWords = (rotatingWord.dataset.words || rotatingWord.textContent || '')
      .split('|')
      .map(word => word.trim())
      .filter(Boolean);
    let rotatingWordIndex = 0;

    if (!rotatingWords.length) return;
    const shouldWrap = rotatingWord.dataset.wrap === 'true';
    const sizer = document.createElement('span');
    sizer.className = 'rotating-word-current rotating-word-sizer';
    sizer.style.visibility = 'hidden';
    sizer.style.position = 'absolute';
    sizer.style.pointerEvents = 'none';
    rotatingWord.appendChild(sizer);
    const maxWidth = rotatingWords.reduce((width, word) => {
      sizer.textContent = word;
      return Math.max(width, sizer.offsetWidth);
    }, 0);
    sizer.remove();
    if (maxWidth && !shouldWrap) rotatingWord.style.width = `${maxWidth}px`;
    rotatingWord.innerHTML = `<span class="rotating-word-current">${rotatingWords[0]}</span>`;
    window.setInterval(() => {
      const current = rotatingWord.querySelector('.rotating-word-current');
      if (!current) return;
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
  });
  document.querySelectorAll('.project-video, .zoomable-video').forEach(video => {
    video.addEventListener('contextmenu', event => event.preventDefault());
    video.addEventListener('dragstart', event => event.preventDefault());
  });


  // Zoom centrado para videos de proyectos y producto destacado
  const projectVideos = Array.from(document.querySelectorAll('.project-video, .zoomable-video'));
  if (projectVideos.length) {
    const zoomOverlay = document.createElement('div');
    zoomOverlay.className = 'video-zoom-overlay';
    zoomOverlay.setAttribute('aria-hidden', 'true');
    zoomOverlay.innerHTML = '<div class="video-zoom-frame"><video autoplay muted loop playsinline preload="metadata" controlslist="nodownload noplaybackrate" disablepictureinpicture oncontextmenu="return false" draggable="false"></video></div>';
    document.body.appendChild(zoomOverlay);
    const zoomVideo = zoomOverlay.querySelector('video');
    const closeZoom = () => {
      zoomOverlay.classList.remove('open');
      zoomOverlay.setAttribute('aria-hidden', 'true');
      zoomVideo.pause();
      window.setTimeout(() => zoomVideo.removeAttribute('src'), 260);
    };
    projectVideos.forEach(video => {
      video.addEventListener('click', event => {
        event.preventDefault();
        const source = video.currentSrc || video.querySelector("source")?.getAttribute("src");
        if (!source) return;
        zoomVideo.src = source;
        zoomVideo.muted = true;
        zoomVideo.play().catch(() => {});
        zoomOverlay.setAttribute('aria-hidden', 'false');
        zoomOverlay.classList.add('open');
      });
    });
    zoomOverlay.addEventListener('click', closeZoom);
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && zoomOverlay.classList.contains('open')) closeZoom(); });
  }
  // Carrusel de etapas de Inicio
  const trustCarousel = document.querySelector('.trust-carousel');
  const trustTrack = document.querySelector('.trust-carousel-track');
  const trustItems = Array.from(document.querySelectorAll('.trust-carousel span'));
  if (trustCarousel && trustTrack && trustItems.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const visibleItems = 3;
    const maxTrustIndex = Math.max(0, trustItems.length - visibleItems);
    let trustIndex = 0;
    const updateTrustCarousel = () => {
      const itemWidth = trustCarousel.clientWidth / visibleItems;
      trustTrack.style.transform = 'translateX(-' + (trustIndex * itemWidth) + 'px)';
    };
    window.setInterval(() => {
      trustIndex = trustIndex === maxTrustIndex ? 0 : trustIndex + 1;
      updateTrustCarousel();
    }, 2600);
    window.addEventListener('resize', updateTrustCarousel);
  }
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
