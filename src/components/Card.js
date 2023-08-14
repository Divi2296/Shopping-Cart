import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../styles/card.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




function Cardreact({prod}) {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(Array(prod.length).fill(false));  // [false,false,false]
    const handleclick = (index) => {
        const newtoggle = [...toggle];  // [false,false,false]
        newtoggle[index] = !newtoggle[index];  // [true,false,false]
        setToggle(newtoggle); // [true,false,false]
    }

    console.log(prod)
  return (
    <div className='Cards'>
    {prod.map((item) => (
        <Card style={{ width: '18rem' }} >
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
            <Card.Title>{item.Cardtitle}</Card.Title>
            <Card.Text>
            {item.desc}
            <br />
             price : ₹ {item.price}
            <br />
            </Card.Text>
            
            <Button variant="primary" onClick={() => handleclick(item.id)}>{toggle[item.id] ? 'BOUGHT' : 'BUY'}</Button>
            <Button variant="success" onClick={()=>navigate(`/${item.cat}/${item.id}`)}>View Product</Button>
        </Card.Body>
        </Card>
    ))}
    </div>
  );
}

export default Cardreact;