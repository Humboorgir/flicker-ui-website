import useSWR, { type Fetcher } from "swr";

function useComponentCode(component: string) {
  // @ts-ignore
  const fetcher: Fetcher<{ componentCode: string }> = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(component ? `/api/component-code/${component}` : null, fetcher);

  return {
    code: data?.componentCode,
    isLoading,
    isError: error,
  };
}

export default useComponentCode;
