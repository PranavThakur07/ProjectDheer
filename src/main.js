/* ==========================================================================
   DHEER.EXE — MASTER CLIENT SCRIPT
   Cinematic Interactivity, Sound Synthesis, Lightbox & CLI Mainframe
   ========================================================================== */

import confetti from 'canvas-confetti';

// --------------------------------------------------------------------------
// 1. PHOTOGRAPHIC FORENSIC DATABASE (ALL 7 PHOTOGRAPHS)
// --------------------------------------------------------------------------
const PHOTO_DATABASE = {
  'portrait-smart-choice': {
    id: 1,
    title: "Case #01: The 'Professional Smart Choice' Induction",
    ref: "DH-OFFICE-01",
    category: "Corporate Infiltration",
    src: "/photos/portrait-smart-choice.png",
    story: "Photographed during morning induction at the corporate development center. Wearing an azure crewneck sweater explicitly printed with 'PROFESSIONAL SMART CHOICE'. The prominent dental grin and sharp wire-rimmed spectacles disarmed all human interviewers. Security cleared him immediately.",
    callouts: [
      "T-shirt typography literally states 'ROFESSIONAL SMART CHOICE' in bold white script.",
      "Oscillating white wall-mounted fan in background provides continuous fur aeration.",
      "Single black-furred paw resting casually on cubicle divider with visible bear claws.",
      "Genuine toothy grin radiating 100% approachable corporate charisma."
    ],
    attire: "Blue 'Smart Choice' Graphic Crewneck",
    location: "Main Engineering Bay (Fan Zone)",
    threatLevel: "Harmless (Unless deprived of espresso)"
  },
  'cubicle-overlord': {
    id: 2,
    title: "Case #02: The Cubicle Overlord & Sprint Hawk",
    ref: "DH-OFFICE-02",
    category: "Corporate Infiltration",
    src: "/photos/cubicle-overlord.png",
    story: "Documented during a high-pressure sprint deployment. Dheer stationed himself directly over cubicle partition #12 in a black-and-cream Ben 10 racing jersey. Rectangular reading glasses pushed slightly down the bridge of the snout. Stood motionless for 38 consecutive minutes observing code compilation.",
    callouts: [
      "Distinctive cream-and-black racing stripe jersey reminiscent of Ben 10 aesthetics.",
      "Black rectangular frames tilted at exact angle to scrutinize Git branch conflicts.",
      "Coworker visible in background completely oblivious to the 6-foot ursine presence.",
      "Office backpacks hanging off cubicle partitions emphasize ordinary corporate reality."
    ],
    attire: "Cream & Black Racing Stripe Jersey",
    location: "Engineering Bay 4 // Partition 12",
    threatLevel: "High (If you have uncommitted changes)"
  },
  'meeting-crossfunctional': {
    id: 3,
    title: "Case #03: The Collaborative Illusion & Ceramic Ring",
    ref: "DH-OFFICE-03",
    category: "Corporate Infiltration",
    src: "/photos/meeting-crossfunctional.png",
    story: "Captured dead-center during a cross-functional sprint planning session. Flanked by two senior colleagues engaged in intense keyboard input. Dheer sits calmly in a navy polo shirt with white shoulder piping, paws folded peacefully on the mahogany boardroom table.",
    callouts: [
      "Navy blue collared polo shirt featuring contrast white shoulder and sleeve piping.",
      "Sculptural ceramic doughnut ring vase and tangled USB-C dongles on table.",
      "Colleague on left staring intensely at terminal while colleague on right types with mouse.",
      "Dheer radiating profound architectural wisdom while contributing zero verbal input."
    ],
    attire: "Navy Blue Polo with White Shoulder Piping",
    location: "Conference Room B (Glass Wall Suite)",
    threatLevel: "Zero Commits, Maximum Aura"
  },
  'boardroom-solo': {
    id: 4,
    title: "Case #04: The Hostile Boardroom Coup & Dell DN-5045",
    ref: "DH-OFFICE-04",
    category: "Corporate Infiltration",
    src: "/photos/boardroom-solo.png",
    story: "Surveillance log from 07:45 AM before enterprise facilities arrived. Dheer commandeered the high-back executive leather recliner under warm amber teardrop pendant lamps. Holding an enterprise Dell laptop with an orange 'DN' inventory tag, claws gripping both sides of the screen bezel.",
    callouts: [
      "Black Dell laptop featuring official orange 'DN' asset management sticker.",
      "Sharp black bear claws firmly clasping the laptop chassis without scratching finish.",
      "Pendant amber glass teardrop chandeliers illuminate executive boardroom mahogany.",
      "Mint striped polo shirt tucked into dark olive executive trousers."
    ],
    attire: "Mint Striped Polo & Olive Trousers",
    location: "Executive Penthouse Boardroom",
    threatLevel: "Decisive (Controlling the projector)"
  },
  'monsoon-extraction': {
    id: 5,
    title: "Case #05: Tactical Monsoon Extraction Protocol",
    ref: "DH-TACTICAL-01",
    category: "Field Operations",
    src: "/photos/monsoon-extraction.png",
    story: "Severe monsoon downpour in the tech corridor. Flash floods rendered conventional transit obsolete. Emergency two-wheeler pillion extraction protocol activated. The rider deployed full motocross helmet; Dheer utilized an industrial bronze rain poncho tied under his snout with a white drawstring.",
    callouts: [
      "Glossy crinkly bronze polyethylene rain poncho cinched tight under panda snout.",
      "Black-furred paw delivering a flawless, high-morale peace sign to the camera.",
      "Pristine white sports watch worn directly over the thick black forearm fur.",
      "Boom barrier checkpoint and wet rain-soaked asphalt visible in background."
    ],
    attire: "Bronze Industrial Poncho + White Watch",
    location: "Security Boom Barrier // Outer Sector",
    threatLevel: "Unstoppable (Monsoon Resilient)"
  },
  'villa-inspection': {
    id: 6,
    title: "Case #06: The Villa Groundskeeper & Sovereign Heir",
    ref: "DH-ESTATE-01",
    category: "High Society",
    src: "/photos/villa-inspection.png",
    story: "Late-night grounds inspection at a private hillside stone villa retreat. Strolling the flagstone garden walkway flanked by automated bollard lanterns and creeping floral bougainvillea. Dheer stands upright, hands tucked casually into tailored cream slacks, smiling like a sovereign real estate investor.",
    callouts: [
      "Espresso collared polo shirt featuring prominent white chest script: 'Originals'.",
      "Tailored relaxed-fit cream trousers and triple-white clean streetwear sneakers.",
      "Manicured lawn, stone villa architecture, and illuminated bollards create luxury atmosphere.",
      "Posture radiates the nonchalant confidence of someone who bought the villa in cash."
    ],
    attire: "Espresso 'Originals' Polo + White Slacks",
    location: "Hillside Luxury Estate // Midnight Walk",
    threatLevel: "Diplomatic & Aristocratic"
  },
  'entourage-diplomacy': {
    id: 7,
    title: "Case #07: Inter-Species Diplomacy & Human Liaison",
    ref: "DH-ESTATE-02",
    category: "High Society",
    src: "/photos/entourage-diplomacy.png",
    story: "Posing warmly on the villa courtyard lawn alongside his primary human handler. A heavy black fur arm slung affectionately over his companion's shoulders. The gleaming white sports watch indicates well past midnight. A testament to peaceful coexistence between humans and executive pandas.",
    callouts: [
      "Panda arm slung affectionately around human friend in grey patterned collared shirt.",
      "White sports watch contrasting against midnight black forearm fur.",
      "Shared warm smiles reflecting genuine bond between human pilot and panda passenger.",
      "Two-story luxury villa architecture softly lit in the background."
    ],
    attire: "Originals Polo + Sports Watch",
    location: "Villa Courtyard Lawn",
    threatLevel: "Heartwarming & Formidable"
  }
};

