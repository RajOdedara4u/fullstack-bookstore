const SingleOrder = ({
  _id,
  name,
  email,
  contact,
  city,
  address,
  reachMethod,
  pinCode,
  items,
  amount,
  date,
}) => {
  return (
    <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
      <td className="px-6 py-4 text-gray-900 font-medium hidden md:table-cell">
        {_id}
      </td>
      <td className="px-6 py-4 text-gray-900 font-medium hidden md:table-cell">
        {name}
      </td>
      <td className="px-6 py-4 hidden md:table-cell">{email}</td>
      <td className="px-6 py-4 hidden md:table-cell">{contact}</td>
      <td className="px-6 py-4 hidden md:table-cell">{city}</td>
      <td className="px-6 py-4 hidden md:table-cell">{address}</td>
      <td className="px-6 py-4 hidden md:table-cell">{reachMethod}</td>
      <td className="px-6 py-4 hidden md:table-cell">{pinCode}</td>
      <td className="px-6 py-4 hidden md:table-cell">{items}</td>
      <td className="px-6 py-4 hidden md:table-cell">{amount}</td>
      <td className="px-6 py-4 hidden md:table-cell">{date}</td>

      {/* Mobile View */}
      <td className="md:hidden px-6 py-4 border-t border-gray-200">
        <div className="block text-sm font-medium text-gray-900">
          <div className="font-semibold">Order ID:</div> {_id}
        </div>
        <div className="block text-sm text-gray-700">
          <div className="font-semibold">Customer Name:</div> {name}
        </div>
        <div className="block text-sm text-gray-700">
          <div className="font-semibold">Email:</div> {email}
        </div>
        <div className="block text-sm text-gray-700">
          <div className="font-semibold">contact:</div> {contact}
        </div>
        <div className="block text-sm text-gray-700">
          <div className="font-semibold">City:</div> {city}
        </div>
        <div className="block text-sm text-gray-700">
          <div className="font-semibold">Address:</div> {address}
        </div>
        <div className="block text-sm text-gray-700">
          <div className="font-semibold">reach:</div> {reachMethod}
        </div>
        <div className="block text-sm text-gray-700">
          <div className="font-semibold">Pin</div> {pinCode}
        </div>
        <div className="block text-sm text-gray-700">
          <div className="font-semibold">Items:</div> {items}
        </div>
        <div className="block text-sm text-gray-700">
          <div className="font-semibold">Total Amount:</div> {amount}
        </div>
        <div className="block text-sm text-gray-700">
          <div className="font-semibold">Date</div> {date}
        </div>
        <div className="block text-sm text-gray-700">
          <div className="font-semibold">Status:</div>
          <span className={`font-medium text-green-600`}>Shipped</span>
        </div>
      </td>
    </tr>
  );
};

export default SingleOrder;
