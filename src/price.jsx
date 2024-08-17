 import "./price"
 
 export default function Price({oldPrice,newPrice}){
    return(
        <div className="Price">
        <span className="old">{oldPrice}</span>
        &nbsp;
        &nbsp;
        <span className="New">{newPrice}</span>
        </div>
    );
}
