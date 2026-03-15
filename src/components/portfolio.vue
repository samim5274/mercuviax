<template>
    <section
        id="portfolio"
        class="mx-auto max-w-7xl px-6 py-20 text-slate-900 transition-colors duration-300 dark:text-white lg:px-10"
    >
        <div class="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div class="max-w-2xl">
                <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-300">
                    Featured Work
                </p>

                <h2 class="text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
                    Real projects built for education, healthcare, retail, and business growth
                </h2>
            </div>

            <p class="max-w-xl text-slate-600 dark:text-slate-400">
                We build practical, reliable, and business-focused software solutions for schools, healthcare, retail shops, and modern companies.
            </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div
                v-for="project in projects"
                :key="project.name"
                class="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-[0_20px_50px_rgba(20,184,166,0.10)] dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-teal-400/20 dark:hover:bg-white/[0.05] dark:hover:shadow-[0_20px_50px_rgba(20,184,166,0.08)]"
            >
                <div class="relative h-52 overflow-hidden">
                    <img
                        :src="project.image"
                        :alt="project.name"
                        class="h-full w-full object-cover"
                    />

                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/35 to-slate-900/10 dark:from-slate-950/85 dark:via-slate-950/45 dark:to-slate-950/10"></div>

                    <div class="absolute inset-x-0 bottom-0 p-6">
                        <div class="inline-flex rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-semibold text-teal-100 backdrop-blur-sm dark:text-teal-300">
                            {{ project.type }}
                        </div>
                    </div>
                </div>

                <div class="p-6">
                    <h3 class="text-xl font-bold text-slate-900 dark:text-white">
                        {{ project.name }}
                    </h3>

                    <p class="mt-3 leading-7 text-slate-600 dark:text-slate-400">
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
        desc: 'A modern school management platform designed to handle students, teachers, exams, fees, attendance, and daily academic operations.',
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