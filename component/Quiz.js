import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { clearLocalNotification, setLocalNotification } from '../utits/helper';
class Home extends React.Component {
    state = {
        flip: false,
        Q_id: 0,
        Correct: 0,
        incorrect: 0,
    };

    render() {
        const { deck } = this.props.route.params;
        let qustion = deck[this.state.Q_id];

        if (typeof deck === undefined || null || deck.length == 0) {
            return (
                <View style={{ ...Styles.container, justifyContent: 'center' }}>
                    <Text> no qustions </Text>
                </View>
            );
        }
        if (this.state.Q_id >= deck.length) {
            //add notification async
            clearLocalNotification();
            setLocalNotification();

            return (
                <View style={{ ...Styles.container, justifyContent: 'center' }}>
                    <Text style={Styles.TitelText}>
                        {' '}
                        retsult : {this.state.Correct} of {deck.length}
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.goBack();
                        }}
                        style={{ ...Styles.Button, backgroundColor: 'red', marginTop: 40 }}
                    >
                        <Text style={{ color: 'white' }}>Back to Deck</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({ Correct: 0, incorrect: 0, Q_id: 0 });
                        }}
                        style={{ ...Styles.Button, backgroundColor: 'red', marginTop: 40 }}
                    >
                        <Text style={{ color: 'white' }}>Restart Quiz</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        return (
            <View style={Styles.container}>
                <Text>{this.state.Q_id + 1 + ' /  ' + deck.length}</Text>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={Styles.TitelText}> {this.state.flip ? qustion.answer : qustion.qustion} </Text>
                    <Text onPress={() => this.setState({ flip: !this.state.flip })} style={Styles.SubTitleText}>
                        {!this.state.flip ? 'answer' : 'qustion'}
                    </Text>
                </View>

                <TouchableOpacity
                    onPress={() => this.setState({ Correct: this.state.Correct + 1, Q_id: this.state.Q_id + 1 })}
                    style={Styles.Button}
                >
                    <Text style={{ color: 'white' }}>Correct </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.setState({ incorrect: this.state.incorrect + 1, Q_id: this.state.Q_id + 1 })}
                    style={{ ...Styles.Button, backgroundColor: 'red' }}
                >
                    <Text style={{ color: 'white' }}>incorrect</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
    },
    TitelText: {
        color: 'black',
        fontSize: 50,
        textAlign: 'center',
    },
    SubTitleText: {
        marginTop: 15,
        color: 'red',
        fontSize: 30,
        textAlign: 'center',
    },
    Button: {
        width: 250,
        height: 50,
        borderRadius: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
});

export default Home;
