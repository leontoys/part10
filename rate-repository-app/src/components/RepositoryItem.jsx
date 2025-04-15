import { Text, View, StyleSheet, Image } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        padding: 15,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 5,
        backgroundColor: theme.colors.backgroundPrimary,
    },
    topRow: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 5,
        marginRight: 15,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    fullName: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    description: {
        color: '#586069',
        marginBottom: 6,
    },
    languageTag: {
        alignSelf: 'flex-start',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 4,
        overflow: 'hidden',
        backgroundColor: theme.colors.languageTag,
        color: '#ffffff',
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    statItem: {
        alignItems: 'center',
    },
    statLabel: {
        color: '#586069',
    },
});


const formatCount = (count) => {
    return count >= 1000
        ? `${(count / 1000).toFixed(1).replace('.0', '')}k`
        : count;
};


const RepositoryItem = ({ fullName, description, language, forksCount, stargazersCount, ratingAverage, reviewCount, ownerAvatarUrl }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topRow}>
                <Image source={{ uri: ownerAvatarUrl }} style={styles.image} />
                <View style={styles.infoContainer}>
                    <Text style={styles.fullName}>{fullName}</Text>
                    <Text style={styles.description}>{description}</Text>
                    <Text style={styles.languageTag}>{language}</Text>
                </View>
            </View>
            <View style={styles.statsRow}>
                <View style={styles.statItem}>
                    <Text style={styles.fullName}>{formatCount(stargazersCount)}</Text>
                    <Text style={styles.statLabel}>Stars</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.fullName}>{formatCount(forksCount)}</Text>
                    <Text style={styles.statLabel}>Forks</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.fullName}>{formatCount(reviewCount)}</Text>
                    <Text style={styles.statLabel}>Reviews</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.fullName}>{formatCount(ratingAverage)}</Text>
                    <Text style={styles.statLabel}>Rating</Text>
                </View>
            </View>
        </View>

    );
};

export default RepositoryItem;
