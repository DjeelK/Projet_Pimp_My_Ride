import axios from "axios";
import { getToken } from "./AuthService";

const BASE_REST_API_URL = 'http://localhost:8082/api/ride';


axios.interceptors.request.use(function (config) {

    config.headers['Authorization'] = getToken();

    return config;
}, function (error) {

    return Promise.reject(error);
});

export const getAllRide = () => axios.get(BASE_REST_API_URL)

export const postRide = (date,depart,arrival,userId) => axios.post(BASE_REST_API_URL, { date,depart,arrival,userId})

 export const getRide = (id) => axios.get(BASE_REST_API_URL + '/' + id)

 export const updateUserRide = (id, ride) => axios.put(BASE_REST_API_URL + '/' + id, ride)
//
// export const deleteTodo = (id) => axios.delete(BASE_REST_API_URL + '/' + id)
//
// export const completeTodo = (id) => axios.patch(BASE_REST_API_URL + '/' + id + '/complete')
//
// export const inCompleteTodo = (id) => axios.patch(BASE_REST_API_URL + '/' + id + '/in-complete')