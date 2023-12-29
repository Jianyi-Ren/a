// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserList from './src/components/UserList';
import UserDetail from './src/components/UserDetail';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList">
        <Stack.Screen name="UserList" component={UserList} options={{ headerTitle: '用户列表' }}/>
        <Stack.Screen name="UserDetail" component={UserDetail} options={{ headerTitle: '用户详情' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;