import React from "react";
import { useShoppingCart } from "./Context/ShoppingCartContext";

type storeItemprops = {
  id: number;
  price: number;
  image: string;
};

export default function StoreItems({
  id,
  image,
  price,
}: storeItemprops) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <div>
      {quantity === 0 ? (
        <div>
          <button
            onClick={() => increaseCartQuantity(id)}
            className="bg-blue-600 text-white w-36 rounded-md p-2"
          >
            خرید
          </button>
        </div>
      ) : 
        <div className="flex flex-col justify-center items-center w-36 ">
          <div className="flex w-full h-full justify-center gap-4 py-6">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => increaseCartQuantity(id)}
            >
              +
            </button>
            <span>{quantity}</span>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => decreaseCartQuantity(id)}
            >
              -
            </button>
          </div>

          <div>
            <div className="inline ">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => removeFromCart(id)}
              >
                delete
              </button>
            </div>
          </div>
        </div>
       }
    </div>
  );
}
