import React, { useEffect, useMemo, useState } from "react";

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

  const dict = useMemo(
    () => ({
      es: {
        nav: {
          home: "Inicio",
          meet: "Conoce a Eric",
          vision: "Visión y Planes",
          endorse: "Apoyos",
          receipts: "Resultados",
          getinvolved: "Participa",
          newsroom: "Sala de prensa",
          donate: "Donar",
        },
        plans: {
          housing: "Vivienda y Personas sin Hogar",
          safety: "Seguridad Pública y Salud Conductual",
          jobs: "Empleo Local y Pequeños Negocios",
          energy: "Energía Limpia y Resiliencia",
          hospital: "Estabilidad del Hospital y Medicaid",
          resilience: "Resiliencia Comunitaria",
        },
        hero: {
          title: "Un Concejo que pone primero a las familias de Trinidad.",
          subtitle:
            "Hogar asequible. Presupuestos honestos. Calles más seguras con cuidados.",
          donate: "Aporta",
          volunteer: "Ser voluntario",
          read: "Lee el plan",
        },
        meet: {
          title: "Conoce a Eric",
          p1: "Soy vecino, educador y organizador. Enseño servicios humanos a hombres encarcelados, apoyo a nuestros vecinos sin vivienda y aparezco donde está el trabajo, no solo donde hay cámaras.",
          p2: "Trinidad puede elegir una ciudad con compasión y sentido común: vivienda que mantiene unidas a las familias, cuidados que llegan a tiempo y un presupuesto que dice la verdad.",
          b1: "Presupuestos transparentes y reportes en lenguaje claro.",
          b2: "Modelo de vivienda primero con apoyos integrales.",
          b3: "Empleo local, impulso a pequeños negocios y reglas justas.",
          caption: '"El gobierno debe sentirse como un buen vecino."',
        },
        housing: {
          title: "Vivienda y Personas sin Hogar",
          summary:
            "Estabilizaremos a las familias, evitaremos desplazamientos y uniremos refugio con servicios para sanar y reconstruir.",
          p1h: "Viviendas Vacantes Primero",
          p1: "Enfocar en volver habitables las viviendas unifamiliares vacantes: registro de viviendas desocupadas, programa de rehabilitación para ocupación y un pequeño banco de tierras con convenios de asequibilidad de 30 años; las ADUs son bienvenidas pero no la prioridad.",
          p2h: "Rutas de Apoyo",
          p2: "Refugio de baja barrera con gestión de casos y tratamiento; convertir moteles poco usados en vivienda con servicios.",
          p3h: "Protecciones a Inquilinos",
          p3: "Registro de alquileres, estándares de causa justa y mediación; ayuda de emergencia para renta y servicios.",
          actionsH: "Acciones concretas (primeros 180 días)",
          a1: "Programa de rehabilitación y ocupación de viviendas vacantes: pequeños apoyos/dispensas de tasas para reparaciones de código, a cambio de convenios de asequibilidad por 30 años.",
          a2: "Reunión semanal de Entrada Coordinada con tablero público.",
          a3: "Mediación propietario–inquilino y navegación de asistencia; resultados mensuales.",
        },
        safety: {
          title: "Seguridad Pública y Salud Conductual",
          summary:
            "La seguridad real requiere tratamiento, desescalada y respondedores de confianza.",
          p1h: "Equipos CARE",
          p1: "Piloto de co-respuesta clínico–EMT para llamadas de salud conductual.",
          p2h: "Recuperación",
          p2: "Más tratamiento y apoyo de pares; desvío en juzgado municipal con gestores de casos.",
          p3h: "Prevención",
          p3: "Mejor alumbrado, Rutas Seguras a la Escuela y calmado de tráfico.",
        },
        jobs: {
          title: "Empleo Local y Pequeños Negocios",
          summary: "Mantener el dinero en casa, simplificar trámites y ayudar a contratar.",
          a1: "Ventanilla única y concierge de permisos.",
          a2: "Metas de compras públicas locales y ferias de proveedores.",
          a3: "Aprendizajes juveniles ligados a obras municipales.",
        },
        energy: {
          title: "Energía Limpia y Resiliencia",
          summary: "Facturas más bajas, aire limpio y una red que se recupera.",
          a1: "Solar con baterías en edificios públicos y suscripciones comunitarias para hogares de bajos ingresos.",
          a2: "Climatización y bombas de calor para personas mayores.",
          a3: "Centros de resiliencia vecinal con energía de respaldo.",
        },
        hospital: {
          title: "Estabilidad del Hospital y Medicaid",
          summary:
            "Una ciudad sana necesita un hospital sano. Defenderemos Medicaid, protegeremos servicios esenciales y mantendremos la atención cerca.",
          p1h: "Defender la Red de Seguridad",
          p1: "Apoyar a pacientes y proveedores para evitar recortes que cargan a las familias y ponen en riesgo a los hospitales.",
          p2h: "Atención Cerca de Casa",
          p2: "Estabilizar servicios clave con alianzas, reembolsos justos y contratos transparentes.",
          p3h: "Personal y Acceso",
          p3: "Reclutar y retener clínicos; mejorar transporte a citas; ampliar ayuda de inscripción.",
          actionsH: "Acciones concretas (primeros 180 días)",
          a1: "Resolución del Concejo contra recortes dañinos; Grupo de Estabilidad del Hospital.",
          a2: "Acompañamiento en inscripciones/renovaciones de Medicaid/CHIP y tablero de acceso.",
          a3: "Ruta de formación para enfermería/salud mental; mejoras en traslados no urgentes.",
        },
        resilience: {
          title: "Resiliencia Comunitaria",
          summary:
            "Bajemos costos, cultivemos alimentos y preparemos juntos—para mantener a las familias firmes.",
          p1h: "Huertos en Casa y Seguridad Alimentaria",
          p1: "Biblioteca de semillas, talleres estacionales y huertos; parcelas comunitarias y préstamo de herramientas.",
          p2h: "Solar en Casa y Eficiencia",
          p2: "Cooperativa solar para precios por volumen; auditorías energéticas y climatización.",
          p3h: "Cooperativa de Alimentos y Preparación",
          p3: "Compras al mayoreo, planificación de despensas y redes vecinales de apoyo.",
          actionsH: "Acciones concretas (primeros 180 días)",
          a1: "Biblioteca de semillas + clínicas de huerto; análisis de suelo.",
          a2: "Organizar Cooperativa Solar de Trinidad; campaña de eficiencia para mayores.",
          a3: "Cooperativa de alimentos; cursos CERT/primeros auxilios; lista de emergencia.",
        },
        endorse: {
          title: "Apoyos",
          note: "Títulos solo para identificación. Organizaciones con permiso.",
        },
        receipts: {
          title: "Resultados",
          r1h: "Alianzas para un mejor refugio invernal",
          r1: "Mesa común de proveedores y vecindario para fortalecer el alcance y los cuidados.",
          r2h: "Herramientas para dignidad y recuperación",
          r2: "Guías de intervención en crisis y entrevista motivacional para educación correccional.",
        },
        newsroom: {
          title: "Sala de prensa",
          n1h: "Comunicado: Inicio de campaña",
          n1: "Vecinos se reunieron para lanzar una campaña centrada en vivienda, salud y honestidad.",
          n2h: "Artículo: Un presupuesto que dice la verdad",
          n2: "Por qué la transparencia presupuestaria fortalece a las ciudades pequeñas.",
          presskit: "Descargar kit de prensa",
        },
        involved: {
          title: "Participa",
          p1: "Esta campaña la hace la gente. Suma tus manos, corazón e ideas.",
          b1: "Tocar puertas o llamar",
          b2: "Organizar una reunión en casa",
          b3: "Colocar un letrero",
          cta: "Aporta ahora",
          formH: "Registro de voluntariado",
          formP: "El formulario carga abajo; si no aparece, usa el enlace directo.",
          direct: "Abrir formulario en una pestaña nueva →",
        },
      },
    }),
    []
  );

  const t = (path, fallback) => {
    if (lang !== "es") return fallback;
    const parts = path.split(".");
    let cur = dict.es;
    for (const p of parts) {
      if (!cur || !(p in cur)) return fallback;
      cur = cur[p];
    }
    return cur ?? fallback;
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
      <About />

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

      <DevTests />
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
          <span>Eric for Council</span>
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
              <a href="#home">{t("nav.home", "Home")}</a>
            </li>
            <li>
              <a href="#about">{t("nav.meet", "About Eric")}</a>
            </li>
            <li className="relative">
              <button
                className="font-extrabold"
                aria-expanded={plansOpen}
                onClick={() => setPlansOpen((v) => !v)}
              >
                {t("nav.vision", "Vision & Plans")}
              </button>
              <ul
                className={`${
                  plansOpen ? "block" : "hidden"
                } lg:absolute lg:top-full lg:left-0 min-w-64 bg-white border rounded-xl shadow-lg p-2 space-y-1 lg:z-50`}
              >
                <li>
                  <a href="#housing">
                    {t("plans.housing", "Housing & Homelessness")}
                  </a>
                </li>
                <li>
                  <a href="#safety">
                    {t("plans.safety", "Public Safety & Behavioral Health")}
                  </a>
                </li>
                <li>
                  <a href="#jobs">{t("plans.jobs", "Local Jobs & Small Biz")}</a>
                </li>
                <li>
                  <a href="#energy">
                    {t("plans.energy", "Clean Energy & Resilience")}
                  </a>
                </li>
                <li>
                  <a href="#hospital">
                    {t(
                      "plans.hospital",
                      "Hospital & Medicaid Stability"
                    )}
                  </a>
                </li>
                <li>
                  <a href="#resilience">
                    {t("plans.resilience", "Community Resilience")}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#endorse">{t("nav.endorse", "Endorsements")}</a>
            </li>
            <li>
              <a href="#receipts">{t("nav.receipts", "Track Record")}</a>
            </li>
            <li>
              <a href="#involved">{t("nav.getinvolved", "Get Involved")}</a>
            </li>
            <li>
              <a href="#news">{t("nav.newsroom", "Newsroom")}</a>
            </li>
            <li>
              <button
                className="font-extrabold"
                aria-pressed={lang === "es"}
                onClick={() => setLang((l) => (l === "en" ? "es" : "en"))}
              >
                {lang === "es" ? "English" : "Español"}
              </button>
            </li>
            <li>
              <a
                className="inline-flex items-center font-extrabold bg-emerald-700 text-white px-3 py-2 rounded-lg"
                href={ACTBLUE_LINK}
                target="_blank"
                rel="noreferrer noopener"
              >
                {t("nav.donate", "Donate")}
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
          {t(
            "hero.title",
            "A council that puts Trinidad families first."
          )}
        </h1>
        <p className="mt-3 text-lg text-emerald-900/80 max-w-2xl">
          {t(
            "hero.subtitle",
            "Homes you can afford. Honest budgets. Safer streets with care."
          )}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            className="inline-flex items-center font-extrabold bg-emerald-700 text-white px-4 py-2 rounded-lg"
            href={ACTBLUE_LINK}
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("hero.donate", "Chip in")}
          </a>
          <a
            className="inline-flex items-center font-extrabold bg-white border px-4 py-2 rounded-lg"
            href="#involved"
          >
            {t("hero.volunteer", "Volunteer")}
          </a>
          <a
            className="inline-flex items-center font-extrabold bg-white border px-4 py-2 rounded-lg"
            href="#housing"
          >
            {t("hero.read", "Read the plan")}
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

