export default function Navbar() {
    return (<>
    <nav className="w-full h-[10vh] flex justify-around items-center">
        <div>
            <button className="">My Restaurant</button>
        </div>
        <div className="flex items-center justify-center">
            <h1 className="text-4xl font-bold text-center">Drinky</h1>
        </div>
        <div>
            <button className="">Login/Register</button>
        </div>
    </nav>
    </>)
}