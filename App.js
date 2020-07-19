import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import deckDetailsScreen from './component/deckDetails';
import HomeScreen from './component/Home';
import newCardScreen from './component/newCard';
import newDeckScreen from './component/newDeck';
import quizScreen from './component/Quiz';
const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={MyTabs} />
            <Stack.Screen name="newCard" component={newCardScreen} />
            <Stack.Screen name="quiz" component={quizScreen} />
            <Stack.Screen name="deckDerails" component={deckDetailsScreen} />
        </Stack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="newDeck" component={newDeckScreen} />
        </Tab.Navigator>
    );
}

export default () => (
    <NavigationContainer>
        <MyStack />
    </NavigationContainer>
);
