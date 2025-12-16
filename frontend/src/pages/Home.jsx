import React, { useEffect, useState } from 'react';
import api from '../api';
import ProductCard from '../components/ProductCard';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Filter, ChevronDown } from 'lucide-react';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get('/products')
            .then(res => setProducts(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    // Simulated Categories
    const categories = [
        { name: 'All', icon: 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100' },
        { name: 'Electronics', icon: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' },
        { name: 'Fashion', icon: 'https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100' },
        { name: 'Home', icon: 'https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100' },
        { name: 'Beauty', icon: 'https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100' },
        { name: 'Toys', icon: 'https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100' },
    ];

    if (loading) return <div className="flex justify-center items-center h-screen text-brand-blue font-bold text-xl bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-blue"></div>
    </div>;

    return (
        <div className="min-h-screen bg-[#f1f3f6]">

            {/* Category Headers (Mock) */}
            <div className="bg-white shadow-sm mb-2 overflow-x-auto">
                <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between min-w-max gap-8">
                    {categories.map((cat, idx) => (
                        <div key={idx} className="flex flex-col items-center cursor-pointer group">
                            <div className="h-16 w-16 mb-1 overflow-hidden">
                                <img src={cat.icon} alt={cat.name} className="h-full w-full object-contain group-hover:scale-110 transition-transform" />
                            </div>
                            <span className="text-sm font-medium text-gray-800 group-hover:text-brand-blue">{cat.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <Hero />

            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-4">

                {/* Deals Header Section */}
                <div className="bg-white p-4 mb-4 shadow-sm rounded-sm flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">Best of Electronics</h2>
                        <p className="text-gray-500 text-sm">Devices for everyone</p>
                    </div>
                    <button className="bg-brand-blue text-white px-4 py-2 rounded-sm text-sm font-bold shadow-md hover:bg-blue-600 transition-colors">
                        VIEW ALL
                    </button>
                </div>

                {/* Main Layout: Filters + Grid */}
                <div className="flex flex-col lg:flex-row gap-4">

                    {/* Sidebar Filters (Desktop) */}
                    <div className="hidden lg:block w-64 flex-shrink-0">
                        <div className="bg-white shadow-sm rounded-sm p-4 sticky top-20">
                            <div className="flex items-center justify-between border-b pb-3 mb-3">
                                <h3 className="font-bold text-lg text-gray-800">Filters</h3>
                                <Filter size={18} className="text-gray-500" />
                            </div>

                            {/* Price Range Mock */}
                            <div className="mb-6">
                                <h4 className="text-sm font-bold text-gray-700 mb-3 text-xs uppercase tracking-wider">Price</h4>
                                <div className="h-1 bg-gray-200 rounded-full mb-3 cursor-pointer relative">
                                    <div className="absolute left-0 top-0 h-full w-1/2 bg-brand-blue rounded-full"></div>
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 bg-white border border-gray-300 rounded-full shadow cursor-pointer"></div>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>$0</span>
                                    <span>$1000+</span>
                                </div>
                            </div>

                            {/* Checkbox Groups */}
                            <div className="mb-4">
                                <h4 className="text-sm font-bold text-gray-700 mb-2 flex justify-between cursor-pointer">
                                    Brand <ChevronDown size={14} />
                                </h4>
                                <div className="space-y-2">
                                    {['Samsung', 'Apple', 'Sony', 'Xiaomi'].map(b => (
                                        <label key={b} className="flex items-center gap-2 cursor-pointer hover:text-brand-blue text-sm text-gray-600">
                                            <input type="checkbox" className="rounded text-brand-blue focus:ring-brand-blue" />
                                            {b}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-4">
                                <h4 className="text-sm font-bold text-gray-700 mb-2 flex justify-between cursor-pointer">
                                    Customer Ratings <ChevronDown size={14} />
                                </h4>
                                <div className="space-y-2 text-sm text-gray-600">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" /> 4★ & above
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" /> 3★ & above
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                            {products.map(p => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};
export default Home;
