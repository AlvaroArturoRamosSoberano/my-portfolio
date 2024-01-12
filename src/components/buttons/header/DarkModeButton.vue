<template>
    <div>
        <button class="h-6 w-6" @click="changeDarkMode">
            <MoonIcon v-if="toggleDarkMode === false" class="h-6 w-6 text-black-500" />
            <SunIcon v-else class="h-6 w-6 text-slate-100" />
        </button>
    </div>
</template>

<script setup >
import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue'

const toggleDarkMode = ref(document.documentElement.className === "dark")

const changeDarkMode = () => {
    toggleDarkMode.value = document.documentElement.classList.toggle("dark");
    toggleDarkMode.value
        ? (localStorage.theme = "dark")
        : (localStorage.theme = "light");

}
</script>