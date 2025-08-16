import {View,StyleSheet, Pressable} from 'react-native'
import Constants from 'expo-constants'
import { Link } from 'react-router-native'
import Text from './Text'
    
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

const AppBarTab = ({ text, to, onPress }) => {
    console.log(to)
    return (
        to? (
            <Link to={to}>
                <View style={styles.container}>
                    <Text style={styles.text}>{text}</Text>
                </View> 
            </Link>) : 
            (
                <Pressable onPress={onPress}>
                    <View style={styles.container}>
                    <Text style={styles.text}>{text}</Text>  
                </View>
                </Pressable>
            )
    )
}

export default AppBarTab