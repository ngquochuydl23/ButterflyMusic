import React from 'react';
import { Image, Text, Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Theme } from "../../../components/Theme";

const MyPlayListItem = ({ item }) => {

  const navigation = useNavigation()
  return (
    <Pressable onPress={() => { }}>
      <View style={{
        width: "100%",
        height: 60,
        flexDirection: 'row',
        paddingHorizontal: 15
      }}>
        <Image
          style={{
            height: "100%",
            aspectRatio: 1 / 1
          }}
          source={{ uri: item.thumbnail }} />
        <View style={{
          flex: 1,
          marginStart: 15,
          justifyContent: 'center'
        }}>
          <Text style={{
            color: Theme.colors.text,
            fontSize: 16,
            fontFamily: Theme.fontFamily.bold,
          }}>
            {item.title}
          </Text>
          <Text style={{
            fontSize: 13,
            lineHeight: 15,
            color: Theme.colors.textDesciption,
            fontFamily: Theme.fontFamily.regular,
          }}>
           {item.subtitle}
          </Text>
        </View>
      </View>
    </Pressable>

  )
}

export default MyPlayListItem