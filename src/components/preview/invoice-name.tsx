import { useInvoice } from "@/store/context";
import { invoiceData } from "@/types/contextTypes";
import Image from "next/image";

export const InvoiceName = () => {
  const { invoiceName, companyLogo } = useInvoice() as invoiceData;

  return (
    <div className="w-full flex justify-between gap-2 items-center">
      <h1 className="text-2xl max-w-xs w-full font-semibold">{invoiceName}</h1>
      {companyLogo && (
        <Image
          src={companyLogo}
          width={80}
          height={80}
          alt="company logo"
          className="w-9 h-9 items-end"
        />
      )}
    </div>
  );
};
