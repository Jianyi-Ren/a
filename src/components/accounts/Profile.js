// Profile.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Avatar, Card } from 'react-native-elements';

const Profile = ({ route }) => {
  const userData = {
    "id": 11,
    "nickname": "小雪",
    "gender": "女",
    "ageRange": "21-30",
    "location": {
      "country": "中国",
      "state": "陕西省",
      "city": "西安市"
    },
    "acceptance": "接受性行为",
    "purpose": "寻找读书伙伴",
    "description": "喜欢文学和艺术，希望找到一起阅读的朋友",
    "avatarUrl": "https://i.ibb.co/DLnXW4b/8-e-Wcc2-Qf8qur-AZrk.png"
  };

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.cardContainer}>
        <Image source={{ uri: userData.avatarUrl }} style={styles.avatar} />
        <Text style={styles.nickname}>{userData.nickname}</Text>
        <Text style={styles.description}>{userData.description}</Text>

        <View style={styles.detailsContainer}>
          <Text style={styles.detailText}>Gender: {userData.gender}</Text>
          <Text style={styles.detailText}>Age Range: {userData.ageRange}</Text>
          <Text style={styles.detailText}>
            Location: {userData.location.city}, {userData.location.state}, {userData.location.country}
          </Text>
          <Text style={styles.detailText}>Acceptance: {userData.acceptance}</Text>
          <Text style={styles.detailText}>Purpose: {userData.purpose}</Text>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  cardContainer: {
    width: '80%',
    padding: 20,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: 'center',
  },
  nickname: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  detailsContainer: {
    marginTop: 20,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Profile;
