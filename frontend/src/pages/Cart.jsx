import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartProvider';
import { Link, useNavigate } from 'react-router-dom';
import { HiTrash, HiArrowRight, HiDownload, HiShare, HiCheckCircle, HiChevronLeft } from 'react-icons/hi';
import { toast } from 'react-toastify';

const Cart = () => {
  const { cartItems, removeFromCart, cartTotal, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderId, setOrderId] = useState("");

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }
    // Generate mock order ID for the bill
    setOrderId("ORD-" + Math.floor(Math.random() * 100000000));
    setIsCheckingOut(true);
  };

  const handleDownloadPdf = () => {
    // Triggers browser print dialog where user can save as PDF
    window.print();
  };

  const handleShareBill = async () => {
    const text = `I just bought ${cartItems.length} books for $${cartTotal.toFixed(2)} at the Bookstore! Order Reference: ${orderId}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Bookstore Order',
          text: text,
        });
      } catch (err) {
        console.error("Share failed", err);
      }
    } else {
      navigator.clipboard.writeText(text);
      toast.success("Bill details copied to clipboard!");
    }
  };

  const confirmOrder = () => {
    clearCart();
    toast.success("Payment Successful! Order Confirmed.");
    navigate("/");
  };

  // ---------------- CHECKOUT & BILL VIEW ----------------
  if (isCheckingOut) {
    const date = new Date().toLocaleDateString();
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 print:bg-white print:py-0">
        <div className="max-w-3xl mx-auto">
          
          <button 
            onClick={() => setIsCheckingOut(false)}
            className="mb-8 flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-bold transition-colors print:hidden"
          >
            <HiChevronLeft className="w-5 h-5" />
            Back to Cart
          </button>

          {/* Bill / Invoice Card */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 print:shadow-none print:border-none">
            
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white text-center print:bg-none print:text-black print:border-b print:border-gray-300">
              <HiCheckCircle className="w-16 h-16 mx-auto mb-4 text-green-300 print:hidden" />
              <h1 className="text-3xl font-extrabold mb-2">Order Summary</h1>
              <p className="text-blue-100 print:text-gray-600">Review your bill before final payment</p>
            </div>

            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between mb-10 pb-8 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider mb-1">Order Date</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{date}</p>
                </div>
                <div className="mt-4 md:mt-0 md:text-right">
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider mb-1">Order ID</p>
                  <p className="font-mono font-bold text-gray-900 dark:text-white">{orderId}</p>
                </div>
              </div>

              <div className="mb-8">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider border-b border-gray-200 dark:border-gray-700">
                      <th className="pb-4 font-semibold">Item</th>
                      <th className="pb-4 font-semibold text-right">Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    {cartItems.map((item) => (
                      <tr key={item._id}>
                        <td className="py-4">
                          <p className="font-bold text-gray-900 dark:text-white">{item.bookTitle}</p>
                          <p className="text-sm text-gray-500">{item.authorName}</p>
                        </td>
                        <td className="py-4 text-right font-semibold text-gray-900 dark:text-white">
                          ${item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-6 mb-10">
                <div className="flex justify-between mb-3 text-gray-600 dark:text-gray-300">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-900 dark:text-white">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-3 text-gray-600 dark:text-gray-300">
                  <span>Tax (0%)</span>
                  <span className="font-semibold text-gray-900 dark:text-white">$0.00</span>
                </div>
                <div className="flex justify-between pt-4 mt-4 border-t border-gray-200 dark:border-gray-600">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">Total Amount</span>
                  <span className="text-3xl font-black text-blue-600 dark:text-blue-400">${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Action Buttons (Hidden when printing) */}
              <div className="flex flex-col sm:flex-row gap-4 print:hidden">
                <button 
                  onClick={handleDownloadPdf}
                  className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-4 px-6 rounded-xl transition duration-300"
                >
                  <HiDownload className="w-5 h-5" />
                  Download PDF
                </button>
                <button 
                  onClick={handleShareBill}
                  className="flex-1 flex items-center justify-center gap-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-bold py-4 px-6 rounded-xl transition duration-300"
                >
                  <HiShare className="w-5 h-5" />
                  Share Bill
                </button>
                <button 
                  onClick={confirmOrder}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-xl transition duration-300 shadow-lg"
                >
                  Confirm & Pay
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---------------- NORMAL CART VIEW ----------------
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-8">
          Shopping Cart
        </h1>
        
        {cartItems.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-12 text-center border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">Looks like you haven't added any books to your cart yet.</p>
            <Link to="/shop">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition duration-300">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items List */}
            <div className="lg:w-2/3">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                <ul className="divide-y divide-gray-100 dark:divide-gray-700">
                  {cartItems.map((item) => (
                    <li key={item._id} className="p-6 flex flex-col sm:flex-row items-center gap-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition duration-150">
                      <img 
                        src={item.imgUrl} 
                        alt={item.bookTitle} 
                        className="w-24 h-32 object-cover rounded-lg shadow-sm"
                      />
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.bookTitle}</h3>
                        <p className="text-gray-500 dark:text-gray-400 font-medium mb-3">{item.authorName}</p>
                        <p className="text-blue-600 dark:text-blue-400 font-bold text-lg">${item.price}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item._id)}
                        className="p-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition duration-300"
                        aria-label="Remove item"
                      >
                        <HiTrash className="w-6 h-6" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6 text-gray-600 dark:text-gray-300">
                  <div className="flex justify-between">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span className="font-semibold text-gray-900 dark:text-white">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-semibold text-green-600 dark:text-green-400">Free</span>
                  </div>
                </div>
                
                <div className="w-full h-px bg-gray-200 dark:bg-gray-700 mb-6"></div>
                
                <div className="flex justify-between items-end mb-8">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">Total</span>
                  <span className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
                
                <button 
                  onClick={handleCheckout}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-xl transition duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5"
                >
                  <span>Proceed to Checkout</span>
                  <HiArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
