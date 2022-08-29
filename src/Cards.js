import {React, useState} from "react";
import { Carousel, Card, Collapse, Badge } from "react-bootstrap";
import { cardsInventory } from "./cardsInventory";
import Cart from "./Cart";

export default function Cards(props) {
  const [cart, setCart] = useState([]);
  const [index, setIndex] = useState(0);
  const [qty, setQty] = useState(0);
  const [open, setOpen] = useState(false);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const handleClick = (event) => {
    const selectedItem = cardsInventory.filter(card => card.id === event.target.id)[0];
     if(qty){
        setCart(
        [...cart, 
          {
            'name' : selectedItem.name,
            'qty' : qty,
            'size' : selectedItem.size,
            'price' : selectedItem.price
          }]) } else {
            return(
          alert('Please select the amount you want.')
            );
        }    
  }
  return (
    <div id="sales">
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
      {props.cards.map((card, index)=>{
        return(
          <Carousel.Item key={index}>
            <Card border={false} bg='transparent'>
              <Card.Header style={{backgroundColor:'transparent'}}>
                <Card.Img
                variant="top"
                src={card.src}
                alt='card'
                />
              </Card.Header>
              <Card.Body  style={{textAlign:'center'}}>
                <h3>{card.name}</h3>
                <p>
                  {card.size}
                  <br/>
                  ${card.price}.00
                </p>
                <button onClick={handleClick} id={card.id}>buy</button>
                <input 
                onChange={
                  (event) => {
                    setQty(event.target.value);
                    return qty;
                  }
                }
                style={
                  {
                    'marginBottom' : '18px', 
                    'textAlign' : 'center'
                  }
                } 
                id={'qty'} 
                name="qty" 
                type={'number'}
                min={1}
                required={true}
                />
              </Card.Body>

            </Card>
        </Carousel.Item>
        )   
      }       
      )}     
      </Carousel>
    <aside style={
      {
        width: '33vw',
        marginLeft : '800px',
        marginTop : '-650px',
      }
      }
      >
        <Collapse in={open}>
          <div id="cart" style={{'backgroundColor' : 'whitesmoke'}}>
    {cart.length ? <Cart items={cart} /> : 'No items in cart :('}
        </div>
        </Collapse>
        <button 
        style={{'width' : '100%'}}
        onClick={() => setOpen(!open)}
        aria-controls="cart"
        aria-expanded={open}
        >Show Cart <Badge>{cart.length}</Badge> </button>
    </aside>
      </div>
  )
}
