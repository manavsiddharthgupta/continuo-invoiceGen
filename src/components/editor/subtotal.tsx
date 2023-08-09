import { Textarea } from "@/components/ui/textarea";
import { Input } from "../ui/input";
import { useInvoice } from "@/store/context";
import { invoiceData } from "@/types/contextTypes";

export const SubTotal = ({
  inputClass: inputInitialClass,
  onSetData,
}: {
  inputClass: string;
  onSetData: (prev: any) => void;
}) => {
  const { subTotal } = useInvoice() as invoiceData;

  console.log(subTotal);
  return (
    <div className="w-full mt-8 justify-between gap-2 flex items-center">
      <Textarea
        placeholder="Notes/Memo (optional)"
        className={`max-w-xs min-h-[180px] ${inputInitialClass}`}
        value={subTotal?.notes || ""}
        onChange={(e) => {
          onSetData((prev: any) => ({
            ...prev,
            notes: e.target.value,
          }));
        }}
      />
      <div className="max-w-[280px] flex flex-col gap-2 w-full text-gray-500">
        <div className="flex gap-1 justify-between bg-[#1f1f1f0c] px-4 py-2 text-sm rounded-sm">
          <span>Subtotal</span>
          <span>&#8377; {subTotal?.subTotal || "0.00"}</span>
        </div>
        <div className="relative">
          <span className="inline-block absolute top-1 left-3 text-[8px] text-gray-500">
            GST %
          </span>
          <Input
            className={`pt-6 pb-3 ${inputInitialClass}`}
            type="number"
            value={subTotal?.gst || ""}
            onChange={(e) => {
              const total = (subtotal: number, gst: number) => {
                const gst_amt = (subtotal * gst) / 100;
                return subtotal + gst_amt;
              };
              onSetData((prev: any) => ({
                ...prev,
                gst: e.target.value,
                total: total(prev?.subTotal || 0, +e.target.value),
              }));
            }}
            step={0.01}
            min={0}
          />
        </div>
        <div className="flex gap-1 justify-between bg-[#1f1f1f0c] px-4 py-2 text-sm rounded-sm">
          <span>Tax</span>
          <span>&#8377; {subTotal?.tax || "0.00"}</span>
        </div>
        <div className="flex gap-1 justify-between bg-[#1f1f1f0c] px-4 py-2 text-sm rounded-sm">
          <span className="font-semibold text-black">Total</span>
          <span>&#8377; {subTotal?.total || "0.00"}</span>
        </div>
      </div>
    </div>
  );
};
