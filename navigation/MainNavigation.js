import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/Detail";
import { headerStyles } from "./config";

const MainNavigation = createStackNavigator(
  {
    Tabs: {
      screen: TabNavigation,
      navigationOptions: {
        headerMode: 'none',
        headerShown : false
        //headerBackTitleVisible: !(Platform.OS === "ios") ? false : true
      }
    },
    Detail: {
      screen: DetailScreen,
      navigationOptions: {
        ...headerStyles,
      }
    }
  },
  {
    headerMode: "screen",
    // headerBackTitleVisible: false
  }
);

export default createAppContainer(MainNavigation);