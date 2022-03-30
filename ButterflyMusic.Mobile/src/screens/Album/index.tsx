import React, { useRef } from 'react';
import { Text, View, Animated, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/core'
import { useNavigation } from '@react-navigation/core';
import StickyParallaxHeader from 'react-native-sticky-parallax-header'


const Album = () => {

  const route = useRoute()
  const navigation = useNavigation()
  const { albumId, albumTitle } = route.params as any

  navigation.setOptions({ title: albumTitle })
  const paralaxScrollRef = useRef(null);


  const renderForeground = () => {
    return (
      <div>
        <Animated.View
          
        >
          
        </Animated.View>
      </div>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      
    </View>
  )
}

export default Album