// src/Pages/Favorites/Favorites.jsx
import React, { useContext } from 'react';
import { FoodContext } from '../../context/ApiContext';
import { Link } from 'react-router-dom';

export default function Favorites() {
    const { favorites, removeFromFavorties} = useContext(FoodContext);

    return (
        <div className='mt-10 px-4'>
            <div className='max-w-5xl mx-auto'>
                <h1 className='text-3xl font-bold mb-6 text-center my-font'>My Favorite Recipes</h1>

                {favorites.length == 0 ? (
                    <p className='text-gray-600 text-lg'>No favorites added yet.</p>
                ) : (
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {favorites.map((food) => (
                            <div key={food.id} className='bg-white rounded-xl shadow-md p-4 flex flex-col'>
                                <img src={food.image} alt={food.name} className='w-full h-48 object-cover rounded-lg mb-4' />
                                <h2 className='text-xl font-semibold'>{food.name}</h2>
                                <p className='text-sm text-gray-600 mb-2'>{food.cuisine}</p>
                               
                                <button
                                    onClick={() => removeFromFavorties(food.id)}
                                    className='bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded mt-auto'
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
