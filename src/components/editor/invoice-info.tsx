import { Input } from "@/components/ui/input";
import { useInvoice } from "@/store/context";
import { invoiceData, invoiceInfoType } from "@/types/contextTypes";

export const InvoiceInfo = ({
  inputInitialClass,
  onSetData: onSetInvoiceInfo,
}: {
  inputInitialClass: string;
  onSetData: (prev: any) => void;
}) => {
  const { invoiceInfo } = useInvoice() as invoiceData;

  console.log(invoiceInfo);
  return (
    <div className="w-full mt-6">
      <h2>Invoice info</h2>
      <div className="flex justify-between gap-4 mt-3 w-full">
        <Input
          className={`max-w-[350px] ${inputInitialClass}`}
          type="number"
          placeholder="Invoice #"
          value={invoiceInfo?.invoice_number || ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onSetInvoiceInfo((prev: invoiceInfoType) => {
              return { ...prev, invoice_number: e.target.value };
            });
          }}
        />
        <div className="flex gap-4">
          <div className="relative">
            <span className="inline-block absolute top-[6px] left-3 text-[8px] text-gray-500">
              Date issued
            </span>
            <Input
              className={`max-w-fit pt-6 pb-3 text-xs ${inputInitialClass}`}
              type="date"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onSetInvoiceInfo((prev: invoiceInfoType) => {
                  return { ...prev, invoice_date: e.target.value };
                });
              }}
            />
          </div>
          <div className="relative">
            <span className="inline-block absolute top-[6px] left-3 text-[8px] text-gray-500">
              Due date
            </span>
            <Input
              className={`max-w-fit pt-6 pb-3 text-xs ${inputInitialClass}`}
              type="date"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onSetInvoiceInfo((prev: invoiceInfoType) => {
                  return { ...prev, due_date: e.target.value };
                });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
