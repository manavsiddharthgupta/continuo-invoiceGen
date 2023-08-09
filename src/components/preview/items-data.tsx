import { useInvoice } from "@/store/context";
import { invoiceData } from "@/types/contextTypes";

export const Items = () => {
  const { itemInfo } = useInvoice() as invoiceData;
  return (
    <table className="w-full text-xs text-left">
      <thead>
        <tr>
          <th className="w-[46%]">item</th>
          <th className="w-[18%]">Quantity</th>
          <th className="w-[18%]">Price</th>
          <th className="w-[18%]">Total</th>
        </tr>
      </thead>
      <tbody className="before:content-['-'] before:block before:leading-3 before:text-transparent">
        {itemInfo?.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.item_name}</td>
              <td>{item.item_quantity}</td>
              <td>&#8377; {item.item_price}</td>
              <td>&#8377; {item.item_price * item.item_quantity}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
