import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Map from '../components/Map/Map';
import CountryList from '../screens/CountryList/CountryList';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../styles/colors';

export default function Routes() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName: any;
            if (route.name === 'World') {
              iconName = focused ? 'globe' : '';
            } else if (route.name === 'Countrys') {
              iconName = focused ? '' : 'line-graph';
            }

            // You can return any component that you like here!
            return <Entypo name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.black,
          inactiveTintColor: '#b3b3b3',
          style: {
            backgroundColor: colors.white,
          },
        }}>
        <Tab.Screen name="World" component={Map} />
        <Tab.Screen name="Countrys" component={CountryList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
