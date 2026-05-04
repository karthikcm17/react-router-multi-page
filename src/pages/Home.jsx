import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-20 pb-20">
      <section className="relative h-[500px] flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl">
        <img src="house.jpg" alt="Modern House" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Find Your Dream <span className="text-blue-400">Home</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            From modern lofts in the city to quiet villas by the ocean,
            discover premium properties tailored to your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/listings')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg"
            >
              Explore Listings
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;