import {defineConfig} from 'vite'

const isLocal = window.location.hostname === 'localhost';  // Проверка на localhost


export default defineConfig({
    base: isLocal ? './' : '/HouseRentalSystem/',
})
