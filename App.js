import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Chdistributor from './pages/chdistributor/index'
import Confectionery from './pages/confectionery'
import Delivery from './pages/delivery'
import Deliverydrink from './pages/deliverydrink'
import Gasdistributor from './pages/gasdistributor'
import Hairdresser from './pages/hairdresser'
import Homescreen from './pages/homescreen/index'
import Petshop from './pages/petshop/index'
import Signin from './pages/signin/index'
import Supermarket from './pages/supermarket/index' 
import Butchershop from './pages/butchershop/index'
import Sewing from './pages/sewing/index'


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,marginTop:10, backgroundColor: '#FFFFFF'}}>
           <Button
        title="Promoções CG"
        color="#20B2AA"
      />
      <Homescreen/>
    </View>
  );
}
function petshops({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF'}}>
     <Petshop/>
    </View>
  );
}
function hairdresser({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
      <Hairdresser/>
    </View>
  );
}
function delivery({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
      <Delivery/>
    </View>
  );
}
function chdistributor({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
      <Chdistributor/>
    </View>
  );
}
function gasdistributor({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor: '#FFFFFF'}}>
      <Gasdistributor/>
    </View>
  );
}
function deliverydrink({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
     <Deliverydrink/>
    </View>
  );
}
function signin({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
     <Signin/>
    </View>
  );
}
function supermarket({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor: '#FFFFFF'}}>
     <Supermarket/>
    </View>
  );
}
function confectionery({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor: '#FFFFFF'}}>
      <Confectionery/>
    </View>
  );
}
function butchershop({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
      <Butchershop/>
    </View>
  );
}
function sewing({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor: '#FFFFFF'}}>
      <Sewing/>
    </View>
  );
}


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home"  leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}>
        <Drawer.Screen name="Habitual-CG" component={HomeScreen} />
        <Drawer.Screen name="Petz Shop" component={petshops} />
        <Drawer.Screen name="Cabeleireiros" component={hairdresser} />
        <Drawer.Screen name="Pizzas e Lanches" component={delivery} />
        <Drawer.Screen name="Terere & Chimarrão" component={chdistributor} />
        <Drawer.Screen name="Distribuidora Gás & Água" component={gasdistributor} />
        <Drawer.Screen name="Distribuidoras de Bebidas" component={deliverydrink} />
        <Drawer.Screen name="Super Mercados" component={supermarket} />
        <Drawer.Screen name="Padarias & Confeitaria" component={confectionery} />
        <Drawer.Screen name="Açougues" component={butchershop} />
        <Drawer.Screen name="Costura & Aviamentos" component={sewing} />
        <Drawer.Screen name="Login" component={signin} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
