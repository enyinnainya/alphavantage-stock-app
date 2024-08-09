import axios, { Axios, AxiosHeaderValue } from 'axios'

import { DynamicObjectType } from '@/helpers/types'

/**
 * Class representing a service for making HTTP requests to the Alpha Vantage API
 */
class HttpRequestService {
  private _apiKey: string = ''; // The API key for authentication
  private _apiBaseUrl: string = ''; // The base URL for the API
  private _apiEndpoint: string = ''; // The endpoint for the API
  private _postData: DynamicObjectType = {}; // The data to be sent in a POST request
  protected httpClient: Axios; // The HTTP client for making the requests

  /**
   * Constructs a new instance of HttpRequestService
   */
  constructor () {
    this.httpClient = axios.create({
      baseURL: this.apiBaseUrl,
    });
    
    // Set default values for API key, base URL, and endpoint
    this.apiKey = 'RIBXT3XYLI69PC0Q';
    this.apiBaseUrl = 'https://www.alphavantage.co';
    this.apiEndpoint = '/query';
  }

  /**
   * Getter for the API key
   * @returns {string} The API key
   */
  public get apiKey () {
    return this._apiKey;
  }

  /**
   * Getter for the API base URL
   * @returns {string} The API base URL
   */
  public get apiBaseUrl () {
    return this._apiBaseUrl;
  }

  /**
   * Getter for the API endpoint
   * @returns {string} The API endpoint
   */
  public get apiEndpoint () {
    return this._apiEndpoint;
  }

  /**
   * Getter for the POST data
   * @returns {DynamicObjectType} The POST data
   */
  public get postData () {
    return this._postData;
  }

  /**
   * Setter for the API key
   * @param {string} apiKey - The API key
   */
  public set apiKey (apiKey: string) {
    this._apiKey = apiKey;
  }

  /**
   * Setter for the API base URL
   * @param {string} apiBaseUrl - The API base URL
   */
  public set apiBaseUrl (apiBaseUrl: string) {
    this._apiBaseUrl = apiBaseUrl;
  }

  /**
   * Setter for the POST data
   * @param {DynamicObjectType} postData - The POST data
   */
  public set postData (postData: DynamicObjectType) {
    this._postData = postData;
  }

  /**
   * Setter for the API endpoint
   * @param {string} apiEndpoint - The API endpoint
   */
  public set apiEndpoint (apiEndpoint: string) {
    this._apiEndpoint = apiEndpoint;
  }

  /**
   * Setter for the headers
   * @param {DynamicObjectType<AxiosHeaderValue>} header - The headers
   */
  public set headers (header: DynamicObjectType<AxiosHeaderValue>) {
    this.httpClient.defaults.headers.common = header;
  }

  /**
   * Make a GET request to the API
   * @template T - The type of the response data
   * @param {Object.<string, string>} queryParams - The query parameters for the request
   * @returns {Promise<T>} - The response data
   */
  public async get<T = DynamicObjectType> (queryParams: { [key: string]: string }): Promise<T> {
    // Construct the query string with the API key appended
    const queryString = new URLSearchParams({
      ...queryParams,
      apikey: this.apiKey,
      outputsize: 'full', // outputsize
    }).toString();

    try {
      // Make the GET request and return the response data
      const response = await this.httpClient.get(`${this.apiBaseUrl}${this.apiEndpoint}?${queryString}`)
      return response.data
    } catch (err) {
      console.log(err)
    }
    
    // Return an error message if the request fails
    return { err: 'An error occurred processing your request' } as DynamicObjectType as T
  }
}

export default new HttpRequestService()

