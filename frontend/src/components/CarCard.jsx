import { useState } from "react";
import { useCarStore } from "../store/car";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

const CarCard = ({ car }) => {
  const [updatedCar, setUpdatedCar] = useState(car);
  const { updateCar, deleteCar } = useCarStore();
  const [isOpen, setIsOpen] = useState(false);

  const handleUpdateCar = async (id, updatedCar) => {
    const { success, message } = await updateCar(id, updatedCar);
    setIsOpen(false);
    if (!success) {
      alert(`Error: ${message}`);
    }
  };

  const handleDeleteCar = async (id) => {
    const { success, message } = await deleteCar(id);
    if (!success) {
      alert(`Error: ${message}`);
    }
  };

  return (
    <div className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-gray-200 dark:border-gray-700">
      <img
        src={car.image}
        alt={`${car.make} ${car.model}`}
        className="w-full h-64 object-cover"
      />
      <div className="p-6 w-full">
        <div className="space-y-3 mb-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            <span className="text-gray-500 dark:text-gray-400 font-normal">
              Make:
            </span>{" "}
            {car.make}
          </h3>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            <span className="text-gray-500 dark:text-gray-400 font-normal">
              Model:
            </span>{" "}
            {car.model}
          </h3>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            <span className="text-gray-500 dark:text-gray-400 font-normal">
              Year:
            </span>{" "}
            {car.year}
          </p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            <span className="text-gray-500 dark:text-gray-400 font-normal">
              Engine:
            </span>{" "}
            {car.engine}L
          </p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => setIsOpen(true)}
            className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            <FaRegEdit />
            <span>Edit</span>
          </button>
          <button
            onClick={() => handleDeleteCar(car._id)}
            className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-white rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            <FaRegTrashAlt />
            <span>Delete</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-60 dark:bg-opacity-70 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl w-full max-w-md mx-4 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
              Update Car Info
            </h2>
            <div className="space-y-4">
              <input
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
                placeholder="Make"
                name="make"
                value={updatedCar.make}
                onChange={(e) =>
                  setUpdatedCar({ ...updatedCar, make: e.target.value })
                }
              />
              <input
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
                placeholder="Model"
                name="model"
                value={updatedCar.model}
                onChange={(e) =>
                  setUpdatedCar({ ...updatedCar, model: e.target.value })
                }
              />
              <input
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
                placeholder="Year"
                name="year"
                type="number"
                value={updatedCar.year}
                onChange={(e) =>
                  setUpdatedCar({
                    ...updatedCar,
                    year: e.target.value,
                  })
                }
              />
              <input
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
                placeholder="Engine"
                name="engine"
                type="number"
                value={updatedCar.engine}
                onChange={(e) =>
                  setUpdatedCar({
                    ...updatedCar,
                    engine: e.target.value,
                  })
                }
              />
              <input
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
                placeholder="Image URL"
                name="image"
                value={updatedCar.image}
                onChange={(e) =>
                  setUpdatedCar({
                    ...updatedCar,
                    image: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 font-medium transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={() => handleUpdateCar(car._id, updatedCar)}
                className="px-5 py-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarCard;
