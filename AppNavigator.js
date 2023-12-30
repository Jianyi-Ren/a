// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import UserList from './src/components/users/UserList';
import UserDetail from './src/components/users/UserDetail';
import Profile from './src/components/accounts/Profile';
import Search from './src/components/users/Search';
import Message from './src/components/messages/Message';
import Setting from './src/components/settings/Setting';
import { Icon, useTheme } from 'react-native-elements';

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
  const { theme } = useTheme(); 
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 16,
        },
      })}
    >
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
        options={({ navigation }) => ({
          tabBarLabel: '消息',
          tabBarIcon: ({ color, size }) => (
            <Icon name="envelope" type="font-awesome" color={color} size={size} />
          ),
          tabBarButton: (props) => (
            <TabBarCustomButton {...props} onPress={() => navigation.navigate('Message')} disabled={true} />
          ), // 使用自定义按钮组件，设置 disabled 为 true
        })}
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

// Custom button component to disable the tab
const TabBarCustomButton = ({ accessibilityState, children, onPress, disabled }) => {
  const focused = accessibilityState.selected; // 获取当前标签是否被选中

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: focused ? 'grey' : 'white', // 当标签被选中时为灰色，否则为白色
      }}
    >
      {children}
    </TouchableOpacity>
  );
};

export default AppNavigator;