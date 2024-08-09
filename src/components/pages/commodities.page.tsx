
/**
 * CommoditiesPage component
 * 
 * This component renders the commodities page.
 * It displays a heading and a message indicating that the page is coming soon.
 */
const CommoditiesPage = () => {
  return (
    // Container for the commodities page
    <div className="flex flex-col space-y-9">

      {/* Heading for the commodities page */}
      <h1 className="text-2xl font-bold uppercase text-center pb-5 pt-10 text-amber-900">
        Commodities
      </h1>
      
      {/* Message indicating that the page is coming soon */}
      <p className="text-lg font-bold">Coming Soon</p>
    
    </div>
  );
}

export default CommoditiesPage
