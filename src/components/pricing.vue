<template>
    <section
        id="pricing"
        class="border-y border-slate-200/60 bg-slate-50/50 text-slate-900 transition-colors duration-300 dark:border-white/5 dark:bg-white/[0.01] dark:text-white"
    >
        <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-10">
            <!-- Section Header -->
            <div class="mb-12 flex flex-col items-center text-center">
                <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-teal-600 dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-300">
                    <span class="flex h-1.5 w-1.5 rounded-full bg-teal-400"></span>
                    Flexible Pricing
                </div>

                <h2 class="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
                    Transparent Pricing Plans
                </h2>

                <p class="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
                    Choose the right architecture and feature set tailored for your business growth. No hidden costs.
                </p>
            </div>

            <CountdownTimer />

            <!-- Pricing Table Card Wrapper -->
            <div class="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xs dark:border-white/5 dark:bg-slate-900/40">
                <div class="hidden overflow-x-auto md:block">
                    <table class="w-full text-left text-sm border-collapse">
                        <thead class="border-b-2 border-teal-600/20 bg-gradient-to-r from-slate-50 to-slate-100/50 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:border-teal-400/10 dark:from-slate-900 dark:to-slate-900/50 dark:text-slate-300">
                            <tr>
                                <th scope="col" class="px-6 py-4">Website Type</th>
                                <th scope="col" class="px-6 py-4">Language / Framework</th>
                                <th scope="col" class="px-6 py-4">Domain &amp; Hosting</th>
                                <th scope="col" class="px-6 py-4">Logo &amp; Banner</th>
                                <th scope="col" class="px-6 py-4 text-right">Website Price</th>
                                <th scope="col" class="px-6 py-4 text-right">Discount Price</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200/70 dark:divide-white/5">
                            <tr
                                v-for="(item, index) in pricingData"
                                :key="index"
                                class="group transition-colors duration-150 hover:bg-teal-500/[0.035] dark:hover:bg-teal-400/[0.035]"
                            >
                                <td class="whitespace-nowrap px-6 py-4 font-semibold tracking-tight text-slate-900 dark:text-white">
                                    {{ item.type }}
                                </td>
                                <td class="whitespace-nowrap px-6 py-4 text-slate-600 dark:text-slate-400">
                                    {{ item.framework }}
                                </td>
                                <td class="whitespace-nowrap px-6 py-4">
                                    <span class="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-400">
                                        {{ item.domainHosting }}
                                    </span>
                                </td>
                                <td class="whitespace-nowrap px-6 py-4">
                                    <span class="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-700 dark:bg-teal-400/10 dark:text-teal-400">
                                        <svg class="h-3.5 w-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {{ item.logoBanner }}
                                    </span>
                                </td>
                                <td class="whitespace-nowrap px-6 py-4 text-right font-medium text-slate-400 line-through decoration-slate-300 dark:text-slate-500 dark:decoration-slate-600">
                                    {{ item.originalPrice }}
                                </td>
                                <td class="whitespace-nowrap px-6 py-4 text-right font-bold tabular-nums">
                                    <span
                                        :class="item.discountPrice === 'No Discount'
                                            ? 'text-slate-400 dark:text-slate-500 font-normal'
                                            : 'text-amber-600 dark:text-amber-400'"
                                    >
                                        {{ item.discountPrice }}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="grid gap-4 p-4 md:hidden sm:grid-cols-2">
                    <div 
                        v-for="(item, index) in pricingData" 
                        :key="index"
                        class="flex flex-col justify-between rounded-xl border border-slate-200/80 bg-slate-50/50 p-5 transition-all dark:border-white/5 dark:bg-slate-900/60"
                    >
                        <div>
                            <div class="flex items-start justify-between gap-2 border-b border-slate-200/60 pb-3 dark:border-white/5">
                                <h3 class="font-bold text-slate-900 dark:text-white">
                                    {{ item.type }}
                                </h3>
                                <span 
                                    class="rounded-md px-2 py-0.5 text-xs font-semibold"
                                    :class="item.discountPrice === 'No Discount' 
                                        ? 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400' 
                                        : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'"
                                >
                                    {{ item.discountPrice === 'No Discount' ? 'Regular' : 'Offer' }}
                                </span>
                            </div>

                            <div class="mt-4 space-y-2.5 text-xs">
                                <div class="flex justify-between">
                                    <span class="text-slate-500 dark:text-slate-400">Framework:</span>
                                    <span class="font-medium text-slate-700 dark:text-slate-300">{{ item.framework }}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-slate-500 dark:text-slate-400">Domain & Hosting:</span>
                                    <span class="font-medium text-slate-600 dark:text-slate-400">{{ item.domainHosting }}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-slate-500 dark:text-slate-400">Logo & Banner:</span>
                                    <span class="font-semibold text-teal-600 dark:text-teal-400">✓ {{ item.logoBanner }}</span>
                                </div>
                            </div>
                        </div>

                        <div class="mt-5 flex items-baseline justify-between border-t border-slate-200/60 pt-3 dark:border-white/5">
                            <span class="text-xs text-slate-400 line-through dark:text-slate-500">
                                {{ item.originalPrice }}
                            </span>
                            <span 
                                class="text-base font-bold"
                                :class="item.discountPrice === 'No Discount' 
                                    ? 'text-slate-700 dark:text-slate-300' 
                                    : 'text-amber-600 dark:text-amber-400'"
                            >
                                {{ item.discountPrice }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

import CountdownTimer from './count-down.vue';

const pricingData = [
    {
        type: 'Landing Page',
        framework: 'PHP / Laravel',
        domainHosting: 'Excluded',
        logoBanner: 'Included',
        originalPrice: '৳10,000',
        discountPrice: '৳8,000'
    },
    {
        type: 'Portfolio Website',
        framework: 'PHP / Laravel',
        domainHosting: 'Excluded',
        logoBanner: 'Included',
        originalPrice: '৳12,000',
        discountPrice: '৳10,000'
    },
    {
        type: 'Agency Website',
        framework: 'PHP / Laravel',
        domainHosting: 'Excluded',
        logoBanner: 'Included',
        originalPrice: '৳18,000',
        discountPrice: '৳15,000'
    },
    {
        type: 'POS - Point Of Sale',
        framework: 'PHP / Laravel',
        domainHosting: 'Excluded',
        logoBanner: 'Included',
        originalPrice: '৳25,000',
        discountPrice: '৳9,999'
    },
    {
        type: 'Inventory Management Software',
        framework: 'PHP / Laravel / Vue.js',
        domainHosting: 'Excluded',
        logoBanner: 'Excluded',
        originalPrice: '৳60,000',
        discountPrice: '৳35,000'
    },
    {
        type: 'Accounting Software',
        framework: 'PHP / Laravel / Vue.js',
        domainHosting: 'Excluded',
        logoBanner: 'Excluded',
        originalPrice: '৳80,000',
        discountPrice: '৳45,000'
    },
    {
        type: 'Hospital & Clinic Management Software',
        framework: 'PHP / Laravel / Vue.js',
        domainHosting: 'Excluded',
        logoBanner: 'Excluded',
        originalPrice: '৳1,20,000',
        discountPrice: '৳60,000'
    },
    {
        type: 'School/College Management Software',
        framework: 'PHP / Laravel / Datalayer',
        domainHosting: 'Excluded',
        logoBanner: 'Excluded',
        originalPrice: '৳1,20,000',
        discountPrice: '৳65,000'
    },
    {
        type: 'E-commerce Website (Basic)',
        framework: 'PHP / Laravel / Datalayer',
        domainHosting: 'Excluded',
        logoBanner: 'Included',
        originalPrice: '৳40,000',
        discountPrice: '৳25,000'
    },
    {
        type: 'E-commerce Website (Standard)',
        framework: 'PHP / Laravel / Datalayer',
        domainHosting: 'Excluded',
        logoBanner: 'Included',
        originalPrice: '৳60,000',
        discountPrice: '৳35,000'
    },
    {
        type: 'E-commerce Website (Premium)',
        framework: 'Vue.Js / PHP / Laravel / Datalayer',
        domainHosting: 'Excluded',
        logoBanner: 'Included',
        originalPrice: '৳80,000',
        discountPrice: '৳45,000'
    },
    {
        type: 'E-commerce Website (Ultra Premium)',
        framework: 'Vue.Js / PHP / Laravel / Datalayer / CRO Based',
        domainHosting: 'Excluded',
        logoBanner: 'Included',
        originalPrice: '৳1,00,000',
        discountPrice: '৳60,000'
    },
    {
        type: 'E-commerce Website (Multi-vendor)',
        framework: 'PHP / Laravel',
        domainHosting: 'Excluded',
        logoBanner: 'Included',
        originalPrice: '৳2,00,000+',
        discountPrice: '৳1,20,000+'
    }
];
</script>