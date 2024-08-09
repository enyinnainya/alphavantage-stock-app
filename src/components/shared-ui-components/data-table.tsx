import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { Button } from '@/components/shared-ui-components/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/shared-ui-components/table'

/**
 * DataTable component that displays tabular data with pagination and sorting support.
 *
 * @template TData - The type of data to be displayed in the table.
 * @template TValue - The type of the column values.
 */
interface DataTableProps<TData, TValue> {
  /** The columns of the table. */
  columns: ColumnDef<TData, TValue>[];
  /** The data to be displayed in the table. */
  data: TData[];
}

/**
 * DataTable component that displays tabular data with pagination and sorting support.
 *
 * @template TData - The type of data to be displayed in the table.
 * @template TValue - The type of the column values.
 */
export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  // Initialize the table state using the useReactTable hook.
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  // Render the table component.
  return (
    <>
      {/* Render the table with rounded borders and a border. */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {/* Render the header group for each header group in the table. */}
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {/* Render the header for each header in the header group. */}
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {/* Render the header content if it is not a placeholder. */}
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {/* Check if there are any rows in the table. */}
            {table.getRowModel().rows?.length ? (
              /* Render a table row for each row in the table. */
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {/* Render a table cell for each visible cell in the row. */}
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {/* Render the cell content using the cell's column type. */}
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              /* Render a table row with a message if there are no rows. */
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* Render the pagination controls. */}
      <div className="flex items-center justify-end space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {`<<`} Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next {`>>`}
        </Button>
      </div>
    </>
  );
}
