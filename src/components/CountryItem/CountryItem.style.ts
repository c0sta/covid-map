import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
export const styles = StyleSheet.create({
  countryContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginTop: 15,
    height: 65,
    borderRadius: 8,
    padding: 15,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  countryTitle: {
    color: colors.black,
    fontFamily: 'sans-serif',
    fontSize: 16,
  },
  countryDescrition: {
    fontSize: 13,
    color: 'gray',
  },
  countryFlag: {width: 40, height: 40, borderRadius: 100},
  casesConfirmed: {
    fontSize: 20,
    color: colors.red,
  },
  casesRecovered: {
    fontSize: 16,
    color: colors.green,
  },
  casesDeaths: {
    fontSize: 16,
    color: colors.red,
  },
});
