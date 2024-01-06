<template>
    <section class="pt-2 pb-2">
        <div class="flex justify-center sm:justify-start">
            <el-tooltip content="Looking for a job" placement="top">
                <button
                    class="w-10 h-9 bg-green-300 shadow-xl shadow-green-500/50 rounded-lg flex justify-center items-center cursor-default ">
                    <!--  <SpeakerXMarkIcon class="w-5 h-5"></SpeakerXMarkIcon> -->
                    <SpeakerWaveIcon class="w-5 h-5 animate-pulse "></SpeakerWaveIcon>
                </button>
            </el-tooltip>
            <resume-button></resume-button>
        </div>
    </section>
</template>
<script setup>
import { SpeakerXMarkIcon, SpeakerWaveIcon } from '@heroicons/vue/24/outline';
import ResumeButton from "../buttons/ResumeButton.vue";

</script>