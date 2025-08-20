import { View, StyleSheet, Image } from 'react-native';
import Text from './Text'
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";


const styles = StyleSheet.create({
  flexContainer: {
    display : 'flex',
    backgroundColor: 'white',
    flexDirection : 'row'
  },
  flexItemA: {
    flexGrow : 0
  },
  flexItemB: {
    flexGrow : 1
  },
  image: {
    width: '100',
    height: '100',
    padding: '5',
    margin : '2'
  },
  name: {
    fontWeight: 'bold',
    fleexGrow : 1
  },
  language: {
    backgroundColor: '#0366d6',
    color: 'white',
    width : "30%",
    textAlign : "center",
    flexGrow: 1,
    borderRadius: 5,
    flexGrow : 0
  }
})

const RepositoryItem = ({
  fullName, description, language, stargazersCount, forksCount,
  reviewCount, ratingAverage, ownerAvatarUrl }) => {
  
  let {id} = useParams()
  console.log("params", id)
/*   if(id){
  const result = useQuery('GET_REPO', {
    variables: { id }
  })
  loadDevMessages();
  loadErrorMessages();
    console.log(result)
  } */

  //if (loading) return <View></View>
  //if (error) return <View></View>
  //console.log(data)
  
  return (
    <View style={styles.flexContainer} testID='repositoryItem'>
      <View style={styles.flexItemA}>
        {<Image style={styles.image} source={{ uri: ownerAvatarUrl }}></Image>}
      </View>
      <View style={styles.flexItemB}>
        {<Text testID="fullName" style={styles.name}>{fullName}</Text>}
        {<Text>{description}</Text>}
        {<Text style={styles.language}>{language}</Text>}
        {<Text>{stargazersCount > 1000 ? `${Math.floor(stargazersCount / 1000)}K` : stargazersCount} Stars</Text>}
        {<Text>{forksCount > 1000 ? `${Math.floor(forksCount / 1000)}K` : forksCount} Forks</Text>}
        {<Text>{reviewCount} Reviews</Text>}
        {<Text>{ratingAverage} Rating</Text>}
      </View>      
    </View>
  )
}

export default RepositoryItem