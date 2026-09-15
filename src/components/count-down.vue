<template>
    <div class="flex items-center justify-center gap-3 sm:gap-4 mb-8">
        <!-- Days -->
        <div class="flex min-w-[70px] flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-3 shadow-xs transition-all duration-300 dark:border-white/5 dark:bg-slate-900/60 sm:min-w-[85px] sm:p-4">
            <span class="text-2xl font-black tracking-tight text-slate-900 dark:text-teal-400 sm:text-3xl">
                {{ formatTime(days) }}
            </span>
            <span class="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Days
            </span>
        </div>

        <span class="text-xl font-bold text-slate-400 dark:text-slate-600">:</span>

        <!-- Hours -->
        <div class="flex min-w-[70px] flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-3 shadow-xs transition-all duration-300 dark:border-white/5 dark:bg-slate-900/60 sm:min-w-[85px] sm:p-4">
            <span class="text-2xl font-black tracking-tight text-slate-900 dark:text-teal-400 sm:text-3xl">
                {{ formatTime(hours) }}
            </span>
            <span class="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Hours
            </span>
        </div>

        <span class="text-xl font-bold text-slate-400 dark:text-slate-600">:</span>

        <!-- Minutes -->
        <div class="flex min-w-[70px] flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-3 shadow-xs transition-all duration-300 dark:border-white/5 dark:bg-slate-900/60 sm:min-w-[85px] sm:p-4">
            <span class="text-2xl font-black tracking-tight text-slate-900 dark:text-teal-400 sm:text-3xl">
                {{ formatTime(minutes) }}
            </span>
            <span class="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Minutes
            </span>
        </div>

        <span class="text-xl font-bold text-slate-400 dark:text-slate-600">:</span>

        <!-- Seconds -->
        <div class="flex min-w-[70px] flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-3 shadow-xs transition-all duration-300 dark:border-white/5 dark:bg-slate-900/60 sm:min-w-[85px] sm:p-4">
            <span class="text-2xl font-black tracking-tight text-slate-900 dark:text-teal-400 sm:text-3xl">
                {{ formatTime(seconds) }}
            </span>
            <span class="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Seconds
            </span>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

let timer = null;

// Target Date
const targetDate = new Date('2026-09-30T23:59:59+06:00').getTime();

// Formatting single digits to double digits (e.g., 5 -> "05")
const formatTime = (value) => String(value).padStart(2, '0');

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        days.value = 0;
        hours.value = 0;
        minutes.value = 0;
        seconds.value = 0;

        if (timer) clearInterval(timer);
        return;
    }

    days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
};

onMounted(() => {
    updateCountdown();
    timer = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
    if (timer) clearInterval(timer);
});
</script>