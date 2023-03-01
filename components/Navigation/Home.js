import React from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, View,TouchableOpacity } from "react-native";
import electricianImage from '../asserts/images/electrician.jpg'
import add from '../asserts/images/add.png'
import drawer from '../asserts/images/drawer.png'
import search from '../asserts/images/search.png'
import filter from '../asserts/images/filter.png'
import firestore from '@react-native-firebase/firestore'

export default function Home(props) {


    const [data,setData]=React.useState([])

    async function fetchData(){
        
 const users= firestore().collection('services').get()
 console.log(users)

    }
   React.useEffect(() => {
    firestore()
    .collection('services')
    .get()
    .then(querySnapshot => {
      console.log('Total users: ', querySnapshot.size);
      setData(querySnapshot)
        let temp=[]
        
      querySnapshot.forEach(documentSnapshot => {
        temp.push( documentSnapshot.data())
       

        console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
      });
      setData(temp)
    });
      }, []);

    React.useEffect(()=>{
        fetchData()
    },[])
    

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
        <ScrollView>
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
                <TouchableOpacity  onPress={()=>{
                        props.navigation.navigate("createProfile")
                }}>
                
                    <Image style={{
                        width: 50, height: 50
                    }} source={add} />
</TouchableOpacity>
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
                    {  data.length ?data.map((item, index) => (

                        <View key={index} style={styles.card}>
                            
                        <TouchableOpacity  onPress={()=>{
                            props
                            .navigation.navigate("worker",{
                                userId:item.id
                            })
                        }}>
                            <Image style={{
                                width: '100%',
                                height: 200
                            }} source={electricianImage} />
                                                  
</TouchableOpacity>
                            <Text style={styles.cardTitle}>
                                {item.jobs}

                            </Text>
                            <Text style={styles.cardDesc}>
                                {item.number}

                            </Text>
                            <Text style={styles.cardDesc}>
                                {item.district}

                            </Text>


                        </View>
                    )):null}
                </View>
            </ScrollView>
            <View>
                <Text style={{
                    fontWeight: 900,
                    fontSize: 20,
                    color: 'black',
                    margin: 10
                }}>
                    Recommended for you
                </Text>
            </View>
            <View>
               
                   
                        { data.length? data.map((item, index) => (
                            <View key={index} style={styles.recommendedListCard}>
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
                                        {item.jobs}
                                    </Text>
                                    <Text>
                                        on demand
                                    </Text>
                                </View>
                                <View style={{
                                    margin: 5
                                }}>
                                    <Text>
                                        {item.district}
                                    </Text>
                                </View>

                            </View>
                        )):null}

               
            </View>






        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        felx: 1,
        margin: 10

    },
    heading: {
        fontSize: 20,
        fontWeight: 900,
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