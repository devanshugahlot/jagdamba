import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import * as THREE from "three";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  FiActivity,
  FiArrowRight,
  FiArrowUpRight,
  FiAward,
  FiBarChart2,
  FiBriefcase,
  FiCheck,
  FiChevronDown,
  FiClock,
  FiCode,
  FiCpu,
  FiGlobe,
  FiLayers,
  FiLock,
  FiMail,
  FiMapPin,
  FiMenu,
  FiMessageCircle,
  FiPhone,
  FiShield,
  FiStar,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiX,
  FiZap,
} from "react-icons/fi";
import {
  SiBinance,
  SiEthereum,
  SiFirebase,
  SiGoogleads,
  SiMeta,
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTradingview,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "digital-marketing",
    title: "Digital Marketing Services",
    icon: FiTarget,
    accent: "from-cyan-300 to-blue-500",
    description:
      "Campaign systems that blend attention, content, targeting and conversion analytics.",
    items: [
      "Social Media Marketing",
      "Instagram Marketing",
      "Facebook Marketing",
      "WhatsApp Marketing",
      "Google Ads",
      "Meta Ads",
      "SEO Services",
      "Content Research",
      "Script Writing",
      "Instagram Optimization",
      "Social Media Handling",
    ],
  },
  {
    id: "web-software",
    title: "Website & Software Development",
    icon: FiCode,
    accent: "from-blue-300 to-violet-500",
    description:
      "Premium web, app, CRM, ERP and custom platforms engineered for business scale.",
    items: [
      "Business Website Development",
      "Ecommerce Website",
      "Portfolio Website",
      "Landing Pages",
      "UI/UX Design",
      "CRM Software",
      "ERP Software",
      "Custom Software Development",
      "Mobile App Development",
      "Ecommerce Software",
    ],
  },
  {
    id: "mlm",
    title: "MLM Software Development",
    icon: FiLayers,
    accent: "from-fuchsia-300 to-purple-500",
    description:
      "Centralized and decentralized MLM engines with secure compensation logic.",
    items: [
      "Binary MLM Software",
      "Matrix MLM Software",
      "Unilevel MLM Software",
      "Centralized MLM System",
      "Decentralized MLM System",
    ],
  },
  {
    id: "trading-automation",
    title: "Trading & Automation Development",
    icon: FiBarChart2,
    accent: "from-emerald-300 to-cyan-500",
    description:
      "Algorithmic trading, MT5, MQL and TradingView automation for serious operators.",
    items: [
      "Automated Trading Bots",
      "Trading Algorithms",
      "Custom Strategy Automation",
      "Indicator Development",
      "MT5 EA Development",
      "MT5 Indicator Development",
      "MQL Programming",
      "TradingView Pine Script Development",
      "Pine Script Indicators",
      "Pine Script Strategies",
      "TradingView Automation",
    ],
  },
  {
    id: "crypto-blockchain",
    title: "Crypto & Blockchain Services",
    icon: FiCpu,
    accent: "from-amber-200 to-cyan-400",
    description:
      "Web3 products, smart contracts, tokens, wallets, exchanges and DeFi ecosystems.",
    items: [
      "Coin Development",
      "Token Development",
      "Smart Contract Development",
      "Crypto Exchange Development",
      "Wallet Development",
      "Web3 Solutions",
      "DeFi Development",
      "Blockchain Solutions",
    ],
  },
];

const stats = [
  { value: 240, suffix: "+", label: "Projects Launched" },
  { value: 18, suffix: "M+", label: "Ad Impressions Managed" },
  { value: 99, suffix: "%", label: "Uptime Architecture" },
  { value: 12, suffix: "x", label: "Faster Delivery Sprints" },
];

const whyChoose = [
  { title: "Expert Team", icon: FiUsers, copy: "Specialists across product, growth, automation and Web3." },
  { title: "Modern Technologies", icon: FiCpu, copy: "React, Node, Python, cloud, blockchain and automation stacks." },
  { title: "Fast Delivery", icon: FiClock, copy: "Sprint systems built for rapid launch without fragile shortcuts." },
  { title: "Secure Solutions", icon: FiShield, copy: "Security-first workflows for payments, wallets and trading logic." },
  { title: "24/7 Support", icon: FiMessageCircle, copy: "Always-on support channels for active business systems." },
  { title: "High Performance Systems", icon: FiZap, copy: "Scalable infrastructure with crisp UX and fast response times." },
  { title: "Premium UI/UX", icon: FiStar, copy: "Interfaces that feel polished, confident and conversion focused." },
  { title: "Business Growth Focus", icon: FiTrendingUp, copy: "Every build is shaped around revenue, retention and trust." },
];

const portfolio = [
  {
    title: "ApexTrade OS",
    type: "Trading Automation Platform",
    metric: "41% faster execution",
    tags: ["MT5", "Pine Script", "Risk Engine"],
    gradient: "from-cyan-400/30 to-emerald-400/10",
  },
  {
    title: "VaultX Exchange",
    type: "Crypto Exchange & Wallet",
    metric: "2.8M simulated orders",
    tags: ["Web3", "Wallet", "KYC"],
    gradient: "from-violet-400/30 to-cyan-400/10",
  },
  {
    title: "ScaleWave Growth",
    type: "Digital Marketing Command Center",
    metric: "6.4x lead quality lift",
    tags: ["Meta Ads", "SEO", "Analytics"],
    gradient: "from-blue-400/30 to-fuchsia-400/10",
  },
  {
    title: "NexusERP",
    type: "Enterprise CRM & ERP",
    metric: "73% workflow automation",
    tags: ["React", "Node.js", "MongoDB"],
    gradient: "from-amber-300/20 to-cyan-400/10",
  },
];

