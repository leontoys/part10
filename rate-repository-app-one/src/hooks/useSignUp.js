import React from 'react'
import { AUTHENTICATE, SIGNUP } from '../graphql/mutations'
import { useApolloClient, useMutation } from '@apollo/client'
import { useContext } from "react";
import AuthStorageContext from '../contexts/AuthStorageContext';
import useAuthStorage from './useAuthStorage'

const useSignUp = () => {
      const [mutate, result] = useMutation(SIGNUP);
  const apolloClient = useApolloClient()
    const authStorage = useAuthStorage()
    
  const signUp = async ({ userName, password }) => {
    const user = {
      username : userName,
      password
      }
      //call mutate function with right arguments
      const payload  = await mutate({variables:{user}})
      const { data } = payload
      console.log("sign up payload",payload)
      
      //if (data?.authenticate) {
        //set token to the context
      //  console.log(authStorage)
      //  authStorage.setAccessToken(data.authenticate.accessToken)
        //refreshes and reexecutes all queries
      //  apolloClient.resetStore()
      //}

      return payload
    }

  return [signUp,result]
}

export default useSignUp