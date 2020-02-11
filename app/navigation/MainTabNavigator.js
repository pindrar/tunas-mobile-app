import React from 'react';
import { Image, Text } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from "react-navigation-tabs";
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import TaskScreen from '../screens/task';
import DashboardDetailsScreen from '../screens/dashboard/DashboardDetailsScreen';

const getTabBarMenu = (menuName, imageIcon) => {
    return {
      tabBarLabel: menuName,
      tabBarIcon: <Image source={imageIcon} style={{height: 25, resizeMode: 'contain', marginTop: 10}} />
  }
}

const dashboardIcon = require('../assets/images/profile.png');
const taskIcon = require('../assets/images/list.png')
const chatIcon = require('../assets/images/chat.png')

const DashboardStack = createStackNavigator({
    Dashboard: DashboardScreen,
    DashboardDetails: {screen: DashboardDetailsScreen}
});

DashboardStack.navigationOptions = getTabBarMenu("Dashboard", dashboardIcon);

const TaskSelectorStack = createStackNavigator({
    TaskSelector: TaskScreen
});

TaskSelectorStack.navigationOptions = getTabBarMenu("Task", taskIcon);

const ChatStack = createStackNavigator({
    Chat: { screen: DashboardScreen }
});

ChatStack.navigationOptions = getTabBarMenu("Chat", chatIcon);

const MainTabNavigator = createBottomTabNavigator({
    DashboardStack,
    TaskSelectorStack
  });

export default createAppContainer(MainTabNavigator);