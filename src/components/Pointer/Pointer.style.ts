import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  pointerContainer: {
    borderRadius: 50,
    padding: 10,
    maxHeight: 70,
    maxWidth: 70,
    shadowColor: '#fff',
    alignSelf: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  pointerText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  tooMuchCases: {
    backgroundColor: 'tomato',
  },
  tooMuchRecovered: {
    backgroundColor: 'lightgreen',
  },
});
