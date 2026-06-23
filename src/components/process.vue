<template>
    <section 
        id="process" 
        class="mx-auto max-w-7xl px-6 py-16 sm:py-24 transition-colors duration-300 lg:px-10"
    >
        <!-- Section Header -->
        <div class="mb-14 max-w-3xl">
            <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-teal-600 dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-300">
                <span class="flex h-1.5 w-1.5 rounded-full bg-teal-400"></span>
                How We Work
            </div>

            <h2 class="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.15] dark:text-white">
                A structured path from raw idea to successful launch
            </h2>
        </div>

        <!-- Process Grid -->
        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div
                v-for="(item, index) in steps"
                :key="item.title"
                class="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/50 hover:shadow-xl hover:shadow-teal-500/[0.03] dark:border-white/5 dark:bg-white/[0.02] dark:hover:border-teal-400/20 dark:hover:bg-white/[0.04]"
            >
                <!-- Large Subtle Background Number -->
                <div class="absolute -right-4 -top-6 select-none font-black text-7xl text-slate-100/70 transition-colors duration-300 group-hover:text-teal-500/10 dark:text-slate-900/40">
                    0{{ index + 1 }}
                </div>

                <!-- Step Counter Bubble -->
                <div class="relative z-10 mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 text-sm font-black text-slate-950 shadow-md shadow-teal-500/10 transition-transform duration-300 group-hover:scale-110">
                    {{ index + 1 }}
                </div>

                <!-- Step Content -->
                <div class="relative z-10">
                    <h3 class="text-lg font-bold tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
                        {{ item.title }}
                    </h3>

                    <p class="mt-2.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                        {{ item.desc }}
                    </p>
                </div>
                
                <!-- Animated Progress Line Effect on Hover -->
                <div class="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-teal-400 to-cyan-500 transition-all duration-300 group-hover:w-full"></div>
            </div>
        </div>
    </section>
</template>

<script setup>
const steps = [
    {
        title: 'Discovery & Strategy',
        desc: 'We analyze your requirements, define deep business goals, mapping workflows, and create a clear, risk-free technical blueprint.'
    },
    {
        title: 'Design & Prototyping',
        desc: 'Crafting high-fidelity interactive wireframes and modern interfaces to visualize the user journey before writing code.'
    },
    {
        title: 'Development & Testing',
        desc: 'Engineering robust backend architecture combined with clean, optimized frontend code, driven by rigorous QA.'
    },
    {
        title: 'Deployment & Support',
        desc: 'Smooth cloud deployment, performance tracking, and proactive long-term scaling assistance as your userbase grows.'
    }
]
</script>