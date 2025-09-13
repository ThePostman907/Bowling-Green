import React, { useEffect, useState } from "react";
import YAML from "yaml";
import copySrc from "./copy.yaml?raw";

const copy = YAML.parse(copySrc);

// Revised single-file React demo app per latest direction:
// - Drop Good Government and Transportation & Streets
// - Add Hospital & Medicaid Stability and Community Resilience
// - Shift Housing plan to focus on VACANT single-family homes, land bank, and 30-year affordability covenants
// - ADUs welcomed but NOT the priority
// - Bilingual toggle (EN/ES)
// - TailwindCSS-first styling (available in Canvas)
// - FIX: remove runtime <style> injection to avoid parser errors; use Tailwind classes instead

export default function CampaignDemoAppRevised() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [plansOpen, setPlansOpen] = useState(false);
  const [lang, setLang] = useState("en");

  const t = (path) => {
    const parts = path.split(".");
    let cur = copy[lang] || {};
    let fallback = copy.en;
    for (const p of parts) {
      cur = cur?.[p];
      fallback = fallback?.[p];
    }
    return cur ?? fallback ?? "";
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setPlansOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest("a[href^='#']");
      if (!a) return;
      const id = a.getAttribute("href");
      if (id && id.length > 1) {
        const el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          history.pushState(null, "", id);
          setMobileOpen(false);
        }
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const ACTBLUE_LINK = "https://secure.actblue.com/donate/demo";
  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSf-demo/viewform";

  return (
    <div className="min-h-screen bg-emerald-50 text-emerald-950">
      <Header
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        plansOpen={plansOpen}
        setPlansOpen={setPlansOpen}
        lang={lang}
        setLang={setLang}
        t={t}
        ACTBLUE_LINK={ACTBLUE_LINK}
      />

      <Hero t={t} ACTBLUE_LINK={ACTBLUE_LINK} />
      <About t={t} />

      {/* Plans (no Good Government, no Transportation & Streets) */}
      <PlanHousing t={t} />
      <PlanSafety t={t} />
      <PlanSimple
        t={t}
        id="jobs"
        titleKey="jobs.title"
        summaryKey="jobs.summary"
        bullets={["jobs.a1", "jobs.a2", "jobs.a3"]}
      />
      <PlanSimple
        t={t}
        id="energy"
        titleKey="energy.title"
        summaryKey="energy.summary"
        bullets={["energy.a1", "energy.a2", "energy.a3"]}
      />
      <PlanHospital t={t} />
      <PlanResilience t={t} />

      <Endorsements t={t} />
      <Receipts t={t} />
      <GetInvolved
        t={t}
        ACTBLUE_LINK={ACTBLUE_LINK}
        GOOGLE_FORM_URL={GOOGLE_FORM_URL}
      />
      <Newsroom t={t} />
      <Footer t={t} ACTBLUE_LINK={ACTBLUE_LINK} />

        <DevTests t={t} />
    </div>
  );
}

