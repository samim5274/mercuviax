<template>
    <section
        id="about"
        class="border-y border-slate-200/60 bg-slate-50/50 text-slate-900 transition-colors duration-300 dark:border-white/5 dark:bg-white/[0.01] dark:text-white"
    >
        <div class="mx-auto grid max-w-7xl gap-16 px-6 py-16 sm:py-24 lg:grid-cols-2 lg:px-10 items-center">
            
            <div class="flex flex-col items-start">
                <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-teal-600 dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-300">
                    <span class="flex h-1.5 w-1.5 rounded-full bg-teal-400"></span>
                    Why MercuviaX
                </div>

                <h2 class="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.15] dark:text-white">
                    A premium technology partner for ambitious brands
                </h2>

                <p class="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                    MercuviaX helps companies transform complex ideas into dependable, market-leading digital products. Our focus is simple: clear strategy, flawless execution, modern design, and highly scalable development.
                </p>

                <p class="mt-4 text-base leading-relaxed text-slate-500 dark:text-slate-400">
                    Whether you need an enterprise-grade custom platform, internal workflow automation software, or a beautifully polished web product, we engineer systems that perform at peak efficiency and scale seamlessly with your growth.
                </p>
                
                <div class="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-slate-200/60 pt-6 w-full dark:border-white/5">
                    <div class="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                        <span class="text-teal-500">✓</span> Client-Centric Strategy
                    </div>
                    <div class="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                        <span class="text-cyan-500">✓</span> Agile Engineering
                    </div>
                    <div class="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                        <span class="text-blue-500">✓</span> Enterprise Security
                    </div>
                </div>
            </div>

            <div class="grid gap-4 sm:grid-cols-2">
                <div class="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:shadow-lg hover:shadow-teal-500/[0.03] dark:border-white/5 dark:bg-slate-900/40 dark:hover:border-teal-400/20 dark:hover:bg-slate-900/60">
                    <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/5 text-teal-600 border border-teal-500/10 transition-colors duration-300 group-hover:bg-teal-500 group-hover:text-white dark:bg-teal-400/10 dark:text-teal-300 dark:group-hover:bg-teal-400 dark:group-hover:text-slate-950">
                        <i class="fa-solid fa-wand-magic-sparkles text-sm"></i>
                    </div>
                    <h3 class="text-lg font-bold tracking-tight text-slate-900 dark:text-white">Modern Design</h3>
                    <p class="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                        Premium interfaces with clean visual structure, strong brand identity, and user-first clarity.
                    </p>
                </div>

                <div class="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/[0.03] dark:border-white/5 dark:bg-slate-900/40 dark:hover:border-cyan-400/20 dark:hover:bg-slate-900/60">
                    <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/5 text-cyan-600 border border-cyan-500/10 transition-colors duration-300 group-hover:bg-cyan-500 group-hover:text-white dark:bg-cyan-400/10 dark:text-cyan-300 dark:group-hover:bg-cyan-400 dark:group-hover:text-slate-950">
                        <i class="fa-solid fa-layer-group text-sm"></i>
                    </div>
                    <h3 class="text-lg font-bold tracking-tight text-slate-900 dark:text-white">Scalable Code</h3>
                    <p class="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                        Reliable micro-architecture and bulletproof systems designed for long-term global expansion.
                    </p>
                </div>

                <div class="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-lg hover:shadow-sky-500/[0.03] dark:border-white/5 dark:bg-slate-900/40 dark:hover:border-sky-400/20 dark:hover:bg-slate-900/60">
                    <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/5 text-sky-600 border border-sky-500/10 transition-colors duration-300 group-hover:bg-sky-500 group-hover:text-white dark:bg-sky-400/10 dark:text-sky-300 dark:group-hover:bg-sky-400 dark:group-hover:text-slate-950">
                        <i class="fa-solid fa-chart-line text-sm"></i>
                    </div>
                    <h3 class="text-lg font-bold tracking-tight text-slate-900 dark:text-white">Business Focus</h3>
                    <p class="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                        Technology engineering aligned perfectly with operational efficiency and measurable ROI.
                    </p>
                </div>

                <div class="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/[0.03] dark:border-white/5 dark:bg-slate-900/40 dark:hover:border-blue-500/20 dark:hover:bg-slate-900/60">
                    <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/5 text-blue-600 border border-blue-500/10 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white dark:bg-blue-400/10 dark:text-blue-300 dark:group-hover:bg-blue-400 dark:group-hover:text-slate-950">
                        <i class="fa-solid fa-handshake-angle text-sm"></i>
                    </div>
                    <h3 class="text-lg font-bold tracking-tight text-slate-900 dark:text-white">Trusted Support</h3>
                    <p class="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                        Continuous improvement, 24/7 post-launch monitoring, and a true partner mindset.
                    </p>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
</script>