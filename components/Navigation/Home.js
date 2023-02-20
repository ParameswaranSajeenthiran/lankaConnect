import React from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import electricianImage from '../asserts/images/electrician.jpg'
import profile from '../asserts/images/profile.png'
import drawer from '../asserts/images/drawer.png'
import search from '../asserts/images/search.png'
import filter from '../asserts/images/filter.png'
export default function Home() {
    const recommendedList = [
        {
            "name": "Electrician",
            "status": "Available",
            "priceRating": "Service from  Rs.300 onwards",
        },
        {
            "name": "Electrician",
            "status": "Available",
            "priceRating": "Service from  Rs.300 onwards",
        },
        {
            "name": "Electrician",
            "status": "Available",
            "priceRating": "Service from  Rs.300 onwards",
        },
        {
            "name": "Electrician",
            "status": "Available",
            "priceRating": "Service from  Rs.300 onwards",
        },
        {
            "name": "Electrician",
            "status": "Available",
            "priceRating": "Service from  Rs.300 onwards",
        },
        {
            "name": "Electrician",
            "status": "Available",
            "priceRating": "Service from  Rs.300 onwards",
        },
        {
            "name": "Electrician",
            "status": "Available",
            "priceRating": "Service from  Rs.300 onwards",
        },
        {
            "name": "Electrician",
            "status": "Available",
            "priceRating": "Service from  Rs.300 onwards",
        }
    ]



    const popularList = [
        {
            "name": "Electrician",
            "status": "Available",
            "priceRating": "Service from  Rs.300 onwards",
        },
        {
            "name": "Electrician",
            "status": "Available",
            "priceRating": "Service from  Rs.300 onwards",
        },
        {
            "name": "Electrician",
            "status": "Available",
            "priceRating": "Service from  Rs.300 onwards",
        },
        {
            "name": "Electrician",
            "status": "Available",
            "priceRating": "Service from  Rs.300 onwards",
        },
        {
            "name": "Electrician",
            "status": "Available",
            "priceRating": "Service from  Rs.300 onwards",
        },
        {
            "name": "Electrician",
            "status": "Available",
            "priceRating": "Service from  Rs.300 onwards",
        },
        {
            "name": "Electrician",
            "status": "Available",
            "priceRating": "Service from  Rs.300 onwards",
        },
        {
            "name": "Electrician",
            "status": "Available",
            "priceRating": "Service from  Rs.300 onwards",
        }
    ]
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: 40
            }}>
                <View>
                    <Image style={{
                        width: 30, height: 20
                    }} source={drawer} />

                </View>
                <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                    <Text style={{ marginLeft: "20%", fontSize: 20, fontWeight: 900, color: 'black' }}>
                        LANKA
                    </Text>
                    <Text style={{ color: 'white', borderColor: 'black', marginLeft: "10%", fontSize: 20, fontWeight: 900 }}>
                        CONNECT
                    </Text>
                </View>
                <View>
                    <Image style={{
                        width: 20, height: 20
                    }} source={profile} />

                </View>

            </View>
            <View>
                <Text style={styles.heading}>

                    HI Abineyan
                </Text>
                <Text style={styles.heading}>

                    Find the best Service for you !
                </Text>
            </View>
            <View style={styles.searchBar}>
                <View style={{
                    margin: 10
                }}>
                    <Image style={{
                        width: 20,
                        height: 20
                    }} source={search} />

                </View>
                <View>
                    <TextInput placeholder="Search for services.." />
                </View>

                <View style={{ marginLeft: 100 }}>
                    <Image style={{
                        width: 20,
                        height: 20
                    }} source={filter} />
                </View>
            </View>
            <View>
                <Text>
                    Popular services in your area
                </Text>

            </View>
            <ScrollView horizontal={true}>
                <View style={styles.popularList}>
                    {popularList.map((item, index) => (
                        <View key={index} style={styles.card}>
                            <Image style={{
                                width: '100%',
                                height: 200
                            }} source={electricianImage} />
                            <Text style={styles.cardTitle}>
                                {item.name}

                            </Text>
                            <Text style={styles.cardDesc}>
                                {item.priceRating}

                            </Text>
                            <Text style={styles.cardDesc}>
                                {item.status}

                            </Text>


                        </View>
                    ))}
                </View>
            </ScrollView>
            <View>
                <Text style={{
                    fontWeight: '900',
                    fontSize: 20,
                    color: 'black',
                    margin: 10
                }}>
                    Recommended for you
                </Text>
            </View>
            <View>
                <ScrollView>
                    <View>
                        {recommendedList.map((item, index) => (
                            <View style={styles.recommendedListCard}>
                                <View>
                                    <Image style={
                                        {
                                            height: 60,
                                            width: 60
                                        }
                                    } source={electricianImage} />
                                </View>
                                <View >
                                    <Text style={styles.cardTitle}>
                                        {item.name}
                                    </Text>
                                    <Text>
                                        on demand
                                    </Text>
                                </View>
                                <View style={{
                                    margin: 5
                                }}>
                                    <Text>
                                        {item.status}
                                    </Text>
                                </View>

                            </View>
                        ))}

                    </View>
                </ScrollView>
            </View>






        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        felx: 1,
        margin: 10

    },
    heading: {
        fontSize: 20,
        fontWeight: 10,
        color: 'black'
    },
    searchBar: {
        margin: 10,
        borderRadius: 10,

        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    popularList: {
        flexDirection: 'row',
        height: 100,
        width: '100%',
        height: 350
    },
    card: {
        margin: 10,
        width: "20%",
        height: "100%",
        backgroundColor: 'white',
        borderRadius: 10

    },
    cardTitle: {
        margin: 5,
        fontSize: 20,
        color: 'black'
    },
    cardDesc: {
        margin: 5
    },
    recommendedListCard: {
        flexDirection: "row",
        margin: 10,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowOffset: { width: -2, height: 4 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }

})