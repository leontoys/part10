import { View, TextInput, Pressable, StyleSheet } from 'react-native'
import { replace, useFormik } from 'formik'
import * as yup from 'yup'
import Text from './Text'
import useSignIn from '../hooks/useSignIn'
import { useNavigate  } from "react-router-native";


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent : 'center'
  },
  pressable: {
    backgroundColor: '#0366d6',
    margin : 20
  },
  text: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    margin : 20
  },
  buttonText: {
    color: 'white',
    alignContent: 'center',
    padding : 5
  }
})

const initialValues = {
  userName: "",
  password : ""
}

const validationSchema = yup.object().shape({
  userName: yup.string().required('Username is required'),
  password : yup.string().required('Password is requried')
})

const SignInForm = ({ onSubmit }) => {
  //formik
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })
  //now create the form
  return (
    <View style={styles.container}>
      <TextInput style={styles.text}
        placeholder='User Name'
        value={formik.values.userName}
        onChangeText={formik.handleChange('userName')}>
      </TextInput>
      {formik.touched.userName && formik.errors.userName && (
        <Text style={{ color: 'red' }}>{formik.errors.userName}</Text>
      )}
      <TextInput style={styles.text} secureTextEntry
        placeholder='Password'
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}>
      </TextInput>
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: 'red' }}>{ formik.errors.password}</Text>
      )}
      <Pressable style={styles.pressable} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable> 
    </View>
  )

}

const SignIn = () => {
  const [signIn] = useSignIn()
  const navigate = useNavigate()

  const onSubmit = async (values) => {

    const { userName, password } = values 
    try {
      await signIn({ userName, password })
      navigate('/', { replace: true })
      
    } catch (error) {
      console.log(error)
    }

    }
    return (
      <View>
            <SignInForm onSubmit={onSubmit}></SignInForm>
        </View>
  )
}

export default SignIn