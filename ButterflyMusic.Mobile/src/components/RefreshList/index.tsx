import React from 'react';
import { FlatList, RefreshControl, } from 'react-native';

const RefreshList = (props) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
  }, []);

  return (
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      {...props}
    />
  )
}

export default RefreshList