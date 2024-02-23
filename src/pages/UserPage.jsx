
export default function UserPage () {

    return (
        <>
        <div className="w-[40vh] h-[60vh] m-auto flex flex-col justify-around items-center">
            <h1 className="text-3xl">Username</h1>
            
                <button className="border w-full p-4 rounded-2xl">Comment List</button>
                <button className="border w-full p-4 rounded-2xl">Favorite List</button>
            
        </div>
        </>
    )
}