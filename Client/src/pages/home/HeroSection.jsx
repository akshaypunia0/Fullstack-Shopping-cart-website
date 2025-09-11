import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navigate, useNavigate } from "react-router-dom";

export default function HeroSection() {
    const navigate = useNavigate();

    const image = 'https://image.made-in-china.com/2f0j00etobgmQlYrqI/New-Design-Fashion-Style-School-Popular-Footwear-Sneakers-Basketball-Shoes-for-Men-and-Women.webp'


  return (
    <section className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 items-center gap-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Discover the Latest <span className="text-yellow-400">Trends</span>
          </h1>
          <p className="text-lg text-gray-300">
            Shop your favorite fashion, electronics, and accessories at the best prices.
          </p>

          <div className="flex gap-4">
            <Button onClick={() => navigate("/products")} className="bg-yellow-400 text-black hover:bg-yellow-500">
              Shop Now
            </Button>
            <Button onClick={() => navigate("/products")} variant="outline" className="border-white bg-white text-black hover:bg-white hover:text-black">
              Explore Deals
            </Button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src={image}
            alt="Hero Product"
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