function About() {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-7 items-start">
        {/* Text column */}
        <div className="order-2 md:order-1">
          <H2>About Eric</H2>
          <blockquote className="mt-3 border-l-4 border-emerald-300 pl-4 italic text-emerald-900/90">
            <p>
              “Trinidad will soon be facing hard times. I’ve worked the rigs and I’ve
              worked the classrooms. I swallowed hard and stood up against one of the
              biggest oil companies in America.  Here’s what it boils down to: When
              times get hard, we need to shelve our prejudices and party labels and
              begin seeing one another as members of the same big family, and then
              work together to protect our family!”  — Eric Treider
            </p>
          </blockquote>

          <h3 className="font-semibold mt-6">Why I’m running…</h3>
          <p className="mt-2">
            Trinidad is an amazing town but we are standing at a crossroads: As
            federal programs are slashed and inflation rises, our local businesses
            are hurting, our young families are leaving, and our elders are feeling
            more alone than ever. The warning signs are clear: declining city
            revenues, rising unemployment, and increased housing insecurity.
          </p>
          <p className="mt-2">
            <strong>Eric Treider is running</strong> to bring steady hands, real-world
            experience, and compassionate leadership to City Council. He believes we
            must unite across political lines to:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Help return safety and security to our parks and business district!</li>
            <li>
              Protect Mt. San Rafael Hospital and local healthcare providers from
              cuts under the “Big Beautiful Bill”
            </li>
            <li>
              Provide safe and sanitary shelter solutions for the unhoused to
              enhance the wellbeing of everyone.
            </li>
            <li>
              Reclaim vacant homes and buildings to create affordable housing for
              workers, seniors, and young families
            </li>
            <li>Build local food and energy security to withstand hard times</li>
            <li>
              Make Trinidad a model of resilience, compassion, and local pride
            </li>
          </ul>

          <h3 className="font-semibold mt-6">
            How I can help lead us through these challenges…
          </h3>
          <p className="mt-2">
            I’m a retired oilfield technician, educator, and public advocate, running
            to protect the people of Trinidad in an era of economic uncertainty,
            rising costs, and deepening political division.
          </p>
          <p className="mt-2">
            For over 30 years I worked in Alaska’s oilfields—both on the tools and as
            a supervisor—in some of the harshest, most demanding environments in the
            country. I know what it means to work hard, raise a family, and make ends
            meet without asking for much.
          </p>
          <p className="mt-2">
            In 2014, I ran for the Alaska State Senate against a powerful
            incumbent—an executive employed by ConocoPhillips—who voted to slash oil
            production taxes, devastating Alaska’s budget and gutting the state’s
            university system, healthcare programs, and rural services. My campaign
            called out the corrosive influence of corporate money and sounded the
            alarm on policies that hurt working families.
          </p>

          <h4 className="font-semibold mt-4">I’ve also served others as:</h4>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              A college professor, teaching incarcerated students at Trinidad
              Correctional Center to become human services professionals
            </li>
            <li>
              A mental health specialist, providing care to emotionally ill teens
            </li>
            <li>
              A senior outreach worker, supporting Albuquerque’s aging neighbors with
              compassion and dignity
            </li>
            <li>
              A foster caregiver: over ten years, my wife, Nelma, and I provided
              informal foster care to four teenage boys
            </li>
          </ul>

          <p className="mt-4">
            Until recently, every week for the past 18 months, Nelma and I prepared
            and served a hot, nourishing meal to anyone in need. Our commitment to
            addressing homelessness is action-oriented and rooted in a simple belief:
            we must put public safety first, and we try hard to live out our
            Christian faith through service to others.
          </p>

          <h4 className="font-semibold mt-4">
            We are doing this for all of the right reasons:
          </h4>
          <p className="mt-2">
            Nelma and I live modestly and draw a stable retirement income. I am not
            beholden to any party machine or corporate donor and Nelma and I are
            self-financing our campaign. Our only loyalty is to the people of
            Trinidad.
          </p>
        </div>

        {/* Image placeholder column */}
        <div className="order-1 md:order-2">
          <figure className="relative">
            <div className="aspect-[4/5] w-full rounded-2xl bg-emerald-100 border-2 border-dashed border-emerald-300 flex items-center justify-center text-emerald-700">
              <div className="text-center p-4">
                <div className="font-semibold">Candidate Image Placeholder</div>
                <div className="text-xs opacity-70">
                  Ideal portrait: ~1600×2000 (4:5)
                </div>
              </div>
            </div>
            <figcaption className="sr-only">Candidate portrait placeholder</figcaption>
          </figure>
        </div>
      </div>
    </Section>
  );
}

