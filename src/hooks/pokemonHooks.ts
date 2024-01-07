import useSWR from "swr";

const fetcher = async (key: string) => {
  return fetch(key).then((res) => res.json() as Promise<any>);
};

export const usePokemon = (url: string) => {
  const { data, error, isLoading } = useSWR(url ? url : null, fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
};
