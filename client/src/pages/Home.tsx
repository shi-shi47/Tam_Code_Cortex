// Design direction: playful digital maximalism — midnight navy, electric cyan, cobalt, coral, citrus, oversized display type, layered objects, and tactile controls.
import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Bot,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Github,
  Globe,
  Instagram,
  Layers,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Sparkles,
  X,
} from "lucide-react";

const orbitArt = "/manus-storage/devjams-orbit-sphere_1b14088e.png";
const trackArt = "/manus-storage/devjams-track-objects_36355203.png";
const brandMark = "/manus-storage/devjams-mark_be795ed8.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "Gallery", href: "#gallery" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

const tracks = [
  {
    name: "Reka AI/ML",
    sponsor: "Sponsored",
    eyebrow: "Track 01",
    description:
      "Build a thoughtful machine that sees the useful pattern hiding in plain sight. Ship an AI product that feels human, helpful, and a little unexpected.",
    color: "cyan",
    icon: Bot,
    glyph: "AI",
  },
  {
    name: "AR / VR",
    sponsor: "Open track",
    eyebrow: "Track 02",
    description:
      "Make the screen disappear. Prototype an immersive experience that gives people a new way to explore, learn, play, or collaborate.",
    color: "coral",
    icon: Sparkles,
    glyph: "XR",
  },
  {
    name: "FinTech & Financial Institution",
    sponsor: "Open track",
    eyebrow: "Track 03",
    description:
      "Design a calmer, clearer future for money. Turn complex financial moments into tools people can actually understand and trust.",
    color: "lime",
    icon: Database,
    glyph: "₹",
  },
  {
    name: "Dev Tools & Infra",
    sponsor: "Open track",
    eyebrow: "Track 04",
    description:
      "Create the invisible machinery that lets teams move faster. Think delightful workflows, sharper observability, and infrastructure with a point of view.",
    color: "blue",
    icon: Code2,
    glyph: "//",
  },
  {
    name: "Open Innovation",
    sponsor: "Open track",
    eyebrow: "Track 05",
    description:
      "No box, no brief, no ceiling. Bring the strange idea, the stubborn problem, or the tiny detail that deserves a much bigger solution.",
    color: "violet",
    icon: Layers,
    glyph: "∞",
  },
  {
    name: "Multimedia Tech",
    sponsor: "Open track",
    eyebrow: "Track 06",
    description:
      "Mix pixels, sound, motion, and code into something people can feel. Build an expressive digital object with a pulse of its own.",
    color: "yellow",
    icon: Boxes,
    glyph: "✦",
  },
];

const faqs = {
  General: [
    ["What is DevJams?", "DevJams is GDG VIT’s flagship 48-hour hackathon: a focused weekend to explore an idea, find your people, and leave with something that works."],
    ["Who can participate?", "Students and early builders are welcome. Form a team, pick a direction, and bring the curiosity — we will help with the rest."],
    ["Do I need a finished idea?", "Not at all. A rough hunch is enough. The tracks, mentors, and community are there to help you turn a spark into a buildable plan."],
  ],
  Registration: [
    ["How do I submit an idea?", "Use the Idea Submission button above to enter the participant portal. Tell us what you want to build, who it helps, and why this is the weekend to make it real."],
    ["Can I join without a team?", "Yes. Register solo and use the community channels to meet other builders looking for a co-conspirator."],
    ["What should I bring?", "Bring your laptop, charger, student ID, comfortable clothes, and the one idea you keep returning to."],
  ],
};

type TrackColor = (typeof tracks)[number]["color"];

function Mark({ compact = false }: { compact?: boolean }) {
  return (
    <a className={compact ? "brand brand--compact" : "brand"} href="#home" aria-label="Code cortex home">
      <img src={brandMark} alt="" className="brand__mark" />
      <span className="brand__copy">
        <span className="brand__top">TAM-VIT</span>
        <span className="brand__bottom">CODE CORTEX</span>
      </span>
    </a>
  );
}

