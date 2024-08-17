import Product from "./product.jsx"
import "./productTab.css"
import Title from './title';

function ProductTab (){
    let options = ["working-hours:"];
    return(
        <div className="ProductTab">
            
            <Product Title="Devin rocks" desc="Atlassian professional web dev" features={options} Experience="4"/>
            <Product Title="Stevin hocks" desc="Atlassian researcher" features={options} Experience="3"/>
            <Product Title="Heena alif" desc="Amazon Data expert" features={options}Experience="6"/>
            <Product Title="Hiran amad" desc="Product Manager Amazon" features={options}Experience="8" />
            <Product Title="Antonio dev" desc="App dev Apple" features={options}Experience="12" />
            <Product Title="Aleena devid" desc="Web dev Microsoft" features={options} Experience="7"/>
            <Product Title="Sonny sangha" desc="Power BI expert" features={options}Experience="9" />
            <Product Title="Steve" desc="Data analyst" features={options}Experience="11" />
            <Product Title="Umane zyad" desc="Cyber security Officer" features={options} Experience="2"/>
        
        </div>
    )
}

export default ProductTab;