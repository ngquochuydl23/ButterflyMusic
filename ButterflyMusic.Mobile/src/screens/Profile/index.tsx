import React from 'react';
import { Image, Text, Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useRoute } from '@react-navigation/core'

const Profile = () => {

  const route = useRoute()
  const navigation = useNavigation()

 
  return (
    <View>
      <Text>
        Profile
      </Text>
    </View>
  )
}

export default Profile