import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Routes from './src/routes';
import HomeScreen from './src/screens/HomeScreen';
import ProductListScreen from './src/screens/ProductListScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name={Routes.HomeScreen} component={HomeScreen} />
        <Drawer.Screen name={Routes.ProductListScreen} component={ProductListScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}