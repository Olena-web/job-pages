import { API_URL, BEARER_TOKEN } from "./constants";

export const getApiData = async () => {
    try{
    const response = await fetch(API_URL, {
        method: "GET",
        headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
        },
    });
    const data = await response.json();
    console.log(data);
    return data;
    }
     catch(error){
        console.log(error);
    }
};
    