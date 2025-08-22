import React from 'react'
import { REVIEW } from '../graphql/mutations'
import { useApolloClient, useMutation } from '@apollo/client'
import { useContext } from "react";
import AuthStorageContext from '../contexts/AuthStorageContext';
import useAuthStorage from './useAuthStorage'

const useReview = () => {
    const [mutate, result] = useMutation(REVIEW);
  const apolloClient = useApolloClient()
    const authStorage = useAuthStorage()
    
    const review = async ({ ownerName, repositoryName, text, rating }) => {
      //call mutate function with right arguments
      console.log("rating did it reach here?", rating)
      const review = {
        ownerName,
        repositoryName,
        text,
        rating : Number(rating)
      }
      const payload  = await mutate({variables:{review}})
      const { data } = payload
      
      console.log("payload",payload)
      //if (data?.authenticate) {
        //set token to the context
        //console.log(authStorage)
        //authStorage.setAccessToken(data.authenticate.accessToken)
        //refreshes and reexecutes all queries
        apolloClient.resetStore()
      //}

      return payload
    }

  return [review,result]
}

export default useReview