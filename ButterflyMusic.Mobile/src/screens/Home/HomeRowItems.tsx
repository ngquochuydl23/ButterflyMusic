import React from 'react';
import { Text, View, Pressable, FlatList } from 'react-native';
import { Theme } from "../../components/Theme";
import AlbumItem from "../Album/components/AlbumItem";
import ArtistItem from "../Artists/components/ArtistItem";

const HomeRowItems = ({ title, subtitle, items, type }) => {

  var ItemComponent
  switch (type) {
    case 'albums':
      ItemComponent = AlbumItem
      break;
    case 'artists':
      ItemComponent = ArtistItem
      break;
  }

  return (
    <>
      <Text
        style={{
          fontSize: 22,
          color: Theme.colors.text,
          marginTop: 15,
          marginHorizontal: 15,
          fontFamily: Theme.fontFamily.bold
        }}>
        {title}
      </Text>
      <FlatList
        horizontal={true}
        data={items}
        contentContainerStyle={{
          paddingStart: 15,
          paddingEnd: 15,
          marginVertical: 15,
        }}
        renderItem={({ item }) => <ItemComponent item={item} />}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => <View style={{ width: 20, height: 0 }} />}
      />
    </>
  )
}

export default HomeRowItems