import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed Email:", email);
    setEmail("");
  };

  return (
    <section className="w-full bg-gradient-to-r from-gray-900 to-gray-800 py-16 px-6 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-2xl w-full text-center space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Stay Updated with Our Newsletter
        </h2>
        <p className="text-gray-300 text-sm md:text-base">
          Join our mailing list to get the latest updates, offers, and
          exclusive content delivered straight to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center gap-4 mt-6"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full md:flex-1 bg-gray-100 text-black px-4 py-2 rounded-xl focus:ring-2 focus:ring-indigo-500"
          />
          <Button
            type="submit"
            className="w-full md:w-auto px-6 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-medium"
          >
            Subscribe
          </Button>
        </form>

        <p className="text-gray-400 text-xs mt-3">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </motion.div>
    </section>
  );
}
