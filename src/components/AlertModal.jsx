import { X } from "lucide-react";

const AlertModal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-sm w-full mx-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ananda-orange to-ananda-yellow opacity-30 animate-breathe"></div>
        <div className="relative z-10">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors duration-300"
          >
            <X size={24} />
          </button>
          <h2 className="text-2xl font-bold mb-4 text-ananda-orange">
            Success!
          </h2>
          <p className="text-gray-700">{message}</p>
          <button
            onClick={onClose}
            className="mt-6 bg-ananda-orange text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:bg-ananda-yellow hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-ananda-orange focus:ring-opacity-50 animate-float"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
