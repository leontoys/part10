import React from 'react'
import { DELETEREVIEW } from '../graphql/mutations'
import { useApolloClient, useMutation } from '@apollo/client'
import { useContext } from "react";
import AuthStorageContext from '../contexts/AuthStorageContext';
import useAuthStorage from './useAuthStorage'

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETEREVIEW);
  const apolloClient = useApolloClient()
  const authStorage = useAuthStorage()
    
  const deleteReview = async ({ id }) => {
    //call mutate function with right arguments
    const deleteReviewId = id
      const payload  = await mutate({variables:{deleteReviewId}})
      const { data } = payload
      console.log("deleted review",payload)

      return payload
    }

  return [deleteReview,result]
}

export default useDeleteReview