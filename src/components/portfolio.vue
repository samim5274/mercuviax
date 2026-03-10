<template>
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
</template>

<script setup>
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
</script>

<style>

</style>