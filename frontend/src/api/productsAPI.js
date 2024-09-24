// import { authHeaders } from "./authAPI"
import axiosInstance from "./axiosInstance"
import { urls } from './urls';

export const productsApi = {
    async getProducts() {
        return axiosInstance.get(urls.products.list)
    },
    async getProduct(id) {
        return axiosInstance.get(urls.products.item(id))
    }
}