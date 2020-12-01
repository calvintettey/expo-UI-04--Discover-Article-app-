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


const Tab = createBottomTabNavigator();
export default function DiscoverPage({ navigation }) {
    return (
        <View>
            <ArticleList/>

            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Folder" component={Folder} />
                <Tab.Screen name="Heart" component={Heart} />
                <Tab.Screen name="Profile" component={Profile} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        </View>
    )
}
