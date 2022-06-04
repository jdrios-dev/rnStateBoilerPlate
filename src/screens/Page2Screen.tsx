import React from 'react';
import { useContext } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { TestContext } from '../context/TestContext';

const Page2Screen = () => {
  const {testState, changeName} = useContext(TestContext);

  return (
    <View>
      <Text style={{
        fontSize: 28
      }}>
        Title for Page 2
      </Text>
      <TouchableOpacity 
      onPress={()=>changeName('changeName')}
      style={{
        padding: 10,
        margin: 10,
        backgroundColor: testState.color
      }}
      >
        <Text>Change name</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={()=>changeName('resetAll')}
      style={{
        padding: 10,
        margin: 10,
        backgroundColor: testState.color
      }}
      >
        <Text>Reset color</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page2Screen;
