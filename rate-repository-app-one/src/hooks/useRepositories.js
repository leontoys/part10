import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  //const [loading, setLoading] = useState(false)

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });
  console.log(data,error,loading)

  const fetchRepositories = async () => {
  //  const response = await fetch("http://192.168.16.133:5000/api/repositories");
  //  const json = await response.json();
      //setLoading(false);
      if (data) {
          setRepositories(data.repositories)
      }
  };

  useEffect(() => {
    fetchRepositories();
  }, [data]);

  return { repositories, loading, refetch: fetchRepositories };
}

export default useRepositories