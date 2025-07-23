import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ApiContext, { FoodContext } from '../context/ApiContext';

export default function FoodDet() {
    const { foodItem, loading, setLoading, addToFavourites, removeFromFavorties, } = useContext(FoodContext);
    const [food, setFood] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();


    async function FoodDetails() {
        try {
            setLoading(true);
            let data = foodItem.filter((item) => item.id.toString() == id);
            console.log(data, "data food");
            if (data.length > 0) {
                setFood(data[0]);
            }
            setLoading(false);
        }
        catch (e) {
            setLoading(false);
            console.log(e);

        }
    }
    useEffect(() => {
        FoodDetails();
    }, [id]);

    return (
        <div className='mt-10 px-4 '>
            <div className='w-full flex flex-col  justify-center gap-10 max-w-4xl mx-auto   py-6' >
                <div className='w-full flex flex-col  lg:flex-row items-center justify-center gap-6  bg-white p-5 rounded-2xl'>
                    <div className='w-full  lg:w-1/2'>
                        <img src={food.image} className='w-full  h-[300px] object-cover rounded-2xl hover:scale-112 transition-transform duration-300' />
                    </div>
                    <div className='w-full lg:w-[50%] flex flex-col gap-4   p-6   rounded-2xl' >
                        <h1 className='text-3xl font-bold mb-2 my-font'>Qualities of Food</h1>

                        <p className='text-lg  text-[#383375]'> Name : <span className='font-semibold text-gray-800'>{food.name}</span></p>
                        <p className='text-lg  text-[#383375]'>Cusisine : <span className='font-semibold text-gray-800'>{food.cuisine}</span></p>
                        <p className='text-lg  text-[#383375]'>CaloriesPerServing :<span className='font-semibold text-gray-800'>{food.caloriesPerServing}</span></p>
                        <p className='text-lg  text-[#383375]'>CookTimeMinutes  :<span className='font-semibold text-gray-800'>{food.cookTimeMinutes}</span></p>
                        <p className='text-lg  text-[#383375] '>Difficulty : <span className='font-semibold text-gray-800'>{food.difficulty}</span></p>
        <div className="flex flex-col lg:flex-row  gap-4 mt-8">
  <button
    className="bg-red-800 text-white text-sm lg:text-base font-medium px-6 py-2 rounded-full border border-red-800 transition duration-300 hover:bg-green-500 hover:border-green-500"
    onClick={() => addToFavourites(food)}
  >
    Add to Favourite
  </button>

  <button
    className="text-red-800 border border-red-800 text-sm lg:text-base font-medium px-6 py-2 rounded-full transition duration-300 hover:bg-red-600 hover:text-white"
    onClick={() => removeFromFavorties(food.id)}
  >
    Remove from Favourite
  </button>
</div>
                    </div>
                </div>
                <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-10 px-10'>
                    <div className='w-full lg:w-[50%] flex flex-col gap-10 bg-[#eeeff1] shadow-amber-50  p-5 rounded-2xl h-full ' >
                        <h1 className='text-2xl font-semibold '>Instructions</h1>
                        <ul className='list-decimal list-inside text-gray-800 space-y-2'>
                            {food.instructions?.map((item, index) => (
                                <li key={index} className='text-base'>{item}</li>
                            ))}
                        </ul>

                    </div>
                    <div className='w-full lg:w-[50%] flex flex-col gap-10 max-w-5xl mx-auto bg-[#eeeff1] shadow-amber-50 p-5 rounded-2xl h-full'>
                        <h1 className='text-2xl font-semibold '>Ingredients</h1>
                        <ul className='list-decimal list-inside text-gray-800 space-y-2'>
                            {food.ingredients?.map((item, index) => (
                                <li key={index} className='text-base'>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
