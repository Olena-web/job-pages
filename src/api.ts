import { API_URL, BEARER_TOKEN, GEOLOCATION_URL, API_KEY } from "./constants";

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


export const getLocation= async (lat:number, lon: number) => {
var requestOptions = {
    method: 'GET',
  };
  
  fetch(GEOLOCATION_URL.concat(`lat=${lat}lon=${lon}&apiKey=${API_KEY}`), requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}