import React from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { ListItem, Avatar, Text, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import userList from '../../data/users.json'; 

const UserListScreen = () => {
  const navigation = useNavigation();

  const navigateToUserDetail = (user) => {
    // 传递用户数据作为参数
    console.log(user)
    navigation.navigate('UserDetail', { user: user/* 用户数据对象 */ });
  };



  const renderUserItem = (item) => (
    <TouchableOpacity  key={item.id} onPress={() => navigateToUserDetail(item)}> 
      <ListItem key={item.id} bottomDivider containerStyle={styles.usercard}>
        <Avatar
          rounded
          size="large"
          source={{ uri: item.avatarUrl }}
        />
        <ListItem.Content style={styles.content}>
          <ListItem.Title>
            <Text style={styles.nameText}>
              {item.nickname}{' '}
              <Icon 
                name={item.gender === '男' ? 'venus' : 'mars'}
                type='font-awesome'
                color={item.gender === '男' ? '#2f98e7' : 'pink'}
                size={styles.nameText.fontSize}
                style={styles.iconStyle} 
              />
            </Text>
          </ListItem.Title>
          <ListItem.Subtitle>
            {item.ageRange}岁 / {item.location.state}
          </ListItem.Subtitle>
          <ListItem.Subtitle style={styles.description}>
            {item.description}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        {userList.map(renderUserItem)}
      </View>
    </ScrollView>
  );
};

/**
 * UserListScreen组件的样式。
 *
 * @constant
 * @type {object}
 */
const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    borderRadius: 10, // 边框圆角
  },
  usercard: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 20
  },
  content: {
    fontSize: 14,
    color: 'darkgray',
    marginBottom: 10,
  },
  description: {
    color: 'gray',
  },

  nameText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 5,
    marginRight: 5,
    fontSize: 16, // 调整文字的大小
    lineHeight: 24, // 调整文字的行高
  },

  iconStyle: {
    fontWeight: 'bold',
    height: '100%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserListScreen;