import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Map from '../components/Map/Map';
import CountryList from '../screens/CountryList/CountryList';

export default function Routes() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeBackgroundColor: '',
          activeTintColor: '#f1f1f1',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: '#212a37',
          },
        }}>
        <Tab.Screen name="World Cases" component={Map} />
        <Tab.Screen name="Country's" component={CountryList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
