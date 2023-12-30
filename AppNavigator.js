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
import UserDetail from './src/components/users/UserDetail';
import UserList from './src/components/users/UserList';

// 设置
import Setting from './src/components/settings/Setting';
import Privacy from './src/components/settings/Privacy';
import Feedbacks from './src/components/settings/Feedbacks';
import VersionInfo from './src/components/settings/VersionInfo';

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
    <Stack.Screen name="设置" component={Setting} />
    <Stack.Screen name="关于小A" component={About} /> 
    <Stack.Screen name="账号管理" component={Profile} />
    <Stack.Screen name="登出" component={Logout} />
    <Stack.Screen name="用户协议和隐私政策" component={Privacy} />
    <Stack.Screen name="意见反馈" component={Feedbacks} />
    <Stack.Screen name="版本信息" component={VersionInfo} />
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
        tabBarStyle: { alignItems: 'flex-end', marginTop: 15, marginBottom: 0 }, // 调整整个 tabBar 的位置
        tabBarLabelStyle: { marginBottom: 5 },
        tabBarIconStyle: { marginBottom: 5 },
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

 