import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  Nfc,
  Globe2,
  HandCoins,
  Linkedin,
  Menu,
  QrCode,
  ShieldCheck,
  Store,
  UserRound,
  UsersRound,
  WalletCards,
  X,
  Youtube,
} from "lucide-react";

import paymentVisual from "@/assets/chicha-payment-visual.jpg";
import wordmarkAsset from "@/assets/chicha-wordmark-dark.png.asset.json";
import cMarkAsset from "@/assets/chicha-c-mark-dark.png.asset.json";
import tokenMarkAsset from "@/assets/chi-token-mark.png.asset.json";
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
    cta: "Get Started as User",
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
    icon: null,
    tone: "gold",
    secondary: true,
  },
] as const;

function Brand({ placement = "header" }: { placement?: "header" | "footer" }) {
  return (
    <a href="#top" className="inline-flex max-w-full items-center" aria-label="ChiCha home">
      <img
        src={wordmarkAsset.url}
        alt="ChiCha"
        className={cn("w-auto max-w-full object-contain", placement === "footer" ? "h-12 sm:h-14" : "h-11 sm:h-12")}
      />
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
          <Eyebrow>Web3 payment infrastructure</Eyebrow>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] text-foreground sm:text-6xl lg:text-7xl">
            Web3 payment infrastructure for <span className="text-gradient">stablecoin payments.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base font-medium leading-6 text-foreground sm:text-lg">
            Send it. Spend it. Get paid with it.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            ChiCha helps users, merchants, and partners use stablecoins for real payment activity through non-custodial wallet flows.
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
            <img src={cMarkAsset.url} alt="" className="absolute right-5 top-5 h-14 w-14 rounded-full opacity-90 shadow-glow sm:right-8 sm:top-8 sm:h-16 sm:w-16" />
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
      <div className={cn("flex h-11 w-11 items-center justify-center rounded-md", item.tone === "cyan" ? "bg-cyan/10 text-cyan" : item.tone === "gold" ? "bg-token/10 text-token" : "bg-primary/15 text-primary")}>{Icon ? <Icon /> : <img src={tokenMarkAsset.url} alt="$CHI" className="h-9 w-9 rounded-full object-contain" />}</div>
      <h3 className="mt-7 text-xl font-semibold text-foreground">{item.title}</h3>
      <p className="mt-3 text-base leading-7 text-muted-foreground">{item.copy}</p>
      <a href={item.href} className="mt-auto inline-flex items-center gap-2 pt-7 text-base font-medium text-foreground transition-colors group-hover:text-cyan">
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
      <div className="relative w-72 overflow-hidden rounded-2xl border border-border bg-card p-8 text-center shadow-2xl">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan/60 to-transparent" />
        <div className="mx-auto grid h-28 w-28 place-items-center rounded-full border border-primary/20 bg-background/50 shadow-glow-soft">
          <div className="relative grid h-20 w-20 place-items-center rounded-full border border-cyan/25 bg-cyan/10 text-cyan">
            <img src={cMarkAsset.url} alt="" className="h-11 w-11 rounded-full object-contain" />
            <Nfc className="absolute -right-3 h-7 w-7" aria-hidden="true" />
          </div>
        </div>
        <p className="mt-6 text-lg font-semibold text-foreground">Tap to Pay</p><p className="mt-2 text-sm text-muted-foreground">Ready for supported payments</p>
        <div className="mt-7 rounded-md border border-border/70 bg-muted p-4"><QrCode className="mx-auto h-20 w-20 text-foreground" /></div>
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
          <p className="mt-6 max-w-xl text-[1.0625rem] leading-8 text-muted-foreground">{props.copy}</p>
          <ul className="mt-8 space-y-4">{props.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-base leading-7 text-foreground"><span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary"><Check className="h-3 w-3" /></span>{bullet}</li>)}</ul>
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
        <div className="relative flex min-h-72 items-center justify-center overflow-hidden rounded-xl border border-border/60 bg-background/40">
          <div className="absolute h-52 w-52 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative rounded-full border border-primary/20 bg-card/50 p-4 shadow-glow-soft">
            <img src={tokenMarkAsset.url} alt="$CHI token" className="h-36 w-36 rounded-full object-contain opacity-95 sm:h-40 sm:w-40" />
          </div>
        </div>
        <div><Eyebrow>Token &amp; ecosystem</Eyebrow><h2 className="section-title">$CHI and ecosystem participation.</h2><p className="mt-6 max-w-2xl text-[1.0625rem] leading-8 text-muted-foreground">$CHI is designed to support ChiCha’s ecosystem by connecting users, agents, participation, access, and long-term ecosystem alignment.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">{["Learn about $CHI", "Understand ecosystem participation", "Explore access and eligibility", "Official token information only"].map((item) => <div key={item} className="flex items-center gap-3 text-base leading-7 text-muted-foreground"><img src={tokenMarkAsset.url} alt="" className="h-5 w-5 rounded-full object-contain" />{item}</div>)}</div>
          <Button variant="glass" size="lg" className="mt-9" asChild><a href="#entrances">Learn About $CHI <ArrowRight /></a></Button>
          <p className="mt-4 text-xs text-muted-foreground">Token information is subject to official terms, applicable policy, and compliance review.</p>
        </div>
      </div>
    </section>
  );
}

