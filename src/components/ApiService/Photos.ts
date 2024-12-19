import axios from 'axios';

const API_KEY = 'kCLue0JNOwV6mRA-OiKH8-zhFw1cIYtG-CeLzH4bPnI';
axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export interface Photo {
  id: string;
  urls: {
    regular: string;
    full: string;
  };
  alt_description: string | null;
  user: {
    name: string;
  };
  likes: number;
}

export const getPhotos = async (query: string, page: number = 1) => {
  const { data } = await axios.get<{ results: Photo[] }>('search/photos', {
    params: { query, page },
  });
  return data;
};
