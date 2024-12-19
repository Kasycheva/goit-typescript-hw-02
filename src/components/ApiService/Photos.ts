import axios from 'axios';

const API_KEY = 'kCLue0JNOwV6mRA-OiKH8-zhFw1cIYtG-CeLzH4bPnI';
axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export interface Photo {
  alt_description?: string;
  urls: { regular: string; full: string };
  id: string;
  user?: string;
  likes?: number;
}

export const getPhotos = async (query: string, page: number): Promise<{ results: Photo[] }> => {
  const { data } = await axios.get<{ results: Photo[] }>('search/photos', {
    params: { query, page },
  });
  return data;
};
