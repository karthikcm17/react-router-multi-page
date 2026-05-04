const Bookings = () => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <h3 className="text-xl font-bold mb-4">Your Recent Bookings</h3>
    <div className="space-y-4">
      {[1, 2].map(item => (
        <div key={item} className="flex items-center justify-between p-4 border rounded-lg">
          <div>
            <p className="font-semibold text-gray-800 text-lg">Luxury Villa #{item}</p>
            <p className="text-sm text-gray-500">Oct 12 - Oct 15, 2026</p>
          </div>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Confirmed</span>
        </div>
      ))}
    </div>
  </div>
);

export default Bookings;