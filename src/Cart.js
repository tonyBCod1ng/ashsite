import { ListGroup } from "react-bootstrap";

export default function Cart(props){
    const items = props.items;
    let total = 0;
    console.log(items, total);

    return(
        <span id='shoppingCart'>

            <ListGroup id="listedItems"> 
                {
                    items ? items.map(
                        ({name, price, size, qty}, index)=>{
                            return(
                                <ListGroup.Item key={index}>Card: {name} Price: ${price}.00 Size: {size} Qty: {qty}</ListGroup.Item>
                                )
                            }
                            ) :
                            'No items in cart :('
                        }
            </ListGroup>
            <span>
            {
                items.forEach(item => {
                    total += (item.price * item.qty)
                    return total;
                })
            }
            total: ${total}.00
            </span>
        </span>
    )
}