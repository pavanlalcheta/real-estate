import { useSelector } from "react-redux";
import PropertyCard from "./PropertyCard";
import Pagination from "./Pagination";

const ITEMS_PER_PAGE = 9;

const PropertyList = () => {
  const { properties, filters, currentPage } = useSelector(
    (state) => state.property
  );

  const filteredProperties = properties.filter((p) => {
    if (!filters.property_type) return true;
    return p.property_type === filters.property_type;
  });

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProperties = filteredProperties.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <>
      <div className="row">
        {paginatedProperties.length > 0 ? (
          paginatedProperties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))
        ) : (
          <p className="text-center mt-4">No properties found</p>
        )}
      </div>

      <Pagination totalItems={filteredProperties.length} />
    </>
  );
};

export default PropertyList;
