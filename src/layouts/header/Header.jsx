import React, { useContext, useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { ProductContext } from "../../context/Product";
import { formatsmoney } from "../../utils/format";
import Cart from "../../product/Cart";
export default function Header(     ) {
  const {carts,totalPrice,handleAdd,handleMinus,handleMinusAll} =
    useContext(ProductContext);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(!open);
  };
  return (
    <>
      <header className="p-12 h-14 w-full bg-purple-400 flex items-center justify-between px-6 text-white">
        <ul className="flex gap-3">
          <li>trang chu</li>
          <li>danh sach san pham</li>
        </ul>
        <div className="relative">
          <ShoppingCartOutlined className="text-[24px]" onClick={showDrawer}/>
          <p className="bg-black px-2 text-[12px] absolute top-[-10px] right-[-15px] rounded-lg hover:text-[14px] transition-all duration-75 ">
            {carts.length}
          </p>
        </div>
      </header>
     
        <Cart handleMinusAll={handleMinusAll} handleMinus={handleMinus}  title="gio hang" open={open} totalPrice={totalPrice} carts={carts} handleAdd={handleAdd}/>
      {/* <ul>
        {
            carts.map((cart)=>{return <>
                <li className="flex" key={cart.id}>
                    <img className="w-[100px] h-[100px]" src={cart.product.img} alt="" />
                    <p className="mt-[10%]" >{cart.product.productName}</p>
                </li>
                </>})
        }
        </ul>
        <div className=" h-28">TONG TIEN: {formatsmoney(totalPrice)}</div> */}
    </>
  );
}
