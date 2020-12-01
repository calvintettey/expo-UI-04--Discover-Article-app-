import React from 'react'
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native'
import ArticleList from './ArticleList'
import Home from '../tabs/Home';
import Folder from '../tabs/Folder';
import Heart from '../tabs/Heart';
import Profile from '../tabs/Profile';
import Settings from '../tabs/Settings';


const Stack = createStackNavigator();
export default function DiscoverPage({ navigation }) {
    return (
        <View>
            <ArticleList/>

        </View>
    )
}
