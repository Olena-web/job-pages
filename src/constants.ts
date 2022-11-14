export const API_URL = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data';
export const BEARER_TOKEN = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';

export const API_KEY = '967601ec97e7827f2af51bc844b8eaca';

// export const THUMBNAIL = (photo: PhotoItem) => {
//     return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_t.jpg`;
//   };
//   export const LARGE_URL = (photo: PhotoItem) => {
//     return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
//   };
  export const URL_FLICKR = (tags: string) => {
    return `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${tags}&extras=url_l&format=json&nojsoncallback=1&sort=relevance&page=1&per_page=20&extras=url_l,description,date_upload,tags,owner_name,views`;
  };