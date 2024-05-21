import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons,  MaterialCommunityIcons, FontAwesome5, Fontisto } from '@expo/vector-icons';

import Profile from './src/tabs/Profile';
import Dashboard from './src/tabs/Dashboard';

import { Button, View, Text, TouchableOpacity, StyleSheet, ImageBackground, TextInput, Image } from "react-native";


const ImgBack = './assets/fundo.png';

const CustomButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const CustomButton2 = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.button2}>
    <Text style={styles.text1}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    padding: 10,
    width:300,
    borderRadius: 20,
    marginTop: 20,
    color:'black',
    borderWidth: 2,
    borderColor:'#ff6d24'
  },
  button2:{
    backgroundColor: 'white',
    padding: 10,
    width:200,
    borderRadius: 20,
    marginTop: 20,
    color:'black',
  },
  buttonAcesse:{
    backgroundColor: '#00CAB0',
    padding: 3,
    width:150,
    borderRadius: 12,
    marginTop: 10,
    marginLeft:100,
    height:30,
    marginBottom:20,
  },
  ButtonUpgrade:{
    backgroundColor: '#FFC500',
    padding: 10,
    width:200,
    borderRadius: 10,
    marginTop: 10,
    height:45,
    alignContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'black',
  },
  
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight:'650',
  },
  text1: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontWeight:'650',
  },
});


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
      tabBarOptions={{
        labelStyle: { fontSize: 10 },
      }}
      tabBarStyle={{ backgroundColor: 'blue' }} 
    >
      <Tab.Screen
        name="Exercicios"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="dumbbell" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Serviços"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="scissors" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Aulas"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="running" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-alt" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white' }}>
      <ImageBackground source={require(ImgBack)} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width:'100%',}}>
        <Image
        source={require('./assets/logo-royalbarberBRANCO.png')} 
        style={{ width: 250, height: 140, marginBottom:0, position:'relative'}} 
        />
        <Text style={{ fontSize:50, fontWeight:'bold', color: 'white', marginTop:0, marginBottom:10,}}>LOGIN</Text>
        <TextInput
        style={{ fontWeight:'bold', color:'white', height: 40, width: 300, borderColor: 'transparent', borderTopColor:'transparent', borderWidth: 1, marginTop: 20, paddingHorizontal: 10, borderBlockColor: '#ff6d24' }}
        placeholder="Email"
       />
        <TextInput
        secureTextEntry={true}
        style={{ fontWeight:'bold', color:'white', height: 40, width: 300, borderColor: 'transparent', borderTopColor:'transparent', borderWidth: 1, marginTop: 20, paddingHorizontal: 10, borderBlockColor: '#ff6d24',}}
        placeholder="Senha"
       />

      <CustomButton
        title="ENTRAR" style={{ color:'black' }}
        onPress={() => navigation.navigate('Drawer')}
      />

      <CustomButton2
        title="Esqueci a senha"
        onPress={() => navigation.navigate('Notifications')}
      />
      </ImageBackground>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Teste Not</Text>
      </View>
    );
}

function NotificationsScreen2({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Teste Not</Text>
    </View>
  );
}

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={MyTabs} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{
            headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Drawer" component={DrawerScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}