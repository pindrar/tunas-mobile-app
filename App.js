import {createAppContainer} from 'react-navigation'
import {HomeScreen} from './app/screens/home'
import {ProfileScreen} from './app/screens/profile'
import {SettingScreen} from './app/screens/setting'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Profile: {
    screen : createStackNavigator({
      Profile: {screen: ProfileScreen},
      Setting: {screen: SettingScreen}
    })
  },
});

const App = createAppContainer(TabNavigator);

export default App;