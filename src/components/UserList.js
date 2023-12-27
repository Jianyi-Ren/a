// UserList.js
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../redux/userSlice';

const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user.userList);

  // Simulate fetching users from an API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Replace this with your actual API call to fetch users
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        dispatch(setUsers(data));
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [dispatch]);
  console.log('====123', userList)
  return (
    <Text>Open up App.js to start working on your app!</Text>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default UserList;