function Header({
  mobileOpen,
  setMobileOpen,
  plansOpen,
  setPlansOpen,
  lang,
  setLang,
  t,
  ACTBLUE_LINK,
}) {
  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-emerald-900/10">
      <div className="max-w-[1100px] mx-auto px-5 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2 font-extrabold text-emerald-800"
        >
          <span className="inline-flex w-7 h-7 rounded-full bg-emerald-700 items-center justify-center">
            <svg viewBox="0 0 48 48" className="w-5 h-5" aria-hidden>
              <circle cx="24" cy="24" r="23" fill="rgb(20,89,75)" />
              <path
                d="M10 26l7 7 21-21"
                fill="none"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
            <span>{copy.branding.campaignName}</span>
        </a>
        <button
          className="lg:hidden text-2xl"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          ☰
        </button>
        <nav
          className={`${
            mobileOpen
              ? "fixed inset-x-0 top-16 bottom-0 bg-white p-5 overflow-y-auto"
              : "hidden"
          } lg:block`}
          aria-label="Primary"
        >
          <ul className="flex flex-col lg:flex-row gap-3 lg:gap-4 items-start lg:items-center">
            <li>
              <a href="#home">{t("nav.home")}</a>
            </li>
            <li>
              <a href="#about">{t("nav.meet")}</a>
            </li>
            <li className="relative">
              <button
                className="font-extrabold"
                aria-expanded={plansOpen}
                onClick={() => setPlansOpen((v) => !v)}
              >
                {t("nav.vision")}
              </button>
              <ul
                className={`${
                  plansOpen ? "block" : "hidden"
                } lg:absolute lg:top-full lg:left-0 min-w-64 bg-white border rounded-xl shadow-lg p-2 space-y-1 lg:z-50`}
              >
                <li>
                  <a href="#housing">
                    {t("plans.housing")}
                  </a>
                </li>
                <li>
                  <a href="#safety">
                    {t("plans.safety")}
                  </a>
                </li>
                <li>
                  <a href="#jobs">{t("plans.jobs")}</a>
                </li>
                <li>
                  <a href="#energy">
                    {t("plans.energy")}
                  </a>
                </li>
                <li>
                  <a href="#hospital">
                    {t("plans.hospital")}
                  </a>
                </li>
                <li>
                  <a href="#resilience">
                    {t("plans.resilience")}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#endorse">{t("nav.endorse")}</a>
            </li>
            <li>
              <a href="#receipts">{t("nav.receipts")}</a>
            </li>
            <li>
              <a href="#involved">{t("nav.getinvolved")}</a>
            </li>
            <li>
              <a href="#news">{t("nav.newsroom")}</a>
            </li>
            <li>
              <button
                className="font-extrabold"
                aria-pressed={lang === "es"}
                onClick={() => setLang((l) => (l === "en" ? "es" : "en"))}
              >
                {copy.langNames[lang === "es" ? "en" : "es"]}
              </button>
            </li>
            <li>
              <a
                className="inline-flex items-center font-extrabold bg-emerald-700 text-white px-3 py-2 rounded-lg"
                href={ACTBLUE_LINK}
                target="_blank"
                rel="noreferrer noopener"
              >
                {t("nav.donate")}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Hero({ t, ACTBLUE_LINK }) {
  return (
    <section id="home" className="bg-white border-b">
      <div className="max-w-[1100px] mx-auto px-5 py-16">
        <h1 className="font-serif text-4xl md:text-5xl leading-tight text-emerald-900">
          {t("hero.title")}
        </h1>
        <p className="mt-3 text-lg text-emerald-900/80 max-w-2xl">
          {t("hero.subtitle")}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            className="inline-flex items-center font-extrabold bg-emerald-700 text-white px-4 py-2 rounded-lg"
            href={ACTBLUE_LINK}
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("hero.donate")}
          </a>
          <a
            className="inline-flex items-center font-extrabold bg-white border px-4 py-2 rounded-lg"
            href="#involved"
          >
            {t("hero.volunteer")}
          </a>
          <a
            className="inline-flex items-center font-extrabold bg-white border px-4 py-2 rounded-lg"
            href="#housing"
          >
            {t("hero.read")}
          </a>
        </div>
      </div>
    </section>
  );
}

function H2({ children }) {
  return (
    <h2 className="font-serif text-[1.85rem] leading-tight text-emerald-900">
      {children}
    </h2>
  );
}

