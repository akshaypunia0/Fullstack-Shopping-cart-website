import { useState } from "react";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSelector } from "react-redux"

export default function Products({ category = "all" }) {

  const products = useSelector((state) => state.products.products)
  console.log("Products from state", products);
  

  const [search, setSearch] = useState("");

  // Filter products by category and search
  const filteredProducts = products.filter((p) => {
    const matchCategory = category === "all" || p.category === category;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gray-800 text-white px-4 py-8 w-full">
      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-6">
        <h1 className="text-3xl font-bold mb-2">
          {category === "all" ? "All Products" : `${category.charAt(0).toUpperCase() + category.slice(1)} Products`}
        </h1>
        <p className="text-gray-400">Browse and search products</p>
      </div>

      {/* Searchbar */}
      <div className="max-w-6xl mx-auto mb-8">
        <Input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
        />
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-gray-800 shadow-2xl border-gray-700 hover:shadow-xl hover:scale-[1.02] transition-transform duration-300">
                <CardHeader>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-md"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold text-white">{product.name}</CardTitle>
                  <p className="text-gray-400 text-lg">₹{product.price.toLocaleString()}</p>
                </CardContent>
                <div className="flex justify-end">
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 mx-4 py-2"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-400 col-span-full text-center">No products found</p>
        )}
      </div>
    </div>
  );
}
