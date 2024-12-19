import axios from 'axios';

const API_KEY = 'kCLue0JNOwV6mRA-OiKH8-zhFw1cIYtG-CeLzH4bPnI';
axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

interface Photo {
  id: string;
  urls: {
    regular: string;
    full: string;
  };
  alt_description: string;
}

interface ApiResponse {
  results: Photo[];
}

export const getPhotos = async (query: string, page: number): Promise<ApiResponse> => {
  const { data } = await axios.get<ApiResponse>('search/photos', {
    params: {
      query,
      page,
    },
  });
  return data;
};
