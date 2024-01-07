<template>
  <section class="h-auto w-full p-2  flex justify-center">
    <div>
      <section class="Experience-header w-auto py-8 ">
        <div class="flex flex-col gap-2">
          <h2 class="font-poppins font-bold text-md sm:text-lg lg:text-2xl text-center sm:text-left flex">Experience
            <BriefcaseIcon class="h-6 w-6 ms-2"></BriefcaseIcon>
          </h2>
          <h3 class="font-poppins font-semibold text-slate-700 text-sm sm:text-md md:text-lg">Software Developer (resident) • Protección Civil</h3>
          <h4 class="font-poppins text-xs text-slate-500">Jan 2023 - Jun 2023</h4>
        </div>
      </section>

      <section class="font-poppins text-sm text-slate-700">
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
    </div>
  </section>
</template>

<script setup>
import { BriefcaseIcon } from '@heroicons/vue/24/solid';
</script>