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
                {/* Add more tabs here to test scrollability */}
                <Link to="/tab1"><AppBarTab text="Tab1" /></Link>
                <Link to="/tab2"><AppBarTab text="Tab2" /></Link>
                <Link to="/tab3"><AppBarTab text="Tab3" /></Link>
                <Link to="/tab4"><AppBarTab text="Tab4" /></Link>
            </ScrollView>
        </View>
    );
};


export default AppBar;