function PlanHousing({ t }) {
  return (
    <Section id="housing">
      <H2>{t("housing.title", "Housing & Homelessness")}</H2>
      <p className="text-lg text-emerald-900/90">
        {t(
          "housing.summary",
          "We’ll stabilize families, prevent displacement, and pair shelter with services so people can heal and rebuild."
        )}
      </p>
      <div className="grid md:grid-cols-3 gap-4 mt-5">
        <Card
          title={t("housing.p1h", "Vacant Homes First")}
          body={t(
            "housing.p1",
            "Focus on bringing vacant single-family homes back online—create a vacancy registry, a rehab-for-occupancy program, and a small land bank with 30-year affordability covenants; ADUs welcomed but not the priority."
          )}
        />
        <Card
          title={t("housing.p2h", "Supportive Pathways")}
          body={t(
            "housing.p2",
            "Expand low-barrier shelter with case management and treatment; convert underused motels to service-rich housing."
          )}
        />
        <Card
          title={t("housing.p3h", "Tenant Protections")}
          body={t(
            "housing.p3",
            "Rental registry, just-cause standards, and mediation; emergency rent/utility navigator."
          )}
        />
      </div>
      <details className="mt-4">
        <summary className="cursor-pointer font-semibold">
          {t("housing.actionsH", "Concrete actions (first 180 days)")}
        </summary>
        <ul className="list-disc ml-6 mt-2 text-slate-700 space-y-1">
          <li>
            {t(
              "housing.a1",
              "Vacant-home rehab & occupancy program: small grants/fee waivers for code repairs, in exchange for 30-year affordability covenants."
            )}
          </li>
          <li>{t("housing.a2", "Weekly Coordinated Entry huddle with a public dashboard.")}</li>
          <li>
            {t(
              "housing.a3",
              "Landlord–tenant mediation and emergency assistance navigator; monthly outcomes."
            )}
          </li>
        </ul>
      </details>
    </Section>
  );
}

