import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
export const styles = StyleSheet.create({
  mapView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: colors.white,
  },
  mapContainer: {
    flex: 1,
  },
  cardContainer: {
    borderRadius: 100,
    padding: 10,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: colors.red,
    color: 'white',
  },
  markerTitle: {
    color: colors.white,
    // backgroundColor: 'blue',
    borderBottomEndRadius: 10,
    padding: 15,
  },
  flagImg: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
});
