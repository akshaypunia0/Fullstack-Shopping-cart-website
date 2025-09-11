import { motion } from "motion/react";
import { Laptop, Shirt, Book, Home } from "lucide-react";

const categories = [
  { id: 1, name: "Electronics", icon: <Laptop size={50} /> },
  { id: 2, name: "Fashion", icon: <Shirt size={50} /> },
  { id: 3, name: "Books", icon: <Book size={50} /> },
  { id: 4, name: "Home Appliances", icon: <Home size={50} /> },
];

export default function FeaturedCategories() {
  return (
    <section className="py-12 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:h-64">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="flex flex-col items-center justify-center p-8 rounded-2xl bg-gray-900 shadow-md cursor-pointer hover:bg-gray-700 transition-colors"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 25px rgba(0,0,0,0.3)" }}
            >
              <div className="mb-4 text-indigo-400">{category.icon}</div>
              <h3 className="text-xl font-semibold">{category.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
