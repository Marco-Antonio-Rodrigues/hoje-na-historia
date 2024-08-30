import axios from 'axios'

export function getApiClient() {
    const api = axios.create({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    return api; 
}

export const apiService = getApiClient();