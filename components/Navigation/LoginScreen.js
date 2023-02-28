import React from "react";
import { state, setState, useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import maleAvatar from "../asserts/images/maleAvatar.png";
import firestore from '@react-native-firebase/firestore';

export default function LoginScreen() {

    const [state, setState] = useState({});

    handleSumbit = () => {
        //example way of adding a doc to a colectio users
        firestore()
            .collection('Users')
            .add(state)
            .then(() => {
                console.log('Input added!');
            });

    }


    return (
        <View style={{ backgroundColor: 'black' }}>
            <ScrollView>
                <View>
                    <Image
                        source={maleAvatar}
                        style={styles.profilePic}
                    />
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.text}> Email </Text>
                    <TextInput value={state.email} onChangeText={(e) => { setState((prevState) => ({ ...prevState, email: e })) }} style={styles.input} />

                    <Text style={styles.text}> Telephone Number  </Text>
                    <TextInput value={state.number} onChangeText={(e) => { setState((prevState) => ({ ...prevState, number: e })) }} keyboardType="numeric" style={styles.input} />

                    <Text style={styles.text}> Full Name </Text>
                    <TextInput value={state.name} onChangeText={(e) => { setState((prevState) => ({ ...prevState, name: e })) }} style={styles.input} />

                    <Text style={styles.text}> NIC </Text>
                    <TextInput value={state.nic} onChangeText={(e) => { setState((prevState) => ({ ...prevState, nic: e })) }} style={styles.input} />

                    <Text style={styles.text}> District </Text>
                    <TextInput value={state.district} onChangeText={(e) => { setState((prevState) => ({ ...prevState, district: e })) }} style={styles.input} />

                    <Text style={styles.text}> Address </Text>
                    <TextInput value={state.address} onChangeText={(e) => { setState((prevState) => ({ ...prevState, address: e })) }} style={styles.input} />

                    <Text style={styles.text}> Jobs </Text>
                    <TextInput value={state.jobs} onChangeText={(e) => { setState((prevState) => ({ ...prevState, jobs: e })) }} style={styles.input} />


                    <Text style={styles.text}> About me </Text>
                    <TextInput value={state.about} onChangeText={(e) => { setState((prevState) => ({ ...prevState, about: e })) }} multiline numberOfLines={4} style={styles.input} />
                </View>

                <Pressable onPress={handleSumbit}>
                    <View>
                        <Text style={styles.submit}>Submit</Text>
                    </View>
                </Pressable>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    profilePic: {
        margin: 70,
        marginBottom: 40,
        width: 170,
        height: 170,
        borderRadius: 400 / 2,
        alignSelf: 'center'
    },

    text: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold'
    },

    submit: {
        color:'black',
        backgroundColor: 'white',
        fontSize: 25,
        margin: 20,
        padding: 10,
        paddingHorizontal: 40,
        alignSelf:'center',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 25,
    },

    input: {
        margin: 10,
        marginVertical: 15,
        padding: 8,
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 10
    },

    infoContainer: {
        padding: 15,
        paddingTop: 25,
        width: '100%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 20,
    },
});

