/* =============================================
   SAFESTEP — script.js
   Complete JavaScript Engine
   ============================================= */

'use strict';

// =============================================
// EMERGENCY DATA
// =============================================
const EMERGENCY_DATA = {
  fire: {
    icon: '🔥',
    title: 'Fire Emergency',
    desc: 'Follow these steps immediately to evacuate safely',
    steps: [
      { num: '01', text: 'Stay low — smoke rises. Crawl on hands and knees below the smoke line where air is cleaner and cooler.' },
      { num: '02', text: 'Cover your nose and mouth with a wet cloth or clothing to filter out toxic smoke particles.' },
      { num: '03', text: 'Feel doors before opening — use the back of your hand. If hot, do NOT open. Find an alternate exit.' },
      { num: '04', text: 'NEVER use elevators during a fire. Always use stairwells and keep close to walls.' },
      { num: '05', text: 'Exit the building immediately. Do not collect belongings. Every second counts.' },
      { num: '06', text: 'Once outside, move far from the building and call 101 (Fire) or 112. Do not re-enter for any reason.' }
    ],
    voiceScript: 'Fire emergency protocol activated. Stay low and crawl below the smoke. Cover your nose and mouth. Check doors before opening — if hot, use another exit. Never use elevators. Exit the building immediately. Call one zero one for fire rescue.'
  },
  earthquake: {
    icon: '🌍',
    title: 'Earthquake Protocol',
    desc: 'Drop, Cover, and Hold — protect yourself immediately',
    steps: [
      { num: '01', text: 'DROP to hands and knees immediately. This prevents being knocked down and protects vital organs.' },
      { num: '02', text: 'Take COVER under a sturdy desk, table, or against an interior wall away from windows.' },
      { num: '03', text: 'HOLD ON firmly and protect your head and neck with your arms until shaking stops.' },
      { num: '04', text: 'Stay away from windows, exterior walls, and anything that could fall — bookcases, light fixtures, TVs.' },
      { num: '05', text: 'If outdoors, move to an open area away from buildings, trees, streetlights, and power lines.' },
      { num: '06', text: 'After shaking stops, check for injuries. Expect aftershocks — be ready to drop and cover again.' },
      { num: '07', text: 'Evacuate using stairs only. Avoid damaged areas. Call 1078 for disaster rescue assistance.' }
    ],
    voiceScript: 'Earthquake protocol activated. Drop to the ground immediately. Take cover under a sturdy surface and hold on. Protect your head. Stay away from windows and exterior walls. If outdoors, move to open space. After shaking stops, check for injuries and call one zero seven eight for disaster rescue.'
  },
  heart: {
    icon: '❤️',
    title: 'Cardiac Emergency',
    desc: 'Act fast — every minute without CPR reduces survival by 10%',
    steps: [
      { num: '01', text: 'Call 108 (Ambulance) or 112 immediately. State your location clearly and stay on the line.' },
      { num: '02', text: 'If the person is unresponsive and not breathing normally, begin CPR immediately — do not wait.' },
      { num: '03', text: 'Place the heel of your hand on the center of the chest. Push hard and fast — at least 2 inches deep, 100–120 compressions per minute.' },
      { num: '04', text: 'If trained in CPR, give 2 rescue breaths after every 30 compressions. Tilt head, lift chin, seal mouth.' },
      { num: '05', text: 'If an AED (defibrillator) is available nearby, use it as soon as possible. Follow the audio instructions exactly.' }
    ],
    voiceScript: 'Cardiac emergency detected. Call one zero eight immediately. If the person is unresponsive, begin CPR now. Push hard and fast on the center of the chest — one hundred compressions per minute. Do not stop until help arrives. Every second counts.'
  },
  accident: {
    icon: '🚗',
    title: 'Road Accident Response',
    desc: 'Secure the scene and provide immediate first aid',
    steps: [
      { num: '01', text: 'Ensure your own safety first. Switch on hazard lights and park at a safe distance from the accident.' },
      { num: '02', text: 'Call 108 for ambulance and 100 for police immediately. Provide exact location — landmark or GPS coordinates.' },
      { num: '03', text: 'Do NOT move injured persons unless there is immediate danger (fire, flooding). Moving can worsen spinal injuries.' },
      { num: '04', text: 'Control bleeding by applying firm, direct pressure using a clean cloth. Maintain pressure without removing it.' },
      { num: '05', text: 'Keep injured persons conscious by talking to them calmly. Cover with a blanket to prevent shock.' },
      { num: '06', text: 'Warn oncoming traffic by placing people at a safe distance to signal. Do not allow smoking near vehicles.' }
    ],
    voiceScript: 'Road accident protocol activated. Ensure your safety first. Call one zero eight for ambulance immediately. Do not move injured persons. Control bleeding with direct pressure. Keep victims calm and conscious. Warn oncoming traffic.'
  },
  women: {
    icon: '🛡️',
    title: 'Women Safety Protocol',
    desc: 'Stay alert, act decisively, reach safety immediately',
    steps: [
      { num: '01', text: 'Trust your instincts — if a situation feels unsafe, leave immediately. Do not second-guess your gut feeling.' },
      { num: '02', text: 'Call 1091 (Women Helpline) or 112. If you cannot speak, stay on the line — operators can trace your location.' },
      { num: '03', text: 'Move to a crowded, well-lit public space immediately — a shop, restaurant, petrol station, or any open establishment.' },
      { num: '04', text: 'Make noise — shout loudly to draw attention. Use your phone alarm or a personal siren if available.' },
      { num: '05', text: 'If physically threatened, target vulnerable areas — eyes, nose, throat — and escape immediately after.' },
      { num: '06', text: 'Share your live location with a trusted contact. Document the incident after reaching safety.' }
    ],
    voiceScript: 'Women safety protocol activated. Trust your instincts and move to safety immediately. Call one zero nine one for women helpline or one one two. Move to a crowded public area. Make noise if threatened. Share your location with trusted contacts.'
  },
  flood: {
    icon: '🌊',
    title: 'Flood Rescue Protocol',
    desc: 'Evacuate early — never wait for water to rise',
    steps: [
      { num: '01', text: 'Evacuate immediately if authorities issue a flood warning. Do not wait to see how high water will rise.' },
      { num: '02', text: 'Move to higher ground. Know your area\'s elevation and the nearest safe elevated locations.' },
      { num: '03', text: 'Never walk or drive through floodwater — just 15cm of moving water can knock you down; 60cm can sweep away a car.' },
      { num: '04', text: 'Disconnect electrical appliances. Turn off electricity at the main switch before water enters your home.' },
      { num: '05', text: 'If trapped, move to the highest floor. Signal rescuers using bright cloth, flashlight, or phone screen from windows.' },
      { num: '06', text: 'Call 1078 (NDRF) for rescue. Conserve phone battery. Stay calm and signal — rescue teams are dispatched rapidly.' }
    ],
    voiceScript: 'Flood rescue protocol activated. Evacuate to higher ground immediately. Never walk through floodwater. Disconnect all electrical appliances. If trapped, move to the highest floor and signal rescuers. Call one zero seven eight for National Disaster Response Force.'
  }
};

