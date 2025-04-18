import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import theme from '../theme';
import { useState, useEffect } from 'react';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
    separator: {
        height: theme.spacing.padding, // using theme for spacing
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {

    const { repositories } = useRepositories();

    // Get the nodes from the edges array
    const repositoryNodes = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];

    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => (
                <RepositoryItem
                    fullName={item.fullName}
                    description={item.description}
                    language={item.language}
                    forksCount={item.forksCount}
                    stargazersCount={item.stargazersCount}
                    ratingAverage={item.ratingAverage}
                    reviewCount={item.reviewCount}
                    ownerAvatarUrl={item.ownerAvatarUrl}
                />
            )}
            keyExtractor={(item) => item.id}
        />
    );
};

export default RepositoryList;
