<template>
    <div>
        <button class="h-6 w-6" @click="toggleMode">
            <MoonIcon v-if="!darkMode" class="h-6 w-6 text-black-500" />
            <SunIcon v-else class="h-6 w-6 text-black-500" />
        </button>
    </div>
</template>

<script setup >
import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue'

const emit = defineEmits(['dark-mode-activated', 'light-mode-activated'])

const darkMode = ref(false)

const toggleMode = () => {
    darkMode.value = !darkMode.value;
    if (darkMode.value) {
        emit('dark-mode-activated');
    } else {
        emit('light-mode-activated');
    }
}
</script>