const techStack = [
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Python", icon: SiPython },
  { name: "Blockchain", icon: SiEthereum },
  { name: "Web3", icon: SiBinance },
  { name: "Meta Ads", icon: SiMeta },
  { name: "Google Ads", icon: SiGoogleads },
  { name: "TradingView", icon: SiTradingview },
  { name: "MT5", icon: FiActivity },
  { name: "Firebase", icon: SiFirebase },
  { name: "MongoDB", icon: SiMongodb },
];

const testimonials = [
  {
    name: "Rohan Mehta",
    role: "Founder, AlphaLedger",
    quote:
      "The team delivered a premium trading and Web3 product that felt investor-ready from day one.",
  },
  {
    name: "Priya Nair",
    role: "CMO, D2C Growth House",
    quote:
      "Our funnels, creative testing and CRM now feel like one smart machine. Lead quality improved immediately.",
  },
  {
    name: "Arjun Kapoor",
    role: "Director, Fintech Studio",
    quote:
      "They understood automation, compliance and product design together, which is rare and very valuable.",
  },
];

const pricing = [
  {
    name: "Launch",
    price: "$1.5k+",
    description: "For startups that need a premium digital presence and lead flow.",
    features: ["Corporate website", "SEO foundation", "Lead capture", "Analytics setup"],
  },
  {
    name: "Scale",
    price: "$5k+",
    featured: true,
    description: "For growing brands building software, campaigns and automation.",
    features: ["Web or app build", "CRM workflows", "Ad funnel setup", "Priority delivery"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For trading, blockchain, exchange and complex software systems.",
    features: ["Architecture planning", "Security reviews", "Trading or Web3 modules", "Dedicated team"],
  },
];

const faqs = [
  {
    q: "Do you build both marketing and software systems?",
    a: "Yes. The site is positioned for companies that want one team across brand, growth, web, apps, trading automation and blockchain products.",
  },
  {
    q: "Can you develop MT5 EA and TradingView Pine Script tools?",
    a: "Yes. The service structure includes MT5 EA, MQL programming, Pine Script indicators, strategies and TradingView automation.",
  },
  {
    q: "Do you support crypto exchange and wallet products?",
    a: "Yes. The Web3 scope includes token, smart contract, wallet, exchange, DeFi and blockchain platform development.",
  },
  {
    q: "How fast can a project start?",
    a: "A discovery call can happen immediately, followed by a scoped proposal, sprint plan and launch roadmap.",
  },
];

const jobs = [
  "Senior React Engineer",
  "Performance Marketing Strategist",
  "Pine Script / MQL Developer",
  "Blockchain Smart Contract Engineer",
  "Product UI Designer",
];

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "About", path: "/about" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

function useRoute() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = (nextPath) => {
    if (nextPath === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.history.pushState({}, "", nextPath);
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { path, navigate };
}

function App() {
  const { path, navigate } = useRoute();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".gsap-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 48, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 86%",
            },
          }
        );
      });

      gsap.to(".glow-line", {
        backgroundPosition: "200% center",
        duration: 8,
        repeat: -1,
        ease: "none",
      });
    });

    return () => ctx.revert();
  }, [path]);

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-white">
      <SeoJson />
      <CursorGlow />
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <Navbar navigate={navigate} path={path} />
      <AnimatePresence mode="wait">
        <motion.main
          key={path}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <Page path={path} navigate={navigate} />
        </motion.main>
      </AnimatePresence>
      <Footer navigate={navigate} />
    </div>
  );
}

function Page({ path, navigate }) {
  if (path === "/services") return <ServicesPage navigate={navigate} />;
  if (path === "/portfolio") return <PortfolioPage navigate={navigate} />;
  if (path === "/about") return <AboutPage navigate={navigate} />;
  if (path === "/contact") return <ContactPage />;
  if (path === "/careers") return <CareersPage navigate={navigate} />;
  return <HomePage navigate={navigate} />;
}

function SeoJson() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "NovaQ",
    description:
      "Premium IT company, digital marketing agency, trading software development company and crypto blockchain solutions provider.",
    areaServed: "Global",
    serviceType: services.map((service) => service.title),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-ink"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.55 } }}
    >
      <div className="relative flex flex-col items-center gap-5">
        <div className="loader-ring" />
        <div className="text-center">
          <p className="font-display text-2xl font-bold tracking-wide">NOVAQ</p>
          <p className="mt-1 text-xs uppercase tracking-[0.45em] text-cyan-200/70">
            Loading Intelligence
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const move = (event) => {
      if (!ref.current) return;
      ref.current.style.transform = `translate3d(${event.clientX - 160}px, ${event.clientY - 160}px, 0)`;
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return <div ref={ref} className="pointer-events-none fixed left-0 top-0 z-30 hidden h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl lg:block" />;
}

