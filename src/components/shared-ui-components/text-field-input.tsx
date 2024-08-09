import { cn } from '@/helpers/utils.ts'

/**
 * TextFieldInput component is a customizable input field component with pre-defined styles.
 * It takes in props such as inputRef, className, inputClassName, handleInputChange, and placeholder.
 * @param {Object} props - The props object containing the following properties:
 * @param {React.RefObject<HTMLInputElement>} props.inputRef - A reference to the input element.
 * @param {string} props.className - The class name for the outer div element.
 * @param {string} props.inputClassName - The class name for the input element.
 * @param {(event: React.ChangeEvent<HTMLInputElement>) => void} props.handleInputChange - The event handler for the input change event.
 * @param {string} props.placeholder - The placeholder text for the input.
 * @returns {JSX.Element} - The TextFieldInput component.
 */
const TextFieldInput = (
  {
    inputRef, // A reference to the input element
    className, // The class name for the outer div element
    inputClassName, // The class name for the input element
    handleInputChange, // The event handler for the input change event
    placeholder, // The placeholder text for the input
  }: {
    inputRef: React.RefObject<HTMLInputElement>,
    className: string,
    inputClassName: string,
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder: string,
  }
) =>{

return (
  
  <div className={className}>
    <input
      ref={inputRef}
      onChange={handleInputChange}
      placeholder={placeholder}
      type="text"
      className={cn("bg-transparent border border-gray-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-800 dark:placeholder-gray-4 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", inputClassName)}
    />
  
  </div>
)
}

export default TextFieldInput;
