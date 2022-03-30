import React from 'react';
import { Pressable, View } from "react-native"
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Theme } from "../../Theme";

const LibraryHeaderRight = () => {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Pressable style={{ marginRight: 20 }}>
        <Ionicons name="ios-search" size={26} color={Theme.colors.colorIcon} />
      </Pressable>
      <Pressable>
        <Ionicons name="ios-add" size={35} color={Theme.colors.colorIcon} />
      </Pressable>
    </View>
  )
}

export default LibraryHeaderRight