<template>
    <section 
        id="testimonials"
        class="mx-auto max-w-7xl px-6 py-16 sm:py-24 transition-colors duration-300 lg:px-10"
    >
        <!-- Section Header -->
        <div class="mb-14 max-w-3xl">
            <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-teal-600 dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-300">
                <span class="flex h-1.5 w-1.5 rounded-full bg-teal-400"></span>
                Client Reviews
            </div>

            <h2 class="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.15] dark:text-white">
                Trusted by forward-thinking companies & founders
            </h2>
        </div>

        <!-- Testimonials Grid -->
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div
                v-for="item in testimonials"
                :key="item.quote"
                class="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:shadow-lg hover:shadow-teal-500/[0.03] dark:border-white/5 dark:bg-white/[0.02] dark:hover:border-teal-400/20 dark:hover:bg-white/[0.04]"
            >
                <div>
                    <!-- Star Rating & Quote Icon -->
                    <div class="mb-5 flex items-center justify-between text-amber-400">
                        <div class="flex gap-1 text-sm">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <span class="text-3xl font-serif text-slate-200 dark:text-slate-800 transition-colors duration-300 group-hover:text-teal-500/20">“</span>
                    </div>

                    <!-- Quote Text -->
                    <p class="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                        “{{ item.quote }}”
                    </p>
                </div>

                <!-- Author Info -->
                <div class="mt-8 flex items-center gap-3.5 border-t border-slate-100 pt-4 dark:border-white/5">
                    <!-- Elegant User Initials Avatar -->
                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-slate-100 to-slate-200 text-xs font-bold text-slate-600 ring-1 ring-slate-200/50 dark:from-slate-800 dark:to-slate-900 dark:text-slate-300 dark:ring-white/10">
                        {{ item.author.split(' ').map(n => n[0]).join('') }}
                    </div>
                    
                    <div>
                        <p class="text-sm font-bold tracking-tight text-slate-900 dark:text-white">
                            {{ item.author }}
                        </p>
                        <p class="text-xs font-medium text-slate-500 dark:text-slate-400">
                            {{ item.role }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const testimonials = [
  {
    quote: 'MercuviaX delivered a polished, reliable product experience with clear communication and strong technical direction.',
    author: 'Shahed Parves',
    role: 'CEO of 360 Degree Ltd.',
  },
  {
    quote: 'The design quality, structure, and professional execution gave our platform a premium brand feel from day one.',
    author: 'Swapon Kumar Shaha',
    role: 'Software Developer of Quilion Tech',
  },
  {
    quote: 'From strategy to launch, the process felt organized, modern, and focused on real business outcomes.',
    author: 'Muhaiminul Islam',
    role: 'Manager of FIFO Solution',
  },
]
</script>