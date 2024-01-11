<template>
    <section class="flex justify-start md:justify-center">
        <div class="sm:w-auto md:w-2/3 px-3">
            <header class="font-poppins font-bold text-2xl text-royal-400 pt-4">
                <section>
                    <div class="flex items-center gap-2">
                        <h2>Socials</h2>
                        <AtSymbolIcon class="h-6 w-6"></AtSymbolIcon>
                    </div>
                </section>
            </header>

            <body>
                <section class="py-8 flex justify-center">
                    <div class="flex gap-2 font-poppins font-semibold">
                        <a class="flex justify-center w-36 gap-2 text-lochmara-600 border-2 p-4 rounded-xl hover:outline"
                            href="https://www.linkedin.com/in/%C3%A1lvaro-arturo-ramos-soberano/" target="_blank">
                            <img src="/src/assets/icons/footer/linkedin.png" alt="linkedIn" class="h-6 w-6">LinkedIn
                        </a>
                        <a class="flex justify-center w-36 gap-2 border-2 p-4 rounded-xl hover:outline"
                            href="https://github.com/AlvaroArturoRamosSoberano" target="_blank">
                            <img src="/src/assets/icons/footer/github.png" alt="github" class="h-6 w-6">Github
                        </a>
                    </div>
                </section>
            </body>

            <footer>
                <section>
                    <div class="flex items-center gap-2 font-poppins text-2xl text-royal-400 font-bold ">
                        <h2>Email</h2>
                        <EnvelopeIcon class="h-6 w-6"></EnvelopeIcon>
                    </div>
                    <div class="flex justify-center">
                        <FormVue></FormVue>
                    </div>
                </section>
            </footer>
        </div>
    </section>
</template>
<script setup>
import { AtSymbolIcon, EnvelopeIcon } from '@heroicons/vue/24/outline';
import FormVue from './buttons/footer/Form.vue';
</script>