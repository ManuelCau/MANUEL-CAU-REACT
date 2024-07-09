import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export function useGithubUser() {
  const { data, error } = useSWR("https://api.github.com/users", fetcher);

  return { data, error };
}
