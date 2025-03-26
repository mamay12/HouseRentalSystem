import {defineConfig, loadEnv} from 'vite'

export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(), '')

    return {
        base: env.VITE_ENV === 'development' ? './' : '/HouseRentalSystem/', // Используем переменную окружения для определения пути}
    }
})
