import * as React from "react"

import { cn } from "@/helpers/utils.ts"

/**
 * The Table component is a wrapper for the HTML table element.
 * It applies styles and provides a convenient API for creating tables.
 */
const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  // The Table component is rendered inside a div with relative positioning
  // and overflow-auto for scrollable content.
  <div className="relative w-full overflow-auto">
    {/* The table element is passed all the props and receives a className. */}
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

/**
 * The TableHeader component represents the header of a table.
 * It applies styles for the table header and receives all the props.
 */
const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  // The TableHeader component is rendered as a thead element with a specific className.
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

/**
 * The TableBody component represents the body of a table.
 * It applies styles for the table body and receives all the props.
 */
const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  // The TableBody component is rendered as a tbody element with a specific className.
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"

/**
 * The TableFooter component represents the footer of a table.
 * It applies styles for the table footer and receives all the props.
 */
const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  // The TableFooter component is rendered as a tfoot element with a specific className.
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

/**
 * The TableRow component represents a single row in a table.
 * It applies styles for the table row and receives all the props.
 */
const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  // The TableRow component is rendered as a tr element with a specific className.
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

/**
 * The TableHead component represents a table header cell.
 * It applies styles for the table header cell and receives all the props.
 */
const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  // The TableHead component is rendered as a th element with a specific className.
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

/**
 * The TableCell component represents a table cell.
 * It applies styles for the table cell and receives all the props.
 */
const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  // The TableCell component is rendered as a td element with a specific className.
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
))
TableCell.displayName = "TableCell"

/**
 * The TableCaption component represents the caption of a table.
 * It applies styles for the table caption and receives all the props.
 */
const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  // The TableCaption component is rendered as a caption element with a specific className.
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

// Export all the components for use in other parts of the application.
export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
