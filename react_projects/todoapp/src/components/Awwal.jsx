import { useState } from "react"


export const MyProfile = () => {
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count => count + 1)
    }

    function decrease(){
        return setCount(count => count -1)
    }

    const reset = () => {
        setCount(0)
    } 


    return(
        <div>
            <div>
                My Portfolio
            </div>
            <div>
                <h1>Oladimeji Awwal O</h1>
            </div>
            <div>
                <ul>
                    <li>
                        Address: Mabera Iddi.....
                    </li>
                </ul>
            </div>
            
            <p>{count}</p>
            <div>
                <button onClick={increase}>Increase</button>
            </div>
            <div>
                <button onClick={decrease}>Decrease</button>
            </div>
            <div><button onClick={reset}>Reset</button></div>

        </div>
    )

}