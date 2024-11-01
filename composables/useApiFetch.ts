import type {UseFetchOptions} from 'nuxt/app'
import {useRequestHeaders} from "nuxt/app";
import { useTokenStore } from '~/stores/useTokenStore';

export function useApiFetch<T>(path: string, options: UseFetchOptions<T> = {}) {
  const config = useRuntimeConfig();
  let headers: any = {
    accept: "application/json",
    referer: config.public.apiUrl,
    Authorization: `Bearer ${useTokenStore().token}`
  }

  const token = useCookie('XSRF-TOKEN');

  if (token.value) {
    headers['X-XSRF-TOKEN'] = token.value as string;
  }

  if (process.server) {
    headers = {
      ...headers,
      ...useRequestHeaders(["cookie"]),
    }
  }
  return useFetch(config.public.apiUrl + path, {
    credentials: "include",
    watch: false,
    ...options,
    headers: {
      ...headers,
      ...options?.headers
    }
  });
}
