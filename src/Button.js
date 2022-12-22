function Button({filteredShoes}) {
    return(
        <div className="cont">
            <button className="change" onClick={() => filteredShoes("cross")}>Кроссовки</button>
            <button className="change" onClick={() => filteredShoes("slipons")}>Слипоны</button>
            <button className="change" onClick={() => filteredShoes("keds")}>Кеды</button>
            <button className="change" onClick={() => filteredShoes("snikers")}>Сникерсы</button>
            <button className="change" onClick={() => filteredShoes("buts")}>Бутсы</button>
        </div>
    )
}

export default Button;