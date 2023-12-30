import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

const About = ({ navigation }) => {
  const data = [
    { key: '版本信息', title: '版本信息' },
    { key: '意见反馈', title: '意见反馈' },
    { key: '用户协议和隐私政策', title: '用户协议和隐私政策' },
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
      case '版本信息':
        // 导航到版本信息页面
        navigation.navigate('版本信息');
        break;
      case '意见反馈':
        // 导航到意见反馈页面
        navigation.navigate('意见反馈');
        break;
      case '用户协议和隐私政策':
        // 导航到隐私政策页面
        navigation.navigate('用户协议和隐私政策');
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

export default About;