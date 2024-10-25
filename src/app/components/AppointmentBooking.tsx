const AppointmentBooking = () => {
  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Book an Appointment</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Service</label>
          <select className="mt-1 p-2 border w-full">
            <option>Personal Training</option>
            <option>Group Class</option>
            <option>Nutrition Consultation</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
          <input type="date" className="mt-1 p-2 border w-full" />
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Book Now</button>
      </form>
    </div>
  );
};

export default AppointmentBooking;