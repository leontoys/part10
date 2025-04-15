import { View, StyleSheet } from 'react-native';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
    container: {
        paddingTop: theme.appBar.paddingTop,
        backgroundColor: theme.colors.appBarBackground,
        padding: theme.spacing.padding,
    },
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <AppBarTab text="Repositories" />
        </View>
    );
};

export default AppBar;
