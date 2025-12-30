import Link from "next/link";
import Image from "next/image";

const pipelineStages = [
  {
    title: "Intent captured",
    description: "Students share goals, budgets, and preferred intakes in a single form.",
    status: "23 new",
  },
  {
    title: "Counselor assigned",
    description: "Automations match each lead to the right destination expert instantly.",
    status: "12 pending",
  },
  {
    title: "Applications in flight",
    description: "Shared task lists keep academics, visa, and finance teams aligned.",
    status: "18 active",
  },
  {
    title: "Visa & onboarding",
    description: "Track deposits, CAS, visa slots, and arrival tasks in real time.",
    status: "95% visas",
  },
];

const capabilityColumns = [
  {
    title: "Demand engine",
    items: [
      "Verified student intent and readiness scores before first contact.",
      "Destination routing that sends students to the right counselor instantly.",
      "Rich dossiers with academic history, goals, and documentation status.",
    ],
  },
  {
    title: "Counselor cockpit",
    items: [
      "Unified workspace for chat, tasks, document requests, and reminders.",
      "Offer, deposit, and visa milestones tracked in one clean timeline.",
      "Context handover for specialists, finance teams, and partner universities.",
    ],
  },
  {
    title: "Business control",
    items: [
      "Performance dashboards across geographies, intakes, and teams.",
      "Commission insights tied to offers, invoices, and paid deposits.",
      "Audit-ready history of every document, update, and approval.",
    ],
  },
];

const automationHighlights = [
  {
    label: "Smart nudges",
    description: "Automated reminders keep students submitting tasks and documents on time.",
  },
  {
    label: "Compliance guardrails",
    description: "Expiring documents, visa deadlines, and approvals surface before they slip.",
  },
  {
    label: "Partner analytics",
    description: "See which intakes, universities, and counselors convert fastest.",
  },
];

const mentorHighlights = [
  {
    title: "Verified mentor bench",
    description:
      "Route complex cases to vetted mentors with destination, intake, and compliance context.",
  },
  {
    title: "Structured reviews",
    description:
      "Mentors approve documentation readiness and visa prep with a single shared checklist.",
  },
  {
    title: "Availability signals",
    description:
      "Surface mentor capacity and response times so urgent cases are never blocked.",
  },
];

const metrics = [
  { value: "40%", label: "Pipeline driven by Super Agent partners" },
  { value: "2x", label: "Faster offer-to-visa turnaround" },
  { value: "93%", label: "Average student satisfaction score" },
];

const testimonials = [
  {
    quote:
      "“Super Agent became our digital front door. Leads arrive qualified, counselors work from one board, and our leadership finally sees the full funnel.”",
    name: "Arun Patel",
    title: "Lead Counselor, EduBridge Alliance",
  },
  {
    quote:
      "“Visa processing used to be a black box. With Super Agent, every stakeholder sees the same timeline. Turnaround time dropped by 35%.”",
    name: "Maria Gómez",
    title: "Director of Operations, Global Pathways",
  },
];

