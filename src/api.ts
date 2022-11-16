import { API_URL, BEARER_TOKEN, GEOLOCATION_URL, GEOLOCATION_KEY } from "./constants";

export const getApiData = async () => {
    try {
       
    const response = await fetch(API_URL, {
        //mode: 'no-cors',
        //credentials: 'include',
        method: "GET",
        headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
        },
       
    });
    const data = await response.json();
    console.log(data[0]);
    return data;
    }
     catch(error){
        console.log(error);
    }
};

