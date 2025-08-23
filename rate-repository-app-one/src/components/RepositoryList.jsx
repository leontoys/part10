import { FlatList, View, StyleSheet, Pressable, TextInput } from 'react-native';
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

const ItemSeparator = () => <View style={styles.separator} />

export const RepositoryListContainer = ({ repositories, selectedOrder, setSelectedOrder,
    searchKeyword, setSearchKeyword }) => {
    const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : []
    let navigate = useNavigate()

    const handlePress = (id) => {
        console.log("pressed", id)
        navigate(`/${id}`)
    }

    return (
        <FlatList
            data={repositoryNodes}
            ListHeaderComponent={<>
                <TextInput value={searchKeyword} onChangeText={setSearchKeyword}></TextInput>
            <Picker selectedValue={selectedOrder}
                onValueChange={(itemValue, itemIndex) => setSelectedOrder(itemValue)}>
                <Picker.Item label="Order by Date (Ascending)" value="CREATED_AT-ASC"/>
                <Picker.Item label="Order by Date (Descending)" value="CREATED_AT-DESC" />
                <Picker.Item label="Order by Rating (Ascending)" value="RATING_AVERAGE-ASC" />
                <Picker.Item label="Order by Rating (Descending)" value="RATING_AVERAGE-DESC" />
            </Picker></>}
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
    const [searchKeyword, setSearchKeyword] = useState()
    
    const { repositories } = useRepositories(selectedOrder, searchKeyword) 
    
    return <RepositoryListContainer repositories={repositories} selectedOrder={selectedOrder}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
                                    setSelectedOrder={setSelectedOrder}/>

};

export default RepositoryList;