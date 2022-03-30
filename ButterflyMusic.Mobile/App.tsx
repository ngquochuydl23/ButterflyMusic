import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from "./src/components/Routes";
import HomeRoutes from "./src/screens/Home/HomeRoutes";
import Welcome from "./src/screens/Authenticate/Welcome";
import { Theme } from "./src/components/Theme";

const Stack = createNativeStackNavigator()

const AppRoutes = () => {

  const hasLogined = true

  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.HomeRoutes} component={HomeRoutes} />
        <Stack.Screen name={Routes.Welcome} component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: Colors.darker
  };

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#000" />
      <AppRoutes />
    </>
  );
};

export default App;
