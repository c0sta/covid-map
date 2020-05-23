import axios from 'axios';

interface CountryResponse {
  city: String;
  country: String;
  inlatt: String;
  inlongt: String;
  prov: String;
}

export const getCountryNameByLatlng = async ({
  coordinate,
}: {
  coordinate: {latitude: number; longitude: number};
}) => {
  // console.log(coordinate);
  const {latitude, longitude} = coordinate;
  const url = `https://geocode.xyz/${latitude},${longitude}&auth=162171200937327750047x5942?json=1`;
  const {data} = await axios.get(url);
  try {
    return {latitude, longitude, data};
  } catch (err) {
    console.log(err);
    return err;
  }
};
