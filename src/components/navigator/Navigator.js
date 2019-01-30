import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { metrics, colors, fonts } from '../../theme/index.js';
import Tabs from '../tabs/Tabs.js';
import HeaderLeft from './HeaderLeft.js';
import HeaderRight from './HeaderRight.js';
import Introduce from '../introduce/Introduce.js';
import Welcome from '../welcome/Welcome.js';
import Login from '../login/Login.js';
import Signup from '../signup/Signup.js';


const navigationConfig = {
  initialRouteName: 'Tabs',
  headerMode: 'float',
  defaultNavigationOptions: ({ navigation }) => ({
    headerLeft: <HeaderLeft navigation={navigation} />,
    headerRight: <HeaderRight navigation={navigation} />,
    headerTintColor: colors.white,
    headerStyle: {
      backgroundColor: colors.secondary,
    },
    headerTitleStyle: {
      fontSize: fonts.size.large,
      color: colors.white,
    },
  }),
};

const Navigator = createStackNavigator({
  Tabs: { screen: Tabs },
  Introduce: {
    screen: Introduce,
    navigationOptions: {
      header: null
    }
  },
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      header: null
    }
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
}, navigationConfig);

export default createAppContainer(Navigator);
