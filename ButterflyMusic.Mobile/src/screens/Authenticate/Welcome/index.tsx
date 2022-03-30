import React from 'react';
import { Text, View } from 'react-native';
import { useRoute } from '@react-navigation/core'
import { useNavigation } from '@react-navigation/core';

const Welcome = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Welcome</Text>
    </View>
  )
}

export default Welcome