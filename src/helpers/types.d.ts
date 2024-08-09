/**
 * Represents an error that occurred during routing.
 */
export type TRouterError = {
  status: number
  statusText?: string
  message?: string
}

/**
 * Represents a daily time series of stock data.
 */
export type TTimeSeriesDaily = {
  'Meta Data': {
    '1. Information': string
    '2. Symbol': string
    '3. Last Refreshed': string
    '4. Output Size': string
    '5. Time Zone': string
  }
  'Time Series (Daily)': {
    [key: string]: {
      '1. open': string
      '2. high': string
      '3. low': string
      '4. close': string
      '5. volume': string
    }
  }
}

/**
 * Represents a detailed daily time series of stock data.
 */
export type TTimeSeriesDailyDetail = {
  date: string
  open: string
  high: string
  low: string
  close: string
  volume: string
}

/**
 * Represents a dynamic object, which can have any number of string keys and values.
 * @template T The type of values in the object (default: `unknown`).
 */
export interface DynamicObjectType<T = unknown> {
  [key: string]: string | number | boolean | T;
}
