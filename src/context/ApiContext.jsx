import { createContext, useEffect, useState } from "react";

export const FoodContext = createContext();

export default function ApiContext({ children }) {
    const [foodItem, setFoodItem] = useState([]);
    const [loading, setLoading] = useState(false);
    const  [favorites,setFavorites] = useState([]);
    const [filterRecipe , setFilterRecipe] = useState([]);
    const [visibleCount,setVisibleCount] = useState(10);
    const increment = 5;

  
  
    async function foodRecipe() {
        try {
            setLoading(true);
            const apiResponse = await fetch('https://dummyjson.com/recipes');
            const result = await apiResponse.json();
          if(result && result.recipes && result.recipes.length > 0) {
            setFoodItem(result?.recipes); 
            setFilterRecipe(result?.recipes);
             setLoading(false);
        }
           
        } catch (e) {
            setLoading(false);
            console.log(e);
        }
    }
    console.log(foodItem,"FOODItem")

    useEffect(() => {
        foodRecipe();
    }, []);

    if (loading) return <h1>Please wait!!! Loading</h1>;
    
    function addToFavourites(food) {
    if(!favorites.some((item) =>  item.id == food.id)){
        setFavorites([...favorites,food]);
    }
    }
    function removeFromFavorties(id){
        setFavorites(favorites.filter((item) => item.id !== id));
    }

    function viewmore(){
        setVisibleCount((prev) => prev +increment)
    }
        const uniqueMealType =
        foodItem && foodItem.length > 0 ? [...new Set(foodItem.map((fooditem) => fooditem.mealType[0]))]
            : [];
    return (
        <FoodContext.Provider value={{ setFoodItem, foodItem,loading ,setLoading ,addToFavourites ,removeFromFavorties,favorites,viewmore,visibleCount,uniqueMealType,filterRecipe,setFilterRecipe}}>
            {children}
        </FoodContext.Provider>
    );
}
