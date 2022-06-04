import React, { useContext } from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import { TestContext } from '../context/TestContext';

const Page1Screen = () => {
  const {testState} = useContext(TestContext);
  
  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize: 24}}>{JSON.stringify(testState, null, 4)}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Page1Screen;
