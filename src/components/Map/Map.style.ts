import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
  markerContainer: {
    backgroundColor: 'red',
    borderRadius: 10,
  },
  markerTitle: {
    color: '#fff',
    padding: 15,
  },
  flagImg: {
    width: 25,
    height: 25,
  },
});
