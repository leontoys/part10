import { FlatList, View, StyleSheet, Pressable, TextInput, Alert } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useEffect, useState } from 'react';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import { Picker } from "@react-native-picker/picker";
import { GET_USER } from '../graphql/queries'
import { useApolloClient, useQuery } from '@apollo/client'
//import {ReviewItem} from './SingleRepository';
import { format } from "date-fns";
import Text from './Text'


const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    flexItemA: {
        //    flexGrow: 1,
        margin: 10
    },
    flexItemB: {
        //    flexGrow: 1,
        margin: 10
    },
    roundText: {
        borderColor: '#0366d6',
        borderStyle: 'solid',
        color: '#0366d6',
        borderWidth: 3,
        borderRadius: 50,
        textAlign: 'center',
        padding: 5
    },
    boldText: {
        fontWeight: 'bold'
    },
    pressableView: {
        backgroundColor: '#0366d6',
        borderColor: '#0366d6',
        borderStyle: 'solid',
        borderWidth: 3,
        borderRadius: 5
    },
    pressableDelete: {
        backgroundColor: 'red',
        borderColor: 'red',
        borderStyle: 'solid',
        borderWidth: 3,
        borderRadius: 5
    },
    pressableText: {
        color: 'white'
    }
});


const ItemSeparator = () => <View style={styles.separator} />

const ReviewItem = ({ rating, user, createdAt, text, repository }) => {
    const navigate = useNavigate()
    const onDelete = (id) => {
        Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'Delete', onPress: () => console.log('Delete Pressed'), style:'destructive' },
        ]);
    }

    const handlePress = (id) => {
        console.log("pressed", id)
        navigate(`/${id}`)
    }
    return (
        <View style={styles.flexContainer}>
            <View style={styles.flexItemA}>
                <Text style={styles.roundText}>{rating}</Text>
            </View>
            {<View style={styles.flexItemB}>
                <Text style={styles.boldText}>{user?.username}</Text>
                <Text>{format(createdAt, "dd.M.yyyy")}</Text>
                <Text>{text}</Text>
                {<View style={styles.flexContainer}>
                    <View style={styles.flexItemA}>
                        <Pressable style={styles.pressableView} onPress={() => handlePress(repository.id)}>
                            <Text style={styles.pressableText}>View Repository</Text>
                        </Pressable>
                    </View>
                    <View style={styles.flexItemB}>
                        <Pressable style={styles.pressableDelete} onPress={()=>onDelete(repository.id)}>
                            <Text style={styles.pressableText}>Delete Review</Text>
                        </Pressable>
                    </View>
                </View> }
            </View> }
        </View>
    )
}

const RepositoryListContainer = ( ) => {
    console.log("repository list container")
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
            keyExtractor={({id})=>id}
            renderItem={({ item }) => <ReviewItem {...item}></ReviewItem>}
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