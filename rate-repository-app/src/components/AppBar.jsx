import { View, StyleSheet, ScrollView } from 'react-native';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { Link } from 'react-router-native';

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
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                <Link to="/">
                    <AppBarTab text="Repositories" />
                </Link>
                <Link to="/sign-in">
                    <AppBarTab text="Sign In" />
                </Link>
            </ScrollView>
        </View>
    );
};


export default AppBar;
