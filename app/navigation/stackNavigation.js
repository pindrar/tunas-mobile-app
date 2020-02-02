import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {SettingScreen} from '../screens/setting'
import {ProfileScreen} from '../screens/profile'

const AppNavigator = createStackNavigator({
  Profile: {screen: ProfileScreen},
  Setting: {screen: SettingScreen}
})

const stackNav = createAppContainer(AppNavigator);

export default stackNav;