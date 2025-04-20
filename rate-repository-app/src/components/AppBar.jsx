import { View, StyleSheet, ScrollView, Pressable, Text } from 'react-native';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { Link } from 'react-router-native';
import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";
import { useSignOut } from "../hooks/useSignOut";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: theme.appBar.paddingTop,
        backgroundColor: theme.colors.appBarBackground,
    },
    scrollContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: theme.spacing.padding,
    },
});


const AppBar = () => {
    const { data } = useQuery(ME, {
        fetchPolicy: "cache-and-network",
    });
    const signOut = useSignOut();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        await signOut();
        navigate("/");
    };

    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                <Link to="/">
                    <AppBarTab text="Repositories" />
                </Link>
                {data?.me ? (
                    <Link to="/" onPress={handleSignOut}>
                        <AppBarTab text="Sign Out" />
                    </Link>
                ) : (
                    <Link to="/sign-in">
                        <AppBarTab text="Sign In" />
                    </Link>
                )}
            </ScrollView>
        </View>
    );
};


export default AppBar;
