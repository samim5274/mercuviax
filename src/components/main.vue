<template>
  <div class="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
    <headerSection />
    <service />
    <portfolio />
    <about />
    <testimonial />
    <process />
    <missionVission />
    <contact />
    <faq />
    <footerSection />
    <BackToTop />
  </div>
</template>

<script setup>
import service from './service.vue'
import headerSection from './header.vue'
import portfolio from './portfolio.vue'
import about from './about.vue'
import testimonial from './testimonial.vue'
import process from './process.vue'
import contact from './contact.vue'
import faq from './faq.vue'
import footerSection from './footer.vue'
import missionVission from './missionVission.vue'
import BackToTop from './BackToTop.vue'
</script>
