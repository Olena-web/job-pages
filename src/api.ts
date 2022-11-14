import { API_URL, BEARER_TOKEN,  URL_FLICKR } from "./constants";

export const getApiData = async () => {
    try {
       
    const response = await fetch(API_URL, {
        mode: 'no-cors',
        credentials: 'include',
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

// export async function getDataFromApi(tags: string) {
//     const url = URL_FLICKR(tags);
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//     return data;
//   }