import {defineConfig} from 'vite'

export default defineConfig({
    base: process.env.VITE_ENV === 'development' ? './' : '/HouseRentalSystem/', // Используем переменную окружения для определения пути
})
