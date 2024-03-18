import { useState } from "react"
import  axios  from "axios"
import { useNavigate } from "react-router-dom"

function LoginForm () {

    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault()

        const trimUsername = username.trim()
        const trimPassword = password.trim()

        if(trimUsername === '' || trimPassword === '') {
            return alert("Please enter username and password")
        }
        else {
            const userData = {
                "username": `${username}`,
                "password": `${password}`
            }
            const login = async () => {
                try {
                    const res = await axios.post('http://localhost:8000/login', userData,)
                    console.log(res)
                    localStorage.setItem("token", res.data.token)
                    localStorage.setItem("token", res.data.username)
                    alert(`Login Successful Welcome ${res.data.username}`)
                    navigate("/")
                } catch (err) {
                    console.log(err)
                }
            }
            login()
        }
    }
    return (<>
    <div className="w-[40vh] h-[60vh] m-auto flex flex-col justify-around items-center">
        <h1 className="text-5xl">Login</h1>
        <form className="w-full h-3/5 flex flex-col justify-around" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">Username</label>
            <input className="w-full border-0 border-b-2 border-black py-1.5" type="text" placeholder="Input Username" 
            onChange={(e) => setUsername(e.target.value)} id="username" name="username" value={username}/>
            </div>

            <div>
            <label htmlFor="password">Password</label>
            <input className="w-full border-0 border-b-2 border-black py-1.5" type="password" placeholder="Input Password" 
            onChange={(e) => setPassword(e.target.value)} id="password" name="password" value={password}/>
            </div>

            <button type="submit" className="border p-4 rounded-2xl">Login</button>
            <a href="http://localhost:3000/register" className="border p-4 rounded-2xl text-center">Register</a>
        </form>
    </div>
    </>)
}

export default LoginForm