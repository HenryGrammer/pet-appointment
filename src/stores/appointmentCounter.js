// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify';
import axios from 'axios'

export const useAppointmentCounter = defineStore('appointment', {
    state: () => {
        return {
            isConnected: '',
        }
    },
    actions: {
        async testConnection() {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/test_api`)
            console.log(response)
        },
        async createAppointment(formData) {
            try {
                const response = await axios.post(
                    `${import.meta.env.VITE_BASE_URL}/store_appointment`,
                    formData,
                )
                const data = response.data
                
                toast(data.msg, {
                    autoClose:1000
                })
                
                formData.frequency = ''
                formData.startDate = ''
                formData.day = ''
                formData.time = ''
                formData.reason = ''
                
            } catch (error) {
                console.error('error:', error)
            }
        },
    },
})
