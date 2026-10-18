(() => {
  const stars = document.getElementById('stars');
  const music = document.getElementById('bgMusic');
  const musicToggle = document.getElementById('musicToggle');
  const musicLabel = document.getElementById('musicLabel');
  const envelope = document.getElementById('envelope');
  const secretMessage = document.getElementById('secretMessage');
  const toast = document.getElementById('toast');

  // توليد نجوم عشوائية في الخلفية
  for (let i = 0; i < 95; i++) {
    const star = document.createElement('span');
    star.className = 'star';
    const size = Math.random() * 2.5 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty('--duration', `${2 + Math.random() * 4}s`);
    star.style.setProperty('--opacity', `${0.25 + Math.random() * 0.65}`);
    star.style.animationDelay = `${Math.random() * 4}s`;
    stars.appendChild(star);
  }

  let toastTimer;
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
  }

  // الموسيقى لا تبدأ تلقائياً؛ يلزم تفاعل المستخدم، وملف audio/music.mp3 اختياري.
  let playing = false;
  musicToggle.addEventListener('click', async () => {
    if (playing) {
      music.pause();
      playing = false;
      musicToggle.setAttribute('aria-pressed', 'false');
      musicLabel.textContent = 'شغّل الموسيقى';
      showToast('تم إيقاف الموسيقى مؤقتاً');
      return;
    }
    try {
      await music.play();
      playing = true;
      musicToggle.setAttribute('aria-pressed', 'true');
      musicLabel.textContent = 'أوقف الموسيقى';
    } catch (err) {
      showToast('أضف ملف audio/music.mp3 لتشغيل الموسيقى 🎵');
    }
  });

  envelope.addEventListener('click', () => {
    const isOpen = envelope.classList.toggle('open');
    secretMessage.hidden = !isOpen;
    envelope.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) {
      showToast('رسالة صغيرة من القلب إلى نور ♥');
      burstHearts(12);
      setTimeout(() => secretMessage.scrollIntoView({ behavior: 'smooth', block: 'center' }), 250);
    }
  });

  const wishes = [
    'قلب مرتاح، ضحكة صادقة، وأيام تجيبلك الخير من وين ما تتوقعيش.',
    'ربي يفتحلك أبواب الفرح، ويبعد عليك كل ما يثقل قلبك.',
    'تلقاي ناس يقدّرو قلبك، وأحلامك تلقى طريقها ليك خطوة بخطوة.',
    'كل صباح يكون عندك سبب جديد باش تتفائلي وتبتسمي.',
    'تكون أيامك هادئة، وخطواتك مطمئنة، وفرحتك أكبر من انتظارك.',
    'ما تنسايش تهتمي بروحك، لأن راحتك وفرحتك مهمّين بزاف.'
  ];
  let lastWish = -1;
  document.getElementById('newWish').addEventListener('click', () => {
    let next;
    do { next = Math.floor(Math.random() * wishes.length); } while (next === lastWish && wishes.length > 1);
    lastWish = next;
    const wishText = document.getElementById('wishText');
    wishText.animate([{opacity: 0, transform: 'translateY(7px)'}, {opacity: 1, transform: 'translateY(0)'}], {duration: 400});
    wishText.textContent = wishes[next];
    burstHearts(4);
  });

  function burstHearts(count = 5) {
    const symbols = ['♥', '♡', '✦'];
    for (let i = 0; i < count; i++) {
      const heart = document.createElement('span');
      heart.className = 'heart-float';
      heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      heart.style.left = `${Math.random() * 94 + 3}%`;
      heart.style.fontSize = `${12 + Math.random() * 20}px`;
      heart.style.setProperty('--float-duration', `${4 + Math.random() * 3}s`);
      heart.style.animationDelay = `${Math.random() * 0.8}s`;
      document.body.appendChild(heart);
      heart.addEventListener('animationend', () => heart.remove(), {once: true});
    }
  }
  // لمسات قلوب متفرقة من دون إزعاج أثناء التصفح
  setTimeout(() => burstHearts(5), 1300);
})();