function PlanSafety({ t }) {
  return (
    <Section id="safety">
      <H2>{t("safety.title", "Public Safety & Behavioral Health")}</H2>
      <p className="text-lg text-emerald-900/90">
        {t(
          "safety.summary",
          "Real safety means treatment, de-escalation, and trusted responders."
        )}
      </p>
      <div className="grid md:grid-cols-3 gap-4 mt-5">
        <Card
          title={t("safety.p1h", "CARE Teams")}
          body={t(
            "safety.p1",
            "Pilot a clinician–EMT co-responder model for behavioral health calls; free officers to focus on violent and property crime."
          )}
        />
        <Card
          title={t("safety.p2h", "Recovery")}
          body={t(
            "safety.p2",
            "Expand treatment slots and peer support; create diversion in municipal court with case managers."
          )}
        />
        <Card
          title={t("safety.p3h", "Prevention")}
          body={t(
            "safety.p3",
            "Lighting, Safe Routes to School, and neighborhood violence interruption partnerships."
          )}
        />
      </div>
    </Section>
  );
}

function PlanHospital({ t }) {
  return (
    <Section id="hospital">
      <H2>{t("hospital.title", "Hospital & Medicaid Stability")}</H2>
      <p className="text-lg text-emerald-900/90">
        {t(
          "hospital.summary",
          "A healthy city needs a healthy hospital. We’ll defend Medicaid access, protect essential services, and keep care local."
        )}
      </p>
      <div className="grid md:grid-cols-3 gap-4 mt-5">
        <Card
          title={t("hospital.p1h", "Defend the Safety Net")}
          body={t(
            "hospital.p1",
            "Stand with patients and providers to oppose cuts that shift costs to families and push hospitals to the brink."
          )}
        />
        <Card
          title={t("hospital.p2h", "Keep Care Close")}
          body={t(
            "hospital.p2",
            "Stabilize core services through smart partnerships, fair reimbursements, and transparent contracts."
          )}
        />
        <Card
          title={t("hospital.p3h", "Workforce & Access")}
          body={t(
            "hospital.p3",
            "Recruit and retain clinicians; improve transportation to appointments; expand enrollment help so neighbors don’t lose coverage."
          )}
        />
      </div>
      <details className="mt-4">
        <summary className="cursor-pointer font-semibold">
          {t("hospital.actionsH", "Concrete actions (first 180 days)")}
        </summary>
        <ul className="list-disc ml-6 mt-2 text-slate-700 space-y-1">
          <li>
            {t(
              "hospital.a1",
              "Council resolution opposing harmful Medicaid cuts; Hospital Stability Task Force."
            )}
          </li>
          <li>
            {t(
              "hospital.a2",
              "Coverage navigators for Medicaid/CHIP enrollments and renewals; simple access dashboard."
            )}
          </li>
          <li>
            {t(
              "hospital.a3",
              "Workforce pipeline for nursing/behavioral health; better non-emergency ride options."
            )}
          </li>
        </ul>
      </details>
    </Section>
  );
}

