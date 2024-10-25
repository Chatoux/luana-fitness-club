const ContactForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" className="mt-1 p-2 border w-full" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" className="mt-1 p-2 border w-full" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Message</label>
        <textarea className="mt-1 p-2 border w-full" rows={4} required></textarea>
      </div>
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Send</button>
    </form>
  );
};

export default ContactForm;