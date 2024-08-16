import axios from "axios";

const API_KEY = "LfjDuVpVMHaqGCO7_hkyfjzKkQvMZ8w50VB-ByCTfAo";
axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  orientation: "landscape",
  per_page: 15,
};

export const fetchPhotos = async (query, page) => {
  const { data } = await axios.get(`/search/photos`, {
    params: {
      query: query,
      page: page,
    },
  });
  return data;
};
