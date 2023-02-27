import back from "../asserts/images/back.png"
import location from "../asserts/images/location.png"
import image from "../asserts/images/electrician.jpg"
import share from "../asserts/images/Share.png"
import Starempty from "../asserts/images/Starempty.png"
import Starfilled from "../asserts/images/Starfilled.png"
import Home from "../asserts/images/Home.png"
import Search2 from "../asserts/images/Search2.png"
import Settings from "../asserts/images/Settings.png"
import Bookmark from "../asserts/images/Bookmark.png"
import ProjectManagement from "../asserts/images/ProjectManagement.png"
import firestore from '@react-native-firebase/firestore';


import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Component, useEffect, useState } from "react"
import codegenNativeCommands from "react-native/Libraries/Utilities/codegenNativeCommands"






export default function WorkerProfile(props) {

    const [userData, setUserData] = useState({
        personalInfo: {
            services: []
        },
        reviews: {},
        recommendations: {}
    })

    useEffect(() => {
        (async () => {
          await firestore()
          .collection('Users')
          .doc(props.userId)
          .get()
          .then(docSnapshot => {
            return setUserData(prevData => {
                return {...prevData, personalInfo: docSnapshot.data()}
            })
          })
        })();
      
        return () => {
          // this now gets called when the component unmounts
        };
      }, []);
    
    // console.log(userData.personalInfo)


    const Data = {


        personalInfo: {
            image: image,
            name: 'Sajeev Kugarajah',
            role: 'Plumber',
            location: 'Colombo',
            rating: 4.5,
            projects: 40,
            availability: '24/7',
            about: `I can install, repair, and maintain pipes, valves, fittings, drainage systems, and fixtures in commercial and residential structures. I am good at diagnosing and resolving plumbing....`,
        },
        reviews: [
            {
                reviewerImage: image,
                reviewerName: 'Subavarshana',
                reviewedTime: 'A day ago',
                rating: 3.6,
                comment: 'Nice and clean work'
            },
            {
                reviewerImage: image,
                reviewerName: 'Sajeenthiran',
                reviewedTime: 'A week ago',
                rating: 2.5,
                comment: 'Not Satisfied'
            },
            {
                reviewerImage: image,
                reviewerName: 'Abineyan',
                reviewedTime: 'A month ago',
                rating: 5.0,
                comment: 'Perfect work'
            },
            {
                reviewerImage: image,
                reviewerName: 'Subavarshana',
                reviewedTime: 'A day ago',
                rating: 3.6,
                comment: 'Nice and clean work'
            },
            {
                reviewerImage: image,
                reviewerName: 'Sajeenthiran',
                reviewedTime: 'A week ago',
                rating: 2.5,
                comment: 'Not Satisfied'
            },
        ],
        recommendations: [
            {
                recommendName: 'Sajeev',
                recommendImage: image,
                recommendRating: 4.2,
            },
            {
                recommendName: 'Abineyan',
                recommendImage: image,
                recommendRating: 3.5,
            },
            {
                recommendName: 'Suba',
                recommendImage: image,
                recommendRating: 4.2,
            },
            {
                recommendName: 'Sajeev',
                recommendImage: image,
                recommendRating: 4.2,
            },
            {
                recommendName: 'Sajeev',
                recommendImage: image,
                recommendRating: 4.2,
            },
            {
                recommendName: 'Sajeev',
                recommendImage: image,
                recommendRating: 4.2,
            },
        ]
    }

    return (
        <View style={styles.mainContainer}>

            {/* header */}
            <View style={styles.header}>
                <Pressable onPress={() => Alert.alert('pressed')} >
                    <View style={styles.headerImageContainer}>
                        <Image source={back} />
                    </View>
                </Pressable>
                <View style={styles.headerTitleContainer}>
                    <Text style={styles.headerTitleText}>{userData.personalInfo.firstName} {userData.personalInfo.lastName}'s Profile</Text>
                </View>
            </View>

            <ScrollView>
                {/* profile container */}
                <View style={styles.profileContainer}>

                    {/* personal info */}
                    <View style={styles.personalInfo}>
                        <Image source={Data.personalInfo.image} style={styles.profileImage} />

                        <Text style={styles.profileName} >{userData.personalInfo.firstName} {userData.personalInfo.lastName}</Text>

                        <Text style={styles.prfoileJob} >{userData.personalInfo.services.join(' | ')}</Text>

                        <Pressable onPress={() => Alert.alert('pressed')} >
                            <View style={styles.profileLocation} >
                                <Image source={location} style={{ marginRight: 5 }} />
                                <Text>{userData.personalInfo.location}</Text>
                            </View>
                        </Pressable>

                        <View style={styles.profileDetails} >
                            <Pressable onPress={() => Alert.alert('pressed')} >
                                <View style={styles.profileDetailsButtons} >
                                    <Text style={styles.profileDetailsText} >Support</Text>
                                    <Image source={share} />
                                </View>
                            </Pressable>
                            <Pressable onPress={() => Alert.alert('pressed')} >
                                <View style={styles.profileDetailsButtons} >
                                    <Text style={styles.profileDetailsText} >Rating</Text>
                                    <Text style={styles.profileDetailsText} >{userData.personalInfo.rating}</Text>
                                    <View style={styles.profileDetailsRating}>
                                        <Image source={userData.personalInfo.rating >= 1.0 ? Starfilled : Starempty} />
                                        <Image source={userData.personalInfo.rating >= 2.0 ? Starfilled : Starempty} />
                                        <Image source={userData.personalInfo.rating >= 3.0 ? Starfilled : Starempty} />
                                        <Image source={userData.personalInfo.rating >= 4.0 ? Starfilled : Starempty} />
                                        <Image source={userData.personalInfo.rating >= 5.0 ? Starfilled : Starempty} />
                                    </View>
                                </View>
                            </Pressable>
                            <Pressable onPress={() => Alert.alert('pressed')} >
                                <View style={styles.profileDetailsButtons} >
                                    <Text style={styles.profileDetailsText} >Projects</Text>
                                    <Text style={styles.profileDetailsText} >{userData.personalInfo.projects}+</Text>
                                    <Image source={ProjectManagement} />
                                </View>
                            </Pressable>
                        </View>

                        <Text>Available {userData.personalInfo.availability}</Text>
                    </View>

                    {/* about */}
                    <View style={styles.about}>
                        <Text style={styles.subHeading}>About</Text>
                        <Text style={styles.aboutText}>
                            {userData.personalInfo.about}
                        </Text>
                    </View>

                    {/* reviews */}
                    <View style={styles.reviewContainer} >
                        <View style={styles.reviewHeader} >
                            <Text style={styles.subHeading}>Reviews</Text>
                            <Pressable onPress={() => Alert.alert('pressed')} >
                                <View>
                                    <Text style={styles.reviewSeeAll}>{'See all >'}</Text>
                                </View>
                            </Pressable>
                        </View>

                        <ScrollView horizontal={true}>
                            <View style={styles.reviews}>

                                {Data.reviews.map((item, index) => (
                                    <Pressable onPress={() => Alert.alert('pressed')} key={index}>
                                        <View style={styles.review}>
                                            <View style={styles.reviewerDetails}>
                                                <Image source={item.reviewerImage} style={styles.reviewerImage} />
                                                <View style={styles.reviewerName}>
                                                    <Text style={styles.reviewerNameText}>{item.reviewerName}</Text>
                                                    <Text style={styles.reviewedTime}>{item.reviewedTime}</Text>
                                                </View>
                                                <View style={styles.reviewRating}>
                                                    <Image source={item.rating >= 1.0 ? Starfilled : Starempty} />
                                                    <Image source={item.rating >= 2.0 ? Starfilled : Starempty} />
                                                    <Image source={item.rating >= 3.0 ? Starfilled : Starempty} />
                                                    <Image source={item.rating >= 4.0 ? Starfilled : Starempty} />
                                                    <Image source={item.rating >= 5.0 ? Starfilled : Starempty} />
                                                </View>
                                            </View>
                                            <View style={styles.reviewData}>
                                                <Text style={styles.reviewText}>
                                                    {item.comment}
                                                </Text>
                                            </View>
                                        </View>
                                    </Pressable>
                                ))}

                            </View>
                        </ScrollView>
                    </View>

                    <Pressable onPress={() => Alert.alert('pressed')} style={styles.sendMessage}>
                        <View >
                            <Text style={styles.sendMessageText}>Send Message</Text>
                        </View>
                    </Pressable>

                </View>

                {/* more recommendation */}
                <View style={styles.recommendContainer}>
                    <Text style={styles.recommendHeader}>More plumbers in your area</Text>
                    <ScrollView horizontal={true}>
                        <View style={styles.recommendations}>

                            {Data.recommendations.map((item, index) => (
                                <Pressable onPress={() => Alert.alert('pressed')} key={index}>
                                    <View style={styles.recommendation}>
                                        <Image source={item.recommendImage} style={styles.recommendImage} />
                                        <Text style={styles.recommendName}>{item.recommendName}</Text>
                                        <View style={styles.recommendRating}>
                                            <Image source={Starfilled} />
                                            <Text style={styles.recommendRatingText}>{item.recommendRating}</Text>
                                        </View>
                                    </View>
                                </Pressable>
                            ))}

                        </View>
                    </ScrollView>
                </View>
            </ScrollView>

            {/* footer */}
            <View style={styles.footer} >
                <Pressable onPress={() => Alert.alert('pressed')} >
                    <Image source={Home} />
                </Pressable>
                <Pressable onPress={() => Alert.alert('pressed')} >
                    <Image source={Search2} />
                </Pressable>
                <Pressable onPress={() => Alert.alert('pressed')} >
                    <Image source={Bookmark} />
                </Pressable>
                <Pressable onPress={() => Alert.alert('pressed')} >
                    <Image source={Settings} />
                </Pressable>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'rgba(233, 233, 233, 1)',
        height: '100%',
        padding: 15,
        paddingBottom: 5,
        justifyContent: 'space-between'
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 15

    },
    headerImageContainer: {
    },
    headerTitleContainer: {
        flex: 1,
        alignItems: 'center'
    },
    headerTitleText: {
        fontSize: 16,
        fontWeight: 700,
        color: 'black',
    },

    profileContainer: {
        borderRadius: 10,
        alignItems: "center",
        backgroundColor: 'white',
        padding: 10,
    },
    personalInfo: {
        paddingBottom: 0,
        alignItems: 'center',
    },
    profileImage: {
        width: 160,
        height: 160,
        borderRadius: 3
    },
    profileName: {
        marginTop: 15,
        fontSize: 22,
        fontWeight: 600,
        color: 'black'
    },
    prfoileJob: {

    },
    profileLocation: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E9E9E9',
        borderRadius: 10,
        paddingHorizontal: 5
    },
    profileDetails: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 5
    },
    profileDetailsButtons: {
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'rgba(188, 229, 252, 0.47)',
        paddingHorizontal: 15,
        height: 60,
        width: 100,
        borderRadius: 10,
        marginHorizontal: 5,
    },
    profileDetailsText: {
        fontSize: 12,
        fontWeight: 600,
        color: 'black'
    },
    profileDetailsRating: {
        flexDirection: 'row'
    },

    about: {
        marginBottom: 10
    },
    subHeading: {
        fontSize: 14,
        fontWeight: 600,
        color: 'black'
    },
    aboutText: {
        fontSize: 13,
        fontWeight: 300,
        color: 'black'
    },


    reviewContainer: {
        width: '100%',
    },
    reviewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    reviewSeeAll: {
        color: 'rgba(0, 92, 144, 0.59)'
    },
    reviews: {
        width: '100%',
        flexDirection: 'row',
    },
    review: {
        padding: 4,
        borderRadius: 10,
        marginRight: 10,
        backgroundColor: 'rgba(230, 230, 230, 0.5)'
    },
    reviewerDetails: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    reviewerImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 5
    },
    reviewerNameText: {
        fontSize: 9,
        fontWeight: 600,
        marginRight: 5
    },
    reviewedTime: {
        fontSize: 6,
        fontWeight: 300
    },
    reviewRating: {
        flexDirection: 'row'
    },
    reviewData: {
        marginTop: 5,
        textAlign: 'justify',
        padding: 0,
        alignItems: 'center'
    },
    reviewText: {
        fontSize: 10
    },

    sendMessage: {
        width: '100%',
        alignItems: 'center',
        padding: 5,
        marginTop: 10,
        backgroundColor: 'black',
        borderRadius: 5
    },
    sendMessageText: {
        fontSize: 14,
        color: 'white',
        fontWeight: 500
    },


    recommendHeader: {
        marginTop: 3,
        fontSize: 16,
        fontWeight: 700,
        color: 'black'
    },
    recommendations: {
        marginTop: 5,
        flexDirection: 'row'
    },
    recommendation: {
        minWidth: 80,
        borderRadius: 10,
        alignItems: 'center',
        padding: 5,
        backgroundColor: 'white',
        marginRight: 10

    },
    recommendImage: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    recommendName: {
        color: 'black',
        fontWeight: 700,
        fontSize: 15
    },
    recommendRating: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    recommendRatingText: {
        fontSize: 14,
        color: 'black',
        marginLeft: 5
    },


    footer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        marginTop: 5,
        padding: 5,
        borderRadius: 10
    }
})