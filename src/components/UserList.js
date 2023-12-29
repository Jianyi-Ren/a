// UserList.js
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../redux/userSlice';


const UserCard = ({ user }) => {
  return (
    <View style={styles.card}>
    <Image source={{ uri: user.userprofile.avatar_id }} style={styles.avatar} />  
    <Text style={styles.text}>Username: {user.username}</Text>
    <Text style={styles.text}>Name: {user.userprofile.name}</Text>
    <Text style={styles.text}>Country: {user.userprofile.location.country}</Text>
    <Text style={styles.text}>Province: {user.userprofile.location.province}</Text>
    <Text style={styles.text}>City: {user.userprofile.location.city}</Text>
    <Text style={styles.text}>Description: {user.userprofile.description}</Text>
  </View>
  );
};


const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.userList);

  // Simulate fetching users from an API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Replace this with your actual API call to fetch users
        const response = await fetch('http://localhost:8000/api/users');
        const data = await response.json();
        dispatch(setUsers(data));

      } catch (error) {
        console.error('~~~~~~~~:', error);
      }
    };

    fetchUsers();
  }, [dispatch]);

  console.log('userList:', users);
  return (
  <ScrollView style={styles.container}>
    <View style={styles.container}>
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
    scrollView: {
      width: '30%',
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      padding: 10,
      margin: 10,
      backgroundColor: '#f8f8f8',
      borderRadius: 5,
    },
    text: {
      fontSize: 16,
    },
    container: {
      width: '0%',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  });
  

export default UserList;
