<template>
  <section class="flex justify-center">
    <div class="sm:w-auto md:w-2/3 px-3">
      <header>
        <section class="Experience-header py-8">
          <div class="flex flex-col gap-1">
            <h2 class="font-poppins font-bold text-xl lg:text-2xl text-royal-400 dark:text-gray-100 flex items-center">Experience
              <BriefcaseIcon class="h-6 w-6 ms-2"></BriefcaseIcon>
            </h2>
            <h3 class="font-poppins font-semibold text-slate-700 dark:text-slate-200 text-lg sm:text-md md:text-lg">Software Developer
              (resident) • Protección Civil</h3>
            <h4 class="font-poppins text-sm text-slate-400 dark:text-slate-200">Jan 2023 - Jun 2023</h4>
          </div>
        </section>
      </header>

      <body>
        <section class="font-poppins text-md text-slate-700 dark:text-gray-300">
          <div class="flex flex-col gap-2 pb-2">
            <p>Development of a Web Application with Laravel
              and VueJs for the registration of geographic
              information of PyMES</p>
            <h4>Activities performed in the area:</h4>
          </div>
          <div>
            <ul class="list-disc flex flex-col gap-2 ml-5">
              <li>Database modeling from scratch, for the
                replacement of spreadsheets. Using E-R models,
                normalizations and implementing migrations.</li>
              <li>User interface design implementing bootstrap and
                VueJs</li>
              <li>Module development and programming.</li>
              <li>Data loading and management in databases</li>
            </ul>
          </div>
        </section>
      </body>
    </div>
  </section>
</template>

<script setup>
import { BriefcaseIcon } from '@heroicons/vue/24/solid';
</script>