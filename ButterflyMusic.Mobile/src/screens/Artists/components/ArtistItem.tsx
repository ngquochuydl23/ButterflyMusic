import React from 'react';
import { Image, Text, Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Theme } from "../../../components/Theme";

const ArtistItem = ({ item }) => {

  const navigation = useNavigation()
  return (
    <Pressable onPress={() => { }}>
      <View style={{ width: 120 }}>
        <Image
          style={{
            width: "100%",
            borderRadius : 200,
            aspectRatio: 1 / 1
          }}
          source={{ uri: item.avatar }} />
        <Text style={{
          color: Theme.colors.text,
          fontSize: 14,
          marginTop: 10,
          fontFamily: Theme.fontFamily.bold
        }}>
          {item.name}
        </Text>
      </View>
    </Pressable>

  )
}

export default ArtistItem