import { View, Text, TextInput, Button, Pressable, StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    inputError: {
        borderColor: "red",
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

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(3, "Username must be at least 3 characters")
        .required("Username is required"),
    password: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});

const getInputStyle = (touched, error) => {
    if (touched && error) {
        return [styles.input, styles.inputError];
    }
    return styles.input;
}

const SignIn = () => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });
    return (
        <View>
            <TextInput
                style={getInputStyle(formik.touched.username, formik.errors.username)}
                value={formik.values.username}
                onChangeText={formik.handleChange("username")}
                placeholderTextColor={"lightgray"}
                placeholder="username">
            </TextInput>
            {formik.touched.username && formik.errors.username ? (
                <Text style={{ color: "red" }}>{formik.errors.username}</Text>
            ) : null}
            <TextInput
                style={getInputStyle(formik.touched.password, formik.errors.password)}
                secureTextEntry={true}
                value={formik.values.password}
                onChangeText={formik.handleChange("password")}
                placeholderTextColor={"lightgray"}
                placeholder="password">
            </TextInput>
            {formik.touched.password && formik.errors.password ? (
                <Text style={{ color: "red" }}>{formik.errors.password}</Text>
            ) : null}
            <Pressable style={styles.button} onPress={formik.handleSubmit}>
                <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>
        </View>
    );
};

export default SignIn;