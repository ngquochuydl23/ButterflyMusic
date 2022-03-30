import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import HomeRowItems from "../HomeRowItems";
import RefreshList from "../../../components/RefreshList";

const albums = [
  {
    id: 1,
    title: 'Tái bút anh yêu em',
    artist: 'Hà Anh Tuấn',
    thumbnail: 'https://i.ytimg.com/vi/nrpjNgZCdlM/maxresdefault.jpg'
  },
  {
    id: 1,
    title: 'Tháng 4 là lời nói dối của em',
    artist: 'Hà Anh Tuấn',
    thumbnail: 'https://i1.sndcdn.com/artworks-000185999763-8m8tou-t500x500.jpg'
  },
  {
    id: 1,
    title: 'Tháng 4 là lời nói dối của em',
    artist: 'Hà Anh Tuấn',
    thumbnail: 'https://i1.sndcdn.com/artworks-000185999763-8m8tou-t500x500.jpg'
  }, {
    id: 1,
    title: 'Tháng 4 là lời nói dối của em',
    artist: 'Hà Anh Tuấn',
    thumbnail: 'https://i1.sndcdn.com/artworks-000185999763-8m8tou-t500x500.jpg'
  }
]

const artists = [
  {
    id: 1,
    avatar: 'https://media.vov.vn/uploaded/wgyyweux2icrb7fgmumzw/2017_08_04/hat_3__zvsd.jpg',
    name: 'Hà Anh Tuấn',
  },
  {
    id: 1,
    avatar: 'https://media.vov.vn/uploaded/wgyyweux2icrb7fgmumzw/2017_08_04/hat_3__zvsd.jpg',
    name: 'Hà Anh Tuấn',
  },
  {
    id: 1,
    avatar: 'https://media.vov.vn/uploaded/wgyyweux2icrb7fgmumzw/2017_08_04/hat_3__zvsd.jpg',
    name: 'Hà Anh Tuấn',
  },
  {
    id: 1,
    avatar: 'https://media.vov.vn/uploaded/wgyyweux2icrb7fgmumzw/2017_08_04/hat_3__zvsd.jpg',
    name: 'Hà Anh Tuấn',
  },
]

const rows1 = [
  {
    title: 'Vùng kí ức của bạn',
    type: 'albums',
    items: albums,
  },
  {
    title: 'Vùng kí ức của bạn',
    type: 'albums',
    items: albums,
  },
  {
    title: 'Nghệ sẽ phổ biến',
    type: 'artists',
    items: artists,
  },
  {
    title: 'Vùng kí ức của bạn',
    type: 'albums',
    items: albums,
  }
]

const HomeTab = () => {
  return (
    <View>
      <RefreshList
        data={rows1}
        renderItem={({ item }) =>
          <HomeRowItems {...item} />
        }

        keyExtractor={item => item.id} />
    </View>
  )
}

export default HomeTab