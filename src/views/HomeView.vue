<style>
html body {
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-optical-sizing: auto;
    /* font-weight: <weight>; */
    font-style: normal;
    /* font-variation-settings: 'wdth' 100; */
    overflow: none;
}
</style>

<template>
    <!-- HOME SECTION -->
    <section id="home" class="relative max-w-full">
        <img src="../assets/images/dog.jpg" class="h-screen w-screen object-cover" />
        <div
            class="bg-black/50 h-screen w-screen absolute top-0 left-0 grid grid-cols-1 md:grid-cols-2"
        >
            <div class="col-start-1 p-10 ml-10">
                <div class="flex items-center">
                    <img src="../assets/images/paw.jpg" class="rounded-full h-20" />
                    <span class="text-white text-2xl ml-4">PAWSTATIC</span>
                </div>
            </div>

            <div
                class="justify-self-center md:justify-self-end px-6 md:px-10 mt-10 md:mt-40 text-center md:text-left"
            >
                <ul class="flex flex-col md:flex-row gap-4 md:gap-6 mb-6">
                    <li>
                        <a
                            href="#"
                            @click.prevent="scrollTo('about')"
                            class="text-white text-xl md:text-3xl font-semibold"
                            >About us</a
                        >
                    </li>
                    <li>
                        <a
                            href="#"
                            @click.prevent="scrollTo('schedule')"
                            class="text-white text-xl md:text-3xl font-semibold"
                            >Schedule a visit</a
                        >
                    </li>
                </ul>

                <p
                    class="text-white text-3xl md:text-6xl font-black whitespace-pre-line break-words mt-30"
                >
                    We care for your little furry loved ones while
                </p>

                <button
                    type="button"
                    class="p-3 rounded-full bg-white text-black mt-10 md:mt-20 w-full md:w-60 font-bold"
                >
                    <a href="#" @click.prevent="scrollTo('schedule')">Schedule a visit</a>
                </button>
            </div>
        </div>
    </section>

    <!-- ABOUT SECTION -->
    <section
        id="about"
        class="min-h-screen bg-white grid grid-cols-1 md:grid-cols-2 p-6 md:p-20 place-items-center gap-10"
    >
        <div>
            <p class="text-3xl md:text-6xl font-bold px-2 md:px-20 text-center md:text-left">
                Expert Care for your furry, feathery, or scaley friend
            </p>
            <p
                class="font-light text-xl md:text-3xl mt-6 md:mt-10 px-2 md:px-20 text-center md:text-left"
            >
                We know how stressful it is to leave your pets at home alone. We're a team of
                experienced animal caregivers well connected to local veterinarians. Trust us to
                love them like our own and to keep them safe and happy till you're home.
            </p>

            <div class="px-2 md:px-20 text-center md:text-left">
                <button
                    type="button"
                    class="p-3 rounded-full bg-black text-white mt-10 md:mt-20 w-full md:w-60 font-bold"
                >
                    <a href="#" @click.prevent="scrollTo('schedule')">Schedule a visit</a>
                </button>
            </div>
        </div>

        <div class="md:grid-start-2">
            <div class="md:grid grid-cols-2 grid-rows-2 place-items-center gap-3">
                <div class="col-start-1 row-start-1">
                    <img src="../assets/images/cat.jpg" class="h-100 w-100" />
                </div>
                <div class="md:col-start-2 row-start-1">
                    <img src="../assets/images/parrot.jpg" class="h-100 w-100" />
                </div>
                <div class="md:col-start-1 row-start-2">
                    <img src="../assets/images/dog1.jpg" class="h-100 w-100" />
                </div>
                <div class="md:col-start-2 row-start-2">
                    <img src="../assets/images/hamster.jpg" class="h-100 w-100" />
                </div>
            </div>
        </div>
    </section>

    <!-- SCHEDULE SECTION -->
    <section id="schedule" class="min-h-screen bg-white grid grid-cols-1 lg:grid-cols-3">
        <!-- LEFT IMAGE -->
        <div class="relative order-2 lg:order-1">
            <img src="../assets/images/puppy.jpg" class="w-full h-full object-cover" />
            <div
                class="bg-black/50 absolute top-0 left-0 w-full h-full flex flex-col items-center py-5"
            >
                <div class="flex items-center mt-10 md:mt-20">
                    <img src="../assets/images/paw.jpg" class="rounded-full h-16 md:h-20" />
                    <span class="text-white text-xl md:text-2xl ml-4"
                        ><a href="" @click.prevent="scrollTo('home')">PAWSTATIC</a></span
                    >
                </div>
                <p class="font-bold text-white text-xl md:text-3xl mt-10 md:mt-20 text-center">
                    All services include:
                </p>
                <ul class="text-white list-disc mt-10 md:mt-20 px-6 text-sm md:text-lg text-left">
                    <li class="mb-2">A photo update for you</li>
                    <li class="mb-2">Notification of pet arrival</li>
                    <li class="mb-2">Treats for your pet (with your approval)</li>
                </ul>
            </div>
        </div>

        <!-- RIGHT FORM -->
        <div class="col-span-2 p-6 md:p-10 bg-amber-100 order-1 lg:order-2">
            <p class="font-black px-20 text-2xl md:text-4xl text-center md:text-left">
                We'll take your dog for a walk. Just tell us when!
            </p>

            <form class="mt-10" @submit.prevent="appointmentCounter.createAppointment(formValue)">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 px-20">
                    <!-- Frequency -->
                    <div>
                        <label class="font-medium text-black">Frequency</label>
                        <div class="flex flex-wrap gap-2 mt-3">
                            <div class="space-y-2">
                                <div class="flex flex-wrap gap-2">
                                    <label
                                        class="cursor-pointer"
                                        v-for="(frequency, index) in frequencies"
                                        :key="index"
                                    >
                                        <input
                                            type="radio"
                                            name="frequency"
                                            :value="frequency"
                                            class="sr-only peer"
                                            v-model="formValue.frequency"
                                            required
                                        />
                                        <div
                                            class="px-4 py-2 rounded-md bg-gray-200 peer-checked:bg-orange-300 peer-checked:text-white peer-checked:shadow"
                                        >
                                            {{ frequency }}
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Start Date -->
                    <div>
                        <label class="font-medium text-black">Start Date</label>
                        <input
                            type="date"
                            class="bg-white p-3 rounded-lg w-full mt-3"
                            :min="dateToday"
                            v-model="formValue.startDate"
                            required
                        />
                    </div>

                    <!-- Days -->
                    <div class="md:col-span-2">
                        <label class="font-medium text-black"
                            >Days <span class="font-thin">(Select all that apply)</span></label
                        >
                        <div class="flex flex-wrap gap-2 mt-3">
                            <div class="space-y-2">
                                <div class="flex flex-wrap gap-2">
                                    <label
                                        class="cursor-pointer"
                                        v-for="(day, index) in days"
                                        :key="index"
                                    >
                                        <input
                                            type="radio"
                                            name="day"
                                            :value="day"
                                            class="sr-only peer"
                                            v-model="formValue.day"
                                            required
                                        />
                                        <div
                                            class="px-4 py-2 rounded-md bg-gray-200 peer-checked:bg-orange-300 peer-checked:text-white peer-checked:shadow"
                                        >
                                            {{ day }}
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Times -->
                    <div class="md:col-span-2">
                        <label class="font-medium text-black"
                            >Time <span class="font-thin">(Select all that apply)</span></label
                        >
                        <div class="flex flex-wrap gap-2 mt-3">
                            <div class="space-y-2">
                                <div class="flex flex-wrap gap-2">
                                    <label
                                        class="cursor-pointer"
                                        v-for="(time, index) in times"
                                        :key="index"
                                    >
                                        <input
                                            type="radio"
                                            name="time"
                                            :value="time"
                                            class="sr-only peer"
                                            v-model="formValue.time"
                                            required
                                        />
                                        <div
                                            class="px-4 py-2 rounded-md bg-gray-200 peer-checked:bg-orange-300 peer-checked:text-white peer-checked:shadow"
                                        >
                                            {{ time }}
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Reason -->
                    <div class="md:col-span-2">
                        <label class="font-medium text-black">Reason</label>
                        <textarea
                            class="p-4 w-full bg-white mt-3 rounded-md"
                            rows="3"
                            v-model="formValue.reason"
                        ></textarea>
                    </div>

                    
                </div>
                <div class="md-col-span-2 text-center">
                    <button
                        type="submit"
                        class="p-3 pointer-events-auto rounded-full bg-black text-white mt-10 md:mt-20 w-full md:w-60 font-bold"
                    >
                        Schedule a visit
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>
<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useAppointmentCounter } from '@/stores/appointmentCounter'

const appointmentCounter = useAppointmentCounter()

appointmentCounter.testConnection()

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const selectedDay = ref('Mon')

const times = ['Morning', 'Afternoon', 'Evening']
const selectedTime = ref('Morning')

const frequencies = ['Monthly', 'One Time']
const selectedFrequency = ref('')

const dateToday = new Date().toISOString().split('T')[0]

const scrollTo = (pageName) => {
    const el = document.getElementById(pageName)

    if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
    }
}

const formValue = reactive({})
</script>
