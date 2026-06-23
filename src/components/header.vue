<template>
    <section class="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
        <!-- Background Gradients & Grids -->
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.15),transparent_35%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_35%),linear-gradient(to_bottom,#020617,#0f172a,#020617)] dark:block hidden"/>
        <div class="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(0,0,0,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,1)_1px,transparent_1px)] [background-size:32px_32px] dark:hidden"/>
        <div class="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:32px_32px] hidden dark:block"/>

        <!-- Sticky Header Container -->
        <div class="sticky top-0 z-50 w-full px-4 py-4 transition-all duration-300 lg:px-10" :class="{ 'py-2': isScrolled }">
            <header 
                class="mx-auto max-w-7xl flex items-center justify-between rounded-full border border-slate-200/80 bg-white/70 px-6 py-3 shadow-sm backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-slate-900/40"
                :class="{ 'shadow-md border-slate-300/50 dark:border-white/15 dark:bg-slate-900/70': isScrolled }"
            >
                <!-- Logo & Brand Info -->
                <div class="flex items-center gap-3">
                    <div class="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-600 shadow-md ring-1 ring-white/20 overflow-hidden">
                        <div class="absolute inset-0 bg-white/10"></div>
                        <img :src="logo" alt="MercoviaX Logo" class="relative z-10 h-6 w-6 object-contain" />
                    </div>
                    <div>
                        <p class="text-lg font-black tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent dark:from-white dark:to-slate-300">MercuviaX</p>
                        <p class="hidden sm:block text-[10px] font-medium tracking-wide text-slate-500 uppercase dark:text-slate-400">Smart Software</p>
                    </div>
                </div>

                <!-- Navigation Links -->
                <nav class="hidden items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300 lg:flex">
                    <a href="#services" class="relative py-1 transition hover:text-teal-500 dark:hover:text-teal-400 group">Services<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full"></span></a>
                    <a href="#about" class="relative py-1 transition hover:text-teal-500 dark:hover:text-teal-400 group">About<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full"></span></a>
                    <a href="#portfolio" class="relative py-1 transition hover:text-teal-500 dark:hover:text-teal-400 group">Portfolio<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full"></span></a>
                    <a href="#process" class="relative py-1 transition hover:text-teal-500 dark:hover:text-teal-400 group">Process<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full"></span></a>
                    <a href="#faq" class="relative py-1 transition hover:text-teal-500 dark:hover:text-teal-400 group">FAQ<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full"></span></a>
                    <a href="#contact" class="relative py-1 transition hover:text-teal-500 dark:hover:text-teal-400 group">Contact<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full"></span></a>
                </nav>

                <!-- Action Actions -->
                <div class="flex items-center gap-3">
                    <button
                        @click="toggleTheme"
                        class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                        aria-label="Toggle Theme"
                    >
                        <span v-if="isDark" class="text-sm">☀️</span>
                        <span v-else class="text-sm">🌙</span>
                    </button>

                    <a
                        href="#contact"
                        class="hidden rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 md:inline-flex dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
                    >
                        Let’s Talk
                    </a>
                </div>
            </header>
        </div>

        <!-- Main Hero Content -->
        <div class="relative mx-auto max-w-7xl px-6 lg:px-10">
            <HeroSection />
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '../assets/logo.ico'
import HeroSection from './hero.vue'

const isDark = ref(false)
const isScrolled = ref(false)

const setTheme = (theme) => {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark')
        isDark.value = true
    } else {
        document.documentElement.classList.remove('dark')
        isDark.value = false
    }
    localStorage.setItem('theme', theme)
}

const toggleTheme = () => {
    setTheme(isDark.value ? 'light' : 'dark')
}

const handleScroll = () => {
    isScrolled.value = window.scrollY > 20
}

onMounted(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>