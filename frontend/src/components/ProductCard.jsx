import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Star, Heart, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    // Generate random rating for demo viz
    const rating = (Math.random() * 1.5 + 3.5).toFixed(1);
    const reviews = Math.floor(Math.random() * 500) + 50;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-md border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col group overflow-hidden relative"
        >
            {/* Wishlist Button */}
            <button className="absolute top-2 right-2 z-10 p-1.5 bg-white/80 rounded-full text-gray-400 hover:text-red-500 transition-colors">
                <Heart size={18} />
            </button>

            {/* Image Container */}
            <div className="relative h-48 sm:h-56 p-4 flex items-center justify-center bg-white group-hover:bg-gray-50 transition-colors">
                <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain mix-blend-multiply transform group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
                {/* Badge (optional) */}
                <div className="text-[10px] uppercase font-bold text-gray-400 mb-1 tracking-wider">Sponsored</div>

                <h3 className="text-sm sm:text-base font-medium text-gray-900 line-clamp-2 mb-2 group-hover:text-brand-blue transition-colors">
                    {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-2">
                    <div className="bg-green-600 text-white text-xs font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                        {rating} <Star size={10} fill="currentColor" />
                    </div>
                    <span className="text-gray-500 text-xs">({reviews})</span>
                </div>

                {/* Price Section */}
                <div className="mt-auto">
                    <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold text-gray-900">${product.price}</span>
                        <span className="text-sm text-gray-500 line-through">${(product.price * 1.2).toFixed(2)}</span>
                        <span className="text-xs font-bold text-green-600">20% off</span>
                    </div>
                    <div className="text-xs text-gray-500 mb-3">Free delivery</div>

                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);
                        }}
                        className="w-full bg-yellow-400 text-gray-900 font-bold py-2 rounded-sm hover:bg-yellow-500 transition-colors text-sm flex items-center justify-center gap-2"
                    >
                        <ShoppingCart size={16} /> Add to Cart
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
