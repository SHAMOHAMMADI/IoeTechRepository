import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "./Context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import storeItems from '../data/store.json'

type shoppingCartProps = {
  isOpen: boolean;
};
export function ShoppingCart({ isOpen }: shoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {cartItems.reduce((total, CartItem) => {
              const item = storeItems.find((i) => i.id === CartItem.id);
              return total + (item?.price || 0) * CartItem.quantity;
            }, 0)}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
