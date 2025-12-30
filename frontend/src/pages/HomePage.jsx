import { useEffect } from "react";
import { useCarStore } from "../store/car";
import { Link } from "react-router-dom";
import CarCard from "../components/CarCard";

const HomePage = () => {
  const { fetchCars, cars } = useCarStore();

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  return (
    <div className="max-w-7xl mx-auto pb-12 px-4">
      <div className="space-y-8">
        <div className="flex flex-col items-center justify-center pb-8 mb-4">
          <div className="relative overflow-visible">
            <h1 className="text-7xl md:text-8xl font-bold text-center tracking-tight leading-tight pb-1">
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
                Automobile
              </span>
              <span className="block bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 dark:from-gray-200 dark:via-gray-400 dark:to-gray-200 bg-clip-text text-transparent mt-0 text-6xl md:text-7xl font-light italic leading-tight">
                Image Board
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent dark:via-purple-400"></div>
              </span>
            </h1>
          </div>
          <p className="mt-8 text-sm md:text-base text-gray-500 dark:text-gray-400 font-light tracking-widest uppercase">
            Showcase Your Collection
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>

        {cars.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-4">
              No automobiles yet
            </p>
            <Link
              to="/create"
              className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Post an automobile
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