const PHOTO_KEYS = Object.keys(PHOTO_DATABASE);

// --------------------------------------------------------------------------
// 2. SYNTHESIZER SOUND SYSTEM (WEB AUDIO API)
// --------------------------------------------------------------------------
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = false;
    this.ambientOsc = null;
    this.ambientGain = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.init();
    this.enabled = !this.enabled;

    if (this.enabled) {
      this.startAmbientDrone();
      this.playBeep(650, 0.08, 'sine');
    } else {
      this.stopAmbientDrone();
    }
    return this.enabled;
  }

  playBeep(freq = 440, duration = 0.06, type = 'sine') {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio playback issue:", e);
    }
  }

  playClick() {
    this.playBeep(980, 0.04, 'triangle');
  }

  playInspect() {
    if (!this.enabled || !this.ctx) return;
    this.playBeep(520, 0.05, 'sine');
    setTimeout(() => this.playBeep(780, 0.08, 'sine'), 40);
  }

  playBambooCrunch() {
    if (!this.enabled || !this.ctx) return;
    try {
      const freqs = [320, 480, 640, 960];
      freqs.forEach((f, i) => {
        setTimeout(() => this.playBeep(f, 0.08, 'sawtooth'), i * 40);
      });
    } catch (e) {}
  }

  startAmbientDrone() {
    if (!this.ctx) return;
    try {
      this.ambientOsc = this.ctx.createOscillator();
      this.ambientGain = this.ctx.createGain();
      this.ambientOsc.type = 'sine';
      this.ambientOsc.frequency.setValueAtTime(65.41, this.ctx.currentTime); // C2 low warm drone
      this.ambientGain.gain.setValueAtTime(0.015, this.ctx.currentTime);

      this.ambientOsc.connect(this.ambientGain);
      this.ambientGain.connect(this.ctx.destination);
      this.ambientOsc.start();
    } catch (e) {}
  }

  stopAmbientDrone() {
    if (this.ambientOsc) {
      try {
        this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.3);
        setTimeout(() => {
          this.ambientOsc?.stop();
          this.ambientOsc = null;
        }, 300);
      } catch (e) {}
    }
  }
}

