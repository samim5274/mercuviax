<template>
    <section id="contact" class="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div
            class="grid gap-6 rounded-[2rem] border border-slate-200 bg-gradient-to-r from-teal-50 to-blue-50 p-8 transition-colors duration-300 lg:grid-cols-[1.2fr_0.8fr] lg:p-10 dark:border-white/10 dark:from-teal-400/10 dark:to-blue-500/10"
        >
            <div>
                <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-300">
                    Contact Us
                </p>

                <h2 class="text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
                    Let’s build something exceptional together
                </h2>

                <p class="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
                    Ready to launch a software product, business platform, or digital solution for your brand? Mercuviax is here to help.
                </p>
            </div>

            <div
                class="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-slate-950/70"
            >
                <div class="space-y-4 text-slate-700 dark:text-slate-300">
                    <div>
                        <p class="text-sm text-slate-500 dark:text-slate-500">Company</p>
                        <p class="text-lg font-semibold text-slate-900 dark:text-white">Mercuviax</p>
                    </div>

                    <div>
                        <p class="text-sm text-slate-500 dark:text-slate-500">Phone</p>
                        <p class="text-lg font-semibold text-slate-900 dark:text-white">+8801533021557</p>
                    </div>

                    <div>
                        <p class="text-sm text-slate-500 dark:text-slate-500">Email</p>
                        <p class="text-lg font-semibold break-all text-slate-900 dark:text-white">
                            cse.shamim.cub@gmail.com
                        </p>
                    </div>

                    <div class="mt-4 flex flex-col sm:flex-row gap-3 w-full">
                        <!-- Book a Consultation Button -->
                        <button @click="callNow"
                            class="flex-1 rounded-xl bg-slate-900 px-6 py-3.5 text-center font-semibold text-white tracking-wide transition-all duration-200 hover:bg-slate-800 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 dark:focus:ring-offset-slate-900"
                        >
                            Book a Consultation
                        </button>
                        
                        <!-- WhatsApp Link Button -->
                        <a href="https://wa.me/8801533021557"
                            target="_blank"
                            class="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-center font-semibold text-slate-700 tracking-wide transition-all duration-200 hover:bg-slate-50 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">
                            <!-- WhatsApp Icon (Styled for perfect alignment) -->
                            <i class="fa-brands fa-whatsapp text-xl text-green-500 dark:text-green-400"></i>
                            <span>WhatsApp</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const callNow = () => {
    window.location.href = 'tel:+8801533021557';
};
</script>

<style>
</style>