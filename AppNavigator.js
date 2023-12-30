// AppNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon, useTheme } from 'react-native-elements';

// 导入屏幕组件
import About from './src/components/settings/About';
import Logout from './src/components/accounts/Logout';
import Message from './src/components/messages/Message';
import Profile from './src/components/accounts/Profile';
import Search from './src/components/users/Search';
import Setting from './src/components/settings/Setting';
import UserDetail from './src/components/users/UserDetail';
import UserList from './src/components/users/UserList';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const UsersStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="UserList" component={UserList} />
    <Stack.Screen name="UserDetail" component={UserDetail} />
    <Stack.Screen name="Search" component={Search} />
  </Stack.Navigator>
);

const SettingsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Setting" component={Setting} />
    <Stack.Screen name="About" component={About} /> 
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Logout" component={Logout} />
  </Stack.Navigator>
);

const MessagesStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Message" component={Message} />
  </Stack.Navigator>
);

const AppNavigator = () => {
  const { theme } = useTheme(); 
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { alignItems: 'center', justifyContent: 'center', backgroundColor: 'yellow' },
        tabBarLabelStyle: {
          fontSize: 16,
        },
      })}>
      <Tab.Screen 
        name="Users" 
        component={UsersStack} 
        options={{
          headerShown: false,
          tabBarLabel: '用户',
          tabBarIcon: ({ color, size }) => (
            <Icon name="users" type="font-awesome" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Messages" 
        component={MessagesStack} 
        options={{
          headerShown: false,
          tabBarLabel: '消息',
          tabBarIcon: ({ color, size }) => (
            <Icon name="envelope" type="font-awesome" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsStack} 
        options={{
          headerShown: false,
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

 