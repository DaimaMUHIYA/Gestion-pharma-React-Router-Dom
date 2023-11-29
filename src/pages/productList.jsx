import ProductPreview from "../components/productPreview.jsx";
import ProductService from "../models/services/productService.js";
function ProductsList() {
   const data = ProductService.getProducts();
   return (
       <>
           <ul>
               {
                   data.map((e) =>
                       <li key={e.id}>
                           <ProductPreview product={e} seeMore={false}></ProductPreview>
                       </li>
                   )
               }
           </ul>
       </>
   );
}
export default ProductsList;