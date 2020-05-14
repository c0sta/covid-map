import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#1D242A',
    borderRadius: 10,
    position: 'relative',
    padding: 15,
    marginBottom: 10,
  },
  cardTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  cardNumber: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  flagImg: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
