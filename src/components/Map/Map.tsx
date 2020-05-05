import * as React from 'react';
import MapView from 'react-native-maps';
import {StyleSheet} from 'react-native';

// Dark mode map styles
import {mapStyle} from './Map.style';

export const Map: React.FC = () => {
  return (
    <MapView
      customMapStyle={mapStyle}
      cacheEnabled={true}
      loadingEnabled={true}
      style={styles.mapView}
      showsBuildings={false}
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
