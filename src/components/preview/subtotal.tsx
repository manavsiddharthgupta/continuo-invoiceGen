import { useInvoice } from "@/store/context";
import { invoiceData } from "@/types/contextTypes";

export const SubTotalPreview = () => {
  const { subTotal } = useInvoice() as invoiceData;

  return (
    <div className="w-full gap-4 flex justify-between py-4">
      <div className="max-w-[280px] h-40 p-2 border-[1px] border-[#00000028] overflow-auto w-full rounded-sm">
        <h2 className="text-xs font-medium mb-2">Notes / Memo</h2>
        <p className="text-xs">{subTotal?.notes}</p>
      </div>
      <div className="max-w-xs w-full text-xs">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>&#8377; {subTotal?.subTotal || 0}</p>
        </div>
        <div className="flex justify-between">
          <p>Tax</p>
          <p>&#8377; {subTotal?.tax || 0}</p>
        </div>
        <div className="flex justify-between font-medium">
          <p>Total</p>
          <p>&#8377; {subTotal?.total || 0}</p>
        </div>
      </div>
    </div>
  );
};
