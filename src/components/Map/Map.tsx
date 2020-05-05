import * as React from 'react';
import MapView from 'react-native-maps';
import {StyleSheet} from 'react-native';
import {getData} from '../../services/get-data';

// Dark mode map styles
import {mapStyle} from './Map.style';

type MapState = {
  countries: Array<Object>;
};

export const Map: React.FC<MapState> = () => {
  const [countries, setCountries] = React.useState({});

  React.useEffect(() => {
    getData('/countries').then((response: Object) => setCountries(response));

    console.log(countries);
  }, [countries]);

  return (
    <MapView
      customMapStyle={mapStyle}
      cacheEnabled={true}
      loadingEnabled={true}
      style={styles.mapView}
    />
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