const entrances = [
  ["User Login", "Open your wallet", UserRound, false], ["Merchant Login", "Manage your payment activity", Building2, false], ["Partner Application", "Apply to join the network", UsersRound, false], ["Token Portal", "View official $CHI information", null, true],
] as const;

function Entrances() {
  return (
    <section id="entrances" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><Eyebrow>Account entrances</Eyebrow><h2 className="section-title">Know where you’re going? Jump straight in.</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{entrances.map(([title, copy, Icon, token]) => <a key={title} href="#" className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-lg border border-border bg-card/50 p-5 transition-all hover:border-primary/50 hover:bg-card"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-muted text-primary">{token ? <img src={tokenMarkAsset.url} alt="$CHI" className="h-8 w-8 rounded-full object-contain" /> : Icon ? <Icon /> : null}</div><div className="min-w-0"><p className="text-base font-medium leading-6 text-foreground">{title}</p><p className="mt-1 text-sm leading-5 text-muted-foreground">{copy}</p></div><ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-cyan" /></a>)}</div>
      </div>
    </section>
  );
}

function Footer() {
  const columns = { Products: ["UCard", "QRush", "Tap to Pay", "Genie"], Company: ["About", "News", "Partnerships", "Careers"], Support: ["Help Center", "Contact Us"], Legal: ["Terms", "Privacy", "Risk Disclosure"] };
  return (
    <footer id="news" className="border-t border-border bg-card/30">
       <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10"><div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]"><div><Brand placement="footer" /><p className="mt-5 max-w-xs text-base leading-7 text-muted-foreground">Stablecoin payments for a more open economy.</p><div className="mt-7 flex gap-2">{[X, Linkedin, Youtube, UsersRound].map((Icon, i) => <a key={i} href="#" aria-label={["X", "LinkedIn", "YouTube", "Discord"][i]} className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"><Icon className="h-4 w-4" /></a>)}</div></div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">{Object.entries(columns).map(([title, links]) => <div key={title}><p className="text-xs font-semibold uppercase text-foreground">{title}</p><ul className="mt-5 space-y-3">{links.map((link) => <li key={link}><a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">{link}</a></li>)}</ul></div>)}</div></div>
        <div className="mt-14 border-t border-border pt-7 text-xs text-muted-foreground">© 2026 ChiCha Technology Pte. Ltd. All rights reserved.</div></div>
    </footer>
  );
}

export function ChiChaLanding() {
  return <div className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground"><Header /><main><Hero /><Roles /><FeatureSection id="users" eyebrow="For users" title="Use stablecoins for everyday payment activity." copy="ChiCha gives users a simple way to prepare, spend, pay, and manage supported stablecoin activity through ChiCha Wallet, UCard, Tap to Pay, and Genie." bullets={["Keep supported stablecoins ready in your wallet", "Use UCard for supported spend flows", "Tap to pay with your wallet where supported", "Pay supported payment requests from your wallet", "Use Genie for safety and account assistance"]} cta="Explore User Tools" icon={WalletCards} visual="wallet" /><FeatureSection id="merchants" eyebrow="For merchants" title="Get paid in stablecoins. Online or in person." copy="ChiCha helps merchants accept supported stablecoin payments online with QRush or offline through Tap to Pay / NFC point of sale." bullets={["Online payments with QRush", "Tap to Pay / NFC point of sale", "Zero or minimal integration", "Manage payment activity"]} cta="Explore Merchant Tools" icon={Store} visual="merchant" reverse /><FeatureSection id="partners" eyebrow="For partners" title="Bring stablecoin payments to your market." copy="ChiCha partners help merchants get set up, educate their communities, and grow stablecoin payment access where it is needed most." bullets={["Merchant onboarding opportunities", "Tap to Pay adoption", "Demo education and materials", "Ecosystem participation, subject to policy"]} cta="Become a Partner" icon={UsersRound} visual="partner" note="For partners, agents, and ambassadors." /><TokenSection /><Entrances /></main><Footer /></div>;
}