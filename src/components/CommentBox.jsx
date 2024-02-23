import RatingBox from "./RatingBox";

export default function CommentBox() {

    return (
        <>
        <div className="max-w-[1400px] h-[400px] w-full m-auto py-12 px-4 flex flex-col justify-around">
        <h1 className="text-3xl">Username</h1>
        <div className="">
        <form className="w-full h-full flex justify-between">
            <input type="text" placeholder="Write Comment here..." className="border rounded-2xl w-1/2 h-full" />
            <RatingBox />
            <div className="h-full flex flex-col justify-between">
            <button type="submit" className="border p-4 rounded-2xl">Apply Comment/Rating</button>
            <button className="border p-4 rounded-2xl">Close</button>
        </div>
        </form>
        </div>
        
        </div>
        </>
    )
}