const sound = new SoundEngine();

// --------------------------------------------------------------------------
// 3. CUSTOM CURSOR WITH TRAILING INERTIA
// --------------------------------------------------------------------------
function initCustomCursor() {
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  const label = document.getElementById('cursorLabel');
  if (!dot || !ring) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function renderRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(renderRing);
  }
  requestAnimationFrame(renderRing);

  // Interactive hover targets
  const interactiveElements = document.querySelectorAll('a, button, input, .photo-inspectable, .filter-btn');
  interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
      if (el.classList.contains('photo-inspectable')) {
        document.body.classList.add('cursor-inspect');
        if (label) label.textContent = 'INSPECT';
      }
    });
    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
      document.body.classList.remove('cursor-inspect');
      if (label) label.textContent = '';
    });
  });
}

// --------------------------------------------------------------------------
// 4. AMBIENT GLOW MOUSE TRACKING
// --------------------------------------------------------------------------
function initAmbientGlow() {
  const glow = document.getElementById('ambientGlow');
  if (!glow) return;

  window.addEventListener('mousemove', (e) => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  });
}

// --------------------------------------------------------------------------
// 5. HERO 3D CARD PERSPECTIVE TILT
// --------------------------------------------------------------------------
function initHeroTilt() {
  const card = document.getElementById('heroTiltCard');
  if (!card) return;

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  });
}

// --------------------------------------------------------------------------
// 6. LIGHTBOX MODAL FORENSIC VIEWER
// --------------------------------------------------------------------------
let currentPhotoIndex = 0;

