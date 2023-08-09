import { Item } from "./each-item";
import { useInvoice } from "@/store/context";
import { invoiceData } from "@/types/contextTypes";
import { useEffect } from "react";

export const ItemsToBill = ({
  inputInitialClass,
  onSetData,
}: {
  inputInitialClass: string;
  onSetData: (prev: any) => void;
}) => {
  const { itemInfo, onSetSubTotal } = useInvoice() as invoiceData;

  console.log(itemInfo);
  return (
    <div className="w-full mt-6">
      <h2>Items to bill</h2>
      {itemInfo.map((itemData, index) => {
        return (
          <Item
            key={index}
            inputInitialClass={inputInitialClass}
            onSetData={onSetData}
            onSetSubTotal={onSetSubTotal}
            data={itemData}
            ind={index}
          />
        );
      })}
    </div>
  );
};