export default function LandingPage() {
  return (
  
    
    <main className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#B9D7EA] bg-white/80 backdrop-blur">
                <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/images/agentzee-logo.png"
                            alt="Agentzee logo"
                            width={140}
                            height={40}
                            priority
                            className="h-10 w-auto object-contain"
                        />
                    </Link>
                    <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
                        <a href="#pipeline" className="transition hover:text-[#769FCD]">
                            How it works
                        </a>
                        <a href="#capabilities" className="transition hover:text-[#769FCD]">
                            Platform
                        </a>
                        <a href="#automation" className="transition hover:text-[#769FCD]">
                            Automations
                        </a>
                        <a href="#proof" className="transition hover:text-[#769FCD]">
                            Results
                        </a>
                    </nav>
                    <div className="flex items-center gap-3 text-sm">
                        <Link
                            href="/login"
                            className="hidden font-semibold text-slate-500 transition hover:text-[#769FCD] md:inline"
                        >
                            Login
                        </Link>
                        <Link
                            href="/signup"
                            className="rounded-full bg-[#769FCD] px-5 py-2 font-semibold text-white shadow-sm transition hover:bg-[#769FCD]/90"
                        >
                            Partner with us
                        </Link>
                    </div>
                </div>
            </header>

      <div className="min-h-screen bg-[#F7FBFC] text-slate-900">
      {/* HERO */}
      <section className="relative px-6 pt-4">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(118,159,205,0.25),_transparent_55%)]" />
        <div className="mx-auto grid max-w-6xl gap-12 rounded-[32px] border border-[#B9D7EA] bg-white/70 p-10 shadow-[0_40px_90px_-40px_rgba(118,159,205,0.6)] md:grid-cols-[1.05fr,0.95fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#769FCD]/40 bg-[#769FCD]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#769FCD]">
              Agency growth engine
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
              Direct qualified students, orchestrate delivery, and keep leadership aligned
            </h1>
            <p className="max-w-xl text-base text-slate-600">
              UniExpress blends student acquisition, counselor workflows, and reporting into one workspace built for growing
              agencies.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-[#769FCD] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#769FCD]/90"
              >
                Get Started Now
              </Link>
              <Link
                href="#pipeline"
                className="inline-flex items-center justify-center rounded-full border border-[#769FCD]/50 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-[#769FCD] hover:text-[#769FCD]"
              >
                Tour the pipeline ↓
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 pt-6 text-xs font-medium text-[#769FCD]">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#B9D7EA] bg-[#769FCD]/10 px-3 py-2">
                <span className="text-base">◎</span> Verified intent data
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#B9D7EA] bg-[#769FCD]/10 px-3 py-2">
                <span className="text-base">◎</span> Counselor cockpit
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#B9D7EA] bg-[#769FCD]/10 px-3 py-2">
                <span className="text-base">◎</span> Leadership analytics
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-8 -left-8 hidden h-24 w-24 rounded-3xl border border-[#B9D7EA] bg-[#769FCD]/10 md:block" />
            <div className="absolute -bottom-6 -right-6 hidden h-20 w-20 rounded-full border border-[#B9D7EA]/80 bg-[#F7FBFC] md:block" />
            <div className="relative rounded-[28px] border border-[#B9D7EA] bg-white/90 p-1 shadow-xl">
              <div className="rounded-[22px] border border-[#B9D7EA]/70 bg-white/90 p-6">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Live pipeline</span>
                  <span>Week 12 · APAC intake</span>
                </div>
                <div className="mt-5 space-y-4">
                  {pipelineStages.map((stage) => (
                    <div key={stage.title} className="rounded-2xl border border-[#B9D7EA] bg-[#F7FBFC] p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-slate-900">{stage.title}</p>
                        <span className="rounded-full bg-[#769FCD]/15 px-3 py-1 text-[11px] font-medium text-[#769FCD]">
                          {stage.status}
                        </span>
                      </div>
                      <p className="mt-2 text-xs text-slate-600">{stage.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3 text-[11px] font-medium text-[#769FCD]">
                  <span className="rounded-full border border-[#769FCD]/40 px-3 py-1">Visa SLA 7d</span>
                  <span className="rounded-full border border-[#769FCD]/40 px-3 py-1">Offer conversion 58%</span>
                  <span className="rounded-full border border-[#769FCD]/40 px-3 py-1">Balanced counselor load</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PIPELINE / CAPABILITIES */}
      <section id="pipeline" className="mt-24 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-3">
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Match, manage, and move students forward</h2>
              <p className="text-sm text-slate-600">Follow the journey from first inquiry to arrival with one shared view.</p>
            </div>
            <div className="rounded-2xl border border-[#B9D7EA] bg-[#F7FBFC] px-4 py-3 text-xs text-[#769FCD]">
              <span className="font-semibold text-slate-900">Live insight:</span> Top-performing intake · Canada Fall 2025 ·
              Offer conversions up 22%
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3" id="capabilities">
            {capabilityColumns.map((column) => (
              <div key={column.title} className="flex flex-col rounded-2xl border border-[#B9D7EA] bg-[#F7FBFC] p-6 shadow-sm">
                <p className="text-sm font-semibold text-[#769FCD]">{column.title}</p>
                <div className="mt-5 space-y-3 text-sm text-slate-600">
                  {column.items.map((item) => (
                    <div key={item} className="flex gap-2">
                      <span className="text-[#769FCD]">▹</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTOMATION */}
      <section id="automation" className="bg-gradient-to-b from-white via-[#F7FBFC] to-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1fr,1.1fr] md:items-center">
          <div>
            <h3 className="text-3xl font-semibold text-slate-900 md:text-4xl">Automations and analytics on your side</h3>
            <p className="mt-4 text-sm text-slate-600">
              Automate repetitive work and share current dashboards so every team works from the same truth.
            </p>
            <div className="mt-6 space-y-4">
              {automationHighlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-[#B9D7EA] bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold text-[#769FCD]">{item.label}</p>
                  <p className="mt-2 text-xs text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-[#B9D7EA] bg-white p-6 shadow-[0_30px_80px_-50px_rgba(118,159,205,0.7)]">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#769FCD]">Snapshot · Leadership dashboard</p>
            <div className="mt-6 grid gap-4 text-sm text-slate-900 md:grid-cols-2">
              <div className="rounded-xl border border-[#B9D7EA] bg-[#F7FBFC] p-4">
                <p className="text-xs text-slate-500">Monthly revenue</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">$182k</p>
                <p className="text-xs text-[#769FCD]">▲ 12% vs last month</p>
              </div>
              <div className="rounded-xl border border-[#B9D7EA] bg-[#F7FBFC] p-4">
                <p className="text-xs text-slate-500">Average conversion</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">34%</p>
                <p className="text-xs text-[#769FCD]">Hot spots: AUS · UK · CAN</p>
              </div>
              <div className="rounded-xl border border-[#B9D7EA] bg-[#F7FBFC] p-4">
                <p className="text-xs text-slate-500">Visa approvals</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">95%</p>
                <p className="text-xs text-slate-600">Median turnaround 16 days</p>
              </div>
              <div className="rounded-xl border border-[#B9D7EA] bg-[#F7FBFC] p-4">
                <p className="text-xs text-slate-500">Counselor capacity</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">78%</p>
                <p className="text-xs text-slate-600">Load balanced across teams</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENTOR NETWORK */}
      <section id="mentors" className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.05fr,0.95fr] md:items-center">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#769FCD]">
              Mentor network
            </p>
            <h3 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              Mentors who unblock your hardest cases
            </h3>
            <p className="text-sm text-slate-600">
              Give every counselor a mentor team on demand. Senior specialists step in to
              review tricky profiles, spot visa risks, and coach on final submissions.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-[#769FCD] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6a91c1]"
              >
                Mentor Login
              </button>
              <Link
                href="#cta"
                className="inline-flex items-center justify-center rounded-full border border-[#769FCD]/50 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-[#769FCD] hover:text-[#769FCD]"
              >
                Become a mentor
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            {mentorHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#B9D7EA] bg-[#F7FBFC] p-6 shadow-sm"
              >
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="mt-2 text-xs text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF / METRICS */}
      <section id="proof" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-[1fr,1.1fr] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#769FCD]">Proof in numbers</p>
              <h3 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">Agencies scaling with Super Agent</h3>
              <p className="mt-4 text-sm text-slate-600">
                Visa consultancies and recruitment teams in 12 countries rely on Super Agent to scale without losing control.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-[#B9D7EA] bg-[#F7FBFC] p-6 text-center">
                  <p className="text-3xl font-semibold text-slate-900">{metric.value}</p>
                  <p className="mt-2 text-xs text-slate-600">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-3xl border border-[#B9D7EA] bg-gradient-to-br from-white via-[#F7FBFC] to-white p-6 shadow-sm"
              >
                <p className="text-sm text-slate-700">{testimonial.quote}</p>
                <div className="mt-5 text-xs text-slate-500">
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p>{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="border-t border-[#B9D7EA] bg-[#F7FBFC] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#769FCD]">Ready to move faster?</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
            Join agencies transforming study abroad delivery
          </h2>
          <p className="mt-4 text-base text-slate-600">
            See how Super Agent orchestrates lead generation, counselor execution, and leadership reporting in one platform.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/signin?mode=register"
              className="inline-flex items-center justify-center rounded-full bg-[#769FCD] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#769FCD]/90"
            >
              Become a partner
            </Link>
            <Link
              href="/signin"
              className="inline-flex items-center justify-center rounded-full border border-[#769FCD]/60 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-[#769FCD] hover:text-[#769FCD]"
            >
              Agency sign in
            </Link>
          </div>
        </div>
      </section>
    </div>
    </main>
    
  );
}