function About({ t }) {
  const bullets = t("about.bullets") || [];
  const served = t("about.servedBullets") || [];
  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-7 items-start">
        <div className="order-2 md:order-1">
          <H2>{t("about.title")}</H2>
          <blockquote className="mt-3 border-l-4 border-emerald-300 pl-4 italic text-emerald-900/90">
            <p>{t("about.quote")}</p>
          </blockquote>
          <h3 className="font-semibold mt-6">{t("about.runningTitle")}</h3>
          <p className="mt-2">{t("about.p1")}</p>
          <p
            className="mt-2"
            dangerouslySetInnerHTML={{ __html: t("about.p2") }}
          />
          <ul className="list-disc ml-6 mt-2 space-y-1">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          <h3 className="font-semibold mt-6">{t("about.leadTitle")}</h3>
          <p className="mt-2">{t("about.p3")}</p>
          <p className="mt-2">{t("about.p4")}</p>
          <p className="mt-2">{t("about.p5")}</p>
          <h4 className="font-semibold mt-4">{t("about.servedTitle")}</h4>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            {served.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
          <p className="mt-4">{t("about.p6")}</p>
          <h4 className="font-semibold mt-4">{t("about.finalTitle")}</h4>
          <p className="mt-2">{t("about.p7")}</p>
        </div>
        <div className="order-1 md:order-2">
          <figure className="relative">
            <div className="aspect-[4/5] w-full rounded-2xl bg-emerald-100 border-2 border-dashed border-emerald-300 flex items-center justify-center text-emerald-700">
              <div className="text-center p-4">
                <div className="font-semibold">{t("about.placeholderHeading")}</div>
                <div className="text-xs opacity-70">{t("about.placeholderNote")}</div>
              </div>
            </div>
            <figcaption className="sr-only">{t("about.placeholderCaption")}</figcaption>
          </figure>
        </div>
      </div>
    </Section>
  );
}

function PlanHousing({ t }) {
  return (
    <Section id="housing">
      <H2>{t("housing.title")}</H2>
      <p className="text-lg text-emerald-900/90">
        {t("housing.summary")}
      </p>
      <div className="grid md:grid-cols-3 gap-4 mt-5">
        <Card
          title={t("housing.p1h")}
          body={t("housing.p1")}
        />
        <Card
          title={t("housing.p2h")}
          body={t("housing.p2")}
        />
        <Card
          title={t("housing.p3h")}
          body={t("housing.p3")}
        />
      </div>
      <details className="mt-4">
        <summary className="cursor-pointer font-semibold">
          {t("housing.actionsH")}
        </summary>
        <ul className="list-disc ml-6 mt-2 text-slate-700 space-y-1">
          <li>
            {t("housing.a1")}
          </li>
          <li>{t("housing.a2")}</li>
          <li>
            {t("housing.a3")}
          </li>
        </ul>
      </details>
    </Section>
  );
}

function PlanSafety({ t }) {
  return (
    <Section id="safety">
      <H2>{t("safety.title")}</H2>
      <p className="text-lg text-emerald-900/90">
        {t("safety.summary")}
      </p>
      <div className="grid md:grid-cols-3 gap-4 mt-5">
        <Card
          title={t("safety.p1h")}
          body={t("safety.p1")}
        />
        <Card
          title={t("safety.p2h")}
          body={t("safety.p2")}
        />
        <Card
          title={t("safety.p3h")}
          body={t("safety.p3")}
        />
      </div>
    </Section>
  );
}

function PlanHospital({ t }) {
  return (
    <Section id="hospital">
      <H2>{t("hospital.title")}</H2>
      <p className="text-lg text-emerald-900/90">
        {t("hospital.summary")}
      </p>
      <div className="grid md:grid-cols-3 gap-4 mt-5">
        <Card
          title={t("hospital.p1h")}
          body={t("hospital.p1")}
        />
        <Card
          title={t("hospital.p2h")}
          body={t("hospital.p2")}
        />
        <Card
          title={t("hospital.p3h")}
          body={t("hospital.p3")}
        />
      </div>
      <details className="mt-4">
        <summary className="cursor-pointer font-semibold">
          {t("hospital.actionsH")}
        </summary>
        <ul className="list-disc ml-6 mt-2 text-slate-700 space-y-1">
          <li>
            {t("hospital.a1")}
          </li>
          <li>
            {t("hospital.a2")}
          </li>
          <li>
            {t("hospital.a3")}
          </li>
        </ul>
      </details>
    </Section>
  );
}

