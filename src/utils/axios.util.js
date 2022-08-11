import axios from 'axios'
import router from '@router/index.router'
import ErrorController from '@controllers/Error.controller'

const instance = axios.create({
    baseURL: '/api',
})

instance.interceptors.response.use(null, async ({ response, message }) => {
    const error = new ErrorController(response?.status, message)
    await router.push(error.path)
    return Promise.reject(error)
})

export default instance
