import { View, StyleSheet, Image, Pressable } from 'react-native';
import Text from './Text'
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { GET_REPO } from '../graphql/queries';
import * as Linking from 'expo-linking'
import RepositoryItem from './RepositoryItem';
import { FlatList } from 'react-native';

const RepositoryInfo = ({ repository }) => {
    // Repository's information implemented in the previous exercise

    const {
        fullName, description, language, stargazersCount, forksCount,
            reviewCount, ratingAverage, ownerAvatarUrl, url
    } = repository

    return (<RepositoryItem
        fullName={fullName}
        description={description}
        language={language}
        stargazersCount={stargazersCount}
        forksCount={forksCount}
        reviewCount={reviewCount}
        ratingAverage={ratingAverage}
        ownerAvatarUrl={ownerAvatarUrl}
        url={url}
    />)
};

const ReviewItem = ({ review }) => {
    // Single review item
};

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

    const {repository} = data

    return (
        <FlatList
            //data={reviews}
            //renderItem={({ item }) => <ReviewItem review={item} />}
            //keyExtractor={({ id }) => id}
            ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
        // ...
        />
    );
};

export default SingleRepository;