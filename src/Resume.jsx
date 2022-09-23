import resume from "../src/MaxMorgenbesser_Resume_2022.jpg"
import "../src/App.css"
import { useNavigate } from "react-router-dom"
export default function Resume(){
    const navigate = useNavigate()
    return (<><div id="myres"><img  src={resume} alt="my resume"></img>
    <button className="button" onClick={()=>navigate('/')}>Go Back</button>
    
    </div></>)
}