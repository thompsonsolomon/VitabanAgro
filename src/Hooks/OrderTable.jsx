import React, { useRef } from 'react';
import ReactToPdf from 'react-to-pdf';

const OrderTable = ({ order }) => {
  const tableRef = useRef();

  return (
    <div ref={tableRef} className="bg-white shadow-md rounded-lg p-6">
      <div className="mb-4">
        <h2 className="text-lg font-bold">Order #{order.id}</h2>
        <p><strong>Date:</strong> {order.time}</p>
        <p><strong>Status:</strong> {order.isDelivered ? " Delivered " : "Not Delivered"}</p>
      </div>

      {/* Order table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-4 border-b">Product</th>
              <th className="py-2 px-4 border-b">Address</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Quantity</th>
              <th className="py-2 px-4 border-b">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2 px-4 flex items-center space-x-4">
                <img src={order.cover} alt={order.cover} className="w-12 h-12 rounded-full" />
                <span>{order.name}</span>
              </td>
              <td className="py-2 px-4">{order.Address}</td>
              <td className="py-2 px-4">${order.amount}</td>
              <td className="py-2 px-4 text-center">{order.quantity}</td>
              <td className="py-2 px-4">${order.ToTal_Amount}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="mt-6">
        <p><strong>Subtotal:</strong>${order.amount} </p>
        <h2 className="text-xl font-bold text-orange-500">Grand Total: ${order.ToTal_Amount}</h2>
      </div>

      {/* PDF Download Button */}
      <div className="flex justify-end space-x-4 mt-4">
        {/* <ReactToPdf
          targetRef={tableRef}
          filename={`order_${order.id}.pdf`}  
          options={{
            orientation: 'portrait',
            unit: 'in',
            format: [8.5, 11],  
          }}
          x={0.5}
          y={0.5}
        >
          <span>

            {({ toPdf }) => (
              <button
                onClick={toPdf}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Download PDF Receipt
              </button>
            )}
          </span>
        </ReactToPdf> */}


        
      </div>
    </div>
  );
};

export default OrderTable;
