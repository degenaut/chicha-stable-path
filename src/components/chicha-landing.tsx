import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  CircleDollarSign,
  Nfc,
  Globe2,
  HandCoins,
  Linkedin,
  Menu,
  QrCode,
  ShieldCheck,
  Sparkles,
  Store,
  UserRound,
  UsersRound,
  WalletCards,
  X,
  Youtube,
} from "lucide-react";

import paymentVisual from "@/assets/chicha-payment-visual.jpg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  ["Users", "#users"],
  ["Merchants", "#merchants"],
  ["Partners", "#partners"],
  ["Token", "#token"],
  ["News", "#news"],
] as const;

const roleCards = [
  {
    title: "For Users",
    copy: "Use stablecoins for supported payment activity.",
    cta: "Get Started",
    href: "#users",
    icon: UserRound,
    tone: "purple",
  },
  {
    title: "For Merchants",
    copy: "Accept stablecoin payments online or in person.",
    cta: "Start Accepting Payments",
    href: "#merchants",
    icon: Store,
    tone: "cyan",
  },
  {
    title: "For Partners",
    copy: "Help expand stablecoin payment access in your market.",
    cta: "Become a Partner",
    href: "#partners",
    icon: UsersRound,
    tone: "purple",
  },
  {
    title: "Token & Ecosystem",
    copy: "Learn how $CHI connects participation, access, and ecosystem alignment.",
    cta: "Learn About $CHI",
    href: "#token",
    icon: CircleDollarSign,
    tone: "gold",
    secondary: true,
  },
] as const;

