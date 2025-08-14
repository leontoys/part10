import {View,StyleSheet, Pressable,Text} from 'react-native'
import Constants from 'expo-constants'

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
    }
})

const AppBar = () => {
    return (
        <View style={styles.container}>
            <Pressable>
                <Text style={styles.text}>Repositories</Text>
            </Pressable>
        </View>
    )
}

export default AppBar