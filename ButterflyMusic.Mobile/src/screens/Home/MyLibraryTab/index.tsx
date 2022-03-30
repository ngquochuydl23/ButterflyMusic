import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/core'
import { useNavigation } from '@react-navigation/core';
import Routes from "../../../components/Routes";
import MyPlayListItem from "../../MyPlaylist/components/MyPlayListItem";


const playLists = [
  {
    id: 1,
    title: 'Lớp 9A13 - 9A15 THCS Nguyễn Du',
    subtitle: 'Danh sách phát • Vũ Hoàng Uyên Nhi',
    thumbnail: 'https://i.ytimg.com/vi/nrpjNgZCdlM/maxresdefault.jpg'
  },
  {
    id: 1,
    title: 'Lớp 9A13 - 9A15 THCS Nguyễn Du',
    subtitle: 'Danh sách phát • Vũ Hoàng Uyên Nhi',
    thumbnail: 'https://i.ytimg.com/vi/nrpjNgZCdlM/maxresdefault.jpg'
  },
  {
    id: 1,
    title: 'Lớp 9A13 - 9A15 THCS Nguyễn Du',
    subtitle: 'Danh sách phát • Vũ Hoàng Uyên Nhi',
    thumbnail: 'https://i.ytimg.com/vi/nrpjNgZCdlM/maxresdefault.jpg'
  }
]

const MyLibraryTab = () => {
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
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ marginTop: 15 }}
        data={playLists}
        renderItem={({ item }) =>
          <MyPlayListItem item={item} />
        }
        ItemSeparatorComponent={() => <View style={{ height: 20, width: 0 }} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

export default MyLibraryTab