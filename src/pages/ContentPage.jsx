import{ FaStar } from "react-icons/fa"
import RatingBox from "../components/RatingBox"
import CommentBox from "../components/CommentBox"



export default function ContentPage() {


    return (
        <>
        <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4">
         <div style={{backgroundImage: `url(https://images.unsplash.com/photo-1598927847550-929c52974be3?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500" >
        </div>
        </div>
        <div className="max-w-[1400px] h-[350px] m-auto py-10 flex flex-col justify-around">
            <h1 className="text-3xl">Restuarant Name</h1>
            <div className="flex justify-between">
            <p className="text-xl px-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae eaque quidem maiores? Tempore numquam autem architecto. Recusandae deleniti earum eaque molestias, eveniet at laboriosam libero illo quas similique sapiente dolore saepe eius voluptate vero dolor nulla itaque fugit? Earum porro reprehenderit fuga temporibus nobis. Deserunt ut facere tempore eos cupiditate obcaecati nihil ad ratione impedit tenetur laborum iure, facilis quibusdam!</p>
            </div>
        </div>
        <div className="max-w-[1400px] h-[500px] m-auto py-10 flex justify-between">
        <div style={{backgroundImage: `url(https://images.unsplash.com/photo-1598927847550-929c52974be3?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D})`}} className="w-3/5 h-full rounded-2xl bg-cover" ></div>
        <RatingBox />
        <div className="h-1/2 flex flex-col justify-between">
            <button className="border p-4 rounded-2xl">Add Comment/Rating</button>
            <button className="border p-4 rounded-2xl">Add to Favorite</button>
        </div>
        </div>
        <CommentBox />

        </>
    )
}