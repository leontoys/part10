import React from 'react'
import { AUTHENTICATE } from '../graphql/mutations'
import { useApolloClient, useMutation } from '@apollo/client'
import { useContext } from "react";
import AuthStorageContext from '../contexts/AuthStorageContext';
import useAuthStorage from './useAuthStorage'

const useSignIn = () => {
      const [mutate, result] = useMutation(AUTHENTICATE);
  const apolloClient = useApolloClient()
    const authStorage = useAuthStorage()
    
    const signIn = async ({ userName, password }) => {
      //call mutate function with right arguments
      const payload  = await mutate({variables:{userName,password}})
      const { data } = payload
      
      if (data?.authenticate) {
        //set token to the context
        console.log(authStorage)
        authStorage.setAccessToken(data.authenticate.accessToken)
        //refreshes and reexecutes all queries
        apolloClient.resetStore()
      }

      return payload
    }

  return [signIn,result]
}

export default useSignIn