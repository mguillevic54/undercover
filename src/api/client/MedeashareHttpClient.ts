import axios from 'axios';
import { MEDEASHARE_API_URL } from '@env';

export const MedeashareHttpClient = axios.create({
  timeout: 5000,
  baseURL: MEDEASHARE_API_URL
});

/**
 * Adds an interceptor to the Axios instance's request pipeline.
 * Also sets the Content-Type header to application/json.
 * @function
 * @name MedeashareHttpClient.interceptors.request.use
 * @param {import('axios').AxiosRequestConfig} config - The request configuration.
 * @returns {import('axios').AxiosRequestConfig} The updated request configuration.
 */
MedeashareHttpClient.interceptors.request.use((config) => {
  if (!config.headers['Content-Type']) {
    config.headers['Content-Type'] = 'application/json';
  }
  return config;
});
