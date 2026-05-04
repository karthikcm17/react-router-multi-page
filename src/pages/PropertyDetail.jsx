import { useParams, useNavigate } from 'react-router-dom';
import { properties } from '../data/properties';

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedProperty = properties.find((p) => p.id === id);

  if (!selectedProperty) return <div>Property not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-8">
       <button onClick={() => navigate(-1)} className="mb-4 text-blue-600">← Back</button>
       <img src={selectedProperty.image} alt={selectedProperty.name} className="w-full h-96 object-cover rounded-2xl" />
       <h1 className="text-4xl font-bold mt-6">{selectedProperty.name}</h1>
       <p className="text-2xl text-blue-600 font-bold mt-2">{selectedProperty.price}</p>
       <p className="mt-4 text-gray-600">{selectedProperty.desc}</p>
    </div>
  );
};

export default PropertyDetail;