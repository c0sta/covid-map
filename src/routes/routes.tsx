import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Map from '../components/Map/Map';
import DashboardPage from '../screens/dashboard/DashboardPage';
import colors from '../styles/colors';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default function Routes() {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="rgba(255, 255, 255, 0)"
        translucent={true}
        showHideTransition="fade"
      />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName: any;
              if (route.name === 'World') {
                iconName = 'globe';
              } else if (route.name === 'Countrys') {
                iconName = 'line-graph';
              }

              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: colors.text,
            inactiveTintColor: 'lightgray',
            style: {
              // backgroundColor: colors.white,
            },
          }}>
          <Tab.Screen name="World" component={Map} />
          <Tab.Screen name="Countrys" component={DashboardPage} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
