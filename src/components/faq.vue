<template>
    <section 
        id="faq" 
        class="mx-auto max-w-7xl px-6 py-16 sm:py-24 transition-colors duration-300 lg:px-10"
    >
        <div class="mb-14 max-w-3xl">
            <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-teal-600 dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-300">
                <span class="flex h-1.5 w-1.5 rounded-full bg-teal-400"></span>
                Questions & Answers
            </div>

            <h2 class="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.15] dark:text-white">
                Common questions about MercuviaX
            </h2>
        </div>

        <div class="mx-auto max-w-4xl space-y-4">
            <div
                v-for="(item, index) in faqs"
                :key="index"
                class="rounded-2xl border border-slate-200/80 bg-white transition-all duration-300 dark:border-white/5 dark:bg-white/[0.02]"
                :class="{ 'border-teal-400/40 shadow-lg shadow-teal-500/[0.02] dark:border-teal-400/20': activeIndex === index }"
            >
                <button
                    @click="toggleFAQ(index)"
                    class="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors duration-200 select-none group"
                >
                    <span 
                        class="text-base font-bold tracking-tight text-slate-900 transition-colors duration-200 dark:text-white"
                        :class="{ 'text-teal-600 dark:text-teal-400': activeIndex === index, 'group-hover:text-teal-500 dark:group-hover:text-teal-400': activeIndex !== index }"
                    >
                        {{ item.q }}
                    </span>
                    
                    <span 
                        class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-200/60 text-slate-500 transition-all duration-300 dark:bg-white/5 dark:border-white/5 dark:text-slate-400"
                        :class="{ 'rotate-180 bg-teal-500 text-white border-transparent dark:bg-teal-400 dark:text-slate-950': activeIndex === index }"
                    >
                        <i :class="activeIndex === index ? 'fa-solid fa-minus text-xs' : 'fa-solid fa-plus text-xs'"></i>
                    </span>
                </button>

                <div 
                    class="grid transition-all duration-300 ease-in-out"
                    :class="activeIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'"
                >
                    <div class="overflow-hidden">
                        <p class="px-6 pb-6 text-sm leading-relaxed text-slate-500 dark:text-slate-400 border-t border-slate-50 pt-4 dark:border-white/[0.02]">
                            {{ item.a }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(null)

const toggleFAQ = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index
}

const faqs = [
  {
    q: 'What kind of software does MercuviaX build?',
    a: 'We specialize in building bespoke web applications, enterprise management platforms (ERP/CRM), interactive dashboards, premium corporate websites, and scalable multi-vendor e-commerce architectures.',
  },
  {
    q: 'Do you provide both design and development?',
    a: 'Yes, we provide end-to-end services. This includes comprehensive UI/UX strategy, wireframing, high-fidelity responsive frontend development, scalable backend engineering, API integrations, secure cloud deployment, and long-term ecosystem maintenance.',
  },
  {
    q: 'Can MercuviaX work with growing businesses?',
    a: 'Absolutely. We architect our software to serve ambitious startups, regional service brands, and established organizations looking to automate workflows, optimize digital overheads, and scale with infrastructure certainty.',
  },
]
</script>