import React from 'react';
import { Text } from 'react-native';
import { Theme } from "../../Theme";


const TopTitleHeader = ({ titleHeader }) => {
  return (
    <Text style={{
      fontSize: Theme.dimen.topHeaderTitleSize,
      color: Theme.colors.text,
      marginVertical: 15,
      fontFamily: Theme.fontFamily.bold
    }}>
      {titleHeader}
    </Text>
  )
}

export default TopTitleHeader

