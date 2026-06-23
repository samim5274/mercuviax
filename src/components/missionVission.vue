<template>    
    <section
        id="mission-vision"
        class="bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white"
    >
        <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-10">
            <!-- Section Header -->
            <div class="mx-auto mb-16 max-w-3xl text-center">
                <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-teal-600 dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-300">
                    <span class="flex h-1.5 w-1.5 rounded-full bg-teal-400"></span>
                    Our Foundation
                </div>

                <h2 class="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
                    Mission & Vision
                </h2>

                <p class="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                    At MercuviaX, we believe software should not only solve problems but also engineer
                    sustainable growth, operational efficiency, and long-term business value.
                </p>
            </div>

            <!-- Mission Block -->
            <div
                class="group mb-12 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xs transition-all duration-300 hover:border-teal-400/50 hover:shadow-xl hover:shadow-teal-500/[0.03] dark:border-white/5 dark:bg-white/[0.02]"
            >
                <div class="grid items-center lg:grid-cols-2">
                    <!-- Image Wrapper -->
                    <div class="relative h-full min-h-[340px] overflow-hidden bg-slate-100 dark:bg-slate-900">
                        <img
                            src="/images/mission.jpg"
                            alt="Our Mission"
                            class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>

                        <div class="absolute bottom-6 left-6">
                            <span class="inline-flex items-center rounded-lg bg-white/10 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-white backdrop-blur-md ring-1 ring-white/10 dark:bg-slate-950/40 dark:ring-white/5">
                                Mission
                            </span>
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="p-8 sm:p-10 lg:p-12 xl:p-14">
                        <div class="mb-4 inline-flex rounded-lg border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-semibold text-teal-600 dark:text-teal-300">
                            Our Core Commitment
                        </div>

                        <h3 class="max-w-xl text-2xl font-black tracking-tight leading-snug text-slate-900 dark:text-white sm:text-3xl">
                            Deliver practical and innovative software solutions for real business needs
                        </h3>

                        <div class="mt-5 h-[3px] w-14 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500"></div>

                        <p class="mt-6 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                            Our mission is to build reliable, enterprise-grade, and intuitive digital ecosystems that empower educational institutions, modern healthcare facilities, and fast-scaling retail companies to run flawlessly.
                        </p>

                        <p class="mt-4 text-sm leading-relaxed text-slate-400 dark:text-slate-500">
                            We focus on mapping workflows deeply and transforming complex operational friction into smooth, elegant, and secure code architecture.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Vision Block -->
            <div
                class="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xs transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/[0.03] dark:border-white/5 dark:bg-white/[0.02]"
            >
                <div class="grid items-center lg:grid-cols-2">
                    <!-- Content (First on Large Screens) -->
                    <div class="order-2 p-8 sm:p-10 lg:order-1 lg:p-12 xl:p-14">
                        <div class="mb-4 inline-flex rounded-lg border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                            Our Future Outlook
                        </div>

                        <h3 class="max-w-xl text-2xl font-black tracking-tight leading-snug text-slate-900 dark:text-white sm:text-3xl">
                            Become a global, trusted software brand that drives technological automation
                        </h3>

                        <div class="mt-5 h-[3px] w-14 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>

                        <p class="mt-6 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                            Our vision is to build MercuviaX into a premier technology standard—a synonym for dependability, scalable engineering, and user experience for modern businesses navigating hyper-growth.
                        </p>

                        <p class="mt-4 text-sm leading-relaxed text-slate-400 dark:text-slate-500">
                            We aim to catalyze digital transformation by developing future-ready platforms that don't just stay active, but predictively scale alongside your business success.
                        </p>
                    </div>

                    <!-- Image Wrapper -->
                    <div class="relative order-1 h-full min-h-[340px] overflow-hidden lg:order-2 bg-slate-100 dark:bg-slate-900">
                        <img
                            src="/images/vission.jpg"
                            alt="Our Vision"
                            class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>

                        <div class="absolute bottom-6 left-6">
                            <span class="inline-flex items-center rounded-lg bg-white/10 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-white backdrop-blur-md ring-1 ring-white/10 dark:bg-slate-950/40 dark:ring-white/5">
                                Vision
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>