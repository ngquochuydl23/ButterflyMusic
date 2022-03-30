import React from 'react';
import { Image, Text, Pressable, View } from 'react-native';
import { useRoute } from '@react-navigation/core'
import { useNavigation } from '@react-navigation/core';
import { useTheme } from '@react-navigation/native';
import Routes from "../../../components/Routes";
import { Theme } from "../../../components/Theme";

const AlbumItem = ({ item }) => {

  const navigation = useNavigation()

  const navigateToAlbum = (id: number, albumTitle: string) => {
    navigation.navigate(
      Routes.Album as never,
      {
        albumId: id,
        albumTitle: albumTitle
      } as never
    )
  }

  return (
    <Pressable onPress={() => navigateToAlbum(item.id, item.title)}>
      <View style={{ width: 150 }}>
        <Image
          style={{
            width: "100%",
            aspectRatio: 1 / 1
          }}
          source={{ uri: item.thumbnail }} />
        <Text style={{
          color: Theme.colors.text,
          fontSize: 14,
          marginTop: 10,
          fontFamily: Theme.fontFamily.bold
        }}>
          {item.title}
        </Text>
        <Text style={{
          color: Theme.colors.textDesciption,
          fontSize: 13,
          fontFamily: Theme.fontFamily.regular
        }}>
          {item.artist}
        </Text>
      </View>
    </Pressable>

  )
}

export default AlbumItem