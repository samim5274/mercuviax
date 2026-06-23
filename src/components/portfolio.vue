<template>
    <section
        id="portfolio"
        class="mx-auto max-w-7xl px-6 py-16 sm:py-24 text-slate-900 transition-colors duration-300 dark:text-white lg:px-10"
    >
        <!-- Section Header -->
        <div class="mb-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div class="max-w-2xl">
                <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-teal-600 dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-300">
                    <span class="flex h-1.5 w-1.5 rounded-full bg-teal-400"></span>
                    Featured Work
                </div>

                <h2 class="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.15] dark:text-white">
                    Real projects built for education, healthcare, retail, and business growth
                </h2>
            </div>

            <p class="max-w-xl text-base leading-relaxed text-slate-500 lg:mb-2 dark:text-slate-400">
                We build practical, reliable, and enterprise-grade software solutions engineered for schools, modern healthcare facilities, high-traffic retail shops, and corporations.
            </p>
        </div>

        <!-- Projects Grid -->
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div
                v-for="project in projects"
                :key="project.name"
                class="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/50 hover:shadow-xl hover:shadow-teal-500/[0.05] dark:border-white/5 dark:bg-white/[0.02] dark:hover:border-teal-400/30 dark:hover:bg-white/[0.04] dark:hover:shadow-2xl dark:hover:shadow-teal-400/[0.03]"
            >
                <!-- Project Image Wrapper -->
                <div class="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-900">
                    <img
                        :src="project.image"
                        :alt="project.name"
                        class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />

                    <!-- Soft Gradient Overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>

                    <!-- Project Badge on Image -->
                    <div class="absolute inset-x-0 bottom-0 p-5">
                        <span class="inline-flex items-center rounded-lg bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md ring-1 ring-white/10 dark:bg-slate-950/40 dark:ring-white/5">
                            {{ project.type }}
                        </span>
                    </div>
                </div>

                <!-- Project Content -->
                <div class="p-6">
                    <h3 class="text-lg font-bold tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
                        {{ project.name }}
                    </h3>

                    <p class="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                        {{ project.desc }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const projects = [
    {
        name: 'POS & Inventory System',
        type: 'Point of Sale Software',
        desc: 'A fast and easy POS solution for sales, product management, invoicing, and day-to-day shop operations.',
        image: '/images/projects/project-7.jpg',
    },
    {
        name: 'Hazi Abed Ali College',
        type: 'Education Management System',
        desc: 'A complete academic management solution for student records, class activities, results, attendance, and administration workflows.',
        image: '/images/projects/project-4.png',
    },
    {
        name: 'Business Website',
        type: 'Corporate Web Solution',
        desc: 'A professional business website focused on brand presence, service presentation, and customer engagement.',
        image: '/images/projects/project-9.png',
    },
    {
        name: 'Doctor Health Care & Pharmacy',
        type: 'Healthcare & Pharmacy Software',
        desc: 'A healthcare and pharmacy management system for patient services, medicine tracking, billing, and operational control.',
        image: '/images/projects/project-3.png',
    },
    {
        name: 'Narsingdi Boat Club',
        type: 'Club Management System',
        desc: 'A custom management platform for member administration, event coordination, communication, and organizational activities.',
        image: '/images/projects/project-6.jpg',
    },
    {
        name: 'Al-Faruk Academy',
        type: 'School Management System',
        desc: 'A modern school school management platform designed to handle students, teachers, exams, fees, attendance, and daily academic operations.',
        image: '/images/projects/project-4.png',
    },
    {
        name: 'E-commerce Platform',
        type: 'Online Store Solution',
        desc: 'A scalable e-commerce system built for product showcasing, customer orders, secure checkout, and business expansion.',
        image: '/images/projects/project-10.png',
    },
    {
        name: 'Mr. Paul Bakers',
        type: 'Bakery Management Software',
        desc: 'A smart bakery business solution for product sales, stock tracking, order handling, and daily business management.',
        image: '/images/projects/project-2.png',
    },
    {
        name: 'Portfolio Website',
        type: 'Personal Brand Website',
        desc: 'A clean and modern portfolio website designed to showcase services, projects, skills, and professional identity.',
        image: '/images/projects/project-8.png',
    },
    {
        name: 'Bangladesh Diabetic & Diagnosis Care Ltd',
        type: 'Diagnostic Center Software',
        desc: 'A digital solution for diagnosis center operations including patient records, test management, reporting, and billing processes.',
        image: '/images/projects/project-5.png',
    },
]
</script>