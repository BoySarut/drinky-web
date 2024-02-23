import { useState } from "react"
import axios from "axios"

function RegisterForm () {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [mobile, setMobile] = useState("")

    

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            alert("Passwords do not match")
            setPassword("")
            setConfirmPassword("")
        
        } else {
            const userData = {
                "username": `${username}`,
                "email": `${email}`,
                "password": `${password}`,
                "mobile": `${mobile}`
            }
            const register = async () => {
                try {
                    const res = await axios.post('http://localhost:8000/register', userData,)
                    console.log(res)
                } catch (err) {
                    console.log(err)
                }
            }
            register()
        }
    }



    return (<>
    <div className="w-[40vh] h-[80vh] m-auto flex flex-col justify-around items-center">
        <h1 className="text-5xl">Register</h1>
        <form className="w-full h-4/5 flex flex-col justify-around" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="username">Username</label>
            <input className="w-full border-0 border-b-2 border-black py-1.2" type="text" placeholder="Input Username" 
            onChange={(e) => setUsername(e.target.value)} id="username" name="username" value={username}/>
            </div>

            <div>
            <label htmlFor="password">Password</label>
            <input className="w-full border-0 border-b-2 border-black py-1.2" type="password" placeholder="Input Password" 
            onChange={(e) => setPassword(e.target.value)} id="password" name="password" value={password}/>
            </div>

            <div>
            <label htmlFor="confirmPassword">Comfirm Password</label>
            <input className="w-full border-0 border-b-2 border-black py-1.2" type="password" placeholder="Input Password" 
            onChange={(e) => setConfirmPassword(e.target.value)} id="conformPassword" name="confirrmPassword" value={confirmPassword}/>
            </div>

            <div>
            <label htmlFor='email'>E-Mail</label>
            <input className="w-full border-0 border-b-2 border-black py-1.2" type="email" placeholder="Input E-mail"
            onChange={(e) => setEmail(e.target.value)} id='email' name='email' value={email}/>
            </div>

            <div>
            <label htmlFor="mobile">Mobile</label>
            <input className="w-full border-0 border-b-2 border-black py-1.2" type="text" placeholder="Input Mobile number" 
            onChange={(e) => setMobile(e.target.value)} id="mobile" name="moblie" value={mobile}/>
            </div>

            <button className="border p-4 rounded-2xl" type="submit">Apply Register</button>
        </form>
    </div>
    </>)
}

export default RegisterForm