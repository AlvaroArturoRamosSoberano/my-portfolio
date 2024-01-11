<template>
    <section>
        <div class="flex flex-col gap-4">
            <div class="flex justify-center items-center py-8">
                <el-button class="animate-pulse" @click="visibleForm" type="primary" plain>{{ showForm ? 'Maybe Later' :
                    'Send me an email!'
                }}
                    <ChevronDoubleDownIcon v-if="!showForm" class="h-5 w-5 ms-2" />
                    <ChevronDoubleUpIcon v-else class="h-5 w-5 ms-2" />
                </el-button>
            </div>

            <Transition enterActiveClass="animate__animated animate__fadeInDown">
                <div v-if="showForm" class="flex justify-center p-4 border-2 rounded-lg">
                    <form @submit.prevent="submitForm">
                        <el-input v-model="name" placeholder="Escriba su nombre" class="font-poppins font-bold pb-4" />
                        <el-input v-model="message" :rows="2" type="textarea" placeholder="Escriba el cuerpo del mensaje"
                            class="font-poppins font-bold pb-4" />
                        <el-button type="primary" @click="submitForm" class="w-full" plain>
                            <ChevronDoubleRightIcon class="w-6 h-6"></ChevronDoubleRightIcon>
                        </el-button>
                    </form>
                </div>
            </Transition>
        </div>
    </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import { ElMessage } from 'element-plus'
import { ChevronDoubleRightIcon, ChevronDoubleDownIcon, ChevronDoubleUpIcon } from '@heroicons/vue/24/outline';

const WEB3FORMS_ACCESS_KEY = "694a5614-b6b4-4595-8cc7-8542fa8d59fa"
const name = ref('')
const message = ref('')
const showForm = ref(false)

const submitForm = async () => {
    if (!name.value.trim() && !message.value.trim()) {
        ElMessage({
            message: 'The fields are required!',
            type: 'error'
        })
    } else if (!name.value.trim()) {
        ElMessage({
            message: 'The name is required!',
            type: 'error'
        })
    } else if (!message.value.trim()) {
        ElMessage({
            message: 'The message is required!',
            type: 'error'
        })
    } else {

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: WEB3FORMS_ACCESS_KEY,
                name: name.value,
                message: message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
            name.value = ''
            message.value = ''
            showForm.value = false
            ElMessage({
                message: 'Mail on the way!',
                type: 'success'
            })
        }
    }


}
const visibleForm = () => {
    showForm.value = !showForm.value
}
</script>
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
</style>