import useSWR from 'swr'
import { api } from '../services/apiClient';

export function useFetch<Data = any, Error = any>(url: string, username = "t", password = "t") {
  const { data, error } = useSWR<Data, Error>(url, async (url: string) => {
    const response = await api.get(url , {
      auth: {
        username,
        password,
       }
     });

    return response.data;
  })

  return { data, error }
}