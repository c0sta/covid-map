import * as React from 'react';
import MapView from 'react-native-maps';
import {StyleSheet} from 'react-native';
import {getData} from '../../services/get-data';
import Pointer from '../Pointer/Pointer';
// Dark mode map styles
import {mapStyle} from './Map.style';
export interface CountryInfo {
  _id: number;
  initials: string;
  lat: number;
  long: number;
  flag: string;
}
export interface CountryI {
  country: string;
  continent: string;
  cases: number;
  deaths: number;
  recovered: number;
  tests: number;
  countryInfo: CountryInfo;
  todayCases: number;
  todayDeaths: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMilion: number;
  testsPerOneMillion: number;
}

interface MapState {
  countries: Array<CountryI>;
}

export const Map: React.FC = () => {
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    getData('/countries')
      .then((response) => {
        setCountries(response);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <MapView
      customMapStyle={mapStyle}
      cacheEnabled={true}
      loadingEnabled={true}
      style={styles.mapView}>
      {countries.map((country: CountryI) => {
        const latLng = {
          latitude: country.countryInfo.lat,
          longitude: country.countryInfo.long,
        };
        return (
          <Pointer
            key={country.countryInfo._id || Math.random()}
            latLng={latLng}
            country={country}
          />
        );
      })}
    </MapView>
  );
};
const styles = StyleSheet.create({
  mapView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  mapContainer: {
    flex: 1,
  },
});
