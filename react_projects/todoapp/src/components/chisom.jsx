import { useState } from "react";
import { Link } from "react-router-dom";

const AboutUs = ( ) =>{
    const [count,setcount]=useState(0)
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword ]= useState('')
    const [password2,setPassword2] = useState('')

    const increase=()=>{
        setcount(count => count +1)
    }
    const decrease=()=>{
        setcount(count => count-1)
    }
    const reset =() =>{
        setcount(0)
    }

    const usernameChange = (event)=>{
        setUsername(event.target.value)
    }

    const submitHandler =(e)=>{
        e.preventDefault()
        if(password !== password2){
            alert('password does not match')
        }
        
       console.log(username,email,password)
    }
    return(
        <div>
            <p>About Us</p>
            <p > {count} </p>
            <div className="flex justify-between"> 
            <button onClick={increase}> click me</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrease}> decrease</button>
           
            </div>

            <p>
                <Link to={'/'}>
                    go home
                </Link>
            </p>

            <div className="container mx-auto p-4 bg-gray-200">
                <div>
                    <h2>Login</h2>
                </div>
                <div>
                    <form className="rounded p-2 border  bg-white shadow-lg" onSubmit={submitHandler}>
                        <div className="flex flex-col  space-x-2">
                            <label>Username</label>
                            <input type="text" className="border"
                            value={username}
                            onChange={usernameChange}
                            />
                        </div>
                        <div>
                            <label>email</label>
                            <input type="email"className="border"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                            
                        </div>
                        <div>
                            <label>password</label>
                            <input type="password"className="border"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>

                        <div>
                            <label>password2</label>
                            <input type="password"className="border"
                            value={password2}
                            onChange={(e)=>setPassword2(e.target.value)}
                            />
                        </div>
                        <div className="w-full">
                            <button className="bg-blue-500 shadow text-white w-full">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};
export default AboutUs ;