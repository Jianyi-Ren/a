// Setting.js

import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Setting = ({ navigation }) => {
  const data = [
    { key: '账号管理', title: '账号管理' },
    { key: '关于小A', title: '关于小A' },
    { key: '登出', title: '登出' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item.key)}>
      <View style={styles.item}>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  const handlePress = (key) => {
    // 根据点击的项导航到相应的页面
    switch (key) {
      case '关于小A':
        navigation.navigate('关于小A');
        break;
      case '账号管理':
        navigation.navigate('账号管理');
        break;
      case '登出':
        navigation.navigate('登出');
        break;
      default:
        break;
    }
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Setting;