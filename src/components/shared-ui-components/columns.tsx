import { ColumnDef } from '@tanstack/react-table'

import { TTimeSeriesDailyDetail } from '@/helpers/types'


/**
 * Array of column definitions for the TTimeSeriesDailyDetail data type.
 * Each column definition includes the accessor key for the data, a header label, and an optional cell renderer.
 */
export const columns: ColumnDef<TTimeSeriesDailyDetail>[] = [
  {
    accessorKey: 'open',
    header: 'Open',
  },
  {
    accessorKey: 'high',
    header: 'High',
  },
  {
    accessorKey: 'low',
    header: 'Low',
  },
  {
    accessorKey: 'volume',
    header: 'Volume',
  },
  {
    accessorKey: 'close',
    header: 'Close',
  },
  {
    accessorKey: 'date',
    header: 'Date',
    // The cell renderer for the column
    /**
     * Renders the cell content for the 'date' column.
     *
     * @param {Object} row - The row object containing the cell data.
     * @return {JSX.Element} The JSX element representing the cell content.
     */
    cell: ({ row }) => {
      // Retrieves the value of the 'date' property from the row object
      const date = row.getValue('date') as string
      // Renders the cell content with the date value and a bold font
      return <span className="font-bold">{date}</span>
    },
  },
]
