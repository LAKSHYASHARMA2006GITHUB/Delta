import Card from "./Amazoncard.jsx";
import "./Amazontab.css"

function Amazontab(){
    return(
        <div className="Main">
            <h3 className="deals">Blockbuster deals On computer Accessories| shop now</h3>
        <div className="Tab">
            <Card desc="Logitech MX Master wireless" features={["5000 DPI", "Braded cable"]} idx = {0} />
            <Card desc="Apple pencil 2.0 gen" features={["Smooth", "Magsafe charging"]} idx ={1}/>
            <Card desc="Lg Gaming Moniter" features={["240 Hz", "4k display"]} idx = {2}/>
                <Card desc="Lg quled 45 inch Tv" features={["144 Hz", "8k display"]} idx = {3}/>
                <Card desc="Hp victus Gaming" features={["240 Hz", "FHD display"]} idx = {4}/>
                <Card desc="i Phone15 pro max" features={["120 Hz", "Liquid retina display"]} idx ={5}/>
        </div>
        </div>
    )
}

export default Amazontab;