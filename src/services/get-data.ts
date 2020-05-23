import api from './api';

export const getData = async (path: string) => {
  const {data} = await api.get(path);
  // console.log(data);
  return data;
};
