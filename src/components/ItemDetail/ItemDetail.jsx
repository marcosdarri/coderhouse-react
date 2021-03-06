import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Button } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ items }) => {
  const [contador, setContador] = useState(0);
  const { cartList, agregarAlCarrito } = useCartContext();

  //setContador(0);

  const onAdd = (count) => {
    agregarAlCarrito({
      nombre: items.title,
      cantidad: count,
      id: items.id,
      precio: items.precio,
      pictureUrl: items.pictureUrl,
    });
    setContador(count);
  };

  return (
    <>
      <div className="thumbnail">
        <h3>{items.title}</h3>
        <img
          src={items.pictureUrl}
          alt={items.title}
          style={{ width: "200px", height: "200px" }}
        />
        <p>{items.description}</p>
        <p>${items.precio}</p>
      </div>
      {contador === 0 ? (
        <ItemCount onAdd={onAdd} stock="5" initial="1" />
      ) : (
        <>
          <Link to="/cart">
            <Button variant="primary">Ir al carrito</Button>
          </Link>
          <Link to="/">
            <Button variant="primary">Seguir comprando</Button>
          </Link>
        </>
      )}
    </>
  );
};

export default ItemDetail;
