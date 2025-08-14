import {View,StyleSheet, Pressable,Text} from 'react-native'
import Constants from 'expo-constants'
import { Link } from 'react-router-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        margin : 10
    },
    text: {
        color: 'white',
        margin: 'auto',
        padding: 'auto',
        fontSize: 20,
        fontFamily: 'Cochin',
        fontWeight : 'bold'
    }
})

const AppBarTab = ({ text, to }) => {
    console.log(to)
    return (
        <View style={styles.container}>
            <Link to={to}>
                <Text style={styles.text}>{text}</Text>
            </Link>
        </View>
    )
}

export default AppBarTab