function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return (
    <div className="section-label">
      <span className="section-label__number">{number}</span>
      <span className="section-label__line" />
      <span>{children}</span>
    </div>
  );
}

function Wordmark() {
  return (
    <div className="wordmark" aria-label="Code cortex">
      <div className="wordmark__line">
        <span className="wordmark__char wordmark__char--d">C</span>
        <span className="wordmark__char wordmark__char--e">o</span>
        <span className="wordmark__char wordmark__char--v">d</span>
        <span className="wordmark__char wordmark__char--j">e</span>
      </div>
      <div className="wordmark__line wordmark__line--offset">
        <span className="wordmark__char wordmark__char--a">c</span>
        <span className="wordmark__char wordmark__char--m">o</span>
        <span className="wordmark__char wordmark__char--s">r</span>
        <span className="wordmark__char wordmark__char--d">t</span>
        <span className="wordmark__char wordmark__char--e">e</span>
        <span className="wordmark__char wordmark__char--v">x</span>
      </div>
    </div>
  );
}

function GridDoodle() {
  return (
    <div className="grid-doodle" aria-hidden="true">
      <span className="grid-doodle__halo" />
      <span className="grid-doodle__cross grid-doodle__cross--one" />
      <span className="grid-doodle__cross grid-doodle__cross--two" />
      <span className="grid-doodle__dot grid-doodle__dot--one" />
      <span className="grid-doodle__dot grid-doodle__dot--two" />
      <span className="grid-doodle__label">BUILD<br />SOMETHING<br />UNEXPECTED</span>
    </div>
  );
}

