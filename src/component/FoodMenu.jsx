import React, { useContext, useEffect, useState } from 'react'
import { FoodContext } from '../context/ApiContext'
import Card from './Card';
import { useNavigate } from 'react-router-dom';

export default function FoodMenu() {
    const { foodItem, setFoodItem, loading, viewmore, visibleCount,uniqueMealType ,filterRecipe,setFilterRecipe} = useContext(FoodContext)
    console.log(foodItem);
    const [currentSelectcategory, setCurrentCategory] = useState("");

    function filterMealType() {
        const cpyProduct = [...foodItem];
        setFilterRecipe((item) =>
            currentSelectcategory !== ""
                ? cpyProduct.filter((fooditem) =>
                    fooditem.mealType.some(
                        (mealItem) => mealItem.toLowerCase() === currentSelectcategory.toLowerCase()
                    )

                )

                : cpyProduct

        )

    }
    useEffect(() => {
        filterMealType();
    }, [currentSelectcategory])



    return (
        <div className='mt-10'>
            <div className='flex flex-col items-center gap-10'>
                <div className=' flex flex-col  items-center text-center'>
                    <h1 className='text-4xl lg:text-8xl my-font font-semibold'>Our Media </h1>
                    <p className='max-w-[500px] mt-4  text-sm lg:text-[18px] text-gray-500'>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
                </div>
                <div className='grid grid-cols-2 gap-10  md:grid-cols:4 lg:grid-cols-7'>
                    {
                        uniqueMealType && uniqueMealType.length > 0 ?  (
                        uniqueMealType.map((item,index) => (
                          
                            <button key={index}
                             onClick={() => 
                                setCurrentCategory(currentSelectcategory !== "" && currentSelectcategory === item  ? "" : item)}
                                className={` border border-black text-black  py-2 px-3 rounded-3xl font-medium ${currentSelectcategory === item ? "bg-red-800 text-white" : ""} hover:bg-amber-600  hover:border-none hover:outline-none   hover:text-white`}>{item }</button>
                           
                        ))
                    )  : null
                    }
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  items-center gap-10 max-w-6xl w-full '>
                    {
                        !loading && foodItem.length > 0 ? (
                            filterRecipe.slice(0,visibleCount).map((item) => (

                                <div key={item.id} >
                                    <Card item={item} />

                                </div>
                            ))
                        ) : null
                    }

                </div>
                
                   
                        <button onClick={viewmore} className='py-3 px-3 rounded-3xl font-medium border bg-red-800 text-white' disabled={visibleCount >= filterRecipe.length}>View More</button>
                    
                
            </div>
        </div>
    )
}
