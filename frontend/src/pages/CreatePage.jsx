import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCarStore } from "../store/car";

const CreatePage = () => {
  const navigate = useNavigate();
  const [newCar, setNewCar] = useState({
    make: "",
    model: "",
    year: "",
    engine: "",
    image: "",
  });

  const { createCar } = useCarStore();

  const isFormValid = () => {
    return (
      newCar.make.trim() !== "" &&
      newCar.model.trim() !== "" &&
      newCar.year.trim() !== "" &&
      newCar.engine.trim() !== "" &&
      newCar.image.trim() !== ""
    );
  };

  const handleAddCar = async () => {
    if (!isFormValid()) {
      return;
    }
    const { success, message } = await createCar(newCar);
    if (success) {
      navigate("/");
    } else {
      alert(`Error: ${message}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <div className="space-y-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100">
          Post an Automobile
        </h1>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="space-y-5">
            <input
              type="text"
              placeholder="Make"
              value={newCar.make}
              onChange={(e) => setNewCar({ ...newCar, make: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
            />
            <input
              type="text"
              placeholder="Model"
              value={newCar.model}
              onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
            />
            <input
              type="number"
              placeholder="Year"
              value={newCar.year}
              onChange={(e) => setNewCar({ ...newCar, year: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
            />
            <input
              type="number"
              placeholder="Engine capacity in liters"
              value={newCar.engine}
              onChange={(e) => setNewCar({ ...newCar, engine: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={newCar.image}
              onChange={(e) => setNewCar({ ...newCar, image: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
            />
            <button
              onClick={handleAddCar}
              disabled={!isFormValid()}
              className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-200 mt-2 ${
                isFormValid()
                  ? "bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white shadow-md hover:shadow-lg cursor-pointer"
                  : "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed opacity-60"
              }`}
            >
              Post Automobile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