function TrackGlyph({ track, large = false }: { track: (typeof tracks)[number]; large?: boolean }) {
  const Icon = track.icon;
  return (
    <div className={`track-glyph track-glyph--${track.color}${large ? " track-glyph--large" : ""}`}>
      <span className="track-glyph__ring" />
      <span className="track-glyph__glyph">{track.glyph}</span>
      <Icon className="track-glyph__icon" size={large ? 54 : 28} strokeWidth={1.2} />
      <span className="track-glyph__dot" />
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [faqMode, setFaqMode] = useState<keyof typeof faqs>("General");
  const [faqOpen, setFaqOpen] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const activeTrack = tracks[trackIndex];
  const faqItems = useMemo(() => faqs[faqMode], [faqMode]);

  const moveTrack = (direction: number) => {
    setTrackIndex((current) => (current + direction + tracks.length) % tracks.length);
  };

  const jumpTo = (href: string) => {
    setMenuOpen(false);
    window.setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 80);
  };

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <Mark />
        <button className="menu-trigger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <span className="menu-trigger__word">MENU</span>
          <span className="menu-trigger__icon"><Menu size={22} strokeWidth={1.8} /></span>
        </button>
      </header>

      <div className={`menu-panel ${menuOpen ? "menu-panel--open" : ""}`} aria-hidden={!menuOpen}>
        <div className="menu-panel__topline">
          <Mark compact />
          <button className="menu-close" onClick={() => setMenuOpen(false)} aria-label="Close navigation">
            <span>CLOSE</span><X size={24} strokeWidth={1.6} />
          </button>
        </div>
        <div className="menu-panel__body">
          <span className="menu-panel__side-note">NAV / CODE CORTEX</span>
          <nav className="menu-panel__nav">
            {navItems.map((item, index) => (
              <a href={item.href} key={item.href} onClick={(event) => { event.preventDefault(); jumpTo(item.href); }}>
                <span className="menu-panel__index">0{index + 1}</span>
                <span>{item.label}</span>
                <ArrowUpRight size={22} strokeWidth={1.4} />
              </a>
            ))}
          </nav>
        </div>
        <div className="menu-panel__footer"><span>30 HOURS / ONE BIG IDEA</span><span>TAM-VIT · 2026</span></div>
      </div>

      <main>
        <section id="home" className="hero section-dark">
          <div className="hero__noise" />
          <div className="hero__grid" />
          <div className="hero__topline page-pad">
            <span>TAM-VIT</span>
            <span>TAM-VIT / INDIA</span>
          </div>
          <div className="hero__copy page-pad">
            <p className="eyebrow eyebrow--bright"><span className="eyebrow__pulse" /> 30 HOURS / ONE IDEA / ZERO LIMITS</p>
            <Wordmark />
            <div className="hero__headline-row">
              <h1>30 Hours.<br /><em>One Idea.<br />Zero Limits.</em></h1>
              <a className="round-cta" href="#contact" onClick={(event) => { event.preventDefault(); jumpTo("#contact"); }}>
                <span>Idea<br />Submission</span><ArrowUpRight size={22} />
              </a>
            </div>
          </div>
          <div className="hero__orb hero__orb--one" />
          <div className="hero__orb hero__orb--two" />
          <div className="hero__stamp"><span>MAKE</span><span>IT</span><span>WEIRD</span></div>
          <div className="hero__bottom page-pad">
            <a className="scroll-cue" href="#about"><span className="scroll-cue__line" /> Scroll to explore</a>
            <span className="hero__location">// 30 HOURS / ONE IDEA / ZERO LIMITS</span>
          </div>
        </section>

        <section id="about" className="about section-light page-pad">
          <div className="about__intro">
            <SectionLabel number="01">ABOUT THE JAM</SectionLabel>
            <h2>The build<br /><span>starts here.</span></h2>
            <p className="lead-copy">DevJams is the flagship hackathon organized by GDG-VIT — a 48-hour intensive coding event designed to push the boundaries of innovation and develop practical problem-solving skills.</p>
            <a className="text-link" href="#tracks" onClick={(event) => { event.preventDefault(); jumpTo("#tracks"); }}>Find your track <ArrowRight size={18} /></a>
          </div>
          <div className="about__visual">
            <div className="about__visual-label">VIT / 12°58′N 79°09′E</div>
            <div className="map-card">
              <div className="map-card__rings" />
              <div className="map-card__route map-card__route--one" />
              <div className="map-card__route map-card__route--two" />
              <span className="map-card__pin map-card__pin--one" />
              <span className="map-card__pin map-card__pin--two" />
              <span className="map-card__pin map-card__pin--three" />
              <img src={orbitArt} alt="Abstract wireframe sphere" />
              <span className="map-card__caption">A SMALL DOT<br />WITH BIG IDEAS</span>
            </div>
          </div>
        </section>

        <section className="manifesto section-dark page-pad">
          <div className="manifesto__side"><GridDoodle /></div>
          <div className="manifesto__content">
            <SectionLabel number="02">WHO WE ARE</SectionLabel>
            <div className="manifesto__columns">
              <div>
                <h2>Curiosity<br /><span>with a deadline.</span></h2>
              </div>
              <div>
                <p>Fueled by curiosity and a bit of chaos, we are a community of coders who push limits, designers who bring ideas to life, and managers who turn vision into reality.</p>
                <p>We make crazy things that matter. Then we make them stranger, sharper, and ready for the real world.</p>
                <span className="manifesto__signature">TAM-VIT / 2026</span>
              </div>
            </div>
          </div>
        </section>

        <section className="duo-story page-pad">
          <article className="duo-card duo-card--vit">
            <div className="duo-card__top"><SectionLabel number="03">ABOUT VIT</SectionLabel><Globe size={24} /></div>
            <h3>A campus<br />with <em>range.</em></h3>
            <p>VIT, ranked 11th in NIRF engineering, is a premier Indian university attracting talent from across the nation and abroad. Innovation, diversity, and world-class infrastructure make it a natural home for big builds.</p>
            <span className="duo-card__footer">12°58′N / 79°09′E <ArrowUpRight size={18} /></span>
          </article>
          <article className="duo-card duo-card--gdg">
            <div className="duo-card__top"><SectionLabel number="04">ABOUT TAM-VIT</SectionLabel><Cpu size={24} /></div>
            <h3>Build<br /><em>together.</em></h3>
            <p>People with different tabs open in their heads, making room for one another at the same table. That is the whole point.</p>
            <span className="duo-card__footer">COMMUNITY / ALWAYS OPEN <ArrowUpRight size={18} /></span>
          </article>
        </section>

        <section id="tracks" className="tracks section-blue page-pad">
          <div className="tracks__header">
            <SectionLabel number="05">PICK A DIRECTION</SectionLabel>
            <div className="tracks__arrows"><button onClick={() => moveTrack(-1)} aria-label="Previous track"><ChevronLeft /></button><button onClick={() => moveTrack(1)} aria-label="Next track"><ChevronRight /></button></div>
          </div>
          <div className="tracks__title-row"><h2>Six ways<br /><span>to go deep.</span></h2><p>Follow the thing you cannot stop thinking about. Every track is a different excuse to make something useful, expressive, or beautifully unnecessary.</p></div>
          <div className="tracks__canvas">
            <div className="tracks__object-image"><img src={trackArt} alt="Abstract collection of track objects" /></div>
            <div className="tracks__active-card">
              <div className="tracks__active-card-top"><span>{activeTrack.eyebrow}</span><span>{activeTrack.sponsor}</span></div>
              <TrackGlyph track={activeTrack} large />
              <h3>{activeTrack.name}</h3>
              <p>{activeTrack.description}</p>
              <a className="text-link text-link--dark" href="#faqs" onClick={(event) => { event.preventDefault(); jumpTo("#faqs"); }}>Read the brief <ArrowUpRight size={18} /></a>
            </div>
          </div>
          <div className="tracks__rail" role="tablist" aria-label="Hackathon tracks">
            {tracks.map((track, index) => (
              <button key={track.name} className={`track-tab track-tab--${track.color} ${index === trackIndex ? "track-tab--active" : ""}`} onClick={() => setTrackIndex(index)} role="tab" aria-selected={index === trackIndex}>
                <span className="track-tab__number">0{index + 1}</span><span>{track.name}</span><ArrowUpRight size={17} />
              </button>
            ))}
          </div>
          <div className="tracks__dots">{tracks.map((track, index) => <button key={track.name} className={index === trackIndex ? "is-active" : ""} onClick={() => setTrackIndex(index)} aria-label={`Go to track ${index + 1}`} />)}</div>
        </section>

        <section id="gallery" className="events section-light page-pad">
          <div className="events__header"><SectionLabel number="06">BEFORE THE JAM</SectionLabel><span className="events__header-note">A LITTLE ARCHIVE / BIG ENERGY</span></div>
          <div className="events__title-row"><h2>We’ve been<br /><span>busy.</span></h2><p>Three events. Hundreds of ideas. A growing collection of proof that the most interesting work starts before anybody knows what to call it.</p></div>
          <div className="event-grid">
            <article className="event-card event-card--triangle"><div className="event-card__shape event-card__shape--triangle">△</div><div className="event-card__meta"><span>2026 / 36 HOURS</span><ArrowUpRight size={19} /></div><h3>Women<br />Techies’26</h3><p>A women-centric hackathon fostering inclusivity, collaboration, and innovation.</p></article>
            <article className="event-card event-card--circle"><div className="event-card__shape event-card__shape--circle">◎</div><div className="event-card__meta"><span>2026 / 24 HOURS</span><ArrowUpRight size={19} /></div><h3>Hexathon’26</h3><p>A beginner-friendly designathon where creativity meets problem-solving.</p></article>
            <article className="event-card event-card--flower"><div className="event-card__shape event-card__shape--flower">✽</div><div className="event-card__meta"><span>2025 / EDITION 08</span><ArrowUpRight size={19} /></div><h3>DevJams’25</h3><p>3,500+ registrations. 750+ shortlisted participants. One wildly imaginative weekend.</p></article>
          </div>
        </section>

        <section id="sponsors" className="sponsors section-dark page-pad">
          <div className="sponsors__header"><SectionLabel number="07">POWERED BY</SectionLabel><span>THANK YOU, INTERNET</span></div>
          <div className="sponsors__title-row"><h2>Good ideas<br /><span>need friends.</span></h2><p>We are grateful to the teams that make room for new builders, new questions, and the occasional delightfully over-engineered side project.</p></div>
          <div className="sponsor-grid">
            <a className="sponsor-card sponsor-card--diamond" href="https://reka.ai/" target="_blank" rel="noreferrer"><span className="sponsor-card__rank">DIAMOND</span><span className="sponsor-card__name">REKA<span className="sponsor-card__spark">✦</span></span><span className="sponsor-card__arrow"><ArrowUpRight /></span></a>
            <a className="sponsor-card sponsor-card--gold" href="https://www.exasol.com/" target="_blank" rel="noreferrer"><span className="sponsor-card__rank">GOLD</span><span className="sponsor-card__name">exasol<span className="sponsor-card__line" /></span><span className="sponsor-card__arrow"><ArrowUpRight /></span></a>
            <a className="sponsor-card sponsor-card--bronze" href="https://www.aemsinfra.com/" target="_blank" rel="noreferrer"><span className="sponsor-card__rank">BRONZE</span><span className="sponsor-card__name">AEMS</span><span className="sponsor-card__arrow"><ArrowUpRight /></span></a>
          </div>
          <div className="sponsors__sun"><span>THE<br />SUN IS<br />ON.</span></div>
        </section>

        <section id="faqs" className="faq section-light page-pad">
          <div className="faq__side"><SectionLabel number="08">NO SILLY QUESTIONS</SectionLabel><h2>Let’s break<br /><span>it down.</span></h2><p>Still curious? That is a good sign. Pick a tab and find the practical bits.</p><div className="faq__doodle"><span>?</span><span>!</span><span>↗</span></div></div>
          <div className="faq__main">
            <div className="faq__tabs">{(Object.keys(faqs) as Array<keyof typeof faqs>).map((mode) => <button key={mode} className={faqMode === mode ? "is-active" : ""} onClick={() => { setFaqMode(mode); setFaqOpen(0); }}>{mode}</button>)}</div>
            <div className="faq__list">{faqItems.map(([question, answer], index) => <div className={`faq-item ${faqOpen === index ? "faq-item--open" : ""}`} key={question}><button onClick={() => setFaqOpen(faqOpen === index ? -1 : index)} aria-expanded={faqOpen === index}><span>0{index + 1}</span><strong>{question}</strong><ChevronDown size={21} /></button><div className="faq-item__answer"><p>{answer}</p></div></div>)}</div>
            <a className="discord-link" href="#contact" onClick={(event) => { event.preventDefault(); jumpTo("#contact"); }}>For more queries, raise a ticket on Discord <ArrowUpRight size={18} /></a>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer section-dark page-pad">
        <div className="footer__main"><div className="footer__statement"><SectionLabel number="09">SAY HELLO</SectionLabel><h2>Let’s talk<br /><span>tech<span className="footer__cursor">→</span></span></h2></div><div className="footer__contact"><a href="mailto:varshithisworking@gmail.com"><Mail size={17} /> varshithisworking@gmail.com</a><a href="tel:+919686352426"><Phone size={17} /> +91 96863 52426</a><a href="mailto:reenubiju10@gmail.com"><Mail size={17} /> reenubiju10@gmail.com</a><a href="tel:+919656463672"><Phone size={17} /> +91 96564 63672</a></div></div>
        <div className="footer__bottom"><Mark compact /><div className="footer__socials"><a href="#home" aria-label="Medium"><Code2 size={18} /></a><a href="#home" aria-label="Instagram"><Instagram size={18} /></a><a href="#home" aria-label="X Twitter"><Github size={18} /></a><a href="#home" aria-label="LinkedIn"><Linkedin size={18} /></a></div><span className="footer__legal">© 2026 TAM-VIT / BUILT WITH TOO MUCH COFFEE</span></div>
      </footer>
    </div>
  );
}
