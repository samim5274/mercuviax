<template>
    <div class="grid items-center gap-16 py-12 lg:grid-cols-2 lg:py-20">
        <!-- Left Column: Content & CTA -->
        <div class="flex flex-col items-start text-left">
            <div class="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-teal-600 dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-300">
                <span class="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse"></span>
                Future-ready Software Company
            </div>

            <h1 class="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-[1.15] dark:text-white">
                Build powerful digital systems with
                <span class="block mt-1 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                    MercuviaX
                </span>
            </h1>

            <p class="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
                We design and develop enterprise-grade software solutions that help modern businesses operate smarter, scale effortlessly, and dominate their industries.
            </p>

            <!-- CTA Buttons -->
            <div class="mt-8 flex flex-wrap gap-4 w-full sm:w-auto">
                <a
                    href="#contact"
                    class="w-full sm:w-auto text-center rounded-xl bg-gradient-to-r from-teal-400 to-cyan-500 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-teal-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal-500/30"
                >
                    Start a Project
                </a>

                <a
                    href="#services"
                    class="w-full sm:w-auto text-center rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
                >
                    Explore Services
                </a>
            </div>

            <!-- Stats Grid -->
            <div class="mt-12 grid grid-cols-2 gap-4 w-full sm:grid-cols-4">
                <div
                    v-for="item in stats"
                    :key="item.label"
                    class="rounded-xl border border-slate-200/60 bg-white/50 p-4 backdrop-blur-sm dark:border-white/5 dark:bg-white/[0.02]"
                >
                    <p class="text-2xl font-black tracking-tight text-slate-900 dark:text-white">{{ item.value }}</p>
                    <p class="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">{{ item.label }}</p>
                </div>
            </div>
        </div>

        <!-- Right Column: Interactive Dashboard Preview -->
        <div class="relative w-full lg:ml-4">
            <!-- Glow Effects -->
            <div class="absolute -left-12 top-12 h-48 w-48 rounded-full bg-teal-400/20 blur-[80px] dark:bg-teal-500/10" />
            <div class="absolute -right-12 bottom-12 h-48 w-48 rounded-full bg-blue-500/20 blur-[80px] dark:bg-blue-500/10" />

            <!-- Outer Glass Wrapper -->
            <div class="relative rounded-3xl border border-slate-200 bg-white/60 p-4 shadow-2xl backdrop-blur-md dark:border-white/10 dark:bg-slate-900/40">
                <div class="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-slate-950/60">
                    
                    <!-- Top Bar -->
                    <div class="mb-6 flex items-center justify-between border-b border-slate-100 pb-4 dark:border-white/5">
                        <div>
                            <p class="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Business Intelligence</p>
                            <h3 class="text-lg font-bold text-slate-800 dark:text-white">MercuviaX Dashboard</h3>
                        </div>
                        <div class="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
                            <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                            Live System
                        </div>
                    </div>

                    <!-- Dashboard Inner Grid -->
                    <div class="grid gap-5 md:grid-cols-2">
                        <!-- Chart Card -->
                        <div class="flex flex-col justify-between rounded-xl border border-slate-100 bg-slate-50/50 p-4 dark:border-white/5 dark:bg-white/[0.01]">
                            <p class="text-xs font-semibold text-slate-500 dark:text-slate-400">Performance Metrics</p>
                            <div class="mt-6 flex h-32 items-end gap-3 rounded-xl bg-gradient-to-t from-slate-100/50 to-transparent p-2 dark:from-slate-900/50">
                                <div
                                    v-for="(height, index) in performanceBars"
                                    :key="index"
                                    class="relative w-full rounded-t-md transition-all duration-500 group"
                                    :class="barColors[index]"
                                    :style="{ height }"
                                >
                                    <!-- Tooltip effect on hover -->
                                    <span class="absolute -top-7 left-1/2 -translate-x-1/2 scale-0 rounded bg-slate-900 px-1.5 py-0.5 text-[10px] text-white transition-all group-hover:scale-100 dark:bg-white dark:text-slate-950">
                                        {{ height }}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <!-- Services & Callout -->
                        <div class="flex flex-col gap-4">
                            <div class="rounded-xl border border-slate-100 bg-slate-50/50 p-4 dark:border-white/5 dark:bg-white/[0.01]">
                                <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">Core Expertise</p>
                                <div class="space-y-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                                    <div class="flex items-center gap-2 rounded-lg bg-white px-3 py-2.5 shadow-xs dark:bg-white/5">
                                        <span class="text-teal-400">✦</span> Web Application System
                                    </div>
                                    <div class="flex items-center gap-2 rounded-lg bg-white px-3 py-2.5 shadow-xs dark:bg-white/5">
                                        <span class="text-cyan-400">✦</span> Business Automation
                                    </div>
                                    <div class="flex items-center gap-2 rounded-lg bg-white px-3 py-2.5 shadow-xs dark:bg-white/5">
                                        <span class="text-blue-400">✦</span> Enterprise Integration
                                    </div>
                                </div>
                            </div>

                            <div class="rounded-xl bg-gradient-to-br from-teal-500/10 to-blue-600/10 p-4 border border-teal-500/10">
                                <p class="text-[11px] font-bold uppercase tracking-wide text-teal-600 dark:text-teal-400">Reliable. Scalable.</p>
                                <p class="mt-1 text-lg font-black tracking-tight text-slate-800 dark:text-white">Built for Growth</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const stats = [
  { value: '99%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Dedicated Support' },
  { value: '10+', label: 'Ready Modules' },
  { value: 'Swift', label: 'Execution Rate' },
]

const performanceBars = ['40%', '60%', '75%', '95%']
const barColors = [
  'bg-teal-400/80 dark:bg-teal-400', 
  'bg-cyan-400/80 dark:bg-cyan-400', 
  'bg-sky-400/80 dark:bg-sky-400', 
  'bg-blue-500/80 dark:bg-blue-500'
]
</script>