import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import deckDetailsScreen from './component/deckDetails';
import HomeScreen from './component/Home';
import newCardScreen from './component/newCard';
import newDeckScreen from './component/newDeck';
import quizScreen from './component/Quiz';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={MyTabs} />
            <Stack.Screen name="newCard" component={newCardScreen} />
            <Stack.Screen name="quiz" component={quizScreen} />
            <Stack.Screen name="deckDetails" component={deckDetailsScreen} />
        </Stack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'information-circle' : 'information-circle-outline';
                    } else if (route.name === 'newDeck') {
                        iconName = focused ? 'add-circle' : 'add-circle-outline';
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} style={{ color: 'red', fontSize: 18 }} />
            <Tab.Screen name="newDeck" component={newDeckScreen} />
        </Tab.Navigator>
    );
}

export default () => (
    <NavigationContainer>
        <MyStack />
    </NavigationContainer>
);
