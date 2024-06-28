import { API_URL, STRAPI_API_TOKEN } from "./urls";
import { MainDatum } from "../ProductPage/ProductList/CategoryType";
import { CartItem } from "../Store/cartSlice";

interface stripeCartBody {
    products: CartItem[]
}

export const fetchData = async (endpoint: string) => {
    const options = {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + STRAPI_API_TOKEN
        }
    }
    const res = await fetch(`${API_URL}${endpoint}`, options)
    const data = res.json()
    return data
}

export async function  wait(ms:number){
    return new Promise(resolve => setTimeout(resolve, ms))
}

export const makePaymentRequest = async (endpoint: string, payload: any) => {
    try {
        const res = await fetch(`${API_URL}${endpoint}`, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + STRAPI_API_TOKEN,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(`HTTP error! status: ${res.status}, message: ${errorData.error}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error in makePaymentRequest:", error);
        throw error;
    }
};
