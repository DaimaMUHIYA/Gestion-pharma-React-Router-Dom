import {Outlet} from "react-router-dom";
function Products() {
   return (
       <>
           <Outlet/>
           <h1>Products</h1>
       </>
   );
}
export default Products;