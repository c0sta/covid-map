import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './routes/routes';

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(255, 255, 255, 0)"
        translucent={true}
      />
      <Routes />
    </>
  );
};

export default App;

// const styles = StyleSheet.create({
//   mapContainer: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
// });
