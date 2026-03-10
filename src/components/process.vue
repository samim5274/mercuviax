<template>
    <section id="process" class="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div class="mb-12 max-w-2xl">
            <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Our Process</p>
            <h2 class="text-3xl font-black sm:text-4xl">A smooth path from idea to launch</h2>
        </div>

        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div
            v-for="(item, index) in process"
            :key="item"
            class="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6"
            >
            <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-blue-500 text-lg font-black text-slate-950">
                {{ index + 1 }}
            </div>
            <h3 class="text-xl font-bold">{{ item }}</h3>
            <p class="mt-3 text-slate-400">Structured execution with clarity, collaboration, and professional delivery standards.</p>
            </div>
        </div>
    </section>
</template>

<script setup>
const process = [
    'Discovery & strategy',
    'Design & prototyping',
    'Development & integration',
    'Launch & ongoing support',
]

</script>

<style>

</style>