function PlanResilience({ t }) {
  return (
    <Section id="resilience">
      <H2>{t("resilience.title")}</H2>
      <p className="text-lg text-emerald-900/90">
        {t("resilience.summary")}
      </p>
      <div className="grid md:grid-cols-3 gap-4 mt-5">
        <Card
          title={t("resilience.p1h")}
          body={t("resilience.p1")}
        />
        <Card
          title={t("resilience.p2h")}
          body={t("resilience.p2")}
        />
        <Card
          title={t("resilience.p3h")}
          body={t("resilience.p3")}
        />
      </div>
      <details className="mt-4">
        <summary className="cursor-pointer font-semibold">
          {t("resilience.actionsH")}
        </summary>
        <ul className="list-disc ml-6 mt-2 text-slate-700 space-y-1">
          <li>
            {t("resilience.a1")}
          </li>
          <li>
            {t("resilience.a2")}
          </li>
          <li>
            {t("resilience.a3")}
          </li>
        </ul>
      </details>
    </Section>
  );
}

function PlanSimple({ t, id, titleKey, summaryKey, bullets }) {
  return (
    <Section id={id}>
      <H2>{t(titleKey)}</H2>
      <p className="text-lg text-emerald-900/90">{t(summaryKey)}</p>
      <ul className="list-disc ml-6 mt-3 text-slate-700 space-y-1">
        {bullets.map((b) => (
          <li key={b}>{t(b)}</li>
        ))}
      </ul>
    </Section>
  );
}

function Endorsements({ t }) {
  return (
    <Section id="endorse">
      <H2>{t("endorse.title")}</H2>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {[
          {
            img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2d?q=80&w=300",
            label: "Union A",
          },
          {
            img: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=300",
            label: "Community Org B",
          },
          {
            img: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=300",
            label: "Councilmember C",
          },
        ].map((e, i) => (
          <li
            key={i}
            className="bg-white border rounded-xl shadow p-4 flex items-center gap-3"
          >
            <img src={e.img} alt="" className="w-10 h-10 rounded" />
            <span>{e.label}</span>
          </li>
        ))}
      </ul>
      <p className="text-slate-600 text-sm mt-2">
        {t("endorse.note")}
      </p>
    </Section>
  );
}

function Receipts({ t }) {
  return (
    <Section id="receipts">
      <H2>{t("receipts.title")}</H2>
      <ol className="border-l-4 border-emerald-100 pl-4 space-y-6 mt-4">
        <li>
          <div className="text-xs inline-block bg-emerald-50 rounded-full px-2 py-0.5">
            2024
          </div>
          <div className="mt-1 font-semibold">
            {t("receipts.r1h")}
          </div>
          <p className="text-slate-700">
            {t("receipts.r1")}
          </p>
        </li>
        <li>
          <div className="text-xs inline-block bg-emerald-50 rounded-full px-2 py-0.5">
            2023
          </div>
          <div className="mt-1 font-semibold">
            {t("receipts.r2h")}
          </div>
          <p className="text-slate-700">
            {t("receipts.r2")}
          </p>
        </li>
      </ol>
    </Section>
  );
}

function GetInvolved({ t, ACTBLUE_LINK, GOOGLE_FORM_URL }) {
  return (
    <Section id="involved">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <H2>{t("involved.title")}</H2>
          <p>{t("involved.p1")}</p>
          <ul className="mt-3 space-y-2">
            <li>• {t("involved.b1")}</li>
            <li>• {t("involved.b2")}</li>
            <li>• {t("involved.b3")}</li>
          </ul>
          <a
            className="inline-flex items-center mt-4 font-extrabold bg-emerald-700 text-white px-4 py-2 rounded-lg"
            href={ACTBLUE_LINK}
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("involved.cta")}
          </a>
        </div>
        <div className="bg-white border rounded-xl shadow p-4">
          <h3 className="font-bold">
            {t("involved.formH")}
          </h3>
          <p className="text-sm text-slate-600">
            {t("involved.formP")}
          </p>
          <p className="mt-1">
            <a
              className="underline"
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noreferrer noopener"
            >
              {t("involved.direct")}
            </a>
          </p>
          <iframe
            title="Volunteer Form"
            src={GOOGLE_FORM_URL}
            className="w-full h-[420px] rounded"
          />
        </div>
      </div>
    </Section>
  );
}

