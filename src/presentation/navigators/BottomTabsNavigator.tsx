/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/home/HomeScreen';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {Text} from 'react-native';
import {SettingsScreen} from '../screens/settigns/SettingsScreen';

const Tab = createBottomTabNavigator();
export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => <Text style={{color}}>Home</Text>,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({color}) => <Text style={{color}}>Profile</Text>,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({color}) => <Text style={{color}}>Settings</Text>,
        }}
      />
    </Tab.Navigator>
  );
};
