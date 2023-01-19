import { useState } from "react";

function useFetch(url) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    try {
      setIsLoading(true);

      const response = await fetch(url);

      if (!response.ok) {
        const apiError = new Error(
          `Error ${response.status} while fetching data from ${url}`
        );
        apiError.response = response;
        throw apiError;
      }
      const json = await response.json();
      return json;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    fetchData,
    isLoading,
    error,
  };
}

export default useFetch;
