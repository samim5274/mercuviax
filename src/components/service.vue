<script setup>
import { ref } from 'vue'

const services = ref([
  {
    title: 'Custom Software Development',
    desc: 'We build secure, scalable, and business-focused custom software solutions tailored to your workflow, goals, and long-term growth.',
    icon: 'fa-solid fa-laptop-code',
  },
  {
    title: 'Website Development',
    desc: 'Modern, responsive, and high-performance websites designed to strengthen your brand presence and improve user engagement.',
    icon: 'fa-solid fa-globe',
  },
  {
    title: 'E-commerce Platforms',
    desc: 'Powerful e-commerce and marketplace solutions with vendor management, product control, order tracking, and secure payment integration.',
    icon: 'fa-solid fa-cart-shopping',
  },
  {
    title: 'Management Software',
    desc: 'Complete management systems for schools and businesses including operations, reporting, automation, user roles, and daily activity tracking.',
    icon: 'fa-solid fa-building',
  },
  {
    title: 'Mobile App Development',
    desc: 'Custom mobile applications built for smooth performance, intuitive user experience, and strong business functionality across devices.',
    icon: 'fa-solid fa-mobile-screen-button',
  },
  {
    title: 'UI/UX Design',
    desc: 'Clean, modern, and user-centered interface design that improves usability, builds trust, and creates a professional digital experience.',
    icon: 'fa-solid fa-pen-ruler',
  },
  {
    title: 'API Development',
    desc: 'Robust and well-structured API solutions for seamless system communication, third-party integrations, and scalable product architecture.',
    icon: 'fa-solid fa-code-branch',
  },
  {
    title: 'Maintenance & Support',
    desc: 'Ongoing maintenance, updates, bug fixing, monitoring, and technical support to keep your software reliable, secure, and future-ready.',
    icon: 'fa-solid fa-headset',
  },
])
</script>

<template>
  <section
    id="services"
    class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-10 transition-colors duration-300"
  >
    <div class="mb-14 max-w-3xl">
      <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-teal-600 dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-300">
        <span class="flex h-1.5 w-1.5 rounded-full bg-teal-400"></span>
        Our Expertise
      </div>

      <h2 class="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.15] dark:text-white">
        Professional software solutions tailored for modern businesses
      </h2>

      <p class="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
        We combine strategy, design, and engineering to deliver secure, scalable, and high-quality digital products that create long-term business value.
      </p>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div
        v-for="service in services"
        :key="service.title"
        class="group relative rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/50 hover:shadow-xl hover:shadow-teal-500/[0.05] dark:border-white/5 dark:bg-white/[0.02] dark:hover:border-teal-400/30 dark:hover:bg-white/[0.04] dark:hover:shadow-2xl dark:hover:shadow-teal-400/[0.03]"
      >
        <div
          class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 text-lg text-teal-600 border border-slate-200/60 shadow-xs transition-all duration-300 group-hover:scale-110 group-hover:from-teal-400 group-hover:to-cyan-400 group-hover:text-white group-hover:border-transparent dark:from-white/[0.03] dark:to-white/[0.08] dark:text-teal-400 dark:border-white/5 dark:group-hover:text-slate-950"
        >
          <i :class="service.icon"></i>
        </div>

        <h3 class="text-lg font-bold tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
          {{ service.title }}
        </h3>

        <p class="mt-2.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          {{ service.desc }}
        </p>
        
        <div class="absolute bottom-0 left-6 right-6 h-[2px] scale-x-0 bg-gradient-to-r from-teal-400 to-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
      </div>
    </div>
  </section>
</template>