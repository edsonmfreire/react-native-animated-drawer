import React, {useState} from 'react';

import {
  TouchableOpacity,
  Image,
  Linking,
  View,
  Text,
  Alert,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();

import AntDesign from 'react-native-vector-icons/AntDesign';
AntDesign.loadFont();

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';

import Home from '../../screens/Home';
import Favorites from '../../screens/Favorites';
import Internal from '../../screens/Internal';

import Animated from 'react-native-reanimated';

import styles from './styles';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

type Props = {
  navigation: any;
};

const Screens = ({navigation, style}) => {
  return (
    <Animated.View style={[styles.stack, style]}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: 'Application Title',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons
                name="menu"
                color="black"
                size={24}
                style={styles.iconMenu}
              />
            </TouchableOpacity>
          ),
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="Internal" component={Internal} />
      </Stack.Navigator>
    </Animated.View>
  );
};

const DrawerContent = (props: Props) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.flexOne}>
      <View>
        <View style={styles.avatar}>
          <Image
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
              height: 60,
              width: 60,
            }}
          />
          <Text style={styles.appName}>APP Name</Text>
        </View>
        <View>
          <DrawerItem
            label="Home"
            labelStyle={styles.drawerItem}
            onPress={() => props.navigation.navigate('Home')}
            icon={() => <AntDesign name="dashboard" color="white" size={16} />}
          />
          <DrawerItem
            label="Favorites"
            labelStyle={styles.drawerItem}
            onPress={() => props.navigation.navigate('Favorites')}
            icon={() => <AntDesign name="save" color="white" size={16} />}
          />
          <DrawerItem
            label="About"
            labelStyle={styles.drawerItem}
            onPress={() => Linking.openURL('http://www.ekshat.com.br?origin=1')}
            icon={() => (
              <AntDesign name="infocirlceo" color="white" size={16} />
            )}
          />
          <DrawerItem
            label="Logout"
            labelStyle={styles.drawerItem}
            onPress={() => Alert.alert('Logout')}
            icon={() => <AntDesign name="logout" color="white" size={16} />}
          />
        </View>
        <View>
          <Text style={styles.versionText}>v.1.0</Text>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default () => {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = {borderRadius, transform: [{scale}]};

  return (
    <LinearGradient style={styles.flexOne} colors={['#34558b', '#4c77bd']}>
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        initialRouteName="Home"
        drawerStyle={styles.drawerStyle}
        drawerContentOptions={{
          activeBackgroundColor: 'transparent',
          activeTintColor: 'green',
          inactiveTintColor: 'green',
        }}
        sceneContainerStyle={styles.backgroundTransparent}
        drawerContent={(props) => {
          setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}>
        <Drawer.Screen name="Screens">
          {(props) => <Screens {...props} style={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </LinearGradient>
  );
};
