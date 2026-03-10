<template>
    <section class="relative overflow-hidden">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.20),transparent_28%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_30%),linear-gradient(to_bottom,#020617,#0f172a,#020617)]"/>
        <div class="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:42px_42px]"/>

        <div class="relative mx-auto max-w-7xl px-6 py-6 lg:px-10">
            <header class="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
            <div class="flex items-center gap-3">
                <div class="relative flex h-14 w-14 items-center justify-center rounded-2xl
                        bg-gradient-to-br from-sky-400 via-cyan-400 to-blue-600
                        shadow-[0_10px_30px_rgba(20,184,166,0.28)]
                        ring-1 ring-white/20 overflow-hidden">
                <!-- soft glow -->
                <div class="absolute inset-0 bg-white/10"></div>
                <div class="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-cyan-200/30 blur-xl"></div>
                <div class="absolute -bottom-2 -left-2 h-8 w-8 rounded-full bg-blue-900/30 blur-xl"></div>

                <!-- logo -->
                <img
                    :src="logo"
                    alt="MercoviaX Logo"
                    class="relative z-10 h-9 w-9 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]"/>
                </div>
                <div>
                <p class="text-xl font-bold tracking-wide">MercuviaX</p>
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
</template>

<script setup>
import logo from '../assets/logo.ico'
const stats = [
  { value: '99%', label: 'Client-focused delivery' },
  { value: '24/7', label: 'Support mindset' },
  { value: '10+', label: 'Solution-ready modules' },
  { value: 'Fast', label: 'Execution process' },
]

const performanceBars = ['38%', '52%', '68%', '86%']
const barColors = ['bg-teal-300', 'bg-cyan-300', 'bg-sky-300', 'bg-blue-300']
</script>

<style>

</style>