import React from 'react';
import { Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Routes from "../../Routes";


const LibraryHeaderLeft = ({ currentUser }) => {

  const navigation = useNavigation()
  const navigateToProfile = () => {
    navigation.navigate(Routes.Profile as never)
  }

  return (
    <Pressable onPress={() => navigateToProfile() }>
      <Image
        style={{
          width: 45,
          height: 45,
          borderRadius: 200,
          marginRight: 20
        }}
        source={{ uri: currentUser.avatar }} />
    </Pressable>
  )
}

export default LibraryHeaderLeft

 