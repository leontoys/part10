import { View, TextInput, Pressable, StyleSheet } from 'react-native'
import { replace, useFormik } from 'formik'
import * as yup from 'yup'
import Text from './Text'
import useSignIn from '../hooks/useSignIn'
import { useNavigate  } from "react-router";


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
  password: "",
  passwordConfirm:""
}

const validationSchema = yup.object().shape({
  userName: yup.string().required('Username is required'),
  password: yup.string().required('Password is requried'),
  passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Password does not match').required('Required')
})

export const SignUpForm = ({ onSubmit }) => {
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
      <TextInput style={styles.text} secureTextEntry
        placeholder='Confirm Password'
        value={formik.values.passwordConfirm}
        onChangeText={formik.handleChange('passwordConfirm')}>
      </TextInput> 
       {formik.touched.passwordConfirm && formik.errors.passwordConfirm && (
        <Text style={{ color: 'red' }}>{formik.errors.passwordConfirm}</Text>
      )} 
      <Pressable style={styles.pressable} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable> 
    </View>
  )

}

const SignUp = () => {
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
            <SignUpForm onSubmit={onSubmit}></SignUpForm>
        </View>
  )
}

export default SignUp