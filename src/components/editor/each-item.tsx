import { Input } from "@/components/ui/input";
import { useInvoice } from "@/store/context";
import { invoiceData, itemInfoType } from "@/types/contextTypes";
import { useEffect } from "react";

export const Item = ({
  inputInitialClass,
  onSetData,
  onSetSubTotal,
  data,
  ind,
}: {
  inputInitialClass: string;
  onSetData: (prev: any) => void;
  onSetSubTotal: (prev: any) => void;
  data: itemInfoType;
  ind: number;
}) => {
  const { itemInfo } = useInvoice() as invoiceData;
  useEffect(() => {
    const subTotal = itemInfo.reduce((acc, curr) => {
      return acc + curr.item_price * curr.item_quantity;
    }, 0);
    const total = (subtotal: number, gst: number) => {
      const gst_amt = (subtotal * gst) / 100;
      return subtotal + gst_amt;
    };
    onSetSubTotal((prev: any) => {
      return {
        ...prev,
        subTotal: subTotal,
        total: total(subTotal, +prev?.gst || 0),
      };
    });
  }, [data.item_price, data.item_quantity]);

  return (
    <div className="flex justify-between gap-2 mt-3 w-full">
      <Input
        className={`max-w-[350px] ${inputInitialClass}`}
        type="text"
        value={data.item_name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onSetData((prev: any) => {
            const newData = [...prev];
            newData[ind].item_name = e.target.value;
            return newData;
          });
        }}
        placeholder="item"
      />
      <div className="relative">
        <span className="inline-block absolute top-1 left-3 text-[8px] text-gray-500">
          Quantity
        </span>
        <Input
          className={`max-w-[120px] pt-6 pb-3 ${inputInitialClass}`}
          type="number"
          value={data.item_quantity}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onSetData((prev: any) => {
              const newData = [...prev];
              newData[ind].item_quantity = e.target.value;
              return newData;
            });
          }}
          min={0}
        />
      </div>
      <div className="relative">
        <span className="inline-block absolute top-1 left-3 text-[8px] text-gray-500">
          Price
        </span>
        <Input
          className={`max-w-[120px] pt-6 pb-3 ${inputInitialClass}`}
          type="number"
          value={data.item_price}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onSetData((prev: any) => {
              const newData = [...prev];
              newData[ind].item_price = e.target.value;
              return newData;
            });
          }}
          min={0}
        />
      </div>
      <p className="max-w-[100px] w-full text-sm text-gray-500 px-4 py-2 h-fit rounded-sm bg-[#00000009]">
        &#8377; {data.item_quantity * data.item_price}
      </p>
    </div>
  );
};
