import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from "react-navigation-tabs";
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import TaskScreen from '../screens/task';
import DashboardDetailsScreen from '../screens/dashboard/DashboardDetailsScreen';

const getTabBarMenu = (menuName) => {
    return {
      tabBarLabel: menuName
  }
}

const DashboardStack = createStackNavigator({
    Dashboard: { screen: DashboardScreen },
    DashboardDetails: {screen: DashboardDetailsScreen}
});

DashboardStack.navigationOptions = getTabBarMenu("Dashboard");

const TaskSelectorStack = createStackNavigator({
    TaskSelector: { screen: TaskScreen }
});

TaskSelectorStack.navigationOptions = getTabBarMenu("Task Selector");

const ChatStack = createStackNavigator({
    Chat: { screen: DashboardScreen }
});

ChatStack.navigationOptions = getTabBarMenu("Chat");

const MainTabNavigator = createBottomTabNavigator({
    DashboardStack,
    TaskSelectorStack,
    ChatStack
  });

export default createAppContainer(MainTabNavigator);