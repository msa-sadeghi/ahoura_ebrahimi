function Product({pr}){
    
    return(
        <div className="product">
            <h1>name: {pr.name}</h1>
            <p>details: {pr.details}</p>
            <p>price: {pr.price}</p>
        </div>
    )
}

export default Product