import { View, Text, TextInput, Button, Pressable, StyleSheet } from "react-native";
import { useFormik } from "formik";

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        backgroundColor: "#0366d6",
        padding: 10,
        margin: 12,
        borderRadius: 5,
    },
    buttonText: {
        color: "#ffffff",
        textAlign: "center",
    },
});

const initialValues = {
    username: "",
    password: "",
};
const onSubmit = (values) => {
    console.log(values);
};


const SignIn = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
    });
    return (
        <View>
            <TextInput
                style={styles.input}
                value={formik.values.username}
                onChangeText={formik.handleChange("username")}
                placeholderTextColor={"lightgray"}
                placeholder="username">
            </TextInput>
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                value={formik.values.password}
                onChangeText={formik.handleChange("password")}
                placeholderTextColor={"lightgray"}
                placeholder="password">
            </TextInput>
            <Pressable style={styles.button} onPress={formik.handleSubmit}>
                <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>
        </View>
    );
};

export default SignIn;