const VOICE_SCRIPTS = {
  general: 'Stay calm. You are not alone. SafeStep emergency guidance system is fully operational. Assess your immediate surroundings for danger. Move away from hazards. Call emergency services if needed. Follow the instructions on your screen carefully.',
  fire: EMERGENCY_DATA.fire.voiceScript,
  earthquake: EMERGENCY_DATA.earthquake.voiceScript,
  heart: EMERGENCY_DATA.heart.voiceScript,
  flood: EMERGENCY_DATA.flood.voiceScript,
  accident: EMERGENCY_DATA.accident.voiceScript,
  women: EMERGENCY_DATA.women.voiceScript
};

// =============================================
// STATE
// =============================================
let currentVoiceType = 'general';
let voiceActive = false;
let sosHoldTimer = null;
let sosProgressInterval = null;
let sosActive = false;
let sosProgress = 0;
let currentModalCategory = null;
let particleArray = [];

// =============================================
// LOADING SCREEN
// =============================================
const loaderMessages = [
  'Initializing systems...',
  'Loading emergency protocols...',
  'Calibrating voice engine...',
  'Registering service worker...',
  'All systems operational.'
];

window.addEventListener('DOMContentLoaded', () => {
  const loaderStatus = document.getElementById('loaderStatus');
  let msgIdx = 0;

  const msgInterval = setInterval(() => {
    msgIdx++;
    if (msgIdx < loaderMessages.length) {
      loaderStatus.textContent = loaderMessages[msgIdx];
    } else {
      clearInterval(msgInterval);
    }
  }, 500);

  setTimeout(() => {
    const loader = document.getElementById('loader');
    loader.classList.add('hidden');
    setTimeout(() => { if (loader.parentNode) loader.remove(); }, 700);
    startCounterAnimations();
    initParticles();
  }, 2800);

  initClock();
  initNetworkStatus();
  registerServiceWorker();
  initScrollReveal();
  initCardTilt();
  initNavScroll();
  initSmoothScroll();

  // Typewriter on hero desc after loader fades
  setTimeout(() => {
    const descEl = document.querySelector('.hero-desc');
    if (descEl) {
      const originalText = descEl.textContent.trim();
      typewriterEffect(descEl, originalText, 18);
    }
  }, 3200);
});