function PlanResilience({ t }) {
  return (
    <Section id="resilience">
      <H2>{t("resilience.title", "Community Resilience")}</H2>
      <p className="text-lg text-emerald-900/90">
        {t(
          "resilience.summary",
          "Let’s lower bills, grow food, and prepare together—so families can stand steady in any storm."
        )}
      </p>
      <div className="grid md:grid-cols-3 gap-4 mt-5">
        <Card
          title={t(
            "resilience.p1h",
            "Home Gardening & Food Security"
          )}
          body={t(
            "resilience.p1",
            "Seed libraries, seasonal workshops, and backyard/front-yard gardens; community plots and tool-sharing to stretch every dollar."
          )}
        />
        <Card
          title={t(
            "resilience.p2h",
            "Home Solar & Efficiency"
          )}
          body={t(
            "resilience.p2",
            "Support a solar co-op for bulk pricing; DIY energy audits, weatherization, and heat-pump pathways for fixed-income neighbors."
          )}
        />
        <Card
          title={t(
            "resilience.p3h",
            "Bulk-Food Co-op & Preparedness"
          )}
          body={t(
            "resilience.p3",
            "Member-run bulk buys, pantry planning, CERT trainings, and neighborhood check-in networks to protect the vulnerable."
          )}
        />
      </div>
      <details className="mt-4">
        <summary className="cursor-pointer font-semibold">
          {t("resilience.actionsH", "Concrete actions (first 180 days)")}
        </summary>
        <ul className="list-disc ml-6 mt-2 text-slate-700 space-y-1">
          <li>
            {t(
              "resilience.a1",
              "Launch a community seed library + quarterly garden clinics; soil-testing support."
            )}
          </li>
          <li>
            {t(
              "resilience.a2",
              "Organize a Trinidad Solar Co-op; start a no-cost efficiency blitz for seniors and low-income households."
            )}
          </li>
          <li>
            {t(
              "resilience.a3",
              "Stand up a member-owned bulk-food co-op; host CERT/first-aid trainings; publish a simple household emergency checklist."
            )}
          </li>
        </ul>
      </details>
    </Section>
  );
}

