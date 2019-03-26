import React, { Component } from "react";
import { Root } from "native-base";
import {
  createStackNavigator,
  createAppContainer,
  AppContainer
} from "react-navigation";
import Splash from "./src/screens/splash/Splash";
import Welcome from "./src/screens/welcome/welcome";
import Login from "./src/screens/login/login";
import Signup from "./src/screens/signup/signup";
import PhoneNumber from "./src/screens/phoneNumber/phoneNumber";
import OTP from "./src/screens/otp/otp";
import Home from "./src/screens/home/home";
import AddTask from "./src/screens/addTask/addTask";
import AddTask2 from "./src/screens/addTask/addTask2";
import Bookings from "./src/screens/bookings/bookings";
import Profile from "./src/screens/profile/profile";
import Payment from "./src/screens/profile/payment";
import ChangePassword from "./src/screens/profile/changePassword";
import EditProfile from "./src/screens/profile/editProfile";
import Job from "./src/screens/job/job";
import Offers from "./src/screens/offers/offers";
import OfferDetails from "./src/screens/offerDetails/offerDetails";
import Search from "./src/screens/search/search";
import Congratulations from "./src/screens/congratulations/congratulations";
import Pay from "./src/screens/pay/pay";
import Rating from "./src/screens/rating/rating";
import MyServices from "./src/screens/myServices/myServices";
import Stats from "./src/screens/stats/stats";
import TasksList from "./src/screens/tasksList/tasksList";
import SendAnOffer from "./src/screens/sendAnOffer/sendAnOffer";
const Navigator = createStackNavigator(
  {
    Splash: { screen: Splash },
    Welcome: { screen: Welcome },
    Login: { screen: Login },
    Signup: { screen: Signup },
    PhoneNumber: { screen: PhoneNumber },
    OTP: { screen: OTP },
    Home: { screen: Home },
    AddTask: { screen: AddTask },
    AddTask2: { screen: AddTask2 },
    Bookings: { screen: Bookings },
    Profile: { screen: Profile },
    Payment: { screen: Payment },
    EditProfile: { screen: EditProfile },
    ChangePassword: { screen: ChangePassword },
    Job: { screen: Job },
    Offers: { screen: Offers },
    OfferDetails: { screen: OfferDetails },
    Search: { screen: Search },
    Congratulations: { screen: Congratulations },
    Pay: { screen: Pay },
    Rating: { screen: Rating },
    MyServices: { screen: MyServices },
    Stats: { screen: Stats },
    TasksList: { screen: TasksList },
    SendAnOffer: { screen: SendAnOffer }
  },
  {
    initialRouteName: "Splash"
  }
);

export default createAppContainer(Navigator);
