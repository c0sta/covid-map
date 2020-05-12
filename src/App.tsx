import React from 'react';
import Map from './components/Map/Map';
import {View, StyleSheet, StatusBar} from 'react-native';

const App: React.FC = () => {
  return (
    <View style={styles.mapContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(255, 255, 255, 0)"
        translucent={true}
      />
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