function openLightbox(photoKey) {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const title = document.getElementById('lightboxTitle');
  const ref = document.getElementById('lightboxRef');
  const story = document.getElementById('lightboxStory');
  const callouts = document.getElementById('lightboxCallouts');
  const exifTarget = document.getElementById('exifTarget');
  const exifAttire = document.getElementById('exifAttire');

  if (!modal || !PHOTO_DATABASE[photoKey]) return;

  const data = PHOTO_DATABASE[photoKey];
  currentPhotoIndex = PHOTO_KEYS.indexOf(photoKey);

  img.src = data.src;
  img.alt = data.title;
  title.textContent = data.title;
  ref.textContent = `REF: ${data.ref}`;
  story.textContent = data.story;
  if (exifTarget) exifTarget.textContent = `Dheer (${data.category})`;
  if (exifAttire) exifAttire.textContent = data.attire;

  callouts.innerHTML = '';
  data.callouts.forEach((c) => {
    const li = document.createElement('li');
    li.textContent = c;
    callouts.appendChild(li);
  });

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  sound.playInspect();
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  sound.playClick();
}

function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  const closeBtn = document.getElementById('lightboxClose');
  const backdrop = document.getElementById('lightboxBackdrop');
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');

  // Delegated click for inspectables
  document.addEventListener('click', (e) => {
    const inspectTarget = e.target.closest('.photo-inspectable');
    if (inspectTarget) {
      const key = inspectTarget.getAttribute('data-photo');
      if (key && PHOTO_DATABASE[key]) {
        openLightbox(key);
      }
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (backdrop) backdrop.addEventListener('click', closeLightbox);

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentPhotoIndex = (currentPhotoIndex - 1 + PHOTO_KEYS.length) % PHOTO_KEYS.length;
      openLightbox(PHOTO_KEYS[currentPhotoIndex]);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentPhotoIndex = (currentPhotoIndex + 1) % PHOTO_KEYS.length;
      openLightbox(PHOTO_KEYS[currentPhotoIndex]);
    });
  }

  window.addEventListener('keydown', (e) => {
    if (!modal?.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight' && nextBtn) nextBtn.click();
    if (e.key === 'ArrowLeft' && prevBtn) prevBtn.click();
  });
}

// --------------------------------------------------------------------------
// 7. ARCHIVE CATEGORY FILTERING
// --------------------------------------------------------------------------
function initArchiveFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.archive-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      sound.playClick();

      const filter = btn.getAttribute('data-filter');
      cards.forEach((card) => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// --------------------------------------------------------------------------
// 8. ANIMATED DIGITAL SENSOR COUNTERS
// --------------------------------------------------------------------------
function initRollingCounters() {
  const counters = document.querySelectorAll('.counter-val');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach((counter) => {
          const target = parseFloat(counter.getAttribute('data-target') || '0');
          const suffix = counter.getAttribute('data-suffix') || '';
          const duration = 1600;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out expo
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentVal = Math.floor(ease * target);

            counter.textContent = currentVal.toLocaleString() + suffix;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target.toLocaleString() + suffix;
            }
          }

          requestAnimationFrame(updateCounter);
        });
      }
    });
  }, { threshold: 0.3 });

  const telemetrySection = document.getElementById('telemetry');
  if (telemetrySection) observer.observe(telemetrySection);
}

// --------------------------------------------------------------------------
// 9. BAMBOO FEED CELEBRATION & CONFETTI
// --------------------------------------------------------------------------
let bambooStock = 1420;
let tributeStock = 9999;

function triggerConfettiBurst() {
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.75 },
    colors: ['#22c55e', '#10b981', '#f59e0b', '#ffffff', '#38bdf8']
  });
}

function initBambooTriggers() {
  const heroBtn = document.getElementById('btnDeployBamboo');
  const heroCount = document.getElementById('bambooFeedCount');
  const tributeBtn = document.getElementById('btnBambooTribute');
  const tributeCount = document.getElementById('tributeCount');
  const feedback = document.getElementById('bambooFeedback');

  if (heroBtn && heroCount) {
    heroBtn.addEventListener('click', () => {
      bambooStock += 1;
      heroCount.textContent = bambooStock.toLocaleString();
      triggerConfettiBurst();
      sound.playBambooCrunch();
    });
  }

  if (tributeBtn && tributeCount && feedback) {
    tributeBtn.addEventListener('click', () => {
      tributeStock += 1;
      tributeCount.textContent = tributeStock.toLocaleString();
      feedback.classList.add('visible');
      triggerConfettiBurst();
      sound.playBambooCrunch();

      setTimeout(() => {
        feedback.classList.remove('visible');
      }, 4000);
    });
  }
}

