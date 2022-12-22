function Shoes({newWord}) {

    return(
        <div className="products">
            {newWord.map((element => {
            const {id, name, searchTerm, price, image} = element;

                return(
                <div  className="product-card" key={id}>
                        <img src={image} width="340px" height="440px"/>
                    <div className="product-info" >
                        <h3>{name}</h3>
                        <h4> > {price}</h4>
                        
                    </div>
                </div>
                )
            }))}
        </div>
    )
}

export default Shoes;