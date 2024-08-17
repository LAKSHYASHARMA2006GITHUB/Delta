import "./Amazoncard.css"
import Price from "./price";

function Card ({desc,features,idx }){
    let oldPrice = ["12500","9500","50000","160000","115000","149000"];
    let newPrice =["9800","5900","2500","130000","92000","110000"];
    return(
        <div className="Card">
            <div className="details">
                <h2>{desc}</h2>
                <h4>{features.map((feature)=><li>{feature}</li>)}</h4>
                <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
            </div>
         
        </div>
    )
}
export default Card;