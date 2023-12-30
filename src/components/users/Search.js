import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Input, ListItem } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';

const SearchScreen = () => {
  const [genderOpen, setGenderOpen] = useState(false);
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState([
    { label: '男', value: '男' },
    { label: '女', value: '女' },
  ]);
  const [ageRange, setAgeRange] = useState('');
  const [acceptance, setAcceptance] = useState('');
  

  const searchData = {
    nickname,
    gender,
    ageRange,
    acceptance,
  };

  const handleSearch = () => {
    console.log('Search Data:', searchData);
    // Perform search or any other action here
    // Reset the form after searching
    setNickname('');
    setGender('');
    setAgeRange('');
    setAcceptance('');
  };

  const genderOptions = [
    { label: '男', value: '男' },
    { label: '女', value: '女' },
  ];

  const ageRangeOptions = [
    { label: '<18', value: '<18' },
    { label: '18-30', value: '18-30' },
    { label: '30-50', value: '30-50' },
    { label: '>50', value: '>50' },
  ];

  const acceptanceOptions = [
    { label: '不接受', value: '不接受' },
    { label: '亲吻搂抱', value: '亲吻搂抱' },
    { label: '全部接受', value: '全部接受' },
    { label: '未指定', value: '未指定' },
  ];

  return (
    <View style={{ padding: 16 }}>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>昵称</ListItem.Title>
          <Input placeholder="请输入昵称" value={nickname} onChangeText={setNickname} />
        </ListItem.Content>
      </ListItem>

      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>性别</ListItem.Title>
          <DropDownPicker
            open={setGenderOpen}
            items={genderOptions}
            placeholder="选择性别"
            defaultValue={gender}
            containerStyle={{ height: 40 }}
            style={{ zIndex: 1 }} // Add this line
            onChangeItem={(item) => setGender(item.value)}
          />
        </ListItem.Content>
      </ListItem>

      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>年龄区间</ListItem.Title>
          <DropDownPicker
            items={ageRangeOptions}
            placeholder="选择年龄区间"
            defaultValue={ageRange}
            containerStyle={{ height: 40 }}
            style={{ zIndex: 1 }} // Add this line
            onChangeItem={(item) => setAgeRange(item.value)}
          />
        </ListItem.Content>
      </ListItem>

      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>接受性的程度</ListItem.Title>
          <DropDownPicker
            items={acceptanceOptions}
            placeholder="选择接受性的程度"
            defaultValue={acceptance}
            containerStyle={{ height: 40 }}
            style={{ zIndex: 1 }} // Add this line
            onChangeItem={(item) => setAcceptance(item.value)}
          />
        </ListItem.Content>
      </ListItem>

      <Button title="搜索" onPress={handleSearch} />

    </View>
  );
};

export default SearchScreen;