function PlanSimple({ t, id, titleKey, summaryKey, bullets }) {
  return (
    <Section id={id}>
      <H2>{t(titleKey, "Plan")}</H2>
      <p className="text-lg text-emerald-900/90">
        {t(summaryKey, "Summary")}
      </p>
      <ul className="list-disc ml-6 mt-3 text-slate-700 space-y-1">
        {bullets.map((b) => (
          <li key={b}>{t(b, "Item")}</li>
        ))}
      </ul>
    </Section>
  );
}

function Endorsements({ t }) {
  return (
    <Section id="endorse">
      <H2>{t("endorse.title", "Endorsements")}</H2>
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
        {t(
          "endorse.note",
          "Titles for identification only. Organizations listed with permission."
        )}
      </p>
    </Section>
  );
}

function Receipts({ t }) {
  return (
    <Section id="receipts">
      <H2>{t("receipts.title", "Track Record")}</H2>
      <ol className="border-l-4 border-emerald-100 pl-4 space-y-6 mt-4">
        <li>
          <div className="text-xs inline-block bg-emerald-50 rounded-full px-2 py-0.5">
            2024
          </div>
          <div className="mt-1 font-semibold">
            {t(
              "receipts.r1h",
              "Convened partners for a stronger winter shelter response"
            )}
          </div>
          <p className="text-slate-700">
            {t(
              "receipts.r1",
              "Helped bring service providers and neighbors to the same table—supporting more consistent outreach and care."
            )}
          </p>
        </li>
        <li>
          <div className="text-xs inline-block bg-emerald-50 rounded-full px-2 py-0.5">
            2023
          </div>
          <div className="mt-1 font-semibold">
            {t(
              "receipts.r2h",
              "Built practical tools for dignity and recovery"
            )}
          </div>
          <p className="text-slate-700">
            {t(
              "receipts.r2",
              "Designed classroom-ready guides for crisis intervention and motivational interviewing used in correctional education."
            )}
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
          <H2>{t("involved.title", "Get Involved")}</H2>
          <p>{t("involved.p1", "This is a people-powered campaign. Lend your hands, heart, and good ideas.")}</p>
          <ul className="mt-3 space-y-2">
            <li>• {t("involved.b1", "Knock doors or phonebank")}</li>
            <li>• {t("involved.b2", "Host a house meeting")}</li>
            <li>• {t("involved.b3", "Plant a yard sign")}</li>
          </ul>
          <a
            className="inline-flex items-center mt-4 font-extrabold bg-emerald-700 text-white px-4 py-2 rounded-lg"
            href={ACTBLUE_LINK}
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("involved.cta", "Chip in")}
          </a>
        </div>
        <div className="bg-white border rounded-xl shadow p-4">
          <h3 className="font-bold">
            {t("involved.formH", "Volunteer sign-up")}
          </h3>
          <p className="text-sm text-slate-600">
            {t(
              "involved.formP",
              "Form loads below; if you can’t see it, use the direct link."
            )}
          </p>
          <p className="mt-1">
            <a
              className="underline"
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noreferrer noopener"
            >
              {t("involved.direct", "Open the form in a new tab →")}
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
      <H2>{t("newsroom.title", "Newsroom")}</H2>
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <article className="bg-white border rounded-xl shadow p-4">
          <h3 className="font-semibold">
            <a href="#">
              {t(
                "newsroom.n1h",
                "Press release: Campaign kickoff"
              )}
            </a>
          </h3>
          <time className="text-sm text-slate-600">Sept 1, 2025</time>
          <p className="mt-1 text-slate-700">
            {t(
              "newsroom.n1",
              "Neighbors gathered to launch a people-powered campaign focused on housing, health, and honest government."
            )}
          </p>
        </article>
        <article className="bg-white border rounded-xl shadow p-4">
          <h3 className="font-semibold">
            <a href="#">
              {t(
                "newsroom.n2h",
                "Op-ed: A budget that tells the truth"
              )}
            </a>
          </h3>
          <time className="text-sm text-slate-600">Sept 7, 2025</time>
          <p className="mt-1 text-slate-700">
            {t(
              "newsroom.n2",
              "Why plain-language budgeting matters in small cities—and how Trinidad can lead."
            )}
          </p>
        </article>
      </div>
      <a
        href="#"
        className="inline-flex items-center mt-4 font-bold border px-4 py-2 rounded-lg"
      >
        {t("newsroom.presskit", "Download press kit")}
      </a>
    </Section>
  );
}

