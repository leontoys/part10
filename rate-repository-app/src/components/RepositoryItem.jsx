import { Text, View, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: theme.colors.borderColor,
        padding: theme.spacing.padding,
        margin: theme.spacing.margin,
        borderRadius: theme.borderRadius.normal,
        backgroundColor: theme.colors.backgroundPrimary,
        shadowColor: theme.colors.shadowColor,
        shadowOffset: theme.shadows.offset,
        shadowOpacity: theme.shadows.opacity,
        shadowRadius: theme.shadows.radius,
        elevation: theme.shadows.elevation,
    },
});

const RepositoryItem = ({
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
}) => {
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
    );
};

export default RepositoryItem;
