import "./product.css";
function Product({ Title, desc, features ,Experience }) {
   
    let styles = {backgroundColor:Experience>5?"lightblue":null}
    // let sty = { Color: isDiscount ? "black" : null }
    return (
        <div className="product" style={styles}>
            {Experience>5? <h5 className="exp">Experienced</h5>:null}
            <h2>{Title}</h2>
            <p>{desc}</p>
            <h4>{features.map((feature)=><li>{feature}</li>)}</h4>
            <button className="btn">Connect</button>

        </div>
    )
}



export default Product;
