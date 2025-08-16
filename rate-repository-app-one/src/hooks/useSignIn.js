import React from 'react'
import { AUTHENTICATE } from '../graphql/mutations'
import { useMutation } from '@apollo/client'

const useSignIn = () => {
    const [mutate, result] = useMutation(AUTHENTICATE)
    
    const signIn = async ({ userName, password }) => {
      console.log("hook", userName, password)
      console.log("mutate", mutate)
      //call mutate function with right arguments
      const data = await mutate({variables:{userName,password}})
      console.log("result", result);
      return data
    }

  return [signIn,result]
}

export default useSignIn