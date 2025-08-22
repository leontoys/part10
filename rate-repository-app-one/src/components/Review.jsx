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
  ownerName: "",
  repositoryName: "",
  text: "",
  rating: ""
}

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Owner name is required'),
  repositoryName: yup.string().required('Repository name is requried'),
  text: yup.string().required('Text is required'),
  rating:yup.number().required('Rating is required')
})

export const ReviewForm = ({ onSubmit }) => {
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
        placeholder='Owner Name'
        value={formik.values.ownerName}
        onChangeText={formik.handleChange('ownerName')}>
      </TextInput>
      {formik.touched.ownerName && formik.errors.ownerName && (
        <Text style={{ color: 'red' }}>{formik.errors.ownerName}</Text>
      )}
      <TextInput style={styles.text} secureTextEntry
        placeholder='Repository Name'
        value={formik.values.repositoryName}
        onChangeText={formik.handleChange('repositoryName')}>
      </TextInput>
      {formik.touched.repositoryName && formik.errors.repositoryName && (
        <Text style={{ color: 'red' }}>{ formik.errors.repositoryName}</Text>
      )}
      <TextInput style={styles.text} secureTextEntry
        placeholder='Text'
        value={formik.values.text}
        onChangeText={formik.handleChange('text')}>
      </TextInput>
      {formik.touched.text && formik.errors.text && (
        <Text style={{ color: 'red' }}>{formik.errors.text}</Text>
      )}
      <TextInput style={styles.text} secureTextEntry
        placeholder='Rating between 0 and 100'
        value={formik.values.rating}
        onChangeText={formik.handleChange('rating')}>
      </TextInput>
      {formik.touched.rating && formik.errors.rating && (
        <Text style={{ color: 'red' }}>{formik.errors.rating}</Text>
      )}
      <Pressable style={styles.pressable} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable> 
    </View>
  )

}

const Review = () => {
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
            <ReviewForm onSubmit={onSubmit}></ReviewForm>
        </View>
  )
}

export default Review