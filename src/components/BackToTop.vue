<template>
  <!-- Floating Action Buttons Container -->
  <div class="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      
      <!-- 1. Back to Top Button (Now on Top) -->
      <button
          v-show="showButton"
          @click="scrollToTop"
          class="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-base text-white shadow-md transition-all duration-200 hover:bg-slate-800 active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 dark:focus:ring-offset-slate-900"
          aria-label="Back to top"
      >
          <i class="fa-solid fa-angles-up"></i>
      </button>

      <!-- 2. WhatsApp Floating Button (Now on Bottom) -->
      <a
          href="https://wa.me/8801533021557"
          target="_blank"
          rel="noopener noreferrer"
          class="flex h-11 w-11 items-center justify-center rounded-full bg-green-500 text-xl text-white shadow-lg transition-all duration-200 hover:bg-green-600 hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 group relative"
          aria-label="Chat on WhatsApp"
      >
          <i class="fa-brands fa-whatsapp animate-pulse"></i>
          
          <!-- Tooltip -->
          <span class="absolute right-14 whitespace-nowrap rounded-lg bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none shadow-sm dark:bg-white dark:text-slate-950">
              Chat on WhatsApp
          </span>
      </a>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>