<template>
  <div class="min-h-screen bg-slate-950 text-white">
    <section class="relative overflow-hidden">
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.20),transparent_28%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_30%),linear-gradient(to_bottom,#020617,#0f172a,#020617)]"
      />
      <div
        class="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:42px_42px]"
      />

      <div class="relative mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <header class="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
          <div class="flex items-center gap-3">
            <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-blue-500 shadow-lg shadow-teal-500/20">
              <span class="text-lg font-black text-white">M</span>
            </div>
            <div>
              <p class="text-xl font-bold tracking-wide">Mercuviax</p>
              <p class="text-xs text-slate-300">Smart Software for Modern Business</p>
            </div>
          </div>

          <nav class="hidden items-center gap-8 text-sm text-slate-300 lg:flex">
            <a href="#services" class="transition hover:text-white">Services</a>
            <a href="#about" class="transition hover:text-white">About</a>
            <a href="#portfolio" class="transition hover:text-white">Portfolio</a>
            <a href="#process" class="transition hover:text-white">Process</a>
            <a href="#faq" class="transition hover:text-white">FAQ</a>
            <a href="#contact" class="transition hover:text-white">Contact</a>
          </nav>

          <a
            href="#contact"
            class="hidden rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15 md:inline-flex"
          >
            Let’s Talk
          </a>
        </header>

        <div class="grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <div class="mb-6 inline-flex rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-2 text-sm font-medium text-teal-300">
              Future-ready software company
            </div>
            <h1 class="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Build powerful digital systems with
              <span class="bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Mercuviax
              </span>
            </h1>
            <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              We design and develop modern software solutions that help businesses operate smarter, grow faster, and scale with confidence.
            </p>

            <div class="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                class="rounded-2xl bg-teal-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-xl shadow-teal-500/25 transition hover:-translate-y-0.5"
              >
                Start a Project
              </a>
              <a
                href="#services"
                class="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>

            <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div
                v-for="item in stats"
                :key="item.label"
                class="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
              >
                <p class="text-2xl font-black text-white">{{ item.value }}</p>
                <p class="mt-1 text-sm text-slate-300">{{ item.label }}</p>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="absolute -left-6 top-10 h-24 w-24 rounded-full bg-teal-400/30 blur-3xl" />
            <div class="absolute -right-6 bottom-10 h-24 w-24 rounded-full bg-blue-500/30 blur-3xl" />

            <div class="relative rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl">
              <div class="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-4">
                <div class="mb-4 flex items-center justify-between">
                  <div>
                    <p class="text-sm text-slate-400">Business Intelligence</p>
                    <h3 class="text-xl font-bold">Mercuviax Dashboard</h3>
                  </div>
                  <div class="rounded-xl border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-semibold text-teal-300">
                    Live System
                  </div>
                </div>

                <div class="grid gap-4 md:grid-cols-2">
                  <div class="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                    <p class="text-sm text-slate-400">Performance</p>
                    <div class="mt-4 h-32 rounded-2xl bg-gradient-to-br from-teal-400/20 via-cyan-400/10 to-transparent p-4">
                      <div class="flex h-full items-end gap-3">
                        <div
                          v-for="(height, index) in performanceBars"
                          :key="index"
                          class="w-8 rounded-t-xl"
                          :class="barColors[index]"
                          :style="{ height }"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="space-y-4">
                    <div class="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                      <p class="text-sm text-slate-400">Core Services</p>
                      <div class="mt-4 space-y-3 text-sm text-slate-200">
                        <div class="rounded-xl bg-white/5 px-3 py-3">Web Application Development</div>
                        <div class="rounded-xl bg-white/5 px-3 py-3">Business Automation Systems</div>
                        <div class="rounded-xl bg-white/5 px-3 py-3">Enterprise Platform Integration</div>
                      </div>
                    </div>

                    <div class="rounded-2xl border border-white/10 bg-gradient-to-r from-teal-400/15 to-blue-500/15 p-4">
                      <p class="text-sm text-slate-300">Reliable. Scalable. Professional.</p>
                      <p class="mt-2 text-2xl font-black">Software Built for Growth</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div class="mb-12 max-w-2xl">
        <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Our Services</p>
        <h2 class="text-3xl font-black sm:text-4xl">Professional software solutions tailored for modern businesses</h2>
        <p class="mt-4 text-slate-400">
          We combine strategy, design, and engineering to deliver high-quality digital products with long-term value.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div
          v-for="service in services"
          :key="service.title"
          class="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-teal-400/30 hover:bg-white/[0.05]"
        >
          <div class="mb-5 h-12 w-12 rounded-2xl bg-gradient-to-br from-teal-400/20 to-blue-500/20" />
          <h3 class="text-xl font-bold">{{ service.title }}</h3>
          <p class="mt-3 leading-7 text-slate-400">{{ service.desc }}</p>
        </div>
      </div>
    </section>

    <section id="portfolio" class="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div class="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div class="max-w-2xl">
          <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Featured Work</p>
          <h2 class="text-3xl font-black sm:text-4xl">Professional digital products designed for real business impact</h2>
        </div>
        <p class="max-w-xl text-slate-400">
          A premium software brand needs premium presentation. These showcase blocks help position Mercuviax like a serious technology company.
        </p>
      </div>

      <div class="grid gap-6 lg:grid-cols-3">
        <div
          v-for="project in projects"
          :key="project.name"
          class="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]"
        >
          <div class="h-48 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.35),transparent_35%),linear-gradient(135deg,#0f172a,#111827,#020617)] p-6">
            <div class="flex h-full items-end">
              <div class="rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-semibold text-teal-300">
                {{ project.type }}
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold">{{ project.name }}</h3>
            <p class="mt-3 leading-7 text-slate-400">{{ project.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="border-y border-white/10 bg-white/[0.03]">
      <div class="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10">
        <div>
          <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Why Mercuviax</p>
          <h2 class="text-3xl font-black sm:text-4xl">A premium technology partner for ambitious brands</h2>
          <p class="mt-5 leading-8 text-slate-300">
            Mercuviax helps companies transform ideas into dependable digital products. Our focus is simple: clear strategy, clean execution, modern design, and scalable development.
          </p>
          <p class="mt-4 leading-8 text-slate-400">
            Whether you need a custom platform, internal business software, or a polished web product, we create systems that are built to perform and ready to grow with your business.
          </p>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div class="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6">
            <h3 class="text-xl font-bold">Modern Design</h3>
            <p class="mt-3 text-slate-400">Premium interfaces with clean structure, strong brand feel, and user-first clarity.</p>
          </div>
          <div class="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6">
            <h3 class="text-xl font-bold">Scalable Code</h3>
            <p class="mt-3 text-slate-400">Reliable architecture and maintainable systems designed for long-term expansion.</p>
          </div>
          <div class="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6">
            <h3 class="text-xl font-bold">Business Focus</h3>
            <p class="mt-3 text-slate-400">Technology choices aligned with efficiency, growth, and measurable business value.</p>
          </div>
          <div class="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6">
            <h3 class="text-xl font-bold">Trusted Support</h3>
            <p class="mt-3 text-slate-400">Continuous improvement, post-launch support, and practical long-term collaboration.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div class="grid gap-6 lg:grid-cols-3">
        <div
          v-for="item in testimonials"
          :key="item.quote"
          class="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6"
        >
          <p class="text-lg leading-8 text-slate-200">“{{ item.quote }}”</p>
          <div class="mt-6">
            <p class="font-bold text-white">{{ item.author }}</p>
            <p class="text-sm text-slate-400">{{ item.role }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="process" class="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div class="mb-12 max-w-2xl">
        <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Our Process</p>
        <h2 class="text-3xl font-black sm:text-4xl">A smooth path from idea to launch</h2>
      </div>

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div
          v-for="(item, index) in process"
          :key="item"
          class="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6"
        >
          <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-blue-500 text-lg font-black text-slate-950">
            {{ index + 1 }}
          </div>
          <h3 class="text-xl font-bold">{{ item }}</h3>
          <p class="mt-3 text-slate-400">Structured execution with clarity, collaboration, and professional delivery standards.</p>
        </div>
      </div>
    </section>

    <section id="contact" class="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
      <div class="grid gap-6 rounded-[2rem] border border-white/10 bg-gradient-to-r from-teal-400/10 to-blue-500/10 p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
        <div>
          <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Contact Us</p>
          <h2 class="text-3xl font-black sm:text-4xl">Let’s build something exceptional together</h2>
          <p class="mt-4 max-w-2xl text-slate-300">
            Ready to launch a software product, business platform, or digital solution for your brand? Mercuviax is here to help.
          </p>
        </div>

        <div class="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6">
          <div class="space-y-4 text-slate-300">
            <div>
              <p class="text-sm text-slate-500">Company</p>
              <p class="text-lg font-semibold text-white">Mercuviax</p>
            </div>
            <div>
              <p class="text-sm text-slate-500">Phone</p>
              <p class="text-lg font-semibold text-white">01533021557</p>
            </div>
            <div>
              <p class="text-sm text-slate-500">Email</p>
              <p class="text-lg font-semibold text-white break-all">cse.shamim.cub@gmail.com</p>
            </div>
            <button class="mt-3 w-full rounded-2xl bg-white px-5 py-3 font-bold text-slate-950 transition hover:opacity-90">
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>

    <section id="faq" class="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div class="mb-12 max-w-2xl">
        <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">FAQ</p>
        <h2 class="text-3xl font-black sm:text-4xl">Common questions about Mercuviax</h2>
      </div>

      <div class="space-y-4">
        <div
          v-for="item in faqs"
          :key="item.q"
          class="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6"
        >
          <h3 class="text-lg font-bold text-white">{{ item.q }}</h3>
          <p class="mt-3 leading-7 text-slate-400">{{ item.a }}</p>
        </div>
      </div>
    </section>

    <footer class="border-t border-white/10 bg-slate-950/80">
      <div class="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-10">
        <div>
          <div class="flex items-center gap-3">
            <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-blue-500 shadow-lg shadow-teal-500/20">
              <span class="text-lg font-black text-white">M</span>
            </div>
            <div>
              <p class="text-xl font-bold tracking-wide">Mercuviax</p>
              <p class="text-xs text-slate-300">Innovative software solutions for business growth</p>
            </div>
          </div>
          <p class="mt-4 max-w-md leading-7 text-slate-400">
            Mercuviax builds premium digital products, professional websites, and scalable software systems for modern businesses.
          </p>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white">Quick Links</h3>
          <div class="mt-4 space-y-3 text-slate-400">
            <a href="#services" class="block transition hover:text-white">Services</a>
            <a href="#portfolio" class="block transition hover:text-white">Portfolio</a>
            <a href="#about" class="block transition hover:text-white">About</a>
            <a href="#contact" class="block transition hover:text-white">Contact</a>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white">Contact</h3>
          <div class="mt-4 space-y-3 text-slate-400">
            <p>01533021557</p>
            <p class="break-all">cse.shamim.cub@gmail.com</p>
            <p>Bangladesh</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const services = [
  {
    title: 'Custom Software Development',
    desc: 'Scalable web platforms, business systems, and tailored applications built for performance and growth.',
  },
  {
    title: 'Enterprise Solutions',
    desc: 'Connected software ecosystems that streamline operations, improve visibility, and support modern business workflows.',
  },
  {
    title: 'UI/UX & Product Design',
    desc: 'Clean, conversion-focused digital experiences with strong visual systems and user-centered product thinking.',
  },
  {
    title: 'Maintenance & Support',
    desc: 'Reliable ongoing support, optimization, and technical improvements to keep your systems future-ready.',
  },
  {
    title: 'E-commerce & Marketplace',
    desc: 'Modern commerce platforms, vendor systems, and growth-focused experiences for digital businesses.',
  },
  {
    title: 'API & System Integration',
    desc: 'Smooth integration between software, payment systems, CRMs, and internal business tools.',
  },
]

const stats = [
  { value: '99%', label: 'Client-focused delivery' },
  { value: '24/7', label: 'Support mindset' },
  { value: '10+', label: 'Solution-ready modules' },
  { value: 'Fast', label: 'Execution process' },
]

const process = [
  'Discovery & strategy',
  'Design & prototyping',
  'Development & integration',
  'Launch & ongoing support',
]

const projects = [
  {
    name: 'Enterprise Operations Suite',
    type: 'Business Platform',
    desc: 'A modern internal platform for operations, reporting, and team workflow management.',
  },
  {
    name: 'Smart Commerce System',
    type: 'E-commerce Solution',
    desc: 'A scalable commerce experience focused on speed, clean UX, and connected business tools.',
  },
  {
    name: 'Client Portal Dashboard',
    type: 'Custom Web App',
    desc: 'A secure portal for communication, project visibility, and streamlined service delivery.',
  },
]

const testimonials = [
  {
    quote: 'Mercuviax delivered a polished, reliable product experience with clear communication and strong technical direction.',
    author: 'Business Client',
    role: 'Operations Team',
  },
  {
    quote: 'The design quality, structure, and professional execution gave our platform a premium brand feel from day one.',
    author: 'Startup Founder',
    role: 'Digital Product Owner',
  },
  {
    quote: 'From strategy to launch, the process felt organized, modern, and focused on real business outcomes.',
    author: 'Growth Partner',
    role: 'Technology Consultant',
  },
]

const faqs = [
  {
    q: 'What kind of software does Mercuviax build?',
    a: 'We build business websites, custom web applications, enterprise tools, portals, dashboards, and scalable digital platforms.',
  },
  {
    q: 'Do you provide design and development both?',
    a: 'Yes. We handle UI/UX, frontend experience, backend development, integrations, launch, and ongoing support.',
  },
  {
    q: 'Can Mercuviax work with growing businesses?',
    a: 'Absolutely. Our solutions are designed to support modern startups, service brands, and businesses preparing to scale.',
  },
]

const performanceBars = ['38%', '52%', '68%', '86%']
const barColors = ['bg-teal-300', 'bg-cyan-300', 'bg-sky-300', 'bg-blue-300']
</script>
