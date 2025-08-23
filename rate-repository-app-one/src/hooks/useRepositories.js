import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = (selectedOrder, searchKeyword) => {
  console.log("order", selectedOrder);
  const [repositories, setRepositories] = useState();
  //const [loading, setLoading] = useState(false)
  const orderBy = selectedOrder?.split("-")[0];
  const orderDirection = selectedOrder?.split("-")[1];

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    variables: { orderBy, orderDirection, searchKeyword },
    fetchPolicy: "cache-and-network",
  });
  console.log(data, error, loading);

  const fetchRepositories = async () => {
    //  const response = await fetch("http://192.168.16.133:5000/api/repositories");
    //  const json = await response.json();
    //setLoading(false);
    if (data) {
      setRepositories(data.repositories);
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, [data]);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories