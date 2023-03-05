/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import React from 'react';
import * as React from 'react';
import { useState, useEffect } from 'react';
// import {View, StyleSheet, Text, Image} from 'react-native';
import MapboxGL from "@rnmapbox/maps";
import type {PropsWithChildren} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken('pk.eyJ1IjoicmFtbWllIiwiYSI6ImNsZXQ4ejMwYTBlMHU0M3BoNzYya2k1NjUifQ.9wRATE4HKviUiGbYgMah8w',);
// MapboxGL.setConnected(true);

import SearchComponent from './SearchComponent';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
} from 'react-native';



const styles = StyleSheet.create({
  page: {
    flex: 1,
    // height: "80%",
  },
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
  map: {
    flex: 1,
  }
});

export function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text >Home Screen</Text>
    <Button
      title="Go to Individual"
      onPress={() => navigation.navigate('Individual')}
    />
    <Button
      title="Go to Company"
      onPress={() => navigation.navigate('Company')}
    />
  </View>
);
}



function IndividualScreen({ navigation }) {
  const [coordinates] = useState([(73.21168799, 34.31441481),
    (73.54557609, 34.72389267),
    (73.55871314, 34.72607037),
    (73.55992629, 34.72608707),
    (73.56274172, 34.72585956),
    (73.5413983, 34.72400598),
    (73.54363336, 34.72389193),
    (73.54668485, 34.72434861),
    (73.54795951, 34.7243848),
    (73.5437686, 34.7251177),
    (73.57159278, 34.72518938),
    (73.52765025, 34.72316),
    (73.53038884, 34.72362963),
    (73.51382208, 34.73975707),
    (73.45736479, 34.64309336)]);
  return (

    <View style={styles.page}>
       <View style={styles.container}>
         <MapboxGL.MapView style={styles.map}>
           <MapboxGL.Camera zoomLevel={6}
            centerCoordinate={coordinates} />
           <MapboxGL.PointAnnotation coordinate={coordinates} />
          </MapboxGL.MapView>
          </View>
        </View>

  );
}

//web interface
function CompanyScreen({ navigation }) {
  const [coordinates] = useState([38.91713404544062, -77.22225339966501]);

  return (

    <View style={styles.page}>
       <View style={styles.container}>
         <MapboxGL.MapView style={styles.map}>
           <MapboxGL.Camera zoomLevel={6}
            centerCoordinate={coordinates} />
           <MapboxGL.CircleLayer id="circleLayer" style={{circleColor: 'red', circleRadius: 10}} sourceID= "" />
           <MapboxGL.PointAnnotation coordinate={coordinates} />
          </MapboxGL.MapView>
          </View>
    </View>

  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Individual" component={IndividualScreen} />
      <Stack.Screen name="Company" component={CompanyScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;