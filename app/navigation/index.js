import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { LoginScreen } from '../screens/login'
import { DashboardScreen } from '../screens/dashboard'
import { TaskSelectorScreen } from '../screens/taskSelector'
import { TaskScreen } from '../screens/task'
import { ListTaskScreen } from '../screens/listTask'
import { DetailTaskScreen } from '../screens/detailTask'
import { SignatureScreen } from '../screens/signatureSubmit'
import { QuizionerScreen } from '../screens/quizioner'

const isLogin = true

export const Navigator = createStackNavigator({
  FirstPage: {
    screen: isLogin ?
      createBottomTabNavigator({
        dashboard: { screen: DashboardScreen },
        taskSelector: {
          screen: createStackNavigator({
            taskSelector: { screen: TaskSelectorScreen },
            task: { screen: TaskScreen },
            listTask: { screen: ListTaskScreen },
            detailTask: { screen: DetailTaskScreen },
            signature: { screen: SignatureScreen },
            quizioner: { screen: QuizionerScreen }
          })
        },
        whatsapp: { screen: DashboardScreen }
      }) : LoginScreen
  },
  MainPage: {
    screen: createBottomTabNavigator({
      dashboard: { screen: DashboardScreen },
      taskSelector: {
        screen: createStackNavigator({
          taskSelector: { screen: TaskSelectorScreen },
          task: { screen: TaskScreen },
          listTask: { screen: ListTaskScreen },
          detailTask: { screen: DetailTaskScreen },
          signature: { screen: SignatureScreen },
          quizioner: { screen: QuizionerScreen }
        })
      },
      whatsapp: { screen: DashboardScreen }
    })
  },
}, {
  initialRouteName: 'FirstPage',
  header: null,
  headerMode: 'none'
});