function Newsroom({ t }) {
  return (
    <Section id="news">
      <H2>{t("newsroom.title")}</H2>
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <article className="bg-white border rounded-xl shadow p-4">
          <h3 className="font-semibold">
            <a href="#">
              {t("newsroom.n1h")}
            </a>
          </h3>
          <time className="text-sm text-slate-600">Sept 1, 2025</time>
          <p className="mt-1 text-slate-700">
            {t("newsroom.n1")}
          </p>
        </article>
        <article className="bg-white border rounded-xl shadow p-4">
          <h3 className="font-semibold">
            <a href="#">
              {t("newsroom.n2h")}
            </a>
          </h3>
          <time className="text-sm text-slate-600">Sept 7, 2025</time>
          <p className="mt-1 text-slate-700">
            {t("newsroom.n2")}
          </p>
        </article>
      </div>
      <a
        href="#"
        className="inline-flex items-center mt-4 font-bold border px-4 py-2 rounded-lg"
      >
        {t("newsroom.presskit")}
      </a>
    </Section>
  );
}

function Footer({ t, ACTBLUE_LINK }) {
  return (
    <footer className="bg-emerald-950 text-emerald-100 mt-12 relative">
      <div className="max-w-[1100px] mx-auto px-5 py-8 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-bold text-lg">{t("footer.heading")}</h4>
          <address className="not-italic text-emerald-200">
            {t("footer.address")}
            <br />
            <a className="underline" href={`mailto:${t("footer.email")}`}>
              {t("footer.email")}
            </a>
          </address>
          <p className="text-emerald-300 text-sm mt-1">
            {t("footer.paid")}
          </p>
        </div>
        <nav>
          <ul className="space-y-1">
            <li>
              <a href="#about">{t("nav.meet")}</a>
            </li>
            <li>
              <a href="#housing">{t("nav.vision")}</a>
            </li>
            <li>
              <a href="#endorse">{t("nav.endorse")}</a>
            </li>
            <li>
              <a href="#receipts">{t("nav.receipts")}</a>
            </li>
            <li>
              <a href="#involved">{t("nav.getinvolved")}</a>
            </li>
            <li>
              <a
                href={ACTBLUE_LINK}
                target="_blank"
                rel="noreferrer noopener"
              >
                {t("nav.donate")}
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <div className="flex gap-3">
            <a href="#" className="underline">
              {t("footer.links.facebook")}
            </a>
            <a href="#" className="underline">
              {t("footer.links.instagram")}
            </a>
            <a href="#" className="underline">
              {t("footer.links.youtube")}
            </a>
          </div>
        </div>
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute right-4 bottom-4 bg-white text-emerald-950 rounded-full w-10 h-10 shadow"
        aria-label={t("footer.back")}
      >
        ↑
      </button>
    </footer>
  );
}

function Section({ id, children }) {
  return (
    <section id={id} className="py-12">
      <div className="max-w-[1100px] mx-auto px-5">{children}</div>
    </section>
  );
}

function Card({ title, body }) {
  return (
    <div className="bg-white border rounded-xl shadow p-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-slate-700 mt-1">{body}</p>
    </div>
  );
}

// Dev smoke tests (non-intrusive)
function DevTests({ t }) {
  useEffect(() => {
    try {
      console.assert(
        document.querySelector('#about') !== null,
        'Test: #about section should exist'
      );
      const text = document.body.textContent || '';
      console.assert(
        text.includes(t('about.quote')),
        'Test: About quote should be present'
      );
    } catch (e) {
      // no-op
    }
  }, [t]);
  return null;
}

