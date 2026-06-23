<template>
    <section id="contact" class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="mb-12 text-center lg:text-left max-w-2xl">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
                Contact Us
            </p>
            <h2 class="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Let’s build something exceptional together
            </h2>
            <p class="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                Ready to launch a software product, business platform, or digital solution for your brand? Mercuviax is here to help.
            </p>
        </div>

        <div class="grid gap-8 rounded-[1.0rem] border border-slate-200 bg-gradient-to-br from-slate-50 via-teal-50/20 to-blue-50/30 p-6 sm:p-10 lg:grid-cols-12 dark:border-white/10 dark:from-slate-900/50 dark:via-teal-950/10 dark:to-blue-950/10">
            <!-- Left: Form Area (Occupies 7 columns on large screens) -->
            <div class="lg:col-span-7 xl:col-span-8">
                <form @submit.prevent="handleSubmit" class="space-y-6">
                    <!-- Name Field -->
                    <div>
                        <label for="name" class="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                            Your Name
                        </label>
                        <input 
                            v-model="formData.name"
                            type="text" 
                            id="name" 
                            required
                            placeholder="John Doe"
                            class="w-full rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 transition-all duration-200 focus:border-slate-900 focus:bg-white focus:outline-none focus:ring-4 focus:ring-slate-900/5 dark:border-slate-800 dark:bg-slate-950/50 dark:text-white dark:placeholder-slate-600 dark:focus:border-white dark:focus:bg-slate-950 dark:focus:ring-white/5"
                        />
                    </div>

                    <!-- Email & Phone Grid -->
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label for="email" class="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                Email Address
                            </label>
                            <input 
                                v-model="formData.email"
                                type="email" 
                                id="email" 
                                required
                                placeholder="name@company.com"
                                class="w-full rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 transition-all duration-200 focus:border-slate-900 focus:bg-white focus:outline-none focus:ring-4 focus:ring-slate-900/5 dark:border-slate-800 dark:bg-slate-950/50 dark:text-white dark:placeholder-slate-600 dark:focus:border-white dark:focus:bg-slate-950 dark:focus:ring-white/5"
                            />
                        </div>
                        <div>
                            <label for="phone" class="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                Phone Number
                            </label>
                            <input 
                                v-model="formData.phone"
                                type="tel" 
                                id="phone" 
                                placeholder="+880 1500-000000"
                                class="w-full rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 transition-all duration-200 focus:border-slate-900 focus:bg-white focus:outline-none focus:ring-4 focus:ring-slate-900/5 dark:border-slate-800 dark:bg-slate-950/50 dark:text-white dark:placeholder-slate-600 dark:focus:border-white dark:focus:bg-slate-950 dark:focus:ring-white/5"
                            />
                        </div>
                    </div>

                    <!-- Project Subject Selection -->
                    <div>
                        <label for="subject" class="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                            What are you looking to build?
                        </label>
                        <select 
                            v-model="formData.subject"
                            id="subject"
                            required
                            class="w-full rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm px-4 py-3.5 text-sm text-slate-900 transition-all duration-200 focus:border-slate-900 focus:bg-white focus:outline-none focus:ring-4 focus:ring-slate-900/5 dark:border-slate-800 dark:bg-slate-950/50 dark:text-white dark:focus:border-white dark:focus:ring-white/5"
                        >
                            <option value="" disabled>-- Select Project --</option>
                            <option value="web-app">Web Application (Laravel / Vue.js)</option>
                            <option value="e-commerce">E-commerce Platform</option>
                            <option value="pos">POS Software</option>
                            <option value="inventory">Inventory Management Software</option>
                            <option value="accounting">Accounting Software</option>
                            <option value="school-management">School/College Management Software</option>
                            <option value="hospital-management">Hospital & Clinic Management Software</option>
                            <option value="business-software">Custom Business Software</option>
                            <option value="other">Other Digital Solution</option>
                        </select>
                    </div>

                    <!-- Message Field -->
                    <div>
                        <label for="message" class="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                            Project Details / Message
                        </label>
                        <textarea 
                            v-model="formData.message"
                            id="message" 
                            rows="4"
                            required
                            placeholder="Tell us about your project goals, timeline, or requirements..."
                            class="w-full rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 transition-all duration-200 focus:border-slate-900 focus:bg-white focus:outline-none focus:ring-4 focus:ring-slate-900/5 dark:border-slate-800 dark:bg-slate-950/50 dark:text-white dark:placeholder-slate-600 dark:focus:border-white dark:focus:bg-slate-950 dark:focus:ring-white/5"
                        ></textarea>
                    </div>

                    <!-- Submit Button -->
                    <div>
                        <button 
                            type="submit"
                            :disabled="isSubmitting"
                            class="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white tracking-wide transition-all duration-200 hover:bg-slate-800 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 dark:focus:ring-offset-slate-900 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                        >
                            <i v-if="isSubmitting" class="fa-solid fa-spinner animate-spin text-sm"></i>
                            <i v-else class="fa-regular fa-paper-plane text-sm"></i>
                            <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
                        </button>
                    </div>
                </form>
            </div>

            <!-- Right: Info Card (Occupies 5 columns on large screens) -->
            <div class="lg:col-span-5 xl:col-span-4 flex flex-col justify-between rounded-[1.8rem] border border-slate-200/60 bg-white p-6 sm:p-8 shadow-xl shadow-slate-100/40 transition-colors duration-300 dark:border-white/5 dark:bg-slate-950 dark:shadow-none">
                <div class="space-y-6">
                    <h3 class="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                        Contact Information
                    </h3>
                    
                    <div class="flex items-start gap-4">
                        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-600 dark:bg-slate-900 dark:text-slate-400">
                            <i class="fa-solid fa-building text-sm"></i>
                        </div>
                        <div>
                            <p class="text-xs font-medium text-slate-400 uppercase tracking-wider">Company</p>
                            <p class="text-base font-semibold text-slate-900 dark:text-white mt-0.5">Mercuviax</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-4">
                        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-600 dark:bg-slate-900 dark:text-slate-400">
                            <i class="fa-solid fa-phone text-sm"></i>
                        </div>
                        <div>
                            <p class="text-xs font-medium text-slate-400 uppercase tracking-wider">Phone</p>
                            <p class="text-base font-semibold text-slate-900 dark:text-white mt-0.5">+8801533021557</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-4">
                        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-600 dark:bg-slate-900 dark:text-slate-400">
                            <i class="fa-solid fa-envelope text-sm"></i>
                        </div>
                        <div>
                            <p class="text-xs font-medium text-slate-400 uppercase tracking-wider">Email</p>
                            <p class="text-base font-semibold break-all text-slate-900 dark:text-white mt-0.5">
                                mercuviax@gmail.com
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Call to Actions Inside Card -->
                <div class="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
                    <button @click="callNow"
                        class="w-full rounded-xl bg-slate-900 px-6 py-3.5 text-center font-semibold text-white tracking-wide transition-all duration-200 hover:bg-slate-800 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 dark:focus:ring-offset-slate-900 shadow-sm"
                    >
                        Book a Consultation
                    </button>
                    
                    <a href="https://wa.me/8801533021557"
                        target="_blank"
                        class="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50/50 px-6 py-3.5 text-center font-semibold text-slate-700 tracking-wide transition-all duration-200 hover:bg-slate-100 hover:text-slate-900 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                    >
                        <i class="fa-brands fa-whatsapp text-xl text-green-500 dark:text-green-400"></i>
                        <span>WhatsApp Quick Chat</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser'; 

const formData = ref({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
});

const isSubmitting = ref(false);

const handleSubmit = async () => {
    isSubmitting.value = true;
    
    try {
        
        await emailjs.send(
            'service_co3x6dp', 
            'template_5mx0asv', 
            formData.value, 
            'GHMWhJoLN4AW7gfqp'
        );
        
        alert('Thank you! Your message has been sent successfully.');
        
        formData.value = { name: '', email: '', phone: '', subject: '', message: '' };
    } catch (error) {
        console.error("EmailJS Error:", error);
        alert('Something went wrong. Please try again.');
    } finally {
        isSubmitting.value = false;
    }
};

const callNow = () => {
    window.location.href = 'tel:+8801533021557';
};
</script>