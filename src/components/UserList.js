// UserList.js
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../redux/userSlice';


const UserCard = ({ user }) => (
  <div className="user-card">
    <h3>{user.username}</h3>
    <p>{user.userprofile.name}</p>
    <p>{user.userprofile.location.city}, {user.userprofile.location.province}, {user.userprofile.location.country}</p>
    <p>{user.userprofile.description}</p>
    {/* 其他用户信息 */}
  </div>
);


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
    
    <Text>{JSON.stringify(users)}</Text>
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
