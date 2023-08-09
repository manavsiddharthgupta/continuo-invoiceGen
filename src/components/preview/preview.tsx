import { Separator } from "../ui/separator";
import { InvoiceName } from "./invoice-name";
import { UserContext } from "./user-context";
import { Items } from "./items-data";
import { SubTotalPreview } from "./subtotal";
import { forwardRef } from "react";
import { useInvoice } from "@/store/context";
import { invoiceData } from "@/types/contextTypes";
export const Preview = forwardRef((props, ref: any) => {
  const { companyInfo, invoiceInfo, invoiceName, customerInfo, companyLogo } =
    useInvoice() as invoiceData;

  let invoicePreview = (
    <div ref={ref} className="w-full p-4 flex flex-col gap-8 h-full">
      <InvoiceName />
      <UserContext />
      <Items />
      <Separator />
      <SubTotalPreview />
    </div>
  );

  if (
    !companyInfo &&
    !invoiceInfo &&
    invoiceName === "" &&
    !customerInfo &&
    !companyLogo
  ) {
    invoicePreview = (
      <div className="w-full p-4 flex justify-center items-center h-full">
        <p className="text-[#00000092] text-xs">
          Enter invoice detail to start seeing a preview
        </p>
      </div>
    );
  }
  return (
    <div className="w-[38%] max-lg:w-full">
      <div className="bg-white max-h-screen sticky max-lg:relative max-lg:max-h-full h-full w-full top-0 border-[1px] border-[#00000024] overflow-y-auto">
        {invoicePreview}
      </div>
    </div>
  );
});
