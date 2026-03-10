<template>
    <section class="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div class="grid gap-6 lg:grid-cols-3">
            <div
            v-for="item in testimonials"
            :key="item.quote"
            class="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6"
            >
            <p class="text-lg leading-8 text-slate-200">“{{ item.quote }}”</p>
            <div class="mt-6">
                <p class="font-bold text-white">{{ item.author }}</p>
                <p class="text-sm text-slate-400">{{ item.role }}</p>
            </div>
            </div>
        </div>
    </section>
</template>

<script  setup>
const testimonials = [
  {
    quote: 'Mercuviax delivered a polished, reliable product experience with clear communication and strong technical direction.',
    author: 'Business Client',
    role: 'Operations Team',
  },
  {
    quote: 'The design quality, structure, and professional execution gave our platform a premium brand feel from day one.',
    author: 'Startup Founder',
    role: 'Digital Product Owner',
  },
  {
    quote: 'From strategy to launch, the process felt organized, modern, and focused on real business outcomes.',
    author: 'Growth Partner',
    role: 'Technology Consultant',
  },
]
</script>

<style>

</style>