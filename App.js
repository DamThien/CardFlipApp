import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PlayScreen from './Screens/Play';
import SettingScreen from './Screens/Setting';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Play"
          component={PlayScreen}
          options={{ title: 'Play' }}
        />
        <Stack.Screen
          name="Setting"
          component={SettingScreen}
          options={{ title: 'Setting' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;