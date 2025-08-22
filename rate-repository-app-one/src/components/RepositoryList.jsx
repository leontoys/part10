import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useEffect, useState } from 'react';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import { Picker } from "@react-native-picker/picker";


const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

/* const repositories = [
    {
        id: 'jaredpalmer.formik',
        fullName: 'jaredpalmer/formik',
        description: 'Build forms in React, without the tears',
        language: 'TypeScript',
        forksCount: 1589,
        stargazersCount: 21553,
        ratingAverage: 88,
        reviewCount: 4,
        ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
    },
    {
        id: 'rails.rails',
        fullName: 'rails/rails',
        description: 'Ruby on Rails',
        language: 'Ruby',
        forksCount: 18349,
        stargazersCount: 45377,
        ratingAverage: 100,
        reviewCount: 2,
        ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
    },
    {
        id: 'django.django',
        fullName: 'django/django',
        description: 'The Web framework for perfectionists with deadlines.',
        language: 'Python',
        forksCount: 21015,
        stargazersCount: 48496,
        ratingAverage: 73,
        reviewCount: 5,
        ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
    },
    {
        id: 'reduxjs.redux',
        fullName: 'reduxjs/redux',
        description: 'Predictable state container for JavaScript apps',
        language: 'TypeScript',
        forksCount: 13902,
        stargazersCount: 52869,
        ratingAverage: 0,
        reviewCount: 0,
        ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
    },
]; */

const ItemSeparator = () => <View style={styles.separator} />

export const RepositoryListContainer = ({ repositories,selectedOrder,setSelectedOrder }) => {
    const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : []
    let navigate = useNavigate()

    const handlePress = (id) => {
        console.log("pressed", id)
        navigate(`/${id}`)
    }

    return (
        <FlatList
            data={repositoryNodes}
            ListHeaderComponent={<Picker selectedValue={selectedOrder}
                onValueChange={(itemValue, itemIndex) => setSelectedOrder(itemValue)}>
                <Picker.Item label="Order by Date (Ascending)" value="CREATED_AT-ASC"/>
                <Picker.Item label="Order by Date (Descending)" value="CREATED_AT-DESC" />
                <Picker.Item label="Order by Rating (Ascending)" value="RATING_AVERAGE-ASC" />
                <Picker.Item label="Order by Rating (Descending)" value="RATING_AVERAGE-DESC" />
                                 </Picker>}
            ItemSeparatorComponent={ItemSeparator}
            // other props
            renderItem={({ item }) =>
                <Pressable onPress={()=>handlePress(item.id)}>
                <RepositoryItem
                fullName={item.fullName}
                description={item.description}
                language={item.language}
                stargazersCount={item.stargazersCount}
                forksCount={item.forksCount}
                reviewCount={item.reviewCount}
                ratingAverage={item.ratingAverage}
                ownerAvatarUrl={item.ownerAvatarUrl}
            /></Pressable>}
        />
    );    
}

const RepositoryList = () => {
    const [selectedOrder, setSelectedOrder] = useState()
    const { repositories } = useRepositories(selectedOrder) 
    
    return <RepositoryListContainer repositories={repositories} selectedOrder={selectedOrder}
                                    setSelectedOrder={setSelectedOrder}/>

};

export default RepositoryList;