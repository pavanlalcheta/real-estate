import { useState } from "react";
import ContactModel from "./ContactModal";

const PropertyCard = ({ property }) => {
  const [showContact, setContact] = useState(false);
  return (
    <>
      <div className="col-md-4 mb-4">
        <div className="card h-100 shadow-sm">
          <img
            src={property.property_image}
            className="card-img-top"
            alt={property.title}
          />

          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{property.title}</h5>
            <p className="text-muted mb-1">{property.area}</p>
            <p className="mb-1">
              <strong>Type:</strong>
              {property.property_type}
            </p>

            <p className="small text-secondary">{property.small_description}</p>

            <h6 className="mt-auto">
              {property.currency} {property.property_price.toString()}
            </h6>

            <button
              className="btn btn-primary mt-2"
              onClick={() => {
                setContact(true);
              }}
            >
              Contect
            </button>
          </div>
        </div>
      </div>

      <ContactModel
        show={showContact}
        onClose={() => setContact(false)}
        propertyTitle={property.title}
      />
    </>
  );
};

export default PropertyCard;
