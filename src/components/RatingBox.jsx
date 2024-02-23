import{ FaStar } from "react-icons/fa"

export default function RatingBox() {

    return (
        <>
    <div className=" h-[200px] flex flex-col justify-between text-xl">
        <div name="foodRate">
        <lable htmlFor="foodRate">Food Rate</lable>    
        <div className="flex flex-row" >
            {[...Array(5)].map(star => {
               return <FaStar size={25} />
            })}
        </div>
        </div>
        
        <div name="drinkRate">
        <lable htmlFor="drinkRate">Drink Rate</lable>  
        <div className="flex flex-row">
            {[...Array(5)].map(star => {
               return <FaStar size={25} />
            })}
        </div>
        </div>

        <div name="vibeRate">
        <lable htmlFor="vibeRate">Vibe Rate</lable>  
        <div className="flex flex-row">
            {[...Array(5)].map(star => {
               return <FaStar size={25} />
            })}
        </div>
        </div>
    </div>
        </>
    )
}