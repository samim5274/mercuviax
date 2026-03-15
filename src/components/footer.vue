<template>
    <footer class="border-t border-slate-200 bg-white/80 transition-colors duration-300 dark:border-white/10 dark:bg-slate-950/80">
        <div class="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-10">
            <div>
                <div class="flex items-center gap-3">
                    <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-blue-500 shadow-lg shadow-teal-500/20">
                        <img
                            :src="logo"
                            alt="MercoviaX Logo"
                            class="relative z-10 h-9 w-9 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
                        />
                    </div>

                    <div>
                        <p class="text-xl font-bold tracking-wide text-slate-900 dark:text-white">Mercuviax</p>
                        <p class="text-xs text-slate-600 dark:text-slate-300">
                            Innovative software solutions for business growth
                        </p>
                    </div>
                </div>

                <p class="mt-4 max-w-md leading-7 text-slate-600 dark:text-slate-400">
                    Mercuviax builds premium digital products, professional websites, and scalable software systems for modern businesses.
                </p>
            </div>

            <div>
                <h3 class="text-lg font-bold text-slate-900 dark:text-white">Quick Links</h3>

                <div class="mt-4 space-y-3 text-slate-600 dark:text-slate-400">
                    <a href="#services" class="block transition hover:text-slate-900 dark:hover:text-white">Services</a>
                    <a href="#portfolio" class="block transition hover:text-slate-900 dark:hover:text-white">Portfolio</a>
                    <a href="#about" class="block transition hover:text-slate-900 dark:hover:text-white">About</a>
                    <a href="#contact" class="block transition hover:text-slate-900 dark:hover:text-white">Contact</a>
                </div>
            </div>

            <div>
                <h3 class="text-lg font-bold text-slate-900 dark:text-white">Contact</h3>

                <div class="mt-4 space-y-3 text-slate-600 dark:text-slate-400">
                    <p>+880 1533-021557</p>
                    <p class="break-all">mercuviax@gmail.com</p>
                    <p>Bangladesh</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import logo from '../assets/logo.ico'
</script>

<style>
</style>