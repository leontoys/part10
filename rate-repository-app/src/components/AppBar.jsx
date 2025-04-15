import { View, StyleSheet } from 'react-native';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: theme.appBar.paddingTop,
        backgroundColor: theme.colors.appBarBackground,
        padding: theme.spacing.padding,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <Link to="/">
                <AppBarTab text="Repositories" />
            </Link>
            <Link to="/sign-in">
                <AppBarTab text="Sign In" />
            </Link>
        </View>
    );
};

export default AppBar;
