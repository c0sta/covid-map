import React from 'react';
import {Map} from './components/Map/Map';
import {View, StyleSheet} from 'react-native';

const App: React.FC = () => {
  return (
    <View style={styles.mapContainer}>
      <Map />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