// --------------------------------------------------------------------------
// 10. DIAGNOSTIC CLI TERMINAL (EMBEDDED BASH MAINFRAME)
// --------------------------------------------------------------------------
function initDiagnosticTerminal() {
  const input = document.getElementById('termInput');
  const output = document.getElementById('termOutput');
  const body = document.getElementById('termBody');
  const trigger = document.getElementById('terminalTrigger');

  if (!input || !output) return;

  if (trigger) {
    trigger.addEventListener('click', () => {
      const telemetry = document.getElementById('telemetry');
      if (telemetry) {
        telemetry.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => input.focus(), 600);
      }
    });
  }

  function appendLine(text, className = '') {
    const div = document.createElement('div');
    div.className = `term-line ${className}`;
    div.innerHTML = text;
    output.appendChild(div);
    if (body) body.scrollTop = body.scrollHeight;
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = input.value.trim().toLowerCase();
      input.value = '';
      if (!cmd) return;

      appendLine(`<span class="term-prompt">dheer@mainframe:~$</span> ${cmd}`);
      sound.playClick();

      const parts = cmd.split(' ');
      const action = parts[0];
      const arg = parts[1];

      switch (action) {
        case 'help':
          appendLine("Available commands:");
          appendLine("  <span class='text-green'>status</span>     - Print core biological & corporate diagnostics");
          appendLine("  <span class='text-green'>whoami</span>     - Declassify Dheer's biological profile");
          appendLine("  <span class='text-green'>photos</span>     - List all 7 forensic photographic artifacts");
          appendLine("  <span class='text-green'>inspect &lt;id&gt;</span> - Open artifact (1-7) in forensic lightbox");
          appendLine("  <span class='text-green'>bamboo</span>     - Feed Dheer an emergency stalk of bamboo");
          appendLine("  <span class='text-green'>poncho</span>     - Inspect specs of the bronze rain poncho");
          appendLine("  <span class='text-green'>dheer</span>      - Render high-resolution ASCII panda portrait");
          appendLine("  <span class='text-green'>standup</span>    - Run cubicle looming protocol");
          appendLine("  <span class='text-green'>clear</span>      - Clear terminal output");
          break;

        case 'status':
          appendLine("CORE MAINFRAME TELEMETRY:");
          appendLine("  SPECIES: Giant Panda (Homo Sapiens Hybrid)");
          appendLine("  PANDA ACTIVATION: 100%");
          appendLine("  JIRA COMMITS TODAY: 0");
          appendLine("  LOOMING THREAT: 99.8%");
          appendLine("  BAMBOO RESERVES: Adequate (1,420 kg stored in Conference B)");
          appendLine("  STATUS: Currently staring intently over cubicle divider.");
          break;

        case 'whoami':
          appendLine("SPECIMEN PROFILE:");
          appendLine("  Name: Dheer");
          appendLine("  Rank: Chief Ursine Strategist (CUO)");
          appendLine("  Signature: 'Originals' Espresso Polo + Acetate Spectacles");
          appendLine("  Special Ability: Looking intensely engaged while browsing flight tickets");
          break;

        case 'photos':
        case 'ls':
          appendLine("CLASSIFIED PHOTOGRAPHIC ARTIFACTS:");
          PHOTO_KEYS.forEach((k, idx) => {
            const item = PHOTO_DATABASE[k];
            appendLine(`  [${idx + 1}] <span class='text-accent'>${item.ref}</span> — ${item.title}`);
          });
          appendLine("Tip: Type '<span class='text-green'>inspect 1</span>' to view an artifact.");
          break;

        case 'inspect':
          if (!arg || isNaN(arg) || arg < 1 || arg > PHOTO_KEYS.length) {
            appendLine("Usage: inspect &lt;1-7&gt; (e.g., 'inspect 5' for Monsoon Extraction)");
          } else {
            const selectedKey = PHOTO_KEYS[parseInt(arg, 10) - 1];
            appendLine(`Opening forensic viewer for: <span class='text-green'>${PHOTO_DATABASE[selectedKey].title}</span>...`);
            setTimeout(() => openLightbox(selectedKey), 300);
          }
          break;

        case 'bamboo':
          bambooStock += 5;
          appendLine("Bamboo deployment authorized! 5 stalks dispatched to Dheer's cubicle.");
          triggerConfettiBurst();
          sound.playBambooCrunch();
          break;

        case 'poncho':
          appendLine("MONSOON GEAR SPECIFICATION:");
          appendLine("  Model: Industrial Bronze Polyethylene Emergency Poncho Mk II");
          appendLine("  Seal: Manual tension drawstring cinched under panda snout");
          appendLine("  Aerodynamic Rating: Negative 14%");
          appendLine("  Vibe Rating: Transcendental (Includes peace sign compatibility)");
          break;

        case 'standup':
          appendLine("LOOMING PROTOCOL ENGAGED:");
          appendLine("  Standing behind developer...");
          appendLine("  Adjusting spectacles to 14-degree angle...");
          appendLine("  Observing code compilation without breathing...");
          appendLine("  Developer's heart rate: 142 BPM.");
          appendLine("  Result: Bug fixed in 90 seconds.");
          break;

        case 'dheer':
          appendLine("<pre style='color: #22c55e; line-height: 1.1; font-size: 0.65rem;'>" +
`
     .---.             .---.
    /     \\  [DHEER]  /     \\
   | () () |         | () () |
    \\     /   .---.   \\     /
     \`---\`   /     \\   \`---\`
            |  . .  |
           [==(o.o)==]  <-- ACETATE FRAMES
             \\  -  /
             /     \\
            /|     |\\
           (_|     |_)
` + "</pre>");
          break;

        case 'clear':
          output.innerHTML = '';
          break;

        default:
          appendLine(`Command not recognized: '${cmd}'. Type '<span class='text-green'>help</span>' for manual.`);
      }
    }
  });
}

