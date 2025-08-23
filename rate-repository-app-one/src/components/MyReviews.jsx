import { FlatList, View, StyleSheet, Pressable, TextInput } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useEffect, useState } from 'react';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import { Picker } from "@react-native-picker/picker";
import { GET_USER } from '../graphql/queries'
import { useApolloClient, useQuery } from '@apollo/client'
import {ReviewItem} from './SingleRepository';


const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});


const ItemSeparator = () => <View style={styles.separator} />

export const RepositoryListContainer = (
//    { repositories, selectedOrder, setSelectedOrder,
//        searchKeyword, setSearchKeyword }
) => {
    console.log("repository list container")
    //const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : []
    //let navigate = useNavigate()
    const { data } = useQuery(GET_USER)
    console.log("get user data", data?.me)
    const reviewNodes = data ? data?.me?.reviews?.edges?.map(edge => edge?.node) : []
     console.log("reviews",reviewNodes)

    const handlePress = (id) => {
        console.log("pressed", id)
        navigate(`/${id}`)
    }

    return (
        <FlatList
            data={reviewNodes}
            ItemSeparatorComponent={ItemSeparator}
            // other props
            renderItem={({ item }) => {
                console.log("item",item)
                return (<ReviewItem review={item} />)
            }
            }
        />
    );    
}

const MyReviews = () => {
    console.log("reached my reviews")
    //const [selectedOrder, setSelectedOrder] = useState()
    //const [searchKeyword, setSearchKeyword] = useState()

    
    //const { repositories } = useRepositories(selectedOrder, searchKeyword) 
    
    return <RepositoryListContainer />
    //repositories = { repositories } selectedOrder = { selectedOrder }
    //    searchKeyword={searchKeyword}
    //    setSearchKeyword={setSearchKeyword}
    //                                setSelectedOrder={setSelectedOrder}/>

};

export default MyReviews;