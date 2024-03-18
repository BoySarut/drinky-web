export default function Navbar() {
    return (<>
    <nav className="w-full h-[10vh] flex justify-around items-center">
        <div>
            <a  href="http://localhost:3000/" className="">My Restaurant</a>
        </div>
        <div className="flex items-center justify-center">
            <a href="http://localhost:3000/" className="text-4xl font-bold text-center">Drinky</a>
        </div>
        <div>
            <a href="http://localhost:3000/login" className="">Login/Register</a>
        </div>
    </nav>
    </>)
}