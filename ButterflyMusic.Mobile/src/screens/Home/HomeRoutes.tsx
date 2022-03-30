import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from "../../components/Routes";
import HomeTab from "./HomeTab";
import SearchTab from "./SearchTab";
import MyLibraryTab from "./MyLibraryTab";
import Album from "../Album";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LibraryHeaderLeft from "../../components/Headers/LeftHeader/LibraryHeaderLeft";
import TopTitleHeader from "../../components/Headers/TitleHeader/TopTitleHeader";
import HomeHeaderRight from "../../components/Headers/RightHeader/HomeHeaderRight"
import LibraryHeaderRight from "../../components/Headers/RightHeader/LibraryHeaderRight"
import { Theme } from '../../components/Theme';
import Profile from "../Profile";


interface TopScreen {
  name: string,
  component: React.FC,
  headerTitle?: React.ReactNode,
  headerRight?: React.ReactNode,
  headerLeft?: React.ReactNode,
  screenOptions?: {},
}

const ProtectStack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const ProtectRoutes = (TopScreenParams: TopScreen) => {
  return (
    <ProtectStack.Navigator
      initialRouteName={TopScreenParams.name}
      screenOptions={{
        headerTitleStyle: {
          fontFamily: Theme.fontFamily.bold
        }
      }}>
      <ProtectStack.Screen {...TopScreenParams}
        options={{
          headerTitle: () => TopScreenParams.headerTitle,
          headerRight: () => TopScreenParams.headerRight,
          headerLeft: () => TopScreenParams.headerLeft,
        }} />
      <ProtectStack.Screen name={Routes.Album} component={Album} />
      <ProtectStack.Screen name={Routes.Profile} component={Profile} />
    </ProtectStack.Navigator>
  )
}

const HomeRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name={Routes.Home}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home-variant" size={size} color={color} />
        }}>
        {() =>
          <ProtectRoutes
            name={Routes.Home}
            headerTitle={<TopTitleHeader titleHeader="Trang chủ" />}
            headerRight={<HomeHeaderRight />}
            component={HomeTab}
          />
        }
      </Tab.Screen>
      <Tab.Screen
        name={Routes.Search}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="ios-search" size={size} color={color} />
        }}>
        {() =>
          <ProtectRoutes
            name={Routes.Search}
            component={SearchTab}
            headerTitle={<TopTitleHeader titleHeader="Tìm kiếm" />}
          />
        }
      </Tab.Screen>
      <Tab.Screen
        name={Routes.Library}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="bookshelf" size={size} color={color} />
        }}>
        {() =>
          <ProtectRoutes
            name={Routes.Library}
            headerTitle={<TopTitleHeader titleHeader="Thư viện" />}
            headerLeft={
              <LibraryHeaderLeft currentUser={{
                avatar: 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.15752-9/274209997_539431570637096_251245705678589146_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=MpNcrJn2-DYAX_2KeWt&_nc_ht=scontent.fsgn13-2.fna&oh=03_AVL6nHyysfcxkr-7t3ekvTmugdCUGSr-BAHvttNT-dThPw&oe=6269D20C'
              }} />
            }
            headerRight={<LibraryHeaderRight />}
            component={MyLibraryTab}
          />
        }
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default HomeRoutes