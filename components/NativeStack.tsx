import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Card from "./Card";
import {Button,Text,Image, View, ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type NativeStackParamList = {
    Home: undefined;
    Details: undefined;
    Rules: undefined;
    Green: undefined;
    Eco: undefined;
};
const HomeScreen = ({route,navigation}:NativeStackScreenProps<NativeStackParamList,"Home">) => {
    return (
      <SafeAreaView>
          <Button title="READ RULES OF THE GAME" onPress={() => navigation.navigate("Rules")
          } />
          <Button title="CARD OF THE GREEN IT" onPress={() => navigation.navigate("Green")
          } />
          <Button title="CARD ON THE ECO DESIGN" onPress={() => navigation.navigate("Eco")
          } />
      </SafeAreaView>
    )
  }
  const DetailsScreen = ({route,navigation}:NativeStackScreenProps<NativeStackParamList,"Details">) => {
    return (
        <SafeAreaView>
            <Text>Details Screen</Text>
            <Button title="Go to Home" onPress={() => navigation.goBack()} />
            <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />
        </SafeAreaView>
    )
  }
  const RulesScreen = ({route,navigation}:NativeStackScreenProps<NativeStackParamList,"Rules">) => {
    const rules = require("../assets/rules.png");
    return (
        <SafeAreaView>
            <Image style={{height:"120%", width:"120%",marginTop:"-25%",marginLeft:"-4.5%"}} source={rules}/>
        </SafeAreaView>
    )
    }
const CardGreenIT = ({route,navigation}:NativeStackScreenProps<NativeStackParamList,"Green">) => {
    return (
        <ScrollView>
            <View style={{marginBottom:"7%"}}>
            <Text style={{fontSize:"20px"}}>How many percent of French people want to reduce the environmental impact of digital technology?</Text>
            <View style={{display:"flex", flexDirection:"row",justifyContent:"center",marginBottom:"3%",marginTop:"3%"}}>
                <Text style={{marginLeft:"25%",marginRight:"25%",fontSize:"18px"}}>A:50%</Text>
                <Text  style={{marginLeft:"25%",marginRight:"25%",fontSize:"18px"}}>B:85%</Text>
            </View>
        </View>
        <View style={{marginBottom:"7%"}}>
            <Text style={{fontSize:"20px"}}>Does eco-design serve to produce more ?</Text>
            <View  style={{display:"flex", flexDirection:"row",justifyContent:"center",marginBottom:"3%",marginTop:"3%"}}>
                <Text style={{marginLeft:"25%",marginRight:"25%",fontSize:"18px"}}>A:True</Text>
                <Text style={{marginLeft:"25%",marginRight:"25%",fontSize:"18px"}}>B:False</Text>
            </View>
            <View>
                <Text>Answer: B</Text>
            </View>
        </View>
        <View style={{marginBottom:"7%"}}>
            <Text style={{fontSize:"20px"}}>How many consumers are willing to pay more for a green product?</Text>
            <View  style={{display:"flex", flexDirection:"row",justifyContent:"center",marginBottom:"3%",marginTop:"3%"}}>
                <Text style={{marginLeft:"25%",marginRight:"25%",fontSize:"18px"}}>A:57%</Text>
                <Text style={{marginLeft:"25%",marginRight:"25%",fontSize:"18px"}}>B:37%</Text>
            </View>
            <View>
                <Text>Answer:A </Text>
            </View>
        </View>
        <View style={{marginBottom:"7%"}}>
            <Text style={{fontSize:"20px"}}>What is the digital consumption in France ?</Text>
            <View  style={{display:"flex", flexDirection:"row",justifyContent:"center", flexWrap:"wrap",marginBottom:"3%",marginTop:"3%"}}>
                <Text style={{marginLeft:"7%",marginRight:"7%",fontSize:"18px"}}>A:180 Twh</Text>
                <Text style={{marginLeft:"7%",marginRight:"7%",fontSize:"18px"}}>B:50 Twh</Text>
                <Text style={{marginLeft:"7%",marginRight:"7%",fontSize:"18px"}}>C:150 Twh</Text>
                <Text style={{marginLeft:"7%",marginRight:"7%",fontSize:"18px"}}>D:300 Twh</Text>
            </View>
            <View>
                <Text>Answer:A </Text>
            </View>
        </View>
        <View style={{marginBottom:"7%"}}>
            <Text style={{fontSize:"20px"}}>Online video: what are the environmental impacts?</Text>
            <View  style={{display:"flex", flexDirection:"row",justifyContent:"center",marginBottom:"3%",marginTop:"3%"}}>
                <Text style={{marginLeft:"25%",marginRight:"25%",fontSize:"18px"}}>A:150 Twh</Text>
                <Text style={{marginLeft:"25%",marginRight:"25%",fontSize:"18px"}}>B:40 Twh</Text>
            </View>
            <View>
                <Text>Answer:A </Text>
            </View>
        </View>
        <View style={{marginBottom:"7%"}}>
            <Text style={{fontSize:"20px"}}>Do the majority of people prefer renewable materials?</Text>
            <View  style={{display:"flex", flexDirection:"row",justifyContent:"center",marginBottom:"3%",marginTop:"3%"}}>
                <Text style={{marginLeft:"25%",marginRight:"25%",fontSize:"18px"}}>A:Yes</Text>
                <Text style={{marginLeft:"25%",marginRight:"25%",fontSize:"18px"}}>B:No</Text>
            </View>
            <View>
                <Text>Answer:A </Text>
            </View>
        </View>
        </ScrollView>
     
    )
}
const CardEco = ({route,navigation}:NativeStackScreenProps<NativeStackParamList,"Eco">) => {
    return (
        <ScrollView>
        <View style={{marginBottom:"7%"}}>
            <Text style={{fontSize:"20px"}}>What is the objective of eco-design?</Text>
            <View style={{display:"flex", flexDirection:"row",justifyContent:"center",marginBottom:"3%",marginTop:"3%"}}>
                <Text style={{marginLeft:"5%",marginRight:"5%",fontSize:"14px",with:"3%"}}>A:produce with less impact on the planet</Text>
                <Text  style={{marginLeft:"5%",marginRight:"5%",fontSize:"14px"}}>B:produce with less impact on the planet</Text>
            </View>
            <View>
                <Text>Answer: B</Text>
            </View>
        </View>
        <View style={{marginBottom:"7%"}}>
            <Text style={{fontSize:"20px"}}>To eco-design a product, only the manufacturing and end-of-life processing stages are really to be considered.</Text>
            <View  style={{display:"flex", flexDirection:"row",justifyContent:"center",marginBottom:"3%",marginTop:"3%"}}>
                <Text style={{marginLeft:"25%",marginRight:"25%",fontSize:"18px"}}>A:True</Text>
                <Text style={{marginLeft:"25%",marginRight:"25%",fontSize:"18px"}}>B:False</Text>
            </View>
            <View>
                <Text>Answer: B</Text>
            </View>
        </View>
        <View style={{marginBottom:"7%"}}>
            <Text style={{fontSize:"20px"}}>New and refurbished laptops have the same lifespan.</Text>
            <View  style={{display:"flex", flexDirection:"row",justifyContent:"center",marginBottom:"3%",marginTop:"3%"}}>
                <Text style={{marginLeft:"25%",marginRight:"25%",fontSize:"18px"}}>A:True</Text>
                <Text style={{marginLeft:"25%",marginRight:"25%",fontSize:"18px"}}>B:False</Text>
            </View>
            <View>
                <Text>Answer:A </Text>
            </View>
        </View>
        <View style={{marginBottom:"7%"}}>
            <Text style={{fontSize:"20px"}}>Eco-products are more expensive products.</Text>
            <View  style={{display:"flex", flexDirection:"row",justifyContent:"center", flexWrap:"wrap",marginBottom:"3%",marginTop:"3%"}}>
                <Text style={{marginLeft:"7%",marginRight:"7%",fontSize:"18px"}}>A:True</Text>
                <Text style={{marginLeft:"7%",marginRight:"7%",fontSize:"18px"}}>B:False</Text>
                <Text style={{marginLeft:"7%",marginRight:"7%",fontSize:"18px"}}>C:only some product</Text>
            </View>
            <View>
                <Text>Answer:A </Text>
            </View>
        </View>
        <View style={{marginBottom:"7%"}}>
            <Text style={{fontSize:"20px"}}>Eco-design is about making the cheapest products or packaging possible.</Text>
            <View  style={{display:"flex", flexDirection:"row",justifyContent:"center",marginBottom:"3%",marginTop:"3%"}}>
                <Text style={{marginLeft:"25%",marginRight:"25%",fontSize:"18px"}}>A:True</Text>
                <Text style={{marginLeft:"25%",marginRight:"25%",fontSize:"18px"}}>B:False</Text>
            </View>
            <View>
                <Text>Answer:A </Text>
            </View>
        </View>
        </ScrollView>
     
    )
}

const Stack = createStackNavigator<NativeStackParamList>();

export const NativeStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{title:"Cloud or down"}} />
            <Stack.Screen name="Details" component={DetailsScreen} options={{title:"Details"}} />
            <Stack.Screen name="Rules" component={RulesScreen} options={{title:"Rules"}} />
            <Stack.Screen name="Green" component={CardGreenIT} options={{title:"Card of Green IT"}} />
            <Stack.Screen name="Eco" component={CardEco} options={{title:"Card of Eco Design"}} />
        </Stack.Navigator>
    )
    }