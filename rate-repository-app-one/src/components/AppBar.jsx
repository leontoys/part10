import {View,StyleSheet, Pressable,Text, ScrollView} from 'react-native'
import Constants from 'expo-constants'
import AppBarTab from './AppBar Tab'
import { flushSync } from 'react-dom'

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
    return (
        <View style={styles.container}>
            <ScrollView horizontal contentContainerStyle={styles.contentContainerStyle}>
                <AppBarTab style={styles.appBarTab} text="Repositories" to="/"></AppBarTab>
                <AppBarTab style={styles.appBarTab} text="SignIn" to="/signin"></AppBarTab>
            </ScrollView>
        </View>
    )
}

export default AppBar