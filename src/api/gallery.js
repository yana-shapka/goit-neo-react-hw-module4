import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchImages = async (query, page) => {
  const {data} = await axios.get('/search/photos', {
    params: {
      client_id: '0TtHU5vlkbxl2NQZv8ughyGX6fmcgnJ9uKPg9x8-Zbo',
      query,
      per_page: 20,
      page: page,
      orientation: 'landscape',
    },
  });
  return data.results;
};
