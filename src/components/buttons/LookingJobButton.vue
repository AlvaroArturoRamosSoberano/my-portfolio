<template>
    <section>
        <div>
            <el-tooltip content="Looking for a job" placement="top">
                <button
                    class="w-8 h-8 bg-green-300 shadow-xl shadow-green-500/50 rounded-lg flex justify-center items-center cursor-default text-green-700 ">
                    <!--  <SpeakerXMarkIcon class="w-5 h-5"></SpeakerXMarkIcon> -->
                    <CursorArrowRippleIcon class="w-5 h-5 animate-pulse"></CursorArrowRippleIcon>
                </button>
            </el-tooltip>
        </div>
    </section>
</template>
<script setup>
import { SpeakerXMarkIcon, SpeakerWaveIcon, CursorArrowRippleIcon } from '@heroicons/vue/24/outline';

</script>