function Navbar({ navigate, path }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const go = (nextPath) => {
    navigate(nextPath);
    setMobileOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/50 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <button
          className="group flex items-center gap-3"
          onClick={() => go("/")}
          aria-label="NovaQ home"
        >
          <span className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-300/30 bg-white/10 shadow-glow">
            <span className="h-4 w-4 rounded-full bg-gradient-to-br from-cyan-200 via-blue-400 to-violet-400" />
          </span>
          <span>
            <span className="block font-display text-lg font-bold tracking-wide">NOVAQ</span>
            <span className="block text-[10px] uppercase tracking-[0.28em] text-cyan-100/55">
              Digital Systems
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) =>
            link.label === "Services" ? (
              <div className="mega-group relative" key={link.path}>
                <button
                  className={`nav-link ${path === link.path ? "text-white" : ""}`}
                  onClick={() => go(link.path)}
                >
                  Services <FiChevronDown />
                </button>
                <div className="mega-menu absolute left-1/2 top-11 hidden w-[760px] -translate-x-1/2 rounded-[28px] border border-white/10 bg-obsidian/95 p-4 shadow-glass backdrop-blur-2xl">
                  <div className="grid grid-cols-2 gap-3">
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <button
                          key={service.id}
                          onClick={() => go("/services")}
                          className="group rounded-3xl border border-white/10 bg-white/[0.04] p-4 text-left transition hover:border-cyan-200/40 hover:bg-white/[0.08]"
                        >
                          <div className="flex items-start gap-3">
                            <span className={`rounded-2xl bg-gradient-to-br ${service.accent} p-3 text-ink`}>
                              <Icon />
                            </span>
                            <span>
                              <span className="block font-display text-sm font-bold">{service.title}</span>
                              <span className="mt-1 block text-xs leading-5 text-white/55">{service.description}</span>
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <button
                key={link.path}
                className={`nav-link ${path === link.path ? "text-white" : ""}`}
                onClick={() => go(link.path)}
              >
                {link.label}
              </button>
            )
          )}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button className="ghost-button" onClick={() => go("/portfolio")}>
            View Work
          </button>
          <button className="primary-button" onClick={() => go("/contact")}>
            Book Free Consultation <FiArrowUpRight />
          </button>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/10 lg:hidden"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="border-t border-white/10 bg-obsidian/95 px-5 py-5 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  className="rounded-2xl px-4 py-3 text-left text-sm font-semibold text-white/75 hover:bg-white/10"
                  onClick={() => go(link.path)}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HomePage({ navigate }) {
  return (
    <>
      <HeroSection navigate={navigate} />
      <LogoMarquee />
      <AboutSection navigate={navigate} />
      <ServicesSection navigate={navigate} />
      <WhyChooseSection />
      <PortfolioSection navigate={navigate} />
      <ProductStudiosSection />
      <TechnologySection />
      <TestimonialsSection />
      <PricingSection navigate={navigate} />
      <FaqSection />
      <ContactSection />
    </>
  );
}

function HeroSection({ navigate }) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-radial-grid pt-24">
      <HeroScene />
      <div className="absolute inset-0 hero-mesh opacity-70" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-2 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-white/8 px-4 py-2 text-sm text-cyan-100 shadow-glow backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-signal shadow-[0_0_18px_rgba(33,230,162,.9)]" />
            Premium IT, Growth, Trading and Web3 Studio
          </div>

          <h1 className="mt-6 max-w-5xl font-display text-5xl font-bold leading-[1.01] tracking-normal text-white md:text-6xl xl:text-[74px]">
            Next Generation Digital, Trading & Blockchain Solutions
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
            We build high-converting websites, growth campaigns, custom software, trading automation and blockchain products for ambitious companies that want premium execution.
          </p>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <button className="primary-button text-base" onClick={() => navigate("/contact")}>
              Book Free Consultation <FiArrowUpRight />
            </button>
            <button className="secondary-button text-base" onClick={() => navigate("/services")}>
              View Services <FiArrowRight />
            </button>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-panel rounded-3xl p-4">
                <p className="font-display text-2xl font-bold text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-xs leading-5 text-white/55">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
            <span>Trusted Stack</span>
            <span className="h-px w-10 bg-white/20" />
            <span>React</span>
            <span>Node</span>
            <span>TradingView</span>
            <span>Web3</span>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.94, y: 22 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          <HeroDashboard />
        </motion.div>
      </div>
    </section>
  );
}

function HeroScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 42;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    mount.appendChild(renderer.domElement);

    const particleGeometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];
    const colorA = new THREE.Color("#4ff3ff");
    const colorB = new THREE.Color("#9b5cff");

    for (let index = 0; index < 1500; index += 1) {
      positions.push((Math.random() - 0.5) * 130);
      positions.push((Math.random() - 0.5) * 74);
      positions.push((Math.random() - 0.5) * 74);

      const mixed = colorA.clone().lerp(colorB, Math.random());
      colors.push(mixed.r, mixed.g, mixed.b);
    }

    particleGeometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        size: 0.18,
        vertexColors: true,
        transparent: true,
        opacity: 0.72,
      })
    );
    scene.add(particles);

    const lineMaterial = new THREE.LineBasicMaterial({ color: "#21e6a2", transparent: true, opacity: 0.35 });
    const linePoints = [];
    for (let index = 0; index < 90; index += 1) {
      const x = -42 + index * 0.95;
      const y = Math.sin(index * 0.35) * 3.4 + Math.cos(index * 0.11) * 4;
      linePoints.push(new THREE.Vector3(x, y, -6));
    }
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(linePoints), lineMaterial);
    scene.add(line);

    let rafId = 0;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      particles.rotation.y += 0.0009;
      particles.rotation.x += 0.00025;
      line.rotation.z = Math.sin(Date.now() * 0.0008) * 0.025;
      renderer.render(scene, camera);
    };
    animate();

    const resize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
      renderer.dispose();
      particleGeometry.dispose();
      line.geometry.dispose();
      lineMaterial.dispose();
      if (renderer.domElement.parentElement === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" aria-hidden="true" />;
}

