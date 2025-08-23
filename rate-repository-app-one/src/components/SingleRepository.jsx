import { View, StyleSheet, Image, Pressable } from 'react-native';
import Text from './Text'
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { GET_REPO, GET_USER } from '../graphql/queries';
import * as Linking from 'expo-linking'
import RepositoryItem from './RepositoryItem';
import { FlatList } from 'react-native';
import { format } from "date-fns";
import { useNavigate } from 'react-router-native';


const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor : 'white'
    },
    flexItemA: {
        flexGrow: 1,
        margin : 10
    },
    flexItemB: {
        flexGrow: 1,
        margin : 10
    },
    roundText: {
        borderColor: '#0366d6',
        borderStyle: 'solid',
        color: '#0366d6',
        borderWidth: 3,
        borderRadius: 50,
        textAlign: 'center',
        padding : 5
    },
    boldText: {
        fontWeight : 'bold'
    },
    pressableView: {
        backgroundColor: '#0366d6' , 
        borderColor: '#0366d6',
        borderStyle: 'solid',
        borderWidth: 3,
        borderRadius : 5
    },
    pressableDelete: {
        backgroundColor: 'red',
        borderColor: 'red',
        borderStyle: 'solid',
        borderWidth: 3,
        borderRadius : 5
    },
    pressableText: {
        color : 'white'
    }
});

export const RepositoryInfo = ({ repository }) => {
    // Repository's information implemented in the previous exercise

    const {
        fullName, description, language, stargazersCount, forksCount,
            reviewCount, ratingAverage, ownerAvatarUrl, url
    } = repository

    return (
        <><RepositoryItem
        fullName={fullName}
        description={description}
        language={language}
        stargazersCount={stargazersCount}
        forksCount={forksCount}
        reviewCount={reviewCount}
        ratingAverage={ratingAverage}
        ownerAvatarUrl={ownerAvatarUrl}
            url={url} />
            <ItemSeparator/>
        </>)
};

export const ReviewItem = ({ review }) => {
    const navigate = useNavigate()
        const { data } = useQuery(GET_USER)
    const user = data?.me
    console.log("user",user)
    // Single review item
    console.log("review", review)
    const handlePress = (id) => {
        console.log("pressed", id)
        navigate(`/${id}`)
    }
    return (
           <View style={styles.flexContainer}>
            <View style={styles.flexItemA}>
                <Text style={styles.roundText}>{review.rating}</Text>
              </View>
            <View style={styles.flexItemB}>
                <Text style={styles.boldText}>{ review?.user?.username }</Text>
                <Text>{ format(review.createdAt,"dd.M.yyyy")}</Text>
                <Text>{review.text}</Text>
                {user ? <View style={styles.flexContainer}>
                    <View style={styles.flexItemA}>
                        <Pressable style={styles.pressableView} onPress={()=>handlePress(review.repository.id)}>
                            <Text style={styles.pressableText}>View Repository</Text>
                        </Pressable>
                    </View>
                    <View style={styles.flexItemB}>
                        <Pressable style={styles.pressableDelete}>
                            <Text style={styles.pressableText}>Delete Review</Text>
                        </Pressable>
                    </View>
                </View> :<></>}
                </View>
            </View>
    )
};

const ItemSeparator = () => <View style={styles.separator} />

const SingleRepository = () => {
    // ...
    let url = null
    let { id } = useParams()
    console.log("params", id)
        const { data, loading, error } = useQuery(GET_REPO, {
            variables: { id }
        })

        if (loading) return null
        if (error) return null

    const { repository } = data
    const { reviews } = repository
    console.log("reviews", reviews)

    const reviewNodes = reviews ? reviews.edges.map(edge => edge.node) : []    

    return (
        <FlatList
            data={reviewNodes}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={({ id }) => id}
            ItemSeparatorComponent={ItemSeparator}

            ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
        // ...
        />
    );
};

export default SingleRepository;