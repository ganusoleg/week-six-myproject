import { useState } from "react";
import { data } from "./data";
import Button from "./Button";
import Shoes from "./Shoes";
import { dataTwo } from "./dataTwo";

function Shop() {

const[shoes, setShoes] = useState(data);

const chosenShoes = (searchTerm) => {
  const newShoes = data.filter(element => element.searchTerm === searchTerm);
  setShoes(newShoes);
}

return(
  <div>
    <div className="contone">
      <h2 className="back">YourChoice.kz</h2>
    </div>
    <Button filteredShoes={chosenShoes}/>
    <Shoes newWord={shoes}/>
  </div>
)
}

export default Shop;