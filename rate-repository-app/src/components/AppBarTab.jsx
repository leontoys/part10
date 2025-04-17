import { Pressable, Text, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.heading,
        marginRight: 20
    },
});

const AppBarTab = ({ text }) => {
    return (
        <Text style={styles.text}>{text}</Text>
    );
};

export default AppBarTab;
