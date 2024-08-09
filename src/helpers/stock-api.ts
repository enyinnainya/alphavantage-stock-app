import { TTimeSeriesDaily } from './types'
import httpRequestService from '@/services/http-request.service'


/**
 * Fetches time series data for a given symbol from the Alpha Vantage API.
 *
 * @param {Object} params - An object containing the query key.
 * @param {string[]} params.queryKey - The query key containing the symbol.
 * @return {Promise<TTimeSeriesDaily>} A promise that resolves to the time series data for the given symbol.
 */
export const getTimeSeriesDailyData = async ({
  queryKey,
}: {
  queryKey: string[]
}): Promise<TTimeSeriesDaily> => {
  // Extract the symbol from the query key
  const [, symbol] = queryKey;

  // Fetch the time series data for the given symbol from the API
  return await httpRequestService.get<TTimeSeriesDaily>({
    function: 'TIME_SERIES_DAILY', // The API function to call
    symbol, // The symbol for which to fetch the data
  });
}
