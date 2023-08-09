import { useInvoice } from "@/store/context";
import { invoiceData } from "@/types/contextTypes";

export const UserContext = () => {
  const { invoiceInfo, companyInfo, customerInfo } =
    useInvoice() as invoiceData;
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-1 truncate w-[31%]">
        <h2 className="text-xs font-medium">
          Invoice #: {invoiceInfo?.invoice_number || ""}
        </h2>
        <p className="text-xs">Issued: {invoiceInfo?.invoice_date || ""}</p>
        <p className="text-xs">Due: {invoiceInfo?.due_date || ""}</p>
      </div>
      <div className="flex flex-col gap-1 truncate w-[31%]">
        <h2 className="text-xs font-medium">Bill from:</h2>
        {companyInfo?.name && <p className="text-xs">{companyInfo?.name}</p>}
        {companyInfo?.email && <p className="text-xs">{companyInfo?.email}</p>}
        {companyInfo?.pan_gstin && (
          <p className="text-xs">{companyInfo?.pan_gstin}</p>
        )}
        <p className="text-xs">
          {companyInfo?.city && <span>{companyInfo?.city}</span>}{" "}
          {companyInfo?.state && <span>{companyInfo?.state}</span>}
        </p>
      </div>
      <div className="flex flex-col gap-1 truncate w-[31%]">
        <h2 className="text-xs font-medium">Bill to:</h2>
        {customerInfo?.name && <p className="text-xs">{customerInfo?.name}</p>}
        {customerInfo?.email && (
          <p className="text-xs">{customerInfo?.email}</p>
        )}
        {customerInfo?.pan_gstin && (
          <p className="text-xs">{customerInfo?.pan_gstin}</p>
        )}
        <p className="text-xs">
          {customerInfo?.city && <span>{customerInfo?.city}</span>}{" "}
          {customerInfo?.state && <span>{customerInfo?.state}</span>}
        </p>
      </div>
    </div>
  );
};
