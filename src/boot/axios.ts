import axios from 'axios'

const axiosDefaults = {
  baseURL: location.origin
}

const api = axios.create({
  ...axiosDefaults
})

const requestInterceptor = () => {

}

const responseInterceptor = () => {}