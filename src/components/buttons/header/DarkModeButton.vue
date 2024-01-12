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

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}
const toggleDarkMode = ref(document.documentElement.className === "dark")

const changeDarkMode = () => {
    toggleDarkMode.value = document.documentElement.classList.toggle("dark");
    toggleDarkMode.value
        ? (localStorage.theme = "dark")
        : (localStorage.theme = "light");

}
</script>