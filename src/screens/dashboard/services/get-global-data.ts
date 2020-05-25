import axios, {AxiosResponse} from 'axios';

export interface GlobalDataI {
  confirmed: {detail: string; value: number};
  recovered: {detail: string; value: number};
  deaths: {detail: string; value: number};
  lastUpdate: string;
}

export interface ObjectI {
  id: number;
  name: string;
  value: number;
}

export interface DataI {
  array: Array<ObjectI>;
  lastUpdate: string;
}
export async function getGlobalData(path: string): Promise<DataI> {
  const data: Promise<AxiosResponse<any>> = axios.get(path);
  try {
    if (data) {
      const {confirmed, deaths, lastUpdate, recovered} = (await data).data;
      const array = [
        {
          id: 1,
          name: 'Confirmed',
          value: confirmed.value,
        },
        {
          id: 2,
          name: 'Recovered',
          value: recovered.value,
        },
        {
          id: 3,
          name: 'Deaths',
          value: deaths.value,
        },
      ];
      return {array, lastUpdate};
    }
  } catch (err) {
    console.log(err);
    return err;
  }
}
