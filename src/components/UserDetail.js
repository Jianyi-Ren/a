import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Avatar, Text, Button, Icon, useTheme } from 'react-native-elements';

const UserDetail = () => {
  // Assuming user data is passed through navigation route params
  // const { user } = route.params;
    const user = {
        'id': 1,
        'nickname': '小明',
        'gender': '男',
        'ageRange': '18-30',
        'location': {
            'country': '中国',
            'state': '上海市',
            'city': '上海市',
        },
        'acceptance': '接受性行为',
        'purpose': '认识新朋友',
        'description': '我是一个性格开朗的人，喜欢交朋友',  
        'avatarUrl': 'https://i.ibb.co/yd06VCf/8-c03-Zcvf1tk8-Gue7-1.png',
    }

    const { theme } = useTheme(); 
    // 获取屏幕宽度
    const screenWidth = Dimensions.get('window').width;
    return (
        <View style={styles.container}>
        {/* 1. Avatar */}
        <Avatar
            rounded
            size="xlarge"
            source={{ uri: user.avatarUrl }}
            containerStyle={styles.avatarContainer}
        />

        {/* 2. User Info */}
        <View style={styles.userInfoContainer}>
            <Text h4 style={styles.title}>{`${user.nickname} `}
            <Icon
                name={user.gender === '男' ? 'male' : 'female'}
                type='font-awesome'
                color={user.gender === '男' ? '#2f98e7' : 'pink'}
            />
            </Text>
            <Text h5 style={styles.content}>
              {`${user.ageRange}岁 / ${user.location.country} ${user.location.city}`}
            </Text>
        </View>

        {/* 4. User Details */}
        <View style={styles.userDetailsContainer}>
            <Text style={styles.title}>接受性的程度</Text>
            <Text style={styles.content}>{user.acceptance}</Text>

            <Text style={styles.title}>交友目的</Text>
            <Text style={styles.content}>{user.purpose}</Text>

            <Text style={styles.title}>个人介绍</Text>
            <Text style={styles.content}>{user.description}</Text>
        </View>

        {/* 5. Buttons */}
        <View style={styles.buttonsContainer}>
            <Button
                title="关注"
                buttonStyle={[theme.Button.blueButtonStyle, { width: screenWidth / 3 }]}
            />
            <Button
                title="发消息"
                buttonStyle={[theme.Button.whiteButtonStyle, { width: screenWidth / 3 }]}
                titleStyle={{ color: theme.colors.primary }}
                type="outline"
            />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    // 1. Avatar
    avatarContainer: {
      marginVertical: 20,
    },
    // 2. User Info
    userInfoContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    // 3. User Details
    userDetailsContainer: {
      width: '100%',
      padding: 40,

    },
    title: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'black',
      marginVertical: 5,
    },
    content: {
      fontSize: 14,
      color: 'darkgray',
      marginBottom: 10,
    },
    // 4. Buttons
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',  // 垂直居中对齐按钮
      width: '100%',
      padding: 30,
    },
  });

export default UserDetail;