import React from "react";
import { AppLoading } from "expo";
import {StatusBar} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MainNavigation from "./navigation/MainNavigation";

export default class App extends React.Component {
  state = {
    loaded: false
  };

  handleError = (error) => console.log(error);

  handleLoaded = () => this.setState({loaded: true});

  loadAssets = async() => {
    // 엑스포에서 font 더이상 지원 안한대..ㅠㅠ
    // await Font.loadAssets({
    //   ...Ionicons.font
    // });

    // 우리프로젝트에서는 사용하지않지만 필요시 사용 가능.
    // await Asset.loadAsync([
    //   require("images/icon.png");
    // ]);
  }

  render() {
    const { loaded } = this.state;
    if(loaded) {
      return (
        //<TabNavigation />
        <>
          <StatusBar barStyle="light-content" />
          <MainNavigation />
        </>
      );
    } else {
      return (
        <AppLoading
          startAsync={this.loadAssets}
          onFinish={this.handleLoaded}
          onError={this.handleError}
        />
      );
    }
  }

}