// =============================================
// LIVE CLOCK
// =============================================
function initClock() {
  const el = document.getElementById('liveClock');
  if (!el) return;
  function tick() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    el.textContent = `${h}:${m}:${s}`;
  }
  tick();
  setInterval(tick, 1000);
}

// =============================================
// COUNTER ANIMATION
// =============================================
function startCounterAnimations() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = parseInt(el.dataset.target);
    let current = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current;
      if (current >= target) clearInterval(timer);
    }, 40);
  });
}

// =============================================
// PARTICLE CANVAS
// =============================================
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.5 + 0.3;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.5 + 0.1;
      this.color = Math.random() > 0.5 ? '0,229,255' : '0,119,255';
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color},${this.opacity})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 120; i++) particleArray.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particleArray.length; i++) {
      for (let j = i + 1; j < particleArray.length; j++) {
        const dx = particleArray[i].x - particleArray[j].x;
        const dy = particleArray[i].y - particleArray[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0,229,255,${0.06 * (1 - dist / 100)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particleArray[i].x, particleArray[i].y);
          ctx.lineTo(particleArray[j].x, particleArray[j].y);
          ctx.stroke();
        }
      }
      particleArray[i].update();
      particleArray[i].draw();
    }
    requestAnimationFrame(animate);
  }
  animate();
}

// =============================================
// MODAL
// =============================================
function openModal(category) {
  const data = EMERGENCY_DATA[category];
  if (!data) return;
  currentModalCategory = category;

  document.getElementById('modalIcon').textContent = data.icon;
  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalDesc').textContent = data.desc;

  const stepsContainer = document.getElementById('modalSteps');
  stepsContainer.innerHTML = data.steps.map((step, i) => `
    <div class="modal-step" style="animation-delay:${i * 0.06}s">
      <div class="step-num">${step.num}</div>
      <div class="step-text">${step.text}</div>
    </div>
  `).join('');

  document.getElementById('modalVoiceBtn').textContent = '🎙️ Read Aloud';
  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e && e.type === 'click') {
    // Only close if clicking directly on the overlay backdrop (not modal box)
    if (e.target !== document.getElementById('modalOverlay')) return;
  }
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
  if (speechSynthesis.speaking) speechSynthesis.cancel();
  document.getElementById('modalVoiceBtn').textContent = '🎙️ Read Aloud';
}

function speakModalContent() {
  if (!currentModalCategory) return;
  const data = EMERGENCY_DATA[currentModalCategory];
  if (!data) return;
  const btn = document.getElementById('modalVoiceBtn');

  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
    btn.textContent = '🎙️ Read Aloud';
    return;
  }

  const utterance = new SpeechSynthesisUtterance(data.voiceScript);
  utterance.rate = 0.9;
  utterance.pitch = 1.0;
  utterance.volume = 1.0;

  speechSynthesis.onvoiceschanged = null;
  const voices = speechSynthesis.getVoices();
  const preferred = voices.find(v => v.lang === 'en-US' && v.name.includes('Google'))
    || voices.find(v => v.lang.startsWith('en'));
  if (preferred) utterance.voice = preferred;

  btn.textContent = '⏹ Stop Reading';
  utterance.onend = () => { btn.textContent = '🎙️ Read Aloud'; };
  utterance.onerror = () => { btn.textContent = '🎙️ Read Aloud'; };
  speechSynthesis.speak(utterance);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    // Close modal if open
    if (document.getElementById('modalOverlay').classList.contains('active')) {
      document.getElementById('modalOverlay').classList.remove('active');
      document.body.style.overflow = '';
      if (speechSynthesis.speaking) speechSynthesis.cancel();
    }
    // Cancel SOS if active
    if (sosActive) cancelSOS();
  }
});

