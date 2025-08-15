import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'
import { useFormik } from 'formik'

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

const SignInForm = ({ onSubmit }) => {
  //formik
  const formik = useFormik({
    initialValues,
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
      <TextInput style={styles.text} secureTextEntry
        placeholder='Password'
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}>
      </TextInput>
      <Pressable style={styles.pressable} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable> 
    </View>
  )

}

const SignIn = () => {
  const onSubmit = values => {
      console.log(values)
    }
    return (
      <View>
            <SignInForm onSubmit={onSubmit}></SignInForm>
        </View>
  )
}

export default SignIn