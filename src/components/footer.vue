<template>
    <footer class="border-t border-slate-200 bg-white/80 transition-colors duration-300 dark:border-white/5 dark:bg-slate-950/80">
        <div class="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-10">
            
            <div class="flex flex-col items-start">
                <div class="flex items-center gap-3">
                    <div class="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-600 shadow-md ring-1 ring-white/20 overflow-hidden">
                        <div class="absolute inset-0 bg-white/10"></div>
                        <img :src="logo" alt="MercuviaX Logo" class="relative z-10 h-6 w-6 object-contain" />
                    </div>

                    <div>
                        <p class="text-lg font-black tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent dark:from-white dark:to-slate-300">MercuviaX</p>
                        <p class="text-[10px] font-medium tracking-wide text-slate-500 uppercase dark:text-slate-400">Smart Software</p>
                    </div>
                </div>

                <p class="mt-5 max-w-sm text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    We engineer premium digital products, high-performance web systems, and custom automated platforms designed for modern corporate expansion.
                </p>

                <div class="mt-6 flex gap-3">
                    <a href="https://www.facebook.com/mercuviax" target="_blank" aria-label="Facebook" class="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-500 transition-all hover:bg-teal-500 hover:text-white hover:border-transparent dark:bg-white/5 dark:border-white/5 dark:text-slate-400 dark:hover:bg-teal-400 dark:hover:text-slate-950">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/131974060/admin/dashboard/" target="_blank" aria-label="LinkedIn" class="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-500 transition-all hover:bg-cyan-500 hover:text-white hover:border-transparent dark:bg-white/5 dark:border-white/5 dark:text-slate-400 dark:hover:bg-cyan-400 dark:hover:text-slate-950">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.instagram.com/mercuviax/" target="_blank" aria-label="Instagram" class="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-500 transition-all hover:bg-slate-900 hover:text-white hover:border-transparent dark:bg-white/5 dark:border-white/5 dark:text-slate-400 dark:hover:bg-white dark:hover:text-slate-950">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>

            <div>
                <h3 class="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">Quick Links</h3>
                
                <div class="mt-5 flex flex-col gap-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                    <a href="#services" class="inline-flex items-center gap-1 transition-colors duration-200 hover:text-teal-500 dark:hover:text-teal-400 group">
                        <span class="opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1">→</span> Services
                    </a>
                    <a href="#portfolio" class="inline-flex items-center gap-1 transition-colors duration-200 hover:text-teal-500 dark:hover:text-teal-400 group">
                        <span class="opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1">→</span> Portfolio
                    </a>
                    <a href="#about" class="inline-flex items-center gap-1 transition-colors duration-200 hover:text-teal-500 dark:hover:text-teal-400 group">
                        <span class="opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1">→</span> About
                    </a>
                    <a href="#process" class="inline-flex items-center gap-1 transition-colors duration-200 hover:text-teal-500 dark:hover:text-teal-400 group">
                        <span class="opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1">→</span> Process
                    </a>
                </div>
            </div>

            <div>
                <h3 class="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">Get in Touch</h3>

                <div class="mt-5 flex flex-col gap-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                    <a href="tel:+8801533021557" class="flex items-center gap-3 transition-colors duration-200 hover:text-teal-500 dark:hover:text-teal-400">
                        <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 border border-slate-200/60 text-slate-400 dark:bg-white/5 dark:border-white/5"><i class="fa-solid fa-phone text-xs"></i></span>
                        +880 1533-021557
                    </a>
                    <a href="mailto:mercuviax@gmail.com" class="flex items-center gap-3 transition-colors duration-200 hover:text-teal-500 dark:hover:text-teal-400 break-all">
                        <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 border border-slate-200/60 text-slate-400 dark:bg-white/5 dark:border-white/5"><i class="fa-solid fa-envelope text-xs"></i></span>
                        mercuviax@gmail.com
                    </a>
                    <div class="flex items-center gap-3">
                        <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 border border-slate-200/60 text-slate-400 dark:bg-white/5 dark:border-white/5"><i class="fa-solid fa-location-dot text-xs"></i></span>
                        Dhaka, Bangladesh
                    </div>
                </div>
            </div>
        </div>

        <div class="border-t border-slate-100 bg-slate-50/50 py-6 dark:border-white/5 dark:bg-slate-950/40">
            <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs font-medium text-slate-400 sm:flex-row lg:px-10">
                <p>© {{ new Date().getFullYear() }} MercuviaX. All rights reserved.</p>
                <div class="flex gap-6">
                    <a href="#" class="transition-colors duration-200 hover:text-slate-600 dark:hover:text-slate-300">Privacy Policy</a>
                    <a href="#" class="transition-colors duration-200 hover:text-slate-600 dark:hover:text-slate-300">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import logo from '../assets/logo.ico'
</script>