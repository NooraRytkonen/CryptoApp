import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Coins from "./Coins";
import News from "./News";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();


function App() {
  return(
  <NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen name="Crypto" component={Coins}
      options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="currency-usd-circle-outline" size={24} color="black" />
            )
          }}/>
    <Tab.Screen name="News" component={News}
      options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="newspaper-outline" size={24} color="black" />
            )
          }}/>
    </Tab.Navigator>
  </NavigationContainer>
  );
}

export default App;