import {View,StyleSheet, Pressable,Text, ScrollView} from 'react-native'
import Constants from 'expo-constants'
import AppBarTab from './AppBar Tab'
import { flushSync } from 'react-dom'
import { GET_USER } from '../graphql/queries'
import { useApolloClient, useQuery } from '@apollo/client'
import useAuthStorage from '../hooks/useAuthStorage'
import { useNavigate } from 'react-router-native'

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        paddingBottom : Constants.statusBarHeight,
        backgroundColor: '#24292e',
    },
    text: {
        color: 'white',
        margin: 'auto',
        padding: 'auto',
        fontSize: 20,
        fontFamily: 'Cochin',
        fontWeight : 'bold'
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        width: "100%",
        flexGrow:1
    },
    contentContainerStyle: {
        display: "flex",
        flexDirection:"row"
    },
    appBarTab: {
        alignItems: "flex-end",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginHorizontal: 10,
        marginVertical : 10
    }
})

const AppBar = () => {
    const { data } = useQuery(GET_USER)
    const user = data?.me

    const authStorage = useAuthStorage()
    const apolloClient = useApolloClient()
    const navigate = useNavigate()


    const signOut = async () => {
        await authStorage.removeAccessToken()
        apolloClient.resetStore()
        navigate('/')
    }

    return (
        <View style={styles.container}>
            <ScrollView horizontal contentContainerStyle={styles.contentContainerStyle}>
                <AppBarTab style={styles.appBarTab} text="Repositories" to="/"></AppBarTab>
                { 
                    user ? 
                        (<>
                            <AppBarTab style={styles.appBarTab} text="Create a Review" to="/review"></AppBarTab>
                            <AppBarTab style={styles.appBarTab} text="SignOut" onPress={signOut}></AppBarTab>
                        </>) :
                        (<AppBarTab style={styles.appBarTab} text="SignIn" to="/signin"></AppBarTab> )
                }
            </ScrollView>
        </View>
    )
}

export default AppBar