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
    title: 'E-commerce / Multi-vendor Platform',
    desc: 'Powerful e-commerce and marketplace solutions with vendor management, product control, order tracking, and secure payment integration.',
    icon: 'fa-solid fa-cart-shopping',
  },
  {
    title: 'School / Business Management Software',
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
    class="mx-auto max-w-7xl px-6 py-20 lg:px-10 transition-colors duration-300"
  >
    <div class="mb-12 max-w-3xl">
      <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-300">
        Our Services
      </p>

      <h2 class="text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
        Professional software solutions tailored for modern businesses
      </h2>

      <p class="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
        We combine strategy, design, and engineering to deliver secure, scalable, and high-quality digital products that create long-term business value.
      </p>
    </div>

    <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <div
        v-for="service in services"
        :key="service.title"
        class="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-[0_20px_50px_rgba(20,184,166,0.10)] dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-teal-400/30 dark:hover:bg-white/[0.05] dark:hover:shadow-[0_20px_50px_rgba(20,184,166,0.08)]"
      >
        <div
          class="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500/10 to-blue-500/10 text-xl text-teal-600 ring-1 ring-slate-200 transition duration-300 group-hover:scale-105 group-hover:from-teal-500/20 group-hover:to-blue-500/20 dark:from-teal-400/20 dark:to-blue-500/20 dark:text-teal-300 dark:ring-white/10 dark:group-hover:from-teal-400/30 dark:group-hover:to-blue-500/30"
        >
          <i :class="service.icon"></i>
        </div>

        <h3 class="text-xl font-bold text-slate-900 dark:text-white">
          {{ service.title }}
        </h3>

        <p class="mt-3 leading-7 text-slate-600 dark:text-slate-400">
          {{ service.desc }}
        </p>
      </div>
    </div>
  </section>
</template>