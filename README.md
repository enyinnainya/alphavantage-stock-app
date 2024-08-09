# Clepher + AlphaVantage Stock App

### A React Application to Display Stock Information from the AlphaVantage API

## `Technologies Used`: TypeScript + React + Vite + TailwindCSS

### To Run this Stock App, follow the instruction below.

#### Update files

- Change the API Key in `src/lib/stock-api.ts` file by updating the string value: `RIBXT3XYLI69PC0Q` if needed. You can also use Api key value of `demo` to test.

Be sure you are using node version 18+ for optimal performance.

`Clone this repository and run the following commands:`
```bash
cd clepher-alphavantage-stock-app
npm i
npm run dev
```

Open in a browser this url [http://localhost:5173/](http://localhost:5173/) to view the stock app.

### AlphaVantage API endpoints used

- TIME_SERIES_DAILY - [https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSCO.LON&outputsize=full&apikey=RIBXT3XYLI69PC0Q](https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSCO.LON&outputsize=full&apikey=RIBXT3XYLI69PC0Q)

  - TIME_SERIES_DAILY with `demo` api key - [https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSCO.LON&outputsize=full&apikey=demo](https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSCO.LON&outputsize=full&apikey=demo)