// =============================================
// SOS SYSTEM
// =============================================
function startSOSHold(e) {
  if (e) e.preventDefault();
  if (sosActive) return;
  const btn = document.getElementById('sosBtn');
  const fill = document.getElementById('sosFill');
  btn.classList.add('holding');
  sosProgress = 0;
  const circumference = 553;
  fill.style.strokeDashoffset = circumference;

  const duration = 2000;
  const startTime = Date.now();

  clearInterval(sosProgressInterval);
  sosProgressInterval = setInterval(() => {
    const elapsed = Date.now() - startTime;
    sosProgress = Math.min(elapsed / duration, 1);
    const offset = circumference * (1 - sosProgress);
    fill.style.strokeDashoffset = offset;

    if (sosProgress >= 1) {
      clearInterval(sosProgressInterval);
      triggerSOS();
    }
  }, 16);
}

function cancelSOSHold() {
  if (sosActive) return;
  clearInterval(sosProgressInterval);
  const btn = document.getElementById('sosBtn');
  const fill = document.getElementById('sosFill');
  btn.classList.remove('holding');
  fill.style.strokeDashoffset = 553;
  sosProgress = 0;
}

function triggerSOS() {
  if (sosActive) return;
  sosActive = true;
  cancelSOSHold();

  const overlay = document.getElementById('sosOverlay');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Flash body background
  let flashes = 0;
  const flashInterval = setInterval(() => {
    document.body.style.background = flashes % 2 === 0 ? '#200005' : '#030508';
    flashes++;
    if (flashes > 6) {
      clearInterval(flashInterval);
      document.body.style.background = '';
    }
  }, 150);

  // Speak SOS message
  setTimeout(() => {
    speakText('Emergency mode activated. Alerting emergency contacts and services. Stay calm. Help is on the way.');
  }, 600);

  // Play siren
  playSirenSound();
}

function cancelSOS() {
  sosActive = false;
  const overlay = document.getElementById('sosOverlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  document.body.style.background = '';
  if (speechSynthesis.speaking) speechSynthesis.cancel();
  stopSirenSound();
}

// =============================================
// SIREN SOUND (Web Audio API)
// =============================================
let sirenCtx = null;
let sirenGain = null;

function playSirenSound() {
  try {
    sirenCtx = new (window.AudioContext || window.webkitAudioContext)();
    sirenGain = sirenCtx.createGain();
    sirenGain.gain.value = 0.25;
    sirenGain.connect(sirenCtx.destination);

    function scheduleSirenCycle(startTime) {
      const osc = sirenCtx.createOscillator();
      osc.connect(sirenGain);
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(500, startTime);
      osc.frequency.linearRampToValueAtTime(1100, startTime + 0.5);
      osc.frequency.linearRampToValueAtTime(500, startTime + 1.0);
      osc.start(startTime);
      osc.stop(startTime + 1.0);
    }

    // Play 5 siren cycles
    for (let i = 0; i < 5; i++) {
      scheduleSirenCycle(sirenCtx.currentTime + i * 1.05);
    }
  } catch (e) {
    // AudioContext not available — silently fail
  }
}

function stopSirenSound() {
  if (sirenCtx) {
    try {
      sirenGain && sirenGain.disconnect();
      sirenCtx.close();
    } catch (e) {}
    sirenCtx = null;
    sirenGain = null;
  }
}

// =============================================
// VOICE GUIDANCE SYSTEM
// =============================================
function setVoiceType(btn, type) {
  document.querySelectorAll('.v-opt').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentVoiceType = type;

  const scriptEl = document.getElementById('voiceScript');
  scriptEl.textContent = VOICE_SCRIPTS[type] || VOICE_SCRIPTS.general;

  if (voiceActive) {
    speechSynthesis.cancel();
    setTimeout(() => startVoiceGuidance(), 300);
  }
}

function toggleVoice() {
  if (voiceActive) {
    stopVoice();
  } else {
    startVoiceGuidance();
  }
}

function startVoiceGuidance() {
  voiceActive = true;
  updateVoiceUI(true);
  const text = VOICE_SCRIPTS[currentVoiceType] || VOICE_SCRIPTS.general;
  speakText(text, () => {
    voiceActive = false;
    updateVoiceUI(false);
  });
}

function stopVoice() {
  voiceActive = false;
  if (speechSynthesis.speaking) speechSynthesis.cancel();
  updateVoiceUI(false);
}

function speakText(text, onEnd) {
  if (!('speechSynthesis' in window)) {
    if (onEnd) onEnd();
    return;
  }
  if (speechSynthesis.speaking) speechSynthesis.cancel();

  setTimeout(() => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.88;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    const voices = speechSynthesis.getVoices();
    const preferred = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel')))
      || voices.find(v => v.lang.startsWith('en'));
    if (preferred) utterance.voice = preferred;

    utterance.onend = () => { if (onEnd) onEnd(); };
    utterance.onerror = () => { if (onEnd) onEnd(); };
    speechSynthesis.speak(utterance);
  }, 100);
}

