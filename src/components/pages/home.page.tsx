import { useEffect, useRef, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { columns } from '@/components/shared-ui-components/columns'
import {
  DataTable,
} from '@/components/shared-ui-components/data-table'
import Spinner from '@/components/shared-ui-components/spinner'
import TextFieldInput from '@/components/shared-ui-components/text-field-input'
import { getTimeSeriesDailyData } from '@/helpers/stock-api'
import {stockSymbol} from '@/helpers/utils';
/**
 * HomePage component is the main page of the application.
 * It displays daily time series stock data.
 */
const HomePage = () => {
  // Ref to the input element
  const inputRef = useRef<HTMLInputElement>(null);

  // State to store the time series data
  const [timeSeriesData, setTimeSeriesData] = useState<{
    date: string;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
  }[]>([]);

  // Query hook to get the time series data
  const { data: dataTimeSeriesDaily, isLoading } = useQuery({
    queryKey: ['time-series-daily', stockSymbol],
    queryFn: getTimeSeriesDailyData,
    // Function to select the data from the API response
    select: (data) => {
      // If data is not available or 'Time Series (Daily)' is not available, return an empty array
      if (!data || !data['Time Series (Daily)']) return [];
      // Map over the keys of 'Time Series (Daily)' and return an array of objects
      return Object.keys(data['Time Series (Daily)']).map((date: string) => {
        const record =
          data['Time Series (Daily)'][
            date as keyof (typeof data)['Time Series (Daily)']
          ];
        return {
          date,
          open: record['1. open'],
          high: record['2. high'],
          low: record['3. low'],
          close: record['4. close'],
          volume: record['5. volume'],
        };
      });
    },
  });

  /**
   * Handle the search input change event.
   * Filter the time series data based on the user input and update the state.
   */
  const handleSearchInputChange = () => {
    const userInput = inputRef.current?.value ?? '';
    setTimeSeriesData(() => {
      if (dataTimeSeriesDaily) {
        return dataTimeSeriesDaily.filter((item) =>
          Object.values(item).some((value) =>
            value.toString().includes(userInput)
          )
        );
      }
      return [];
    });
  };

  // Effect hook to update the time series data when the data from the API changes
  useEffect(() => {
    if (dataTimeSeriesDaily && Array.isArray(dataTimeSeriesDaily)) {
      setTimeSeriesData(dataTimeSeriesDaily);
    }
  }, [dataTimeSeriesDaily]);

  return (
    <div className="flex flex-col space-y-8">
      {/* Display the page title */}
      <h1 className="text-2xl font-bold uppercase text-center pb-5 pt-10 text-amber-900">
        Time Series Daily Stock Data
      </h1>
      {/* Display the loading spinner if data is loading */}
      {isLoading ? (
        <Spinner className="text-center" />
      ) : (
        // Display the data table if data is available
        <>
          {dataTimeSeriesDaily && dataTimeSeriesDaily.length > 0 ? (
            <>
              {/* Display the search input field */}
              <div className="flex flex-row justify-end items-end w-full">
                <TextFieldInput
                  handleInputChange={handleSearchInputChange}
                  className="max-w-md flex-1"
                  inputRef={inputRef}
                  placeholder="Search Stock by any column"
                  inputClassName="placeholder-gray-800"
                />
              </div>
              {/* Display the data table */}
              <DataTable columns={columns} data={timeSeriesData} />
            </>
          ) : (
            // Display the message if no data is available
            <p className="text-lg font-bold">No Data Found</p>
          )}
        </>
      )}
    </div>
  );
};

export default HomePage
