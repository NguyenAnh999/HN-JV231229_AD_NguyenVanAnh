import React from "react";
import { formatsmoney } from "../utils/format";

export default function Cart({
  open,
  title,
  totalPrice,
  carts,
  handleAdd,
  handleMinus,
  handleMinusAll
}) {
  return (
    <>
      {open && (
        <div className="fixed right-1 top-16 z-[1000]">
          <div className="bg-black w-[550px] text-white rounded px-5 py-4">
            <h3 className="font-semibold text-2xl mb-2">{title}</h3>
            <hr />
            <ul className="flex flex-col gap-4 mt-3 pr-5 min-h-[300px] max-h-[500px] overflow-auto">
              {carts.map((cart, index) => (
                <li className="flex justify-between items-center" key={cart.id}>
                  <div className="flex items-center gap-5">
                    <img
                      className="h-14 border p-1 w-14 object-cover rounded-full"
                      src={cart.product.img}
                      alt=""
                    />
                    <div>{cart.product.productName}</div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleAdd(cart.product.id)}
                        className="h-6 leading-4 px-2 border rounded"
                      >
                        +
                      </button>
                      <span>{cart.quantity}</span>
                      <button
                        onClick={() => handleMinus(index)}
                        className="h-6 leading-4 px-2 border rounded"
                      >
                        -
                      </button>
                    </div>
                    <i onClick={()=>handleMinusAll(index)} class="bx bx-trash"></i>
                  </div>
                </li>
              ))}
            </ul>
            <hr className="mt-5" />
            <footer className="flex items-center gap-5 pt-5">
              <span>Tổng tiền:</span>
              <span>{formatsmoney(totalPrice)}</span>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}
