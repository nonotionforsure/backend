import axios from "axios";

const api = axios.create({
    baseURL: "https://apifineline.herokuapp.com"
})

export default api;