// Load voices (async in Chrome)
if ('speechSynthesis' in window && speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = () => {};
}

function updateVoiceUI(active) {
  const micBtn = document.getElementById('micBtn');
  const micContainer = document.getElementById('micContainer');
  const waveContainer = document.getElementById('waveContainer');
  const voiceStatus = document.getElementById('voiceStatus');
  const vsText = document.getElementById('vsText');
  const vsDot = voiceStatus ? voiceStatus.querySelector('.vs-dot') : null;
  const startBtn = document.getElementById('voiceBtnText');

  if (active) {
    micBtn && micBtn.classList.add('active');
    micContainer && micContainer.classList.add('active');
    waveContainer && waveContainer.classList.add('active');
    if (vsDot) { vsDot.classList.add('active'); vsDot.classList.remove('inactive'); }
    if (vsText) vsText.textContent = 'Transmitting Guidance...';
    if (startBtn) startBtn.textContent = '⏹ Stop Guidance';
  } else {
    micBtn && micBtn.classList.remove('active');
    micContainer && micContainer.classList.remove('active');
    waveContainer && waveContainer.classList.remove('active');
    if (vsDot) { vsDot.classList.remove('active'); vsDot.classList.add('inactive'); }
    if (vsText) vsText.textContent = 'System Ready';
    if (startBtn) startBtn.textContent = '▶ Start Guidance';
  }
}

// =============================================
// NETWORK STATUS
// =============================================
function initNetworkStatus() {
  const statusEl = document.getElementById('networkStatus');
  const badgeEl = document.getElementById('networkBadge');
  if (!statusEl || !badgeEl) return;

  function update() {
    if (navigator.onLine) {
      statusEl.textContent = 'Connected — Online';
      statusEl.style.color = 'var(--green)';
      badgeEl.style.color = 'var(--green)';
      badgeEl.style.textShadow = '0 0 10px #00ff88';
    } else {
      statusEl.textContent = 'Offline — Emergency Mode Active';
      statusEl.style.color = 'var(--yellow)';
      badgeEl.style.color = 'var(--yellow)';
      badgeEl.style.textShadow = '0 0 10px #ffcc00';
    }
  }
  update();
  window.addEventListener('online', update);
  window.addEventListener('offline', update);
}

// =============================================
// SERVICE WORKER
// =============================================
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
      .then(reg => console.log('[SafeStep] SW registered:', reg.scope))
      .catch(err => console.log('[SafeStep] SW failed:', err));
  }
}

// =============================================
// SMOOTH SCROLL
// =============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// =============================================
// NAVBAR SCROLL EFFECT
// =============================================
function initNavScroll() {
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(3,5,8,0.98)';
      navbar.style.borderBottomColor = 'rgba(0,229,255,0.25)';
    } else {
      navbar.style.background = 'rgba(3,5,8,0.9)';
      navbar.style.borderBottomColor = 'rgba(0,200,255,0.15)';
    }
  }, { passive: true });
}

// =============================================
// INTERSECTION OBSERVER — Scroll Reveal
// =============================================
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.e-card, .contact-card, .future-card, .off-feat').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.6s ease ${i * 0.05}s, transform 0.6s ease ${i * 0.05}s`;
    observer.observe(el);
  });
}

// =============================================
// CARD TILT EFFECT
// =============================================
function initCardTilt() {
  document.querySelectorAll('.e-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotX = ((y - centerY) / centerY) * 5;
      const rotY = ((centerX - x) / centerX) * 5;
      card.style.transform = `translateY(-6px) scale(1.02) perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// =============================================
// TYPEWRITER EFFECT
// =============================================
function typewriterEffect(el, text, speed = 30) {
  let i = 0;
  el.textContent = '';
  const timer = setInterval(() => {
    if (i < text.length) {
      el.textContent += text[i];
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

// =============================================
// EXPOSE GLOBALS (for inline HTML onclick)
// =============================================
window.openModal = openModal;
window.closeModal = closeModal;
window.triggerSOS = triggerSOS;
window.cancelSOS = cancelSOS;
window.startSOSHold = startSOSHold;
window.cancelSOSHold = cancelSOSHold;
window.toggleVoice = toggleVoice;
window.setVoiceType = setVoiceType;
window.speakModalContent = speakModalContent;