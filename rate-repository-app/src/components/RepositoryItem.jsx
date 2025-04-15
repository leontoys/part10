import { Text, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
});

const RepositoryItem = ({ fullName, description, language, forksCount, stargazersCount, ratingAverage, reviewCount }) => {
    return (
        <View style={styles.container}>
            <Text>Full Name : {fullName}</Text>
            <Text>Description : {description}</Text>
            <Text>Language : {language}</Text>
            <Text>Forks : {forksCount}</Text>
            <Text>Stars : {stargazersCount}</Text>
            <Text>Rating : {ratingAverage}</Text>
            <Text>Reviews : {reviewCount}</Text>
        </View>
    )
}

export default RepositoryItem