function Brand() {
  return (
    <a href="#top" className="inline-flex items-center text-xl font-semibold tracking-normal text-foreground" aria-label="ChiCha home">
      ChiCha<span className="text-cyan">.</span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:px-8 lg:grid-cols-[auto_1fr_auto] lg:px-10">
        <Brand />
        <nav className="hidden justify-center gap-8 lg:flex" aria-label="Primary navigation">
          {navLinks.map(([label, href]) => (
            <a key={label} href={href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" asChild><a href="#entrances">Login</a></Button>
          <Button variant="hero" asChild><a href="#roles">Get Started</a></Button>
        </div>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <div className="border-t border-border bg-background px-5 py-5 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col" aria-label="Mobile navigation">
            {navLinks.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setOpen(false)} className="border-b border-border/60 py-3 text-sm text-muted-foreground">
                {label}
              </a>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-5">
              <Button variant="glass" asChild><a href="#entrances">Login</a></Button>
              <Button variant="hero" asChild><a href="#roles">Get Started</a></Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-5 text-xs font-semibold uppercase text-cyan">{children}</p>;
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[760px] overflow-hidden border-b border-border/70 pt-18">
      <div className="hero-glow absolute inset-0" />
      <div className="relative mx-auto grid min-h-[690px] max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
        <div className="z-10 max-w-3xl">
          <Eyebrow>Stablecoin payments, built for everyone</Eyebrow>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] text-foreground sm:text-6xl lg:text-7xl">
            Send it. Spend it. <span className="text-gradient">Get paid with it.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base font-medium leading-6 text-foreground sm:text-lg">
            ChiCha is Web3 payment infrastructure for stablecoin payments.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Use ChiCha to pay, get paid, and manage supported stablecoin payment activity through non-custodial wallet flows.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button variant="hero" size="lg" asChild><a href="#roles">Get Started <ArrowRight /></a></Button>
            <div className="flex flex-wrap gap-x-5 gap-y-2 sm:ml-2">
              {[["For Users", "#users"], ["For Merchants", "#merchants"], ["Become a Partner", "#partners"]].map(([label, href]) => (
                <a key={label} href={href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{label}</a>
              ))}
            </div>
          </div>
          <div className="mt-16 flex items-center gap-4 text-xs uppercase text-muted-foreground">
            <span>Non-custodial.</span><span className="h-1 w-1 rounded-full bg-primary" /><span>Wallet-native.</span><span className="h-1 w-1 rounded-full bg-cyan" /><span>Built for real payment usage.</span>
          </div>
        </div>
        <div className="relative min-h-[440px] lg:min-h-[590px]">
          <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-border/70 bg-card/30 shadow-2xl">
            <img src={paymentVisual} alt="Stablecoin wallet, payment card, and contactless payment terminal" className="h-full w-full object-cover" width={1400} height={1100} />
            <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />
          </div>
          <div className="absolute bottom-5 left-5 right-5 grid grid-cols-[minmax(0,1fr)_auto] items-center rounded-lg border border-border bg-background/70 p-4 backdrop-blur-xl sm:bottom-8 sm:left-8 sm:right-8">
            <div className="min-w-0"><p className="text-xs text-muted-foreground">Payment activity</p><p className="mt-1 truncate text-sm font-medium text-foreground">Wallet-native. Non-custodial.</p></div>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-cyan/10 text-cyan"><Nfc /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoleCard({ item }: { item: (typeof roleCards)[number] }) {
  const Icon = item.icon;
  return (
    <article className={cn("group flex min-h-72 flex-col rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7", "secondary" in item ? "border-border/70 bg-card/35 hover:border-token/40" : "border-border bg-card/65 hover:border-primary/50 hover:shadow-glow-soft")}>
      <div className={cn("flex h-11 w-11 items-center justify-center rounded-md", item.tone === "cyan" ? "bg-cyan/10 text-cyan" : item.tone === "gold" ? "bg-token/10 text-token" : "bg-primary/15 text-primary")}><Icon /></div>
      <h3 className="mt-7 text-xl font-semibold text-foreground">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.copy}</p>
      <a href={item.href} className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-medium text-foreground transition-colors group-hover:text-cyan">
        {item.cta}<ChevronRight className="h-4 w-4" />
      </a>
    </article>
  );
}

function Roles() {
  return (
    <section id="roles" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Eyebrow>Choose your role</Eyebrow>
        <h2 className="section-title">Where do you fit?</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{roleCards.map((item) => <RoleCard key={item.title} item={item} />)}</div>
      </div>
    </section>
  );
}

type FeatureProps = {
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
  bullets: string[];
  cta: string;
  icon: LucideIcon;
  visual: "wallet" | "merchant" | "partner";
  reverse?: boolean;
  note?: string;
};

function ProductVisual({ visual }: { visual: FeatureProps["visual"] }) {
  if (visual === "wallet") return (
    <div className="visual-stage">
      <div className="phone-shell">
        <div className="flex items-center justify-between text-xs text-muted-foreground"><span>ChiCha Wallet</span><ShieldCheck className="h-4 w-4 text-cyan" /></div>
        <p className="mt-10 text-xs text-muted-foreground">Available balance</p><p className="mt-2 text-3xl font-semibold text-foreground">2,480.00</p>
        <div className="mt-9 grid grid-cols-3 gap-2">{[WalletCards, QrCode, Nfc].map((Icon, i) => <div key={i} className="flex h-12 items-center justify-center rounded-md bg-muted text-primary"><Icon className="h-5 w-5" /></div>)}</div>
        <div className="mt-8 space-y-3">{["UCard activity", "Tap to Pay"].map((text) => <div key={text} className="flex items-center justify-between rounded-md border border-border p-3 text-xs text-muted-foreground"><span>{text}</span><span className="text-cyan">Ready</span></div>)}</div>
      </div>
      <div className="absolute bottom-10 right-3 w-48 rotate-6 rounded-xl border border-border bg-primary-dark p-5 shadow-2xl sm:right-10"><p className="text-sm font-semibold text-foreground">ChiCha UCard</p><Nfc className="mt-8 text-cyan" /><p className="mt-8 text-xs text-muted-foreground">•••• 2046</p></div>
    </div>
  );
  if (visual === "merchant") return (
    <div className="visual-stage items-center justify-center">
      <div className="relative w-72 rounded-2xl border border-border bg-card p-8 text-center shadow-2xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan/10 text-cyan"><Nfc className="h-8 w-8" /></div>
        <p className="mt-6 text-lg font-semibold text-foreground">Tap to Pay</p><p className="mt-2 text-sm text-muted-foreground">Ready for supported payments</p>
        <div className="mt-7 rounded-md bg-muted p-4"><QrCode className="mx-auto h-20 w-20 text-foreground" /></div>
      </div>
    </div>
  );
  return (
    <div className="visual-stage items-center justify-center">
      <div className="relative grid h-72 w-72 place-items-center rounded-full border border-primary/20">
        <div className="grid h-36 w-36 place-items-center rounded-full border border-cyan/30 bg-card text-cyan shadow-glow-soft"><Globe2 className="h-12 w-12" /></div>
        {[UserRound, Store, HandCoins].map((Icon, i) => <div key={i} className={cn("absolute flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card text-primary shadow-xl", i === 0 ? "left-2 top-8" : i === 1 ? "right-0 top-20" : "bottom-0 left-20")}><Icon /></div>)}
      </div>
    </div>
  );
}

function FeatureSection(props: FeatureProps) {
  const Icon = props.icon;
  return (
    <section id={props.id} className="section-shell border-t border-border/60">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24 lg:px-10">
        <div className={cn(props.reverse && "lg:order-2")}>
          <Eyebrow>{props.eyebrow}</Eyebrow><h2 className="section-title">{props.title}</h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">{props.copy}</p>
          <ul className="mt-8 space-y-4">{props.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-sm text-foreground"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary"><Check className="h-3 w-3" /></span>{bullet}</li>)}</ul>
          <Button variant="glass" size="lg" className="mt-9" asChild><a href="#entrances"><Icon />{props.cta}</a></Button>
          {props.note && <p className="mt-4 text-xs text-muted-foreground">{props.note}</p>}
        </div>
        <div className={cn(props.reverse && "lg:order-1")}><ProductVisual visual={props.visual} /></div>
      </div>
    </section>
  );
}

function TokenSection() {
  return (
    <section id="token" className="section-shell border-y border-border/60 bg-card/20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-10">
        <div className="flex min-h-72 items-center justify-center rounded-xl border border-border/60 bg-background/40">
          <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-token/25 text-3xl font-semibold text-token">
            $CHI<div className="absolute inset-4 rounded-full border border-primary/20" />
          </div>
        </div>
        <div><Eyebrow>Token &amp; ecosystem</Eyebrow><h2 className="section-title">$CHI and ecosystem participation.</h2><p className="mt-6 max-w-2xl leading-7 text-muted-foreground">$CHI is designed to support the ChiCha ecosystem by connecting users, merchants, partners, agents, access, participation, and long-term ecosystem alignment.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">{["Learn how $CHI works", "Understand ecosystem participation", "Explore access and eligibility", "View official token information"].map((item) => <div key={item} className="flex items-center gap-3 text-sm text-muted-foreground"><Sparkles className="h-4 w-4 text-token" />{item}</div>)}</div>
          <Button variant="glass" size="lg" className="mt-9" asChild><a href="#entrances">Learn About $CHI <ArrowRight /></a></Button>
          <p className="mt-4 text-xs text-muted-foreground">Token information is subject to official terms, applicable policy, and compliance review.</p>
        </div>
      </div>
    </section>
  );
}

const entrances = [
  ["User Login", "Access your ChiCha wallet", UserRound], ["Merchant Login", "Manage your payment activity", Building2], ["Partner Application", "Apply to join the network", UsersRound], ["Token Portal", "View official $CHI information", CircleDollarSign],
] as const;

function Entrances() {
  return (
    <section id="entrances" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><Eyebrow>Account entrances</Eyebrow><h2 className="section-title">Know where you're going? Jump straight in.</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{entrances.map(([title, copy, Icon]) => <a key={title} href="#" className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-lg border border-border bg-card/50 p-5 transition-all hover:border-primary/50 hover:bg-card"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-muted text-primary"><Icon /></div><div className="min-w-0"><p className="truncate text-sm font-medium text-foreground">{title}</p><p className="mt-1 truncate text-xs text-muted-foreground">{copy}</p></div><ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-cyan" /></a>)}</div>
      </div>
    </section>
  );
}

function Footer() {
  const columns = { Product: ["UCard", "QRush", "Tap to Pay", "Genie"], Company: ["About", "News", "Partnerships", "Careers"], Support: ["Help Center", "Contact Us"], Legal: ["Terms", "Privacy", "Risk Disclosure"] };
  return (
    <footer id="news" className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10"><div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]"><div><Brand /><p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">Send it. Spend it. Get paid with it.</p><div className="mt-7 flex gap-2">{[X, Linkedin, Youtube, UsersRound].map((Icon, i) => <a key={i} href="#" aria-label={["X", "LinkedIn", "YouTube", "Discord"][i]} className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"><Icon className="h-4 w-4" /></a>)}</div></div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">{Object.entries(columns).map(([title, links]) => <div key={title}><p className="text-xs font-semibold uppercase text-foreground">{title}</p><ul className="mt-5 space-y-3">{links.map((link) => <li key={link}><a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">{link}</a></li>)}</ul></div>)}</div></div>
        <div className="mt-14 border-t border-border pt-7 text-xs text-muted-foreground">© 2026 ChiCha Technology Pte. Ltd. All rights reserved.</div></div>
    </footer>
  );
}

export function ChiChaLanding() {
  return <div className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground"><Header /><main><Hero /><Roles /><FeatureSection id="users" eyebrow="For users" title="Your money. Your wallet. Your control." copy="ChiCha gives you a simple way to hold, spend, and pay with supported stablecoin activity without giving anyone else control of your funds." bullets={["Keep supported stablecoins ready in your wallet", "Use UCard for supported spend flows", "Tap to pay in person with your phone or wallet where supported", "Pay supported payment requests from your wallet", "Use Genie for safety and account assistance"]} cta="Open Your Wallet" icon={WalletCards} visual="wallet" /><FeatureSection id="merchants" eyebrow="For merchants" title="Get paid in stablecoins. Online or in person." copy="ChiCha lets merchants accept supported stablecoin payments through QRush, payment links, QR codes, or Tap to Pay where available." bullets={["Create payment links with QRush Lite", "Integrate QRush into your platform or checkout", "Accept in-person payments with Tap to Pay where supported", "Payments are designed to settle to the merchant's wallet without ChiCha taking custody"]} cta="Start Getting Paid" icon={Store} visual="merchant" reverse /><FeatureSection id="partners" eyebrow="For partners" title="Bring stablecoin payments to your market." copy="ChiCha partners help merchants get set up, educate their communities, and grow payment access where it is needed most." bullets={["Onboard merchants in your area", "Help businesses set up Tap to Pay", "Access training materials and demos", "Grow with the ecosystem, subject to applicable policy"]} cta="Become a Partner" icon={UsersRound} visual="partner" note="For agents, ambassadors, and ecosystem partners. Participation is subject to applicable policy." /><TokenSection /><Entrances /></main><Footer /></div>;
}