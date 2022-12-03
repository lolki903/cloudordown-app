import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeStack } from './NativeStack';

export type BottomTabParamList = {
	Information: undefined;
	PromotionsTab: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const PromotionsScreen = () => {
    const logo = require("../assets/icon.png");
	return (

		<View style={{alignItems: 'center', justifyContent: 'center',width:"100%"}}>
			<Text style={{fontSize:"20px"}}>Welcome on the cloud or down</Text>
            <Image style={{height:"92%", width:"92%", marginTop:"20%%",resizeMode:"contain"}} source={logo}/>
		</View>
	)
}

export const BottomTabNavigator = () => {
	return (
	<Tab.Navigator  screenOptions={{
        headerShown: false,
      }}>
		<Tab.Screen name="Home" component={PromotionsScreen} />
		<Tab.Screen name="Information" component={NativeStack} />
	</Tab.Navigator>
	
	);
}