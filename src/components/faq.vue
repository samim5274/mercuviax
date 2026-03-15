<template>
    <section id="faq" class="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div class="mb-12 max-w-2xl">
            <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-300">
                FAQ
            </p>

            <h2 class="text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
                Common questions about Mercuviax
            </h2>
        </div>

        <div class="space-y-4">
            <div
                v-for="item in faqs"
                :key="item.q"
                class="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.03]"
            >
                <h3 class="text-lg font-bold text-slate-900 dark:text-white">
                    {{ item.q }}
                </h3>

                <p class="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                    {{ item.a }}
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
const faqs = [
  {
    q: 'What kind of software does Mercuviax build?',
    a: 'We build business websites, custom web applications, enterprise tools, portals, dashboards, and scalable digital platforms.',
  },
  {
    q: 'Do you provide design and development both?',
    a: 'Yes. We handle UI/UX, frontend experience, backend development, integrations, launch, and ongoing support.',
  },
  {
    q: 'Can Mercuviax work with growing businesses?',
    a: 'Absolutely. Our solutions are designed to support modern startups, service brands, and businesses preparing to scale.',
  },
]
</script>

<style>
</style>