import { Link } from 'react-router-dom';
import { properties } from '../data/properties';

const Listings = () => (
  <div className="p-8">
    <h2 className="text-3xl font-bold mb-6">Available Properties</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map(p => (
        <div key={p.id} className="bg-white rounded-xl overflow-hidden shadow-md">
          <img src={p.image} alt={p.name} className="h-60 w-full object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-gray-500 mt-1">{p.price}</p>
            <Link to={`/listings/${p.id}`} className="mt-4 block text-center bg-gray-900 text-white py-2 rounded-lg">
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Listings;