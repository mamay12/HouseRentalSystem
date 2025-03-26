import {defineConfig} from 'vite'

export default defineConfig({
    // eslint-disable-next-line no-undef
    base: process.env.NODE_ENV === 'development' ? './' : '/HouseRentalSystem/',
})
