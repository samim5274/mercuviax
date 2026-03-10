<template>
  <div class="min-h-screen bg-slate-950 text-white">
    <headerSection />
    <service />
    <portfolio />
    <about />
    <testimonial />
    <process />
    <contact />
    <faq />
    <footerSection />
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
</script>