// --------------------------------------------------------------------------
// 11. AUDIO & TACTICAL NIGHT-VISION CONTROLS
// --------------------------------------------------------------------------
function initHeaderControls() {
  const audioBtn = document.getElementById('audioToggle');
  const audioText = document.getElementById('audioStateText');
  const modeBtn = document.getElementById('modeToggle');
  const modeText = document.getElementById('modeText');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  // Audio Toggle
  if (audioBtn && audioText) {
    audioBtn.addEventListener('click', () => {
      const isPlaying = sound.toggle();
      if (isPlaying) {
        audioBtn.classList.add('playing');
        audioText.textContent = 'ONLINE';
      } else {
        audioBtn.classList.remove('playing');
        audioText.textContent = 'MUTED';
      }
    });
  }

  // Night Vision Mode Toggle
  if (modeBtn && modeText) {
    modeBtn.addEventListener('click', () => {
      document.body.classList.toggle('theme-nightvision');
      const isNight = document.body.classList.contains('theme-nightvision');
      modeText.textContent = isNight ? 'TACTICAL GREEN' : 'NIGHT VISION';
      sound.playClick();
    });
  }

  // Mobile Menu Toggle
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      sound.playClick();
    });

    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
      });
    });
  }
}

// --------------------------------------------------------------------------
// 12. INITIALIZATION ON DOM READY
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initAmbientGlow();
  initHeroTilt();
  initLightbox();
  initArchiveFilters();
  initRollingCounters();
  initBambooTriggers();
  initDiagnosticTerminal();
  initHeaderControls();

  console.log("%c DHEER.EXE SYSTEM LOADED %c // Operating at 100% Panda Efficiency ",
    "background: #22c55e; color: #000; font-weight: bold; padding: 4px 8px; border-radius: 4px;",
    "background: #0d1017; color: #22c55e; padding: 4px 8px;"
  );
});
