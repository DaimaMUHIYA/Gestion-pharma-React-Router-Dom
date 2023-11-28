import {link} from "react-router-dom";

function ProductPreview({product, seeMore}) {
    return(
        <div>
            <img src={product.image} alt="product image" />
            <h2>{product.name}</h2>
            {
                seeMore ?
                <p>{product.description}</p>
                :
                <link to={`/products/${product.id}`}>Voir plus</link>
            }
        </div>
    );
}

export default ProductPreview;