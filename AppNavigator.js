// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import UserList from './src/components/UserList';
import UserDetail from './src/components/UserDetail';
import Profile from './src/components/Profile';
import Search from './src/components/Search';
import Message from './src/components/Message';
import Setting from './src/components/Setting';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const UserStackNavigator = () => {
    return (
      <Stack.Navigator initialRouteName="UserList">
        <Stack.Screen name="UserList" component={UserList} options={{ headerTitle: '用户列表' }} />
        <Stack.Screen name="UserDetail" component={UserDetail} options={{ headerTitle: '用户详情' }} />
      </Stack.Navigator>
    );
  };

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: '个人资料',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" type="font-awesome" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: '搜索',
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" type="font-awesome" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarLabel: '消息',
          tabBarIcon: ({ color, size }) => (
            <Icon name="envelope" type="font-awesome" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
          tabBarLabel: '设置',
          tabBarIcon: ({ color, size }) => (
            <Icon name="cog" type="font-awesome" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;