import ProductPreview from "../components/productPreview";
import ProductService from "../models/services/productService.js";

function ProductionList() {
    const data = ProductService.getProducts();
    return (
        <>
            <ul>
                {
                    data.map((e) =>
                    <li>
                        <ProductPreview product ={e} seeMOre ={false}></ProductPreview>
                    </li>
                    )
                }
            </ul>
        </>
    );
}

export default ProductsList;