function HeroDashboard() {
  return (
    <div className="relative mx-auto max-w-xl">
      <div className="absolute -inset-8 rounded-[48px] bg-gradient-to-br from-cyan-300/20 via-blue-500/10 to-violet-500/20 blur-3xl" />
      <div className="glass-panel relative overflow-hidden rounded-[34px] p-4 shadow-glass">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/50">Command Terminal</p>
            <p className="mt-1 font-display text-xl font-bold">Growth + Trading Intelligence</p>
          </div>
          <div className="rounded-full border border-signal/30 bg-signal/10 px-3 py-1 text-xs font-bold text-signal">
            Live
          </div>
        </div>

        <TradingChart />

        <div className="grid gap-3 md:grid-cols-3">
          {[
            ["BTC Signal", "+12.8%", "text-signal"],
            ["Lead Flow", "4.6x", "text-cyan-200"],
            ["Bot Risk", "0.42%", "text-aurum"],
          ].map(([label, value, color]) => (
            <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.045] p-4">
              <p className="text-xs text-white/45">{label}</p>
              <p className={`mt-2 font-display text-2xl font-bold ${color}`}>{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold">Execution Engine</p>
              <FiActivity className="text-cyan-200" />
            </div>
            <div className="space-y-3">
              {[82, 64, 91].map((width, index) => (
                <div key={width} className="h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${width}%` }}
                    transition={{ delay: 0.55 + index * 0.12, duration: 0.8 }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-sm font-semibold">AI Campaign Snapshot</p>
            <div className="mt-4 grid grid-cols-5 items-end gap-2">
              {[44, 72, 55, 88, 69].map((height, index) => (
                <motion.div
                  key={height}
                  className="rounded-t-xl bg-gradient-to-t from-blue-500 to-cyan-200"
                  style={{ height: `${height}px` }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.65 + index * 0.08, duration: 0.55 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TradingChart() {
  const candles = [42, 50, 38, 62, 58, 71, 64, 77, 69, 84, 76, 92, 88, 105, 96, 112];
  const path = "M8 146 C44 116, 62 135, 96 98 S158 74, 194 84 S244 55, 282 68 S338 34, 382 44 S430 25, 478 34";

  return (
    <div className="relative my-4 overflow-hidden rounded-[28px] border border-white/10 bg-[#030711]/90 p-4">
      <div className="absolute inset-0 chart-grid opacity-50" />
      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold">NQX / USDT</p>
          <p className="text-xs text-white/45">Automated strategy preview</p>
        </div>
        <p className="font-display text-2xl font-bold text-signal">+18.42%</p>
      </div>
      <svg className="relative mt-4 h-52 w-full" viewBox="0 0 500 180" role="img" aria-label="Animated trading chart">
        <defs>
          <linearGradient id="chartGlow" x1="0" x2="1">
            <stop offset="0%" stopColor="#4ff3ff" />
            <stop offset="55%" stopColor="#21e6a2" />
            <stop offset="100%" stopColor="#9b5cff" />
          </linearGradient>
          <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#4ff3ff" stopOpacity="0.26" />
            <stop offset="100%" stopColor="#4ff3ff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={`${path} L478 180 L8 180 Z`} fill="url(#chartFill)" />
        <motion.path
          d={path}
          fill="none"
          stroke="url(#chartGlow)"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.6, duration: 1.8, ease: "easeInOut" }}
        />
        {candles.map((height, index) => {
          const x = 26 + index * 28;
          const y = 144 - height;
          const up = index % 3 !== 0;
          return (
            <motion.g
              key={`${height}-${index}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.04 }}
            >
              <line x1={x + 5} x2={x + 5} y1={y - 10} y2={y + 36} stroke={up ? "#21e6a2" : "#f5c76b"} strokeWidth="2" opacity="0.8" />
              <rect x={x} y={y} width="10" height="32" rx="4" fill={up ? "#21e6a2" : "#f5c76b"} opacity="0.86" />
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}

function LogoMarquee() {
  const names = ["Fintech", "SaaS", "D2C", "Web3", "Trading Desk", "Agency", "Startup", "Enterprise"];
  return (
    <section className="relative border-y border-white/10 bg-white/[0.025] py-5">
      <div className="glow-line absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent bg-[length:200%_100%]" />
      <div className="marquee flex gap-4 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.26em] text-white/35">
        {[...names, ...names, ...names].map((name, index) => (
          <span key={`${name}-${index}`} className="mx-8">
            {name} Ready
          </span>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, copy, align = "center" }) {
  return (
    <div className={`gsap-reveal mx-auto max-w-3xl ${align === "center" ? "text-center" : "text-left"}`}>
      <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-200/70">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-white md:text-6xl">{title}</h2>
      {copy && <p className="mt-5 text-lg leading-8 text-white/60">{copy}</p>}
    </div>
  );
}

function AboutSection({ navigate }) {
  return (
    <section className="section-padding relative">
      <div className="absolute left-0 top-24 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="gsap-reveal">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-200/70">About Company</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-6xl">
            A premium technology partner for digital scale and market intelligence.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/62">
            NovaQ operates at the intersection of IT services, digital marketing, trading software and blockchain development. We design brands, build platforms, automate operations and engineer growth systems with a founder-level sense of urgency.
          </p>
          <button className="primary-button mt-8" onClick={() => navigate("/about")}>
            Explore Company <FiArrowUpRight />
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            ["Mission", "Build premium digital systems that convert attention into measurable business growth."],
            ["Vision", "Become the trusted global studio for software, trading automation and Web3 innovation."],
            ["Expertise", "Marketing funnels, SaaS platforms, trading bots, MLM engines and blockchain ecosystems."],
            ["Delivery", "Strategy, UI/UX, engineering, launch, analytics and ongoing optimization under one roof."],
          ].map(([title, copy]) => (
            <div key={title} className="gsap-reveal glass-panel rounded-[30px] p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/12 text-cyan-200">
                <FiAward />
              </div>
              <h3 className="font-display text-2xl font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-white/58">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ navigate }) {
  return (
    <section className="section-padding relative bg-white/[0.018]">
      <SectionHeader
        eyebrow="Services"
        title="Full-stack growth, software, trading and blockchain execution."
        copy="Every service category is built as a premium business system, not a one-off task."
      />
      <div className="mx-auto mt-14 grid max-w-7xl gap-5 px-5 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} compact />
        ))}
      </div>
      <div className="mt-12 text-center">
        <button className="primary-button" onClick={() => navigate("/services")}>
          View All Service Pages <FiArrowUpRight />
        </button>
      </div>
    </section>
  );
}

function ServiceCard({ service, index = 0, compact = false }) {
  const Icon = service.icon;
  return (
    <motion.article
      className="gsap-reveal group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-glass backdrop-blur-xl"
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
    >
      <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${service.accent}`} />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-300/10 blur-3xl transition group-hover:bg-violet-400/20" />
      <div className="relative">
        <div className={`mb-6 inline-flex rounded-3xl bg-gradient-to-br ${service.accent} p-4 text-ink shadow-glow`}>
          <Icon className="text-2xl" />
        </div>
        <h3 className="font-display text-2xl font-bold">{service.title}</h3>
        <p className="mt-3 leading-7 text-white/58">{service.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {service.items.slice(0, compact ? 7 : service.items.length).map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/62">
              {item}
            </span>
          ))}
        </div>
        {compact && (
          <p className="mt-5 text-sm font-semibold text-cyan-200">
            {service.items.length}+ capabilities <FiArrowUpRight className="inline" />
          </p>
        )}
        <span className="absolute right-0 top-0 font-display text-7xl font-bold text-white/[0.03]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </motion.article>
  );
}

function WhyChooseSection() {
  return (
    <section className="section-padding">
      <SectionHeader
        eyebrow="Why Choose Us"
        title="Enterprise-grade thinking with startup-grade speed."
        copy="Premium work is not just visual polish. It is reliability, clarity, speed and systems that continue creating value."
      />
      <div className="mx-auto mt-14 grid max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {whyChoose.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="gsap-reveal glass-panel group rounded-[28px] p-5 transition hover:-translate-y-1 hover:border-cyan-200/30">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-200 transition group-hover:bg-cyan-300 group-hover:text-ink">
                <Icon />
              </div>
              <h3 className="font-display text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">{item.copy}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function PortfolioSection({ navigate }) {
  return (
    <section className="section-padding relative bg-white/[0.018]">
      <SectionHeader
        eyebrow="Portfolio Showcase"
        title="Premium case studies across product, growth, trading and Web3."
        copy="A modern showcase layout with dashboard previews, mobile mockups and conversion-focused product narratives."
      />
      <div className="mx-auto mt-14 grid max-w-7xl gap-5 px-5 md:grid-cols-2 lg:px-8">
        {portfolio.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <button className="secondary-button" onClick={() => navigate("/portfolio")}>
          Open Portfolio Page <FiArrowRight />
        </button>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="gsap-reveal group overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.045] shadow-glass backdrop-blur-xl"
      whileHover={{ y: -8 }}
    >
      <div className={`relative min-h-72 bg-gradient-to-br ${project.gradient} p-5`}>
        <div className="absolute inset-0 chart-grid opacity-40" />
        <div className="relative flex items-center justify-between">
          <span className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-xs text-white/60">
            Case 0{index + 1}
          </span>
          <FiArrowUpRight className="text-2xl text-cyan-100" />
        </div>
        <MockupVisual index={index} />
      </div>
      <div className="p-6">
        <p className="text-sm font-semibold text-cyan-200">{project.type}</p>
        <h3 className="mt-2 font-display text-3xl font-bold">{project.title}</h3>
        <p className="mt-3 text-white/58">{project.metric}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function MockupVisual({ index }) {
  if (index === 1) return <ExchangeMockup mini />;
  if (index === 2) return <AdminMockup mini />;
  if (index === 3) return <SoftwareMockup mini />;
  return <TradingMockup mini />;
}

function ProductStudiosSection() {
  return (
    <section className="section-padding">
      <SectionHeader
        eyebrow="Product UI Concepts"
        title="Investor-ready interfaces for admin, trading and crypto products."
        copy="These preview systems show the visual direction for complex tools that need to feel fast, serious and trustworthy."
      />
      <div className="mx-auto mt-14 grid max-w-7xl gap-6 px-5 lg:grid-cols-3 lg:px-8">
        <ConceptPanel title="Premium Admin Dashboard UI" icon={FiBriefcase}>
          <AdminMockup />
        </ConceptPanel>
        <ConceptPanel title="Trading Dashboard Preview" icon={FiBarChart2}>
          <TradingMockup />
        </ConceptPanel>
        <ConceptPanel title="Crypto Exchange UI Mockup" icon={SiBinance}>
          <ExchangeMockup />
        </ConceptPanel>
      </div>
    </section>
  );
}

function ConceptPanel({ title, icon: Icon, children }) {
  return (
    <div className="gsap-reveal glass-panel overflow-hidden rounded-[34px] p-5">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-display text-xl font-bold">{title}</h3>
        <span className="rounded-2xl bg-cyan-300/12 p-3 text-cyan-200">
          <Icon />
        </span>
      </div>
      {children}
    </div>
  );
}

function AdminMockup({ mini = false }) {
  return (
    <div className={`${mini ? "mt-10" : ""} rounded-[26px] border border-white/10 bg-[#030711]/90 p-4`}>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-cyan-300" />
          <span className="h-3 w-3 rounded-full bg-violet-400" />
          <span className="h-3 w-3 rounded-full bg-signal" />
        </div>
        <span className="text-xs text-white/40">Admin OS</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-[0.7fr_1.3fr]">
        <div className="space-y-2">
          {["Leads", "CRM", "Campaigns", "Reports"].map((item, index) => (
            <div key={item} className={`rounded-2xl px-3 py-2 text-xs ${index === 1 ? "bg-cyan-300 text-ink" : "bg-white/8 text-white/55"}`}>
              {item}
            </div>
          ))}
        </div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2">
            {[62, 84, 48].map((value) => (
              <div key={value} className="rounded-2xl bg-white/8 p-3">
                <div className="text-lg font-bold">{value}%</div>
                <div className="mt-1 h-1.5 rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-cyan-300" style={{ width: `${value}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-white/8 p-3">
            <div className="mb-3 flex justify-between text-xs text-white/45">
              <span>Revenue Pipeline</span>
              <span>$428k</span>
            </div>
            <div className="grid grid-cols-8 items-end gap-1">
              {[28, 42, 36, 58, 48, 70, 64, 82].map((height) => (
                <span key={height} className="rounded-t bg-gradient-to-t from-violet-500 to-cyan-200" style={{ height }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TradingMockup({ mini = false }) {
  return (
    <div className={`${mini ? "mt-8" : ""} rounded-[26px] border border-white/10 bg-[#030711]/90 p-4`}>
      <div className="mb-4 flex items-center justify-between">
        <span className="font-semibold text-cyan-100">Strategy Matrix</span>
        <span className="rounded-full bg-signal/10 px-2 py-1 text-xs text-signal">Auto</span>
      </div>
      <TradingChart />
    </div>
  );
}

function ExchangeMockup({ mini = false }) {
  return (
    <div className={`${mini ? "mt-12" : ""} rounded-[26px] border border-white/10 bg-[#030711]/90 p-4`}>
      <div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl bg-white/8 p-4">
          <div className="mb-4 flex justify-between text-sm">
            <span>BTC/USDT</span>
            <span className="text-signal">$108,429</span>
          </div>
          <div className="space-y-2">
            {[72, 58, 89, 46, 66].map((width, index) => (
              <div key={`${width}-${index}`} className="flex items-center gap-2">
                <span className="w-12 text-xs text-white/40">{index % 2 ? "Sell" : "Buy"}</span>
                <div className="h-2 flex-1 rounded-full bg-white/10">
                  <div
                    className={`h-full rounded-full ${index % 2 ? "bg-aurum" : "bg-signal"}`}
                    style={{ width: `${width}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl bg-white/8 p-4">
          <p className="text-sm font-semibold">Wallet</p>
          <p className="mt-3 font-display text-2xl font-bold">$684,020</p>
          <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
            <span className="rounded-2xl bg-cyan-300 px-3 py-2 text-center font-bold text-ink">Swap</span>
            <span className="rounded-2xl bg-white/10 px-3 py-2 text-center text-white/60">Stake</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SoftwareMockup({ mini = false }) {
  return (
    <div className={`${mini ? "mt-10" : ""} rounded-[26px] border border-white/10 bg-[#030711]/90 p-4`}>
      <div className="grid grid-cols-3 gap-3">
        {[FiGlobe, FiLock, FiZap].map((Icon, index) => (
          <div key={index} className="rounded-3xl bg-white/8 p-4 text-center">
            <Icon className="mx-auto text-2xl text-cyan-200" />
            <div className="mt-3 h-1.5 rounded-full bg-white/10">
              <div className="h-full rounded-full bg-cyan-300" style={{ width: `${55 + index * 18}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-3xl bg-white/8 p-4">
        <div className="flex items-center gap-3">
          <span className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-300 to-violet-400" />
          <div className="flex-1 space-y-2">
            <span className="block h-2 rounded-full bg-white/20" />
            <span className="block h-2 w-2/3 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TechnologySection() {
  return (
    <section className="section-padding relative bg-white/[0.018]">
      <SectionHeader
        eyebrow="Technologies"
        title="A modern stack for fast, secure and scalable execution."
        copy="From frontend polish to backend scale, ad systems, trading automation and blockchain infrastructure."
      />
      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-4 px-5 sm:grid-cols-3 lg:grid-cols-6 lg:px-8">
        {techStack.map((tech) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={tech.name}
              className="gsap-reveal glass-panel flex min-h-32 flex-col items-center justify-center rounded-[28px] p-5 text-center"
              whileHover={{ y: -7, rotateX: 7 }}
            >
              <Icon className="text-4xl text-cyan-200" />
              <p className="mt-4 text-sm font-semibold text-white/70">{tech.name}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % testimonials.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="section-padding">
      <SectionHeader
        eyebrow="Testimonials"
        title="Trusted by operators who care about execution quality."
      />
      <div className="mx-auto mt-14 max-w-4xl px-5 lg:px-8">
        <div className="glass-panel relative overflow-hidden rounded-[36px] p-8 md:p-12">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-400/15 blur-3xl" />
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[active].name}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.45 }}
              className="relative"
            >
              <div className="mb-6 flex gap-2 text-aurum">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar key={star} fill="currentColor" />
                ))}
              </div>
              <p className="font-display text-3xl font-bold leading-tight md:text-5xl">
                "{testimonials[active].quote}"
              </p>
              <div className="mt-8">
                <p className="font-bold">{testimonials[active].name}</p>
                <p className="text-white/50">{testimonials[active].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                aria-label={`View testimonial ${index + 1}`}
                className={`h-2 rounded-full transition-all ${active === index ? "w-10 bg-cyan-300" : "w-2 bg-white/20"}`}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection({ navigate }) {
  return (
    <section className="section-padding relative bg-white/[0.018]">
      <SectionHeader
        eyebrow="Pricing"
        title="Premium packages for different stages of growth."
        copy="Simple entry points, tailored scope and clear upgrades when your system grows."
      />
      <div className="mx-auto mt-14 grid max-w-6xl gap-5 px-5 lg:grid-cols-3 lg:px-8">
        {pricing.map((plan) => (
          <motion.article
            key={plan.name}
            className={`gsap-reveal relative rounded-[34px] border p-7 shadow-glass backdrop-blur-xl ${
              plan.featured
                ? "border-cyan-200/40 bg-cyan-300/[0.09]"
                : "border-white/10 bg-white/[0.045]"
            }`}
            whileHover={{ y: -8, scale: 1.015 }}
          >
            {plan.featured && (
              <span className="absolute right-6 top-6 rounded-full bg-cyan-300 px-3 py-1 text-xs font-bold text-ink">
                Most Popular
              </span>
            )}
            <h3 className="font-display text-3xl font-bold">{plan.name}</h3>
            <p className="mt-3 min-h-14 text-white/58">{plan.description}</p>
            <p className="mt-8 font-display text-5xl font-bold">{plan.price}</p>
            <div className="mt-8 space-y-4">
              {plan.features.map((feature) => (
                <p key={feature} className="flex items-center gap-3 text-white/68">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-signal/15 text-signal">
                    <FiCheck />
                  </span>
                  {feature}
                </p>
              ))}
            </div>
            <button className={plan.featured ? "primary-button mt-9 w-full justify-center" : "secondary-button mt-9 w-full justify-center"} onClick={() => navigate("/contact")}>
              Start Project <FiArrowUpRight />
            </button>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-padding">
      <SectionHeader eyebrow="FAQ" title="Answers before the first call." />
      <div className="mx-auto mt-12 max-w-4xl px-5 lg:px-8">
        {faqs.map((faq, index) => (
          <div key={faq.q} className="gsap-reveal border-b border-white/10">
            <button
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
              onClick={() => setOpen(open === index ? -1 : index)}
            >
              <span className="font-display text-xl font-bold">{faq.q}</span>
              <FiChevronDown className={`shrink-0 transition ${open === index ? "rotate-180 text-cyan-200" : "text-white/45"}`} />
            </button>
            <AnimatePresence>
              {open === index && (
                <motion.p
                  className="pb-6 leading-8 text-white/60"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  {faq.a}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="section-padding relative bg-white/[0.018]">
      <ContactContent />
    </section>
  );
}

function ContactContent() {
  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-0 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="gsap-reveal">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-200/70">Contact</p>
        <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-6xl">
          Build the next premium system your market remembers.
        </h2>
        <p className="mt-6 text-lg leading-8 text-white/62">
          Share your business goal, product idea or automation requirement. We will map the fastest path from concept to launch.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <ContactPill icon={FiPhone} label="+91 99999 99999" />
          <ContactPill icon={FiMail} label="hello@novaq.studio" />
          <ContactPill icon={FiMessageCircle} label="WhatsApp Consultation" />
          <ContactPill icon={FiMapPin} label="Global Delivery Studio" />
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a className="primary-button" href="https://wa.me/919999999999?text=I%20want%20a%20free%20consultation" target="_blank" rel="noreferrer">
            WhatsApp Now <FiArrowUpRight />
          </a>
          <a className="secondary-button" href="https://calendly.com/" target="_blank" rel="noreferrer">
            Calendly Booking <FiArrowRight />
          </a>
        </div>
      </div>

      <div className="gsap-reveal glass-panel rounded-[36px] p-5 md:p-8">
        <ContactForm />
      </div>
    </div>
  );
}

function ContactPill({ icon: Icon, label }) {
  return (
    <div className="glass-panel flex items-center gap-3 rounded-3xl p-4">
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-300/12 text-cyan-200">
        <Icon />
      </span>
      <span className="text-sm font-semibold text-white/70">{label}</span>
    </div>
  );
}

function ContactForm() {
  return (
    <form className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" placeholder="Your name" />
        <Field label="Email" placeholder="you@company.com" type="email" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone" placeholder="+91..." />
        <label className="block">
          <span className="text-sm font-semibold text-white/60">Project Type</span>
          <select className="form-input mt-2">
            <option>Digital Marketing</option>
            <option>Website & Software</option>
            <option>Trading Automation</option>
            <option>Crypto & Blockchain</option>
            <option>MLM Software</option>
          </select>
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-semibold text-white/60">Project Brief</span>
        <textarea className="form-input mt-2 min-h-36 resize-none" placeholder="Tell us what you want to build..." />
      </label>
      <button type="button" className="primary-button w-full justify-center">
        Send Project Request <FiArrowUpRight />
      </button>
      <div className="relative mt-5 h-52 overflow-hidden rounded-[28px] border border-white/10 bg-[#030711]">
        <div className="absolute inset-0 map-grid" />
        <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_45px_rgba(79,243,255,.9)]" />
        <div className="absolute bottom-5 left-5 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white/62 backdrop-blur-xl">
          Global remote delivery, local business focus
        </div>
      </div>
    </form>
  );
}

function Field({ label, placeholder, type = "text" }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-white/60">{label}</span>
      <input className="form-input mt-2" placeholder={placeholder} type={type} />
    </label>
  );
}

function ServicesPage({ navigate }) {
  return (
    <PageShell
      eyebrow="Services Pages"
      title="Every capability your premium digital business needs."
      copy="Choose focused execution or combine services into one complete growth and technology system."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
      <div className="mt-16 rounded-[36px] border border-cyan-200/20 bg-gradient-to-br from-cyan-300/10 via-white/[0.04] to-violet-500/10 p-8 text-center">
        <h2 className="font-display text-4xl font-bold">Need a mixed-service execution team?</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/62">
          We can combine marketing, development, trading automation and Web3 into one premium roadmap.
        </p>
        <button className="primary-button mx-auto mt-7" onClick={() => navigate("/contact")}>
          Build My Roadmap <FiArrowUpRight />
        </button>
      </div>
    </PageShell>
  );
}

function PortfolioPage({ navigate }) {
  return (
    <PageShell
      eyebrow="Portfolio"
      title="Case study concepts built to signal trust, scale and technical depth."
      copy="Explore premium UI concepts for software products, trading systems, Web3 platforms and growth engines."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {portfolio.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
      <ProductStudiosSection />
      <div className="text-center">
        <button className="primary-button mx-auto" onClick={() => navigate("/contact")}>
          Start A Similar Project <FiArrowUpRight />
        </button>
      </div>
    </PageShell>
  );
}

function AboutPage({ navigate }) {
  return (
    <PageShell
      eyebrow="About NovaQ"
      title="A modern IT, marketing, trading and blockchain company for serious growth."
      copy="We work like a strategic product partner: sharp discovery, premium design, secure engineering and measurable business outcomes."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {[
          ["IT Company", "Business websites, SaaS platforms, apps, CRM, ERP and enterprise software."],
          ["Digital Marketing Agency", "SEO, Meta Ads, Google Ads, content research, scripting and social handling."],
          ["Trading & Crypto Development", "Bots, strategies, MT5, TradingView, smart contracts, wallets and exchanges."],
        ].map(([title, copy]) => (
          <div key={title} className="glass-panel rounded-[30px] p-7">
            <h2 className="font-display text-3xl font-bold">{title}</h2>
            <p className="mt-4 leading-8 text-white/58">{copy}</p>
          </div>
        ))}
      </div>
      <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel rounded-[34px] p-8">
          <h2 className="font-display text-4xl font-bold">Mission</h2>
          <p className="mt-4 leading-8 text-white/62">
            Help ambitious companies launch premium digital systems that are beautiful, secure, high-performing and aligned with real revenue outcomes.
          </p>
          <h2 className="mt-8 font-display text-4xl font-bold">Vision</h2>
          <p className="mt-4 leading-8 text-white/62">
            Become a global execution partner for founders, agencies, financial educators, trading firms and Web3 businesses building the next generation of digital infrastructure.
          </p>
        </div>
        <div className="glass-panel rounded-[34px] p-8">
          <h2 className="font-display text-4xl font-bold">Company Statistics</h2>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl bg-white/[0.055] p-4">
                <p className="font-display text-3xl font-bold text-cyan-100">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <button className="primary-button mx-auto" onClick={() => navigate("/contact")}>
          Meet The Team <FiArrowUpRight />
        </button>
      </div>
    </PageShell>
  );
}

function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Tell us what you want to build, automate or grow."
      copy="Use the form, WhatsApp button or booking link to start with a free consultation."
    >
      <ContactContent />
    </PageShell>
  );
}

function CareersPage({ navigate }) {
  return (
    <PageShell
      eyebrow="Careers"
      title="Join a team building premium digital, trading and Web3 systems."
      copy="We look for people who care about craft, speed, clarity and commercial outcomes."
    >
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-panel rounded-[34px] p-8">
          <h2 className="font-display text-4xl font-bold">Culture</h2>
          <p className="mt-4 leading-8 text-white/62">
            Work with sharp briefs, modern stacks, premium design expectations and clients who need real business impact.
          </p>
          <div className="mt-8 grid gap-3">
            {["Remote-first collaboration", "Deep work sprints", "Premium design standards", "Growth and product thinking"].map((item) => (
              <p key={item} className="flex items-center gap-3 text-white/70">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-signal/15 text-signal">
                  <FiCheck />
                </span>
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job} className="glass-panel flex flex-col justify-between gap-4 rounded-[28px] p-5 sm:flex-row sm:items-center">
              <div>
                <h2 className="font-display text-2xl font-bold">{job}</h2>
                <p className="mt-2 text-white/50">Full-time / Contract / Remote</p>
              </div>
              <button className="secondary-button" onClick={() => navigate("/contact")}>
                Apply <FiArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

function PageShell({ eyebrow, title, copy, children }) {
  return (
    <section className="relative min-h-screen bg-radial-grid px-5 pb-24 pt-36 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-cyan-400/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-200/70">{eyebrow}</p>
          <h1 className="mt-5 font-display text-5xl font-bold leading-tight md:text-7xl">{title}</h1>
          {copy && <p className="mt-6 max-w-3xl text-lg leading-8 text-white/62">{copy}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function AnimatedCounter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const start = performance.now();
        const duration = 1300;

        const update = (time) => {
          const progress = Math.min((time - start) / duration, 1);
          setCount(Math.floor(progress * value));
          if (progress < 1) requestAnimationFrame(update);
        };

        requestAnimationFrame(update);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function Footer({ navigate }) {
  return (
    <footer className="border-t border-white/10 bg-[#01040c] px-5 py-14 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.7fr_0.7fr_0.9fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-300/30 bg-white/10 shadow-glow">
              <span className="h-4 w-4 rounded-full bg-gradient-to-br from-cyan-200 via-blue-400 to-violet-400" />
            </span>
            <span className="font-display text-xl font-bold">NOVAQ</span>
          </div>
          <p className="mt-5 max-w-sm leading-8 text-white/55">
            Premium IT, digital marketing, trading software and blockchain solutions for ambitious companies.
          </p>
        </div>
        <FooterColumn title="Quick Links" items={navLinks.map((link) => link.label)} onClick={(label) => navigate(navLinks.find((link) => link.label === label)?.path || "/")} />
        <FooterColumn title="Services" items={services.map((service) => service.title)} onClick={() => navigate("/services")} />
        <div>
          <h3 className="font-display text-lg font-bold">Newsletter</h3>
          <p className="mt-4 text-sm leading-6 text-white/50">Get premium insights on growth, trading automation and Web3 products.</p>
          <div className="mt-5 flex overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
            <input className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/30" placeholder="Email address" />
            <button className="bg-cyan-300 px-4 font-bold text-ink">Join</button>
          </div>
          <div className="mt-5 flex gap-3 text-xl text-white/55">
            <FiGlobe />
            <FiMessageCircle />
            <FiMail />
            <FiPhone />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/35 md:flex-row">
        <p>Copyright 2026 NovaQ. All rights reserved.</p>
        <p>Privacy Policy | Terms | Security</p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items, onClick }) {
  return (
    <div>
      <h3 className="font-display text-lg font-bold">{title}</h3>
      <div className="mt-4 space-y-3">
        {items.slice(0, 6).map((item) => (
          <button key={item} className="block text-left text-sm text-white/50 transition hover:text-cyan-200" onClick={() => onClick(item)}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
