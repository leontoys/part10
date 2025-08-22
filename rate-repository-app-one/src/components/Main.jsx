import Constants from 'expo-constants'
import { Text, StyleSheet, View } from 'react-native'
import RepositoryList from './RepositoryList'
import SignIn from './SignIn'
import AppBar from './AppBar'
import { Route, Routes, Navigate } from 'react-router-native'
import theme from '../theme'
import RepositoryItem from './RepositoryItem'
import SingleRepository from './SingleRepository'
import Review from "./Review";
import SignUp from './SignUp'

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor : '#e1e4e8'
    }
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/review' element={<Review />} />
        <Route path='/signup' element={<SignUp/> } />
        {<Route path='/:id' element={<SingleRepository />}></Route>}
        <Route path='*' element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  )
}

export default Main