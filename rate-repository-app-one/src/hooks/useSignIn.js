import React from 'react'
import { AUTHENTICATE } from '../graphql/mutations'
import { useMutation } from '@apollo/client'
import { useContext } from "react";
import AuthStorageContext from '../contexts/AuthStorageContext';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
    const authStorage = useAuthStorage()
    const [mutate, result] = useMutation(AUTHENTICATE)
    
    const signIn = async ({ userName, password }) => {
      console.log("hook", userName, password)
      console.log("mutate", mutate)
      //call mutate function with right arguments
      const { data }  = await mutate({variables:{userName,password}})
      console.log("result", result);
      return data
    }

  return [signIn,result]
}

export default useSignIn