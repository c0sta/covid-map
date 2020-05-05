import api from './api';

export const getData = async () => {
  const data = await api.get('/contries');
  console.log(data);
  return data;
};
