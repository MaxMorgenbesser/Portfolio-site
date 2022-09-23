import headshot from '../src/BocaCodeHeadShot.jpg'
import '../src/Imagecss.css'

export default function Image(){
    return (<>
    <div id = "headshot-container">
    <img src={headshot} alt="Headshot" id="headshot"></img>
    </div>
    </>)
}