function Footer({ t, ACTBLUE_LINK }) {
  return (
    <footer className="bg-emerald-950 text-emerald-100 mt-12 relative">
      <div className="max-w-[1100px] mx-auto px-5 py-8 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-bold text-lg">Eric for Council</h4>
          <address className="not-italic text-emerald-200">
            PO Box 123 • Trinidad, CO 81082
            <br />
            <a className="underline" href="mailto:info@ericforcouncil.org">
              info@ericforcouncil.org
            </a>
          </address>
          <p className="text-emerald-300 text-sm mt-1">
            Paid for by Friends of Eric Treider
          </p>
        </div>
        <nav>
          <ul className="space-y-1">
            <li>
              <a href="#about">{t("nav.meet", "About Eric")}</a>
            </li>
            <li>
              <a href="#housing">{t("nav.vision", "Vision & Plans")}</a>
            </li>
            <li>
              <a href="#endorse">{t("nav.endorse", "Endorsements")}</a>
            </li>
            <li>
              <a href="#receipts">{t("nav.receipts", "Track Record")}</a>
            </li>
            <li>
              <a href="#involved">{t("nav.getinvolved", "Get Involved")}</a>
            </li>
            <li>
              <a
                href={ACTBLUE_LINK}
                target="_blank"
                rel="noreferrer noopener"
              >
                {t("nav.donate", "Donate")}
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <div className="flex gap-3">
            <a href="#" className="underline">
              Facebook
            </a>
            <a href="#" className="underline">
              Instagram
            </a>
            <a href="#" className="underline">
              YouTube
            </a>
          </div>
        </div>
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute right-4 bottom-4 bg-white text-emerald-950 rounded-full w-10 h-10 shadow"
        aria-label="Back to top"
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
function DevTests() {
  useEffect(() => {
    try {
      console.assert(
        document.querySelector('#about') !== null,
        'Test: #about section should exist'
      );
      const text = document.body.textContent || '';
      console.assert(
        text.includes('Trinidad will soon be facing hard times'),
        'Test: About quote should be present'
      );
    } catch (e) {
      // no-op
    }
  }, []);
  return null;
}

