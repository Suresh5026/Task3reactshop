import PropTypes from 'prop-types'
import { useState } from 'react'

export default function Section(props = {},  ){
    const { product={},addToCart,removeFromCart} = props
    const [inCart, setInCart] = useState(false);
    const handleAddToCart = () => {
        addToCart();
        setInCart(true);
      };
    
      const handleRemoveFromCart = () => {
        // Remove from cart logic
        removeFromCart()
        setInCart(false);
      };
    
    
    return(
    
        <section className="py-5">
         <div className="container px-lg-5 ">
                <div>
                    <div className="col mb-4">
                        <div className="card">
                        <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>{product.sale}</div>
                            <img className="card-img-top" src={product.img} alt="..." />
                            <div className="card-body">
                                <div className="text-center">
                                    <h5 className="fw-bolder">{product.name}</h5>
                                    ${product.price1} - ${product.price2}
                                </div>
                            </div>
                        
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                {inCart ? (
                                    <button className="btn btn-outline-dark mt-auto" onClick={handleRemoveFromCart}>Remove from Cart</button>) : 
                                    (<button className="btn btn-outline-dark mt-auto" onClick={handleAddToCart}>Add to Cart</button>)}
                                </div>
                            </div>
                            

                            
                        

                        </div>
                    </div>
                </div>
            </div>
        
            </section>
        
    )
}

Section.propTypes = {
    product: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired
};