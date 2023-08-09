"use client";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Detail } from "./customer-user";
import { InvoiceInfo } from "./invoice-info";
import { ItemsToBill } from "./itemsui";
import { Button } from "../button";
import { SubTotal } from "./subtotal";
import { useInvoice } from "@/store/context";
import { invoiceData } from "@/types/contextTypes";
import { memo } from "react";
import Image from "next/image";
import uploadIcon from "@/store/upload.png";

export const Editor = memo(({ onAddItem }: { onAddItem: () => void }) => {
  const inputInitialClass = "w-full outline-none placeholder:text-xs";

  const {
    invoiceName,
    onSetInvoiceName,
    companyInfo,
    customerInfo,
    onSetCompanyInfo,
    onSetCustomerInfo,
    onSetInvoiceInfo,
    onSetItemInfo,
    onSetSubTotal,
    onSetCompanyLogo,
  } = useInvoice() as invoiceData;

  console.log(companyInfo, customerInfo);

  return (
    <div className="min-w-[300px] max-lg:w-full w-[60%]">
      <p className="text-xs">
        Fill in all the required fields, preview your invoice and get it emailed
        directly to you.
      </p>
      <div className="bg-white mt-2 p-6 rounded-md">
        <div className="flex justify-between gap-1 items-center">
          <Input
            className={`max-w-xs ${inputInitialClass}`}
            type="text"
            placeholder="Invoice name"
            value={invoiceName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              onSetInvoiceName(e.target.value);
            }}
            required
          />
          <div className="relative w-44 h-10 border-black border-dashed rounded-sm border-[1px]">
            <input
              className={`h-full opacity-0 w-full top-0 left-0 text-xs block absolute z-10 ${inputInitialClass}`}
              id="picture"
              type="file"
              onChange={(e: any) => {
                onSetCompanyLogo(URL.createObjectURL(e.target.files[0]));
              }}
              accept="image/*"
            />

            <div className="z-0 w-44 h-full flex justify-between items-center px-3 gap-4">
              <p className="text-sm cursor-pointer text-gray-600">
                Upload Logo
              </p>
              <p className="text-gray-600">|</p>
              <Image
                src={uploadIcon}
                alt="upload icon"
                width={20}
                height={20}
                className="cursor-pointer w-5 h-5 block"
              />
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex gap-6 justify-between">
          <Detail
            userDetail={companyInfo}
            onSetData={onSetCompanyInfo}
            inputClass={inputInitialClass}
            title="Your company info"
          />
          <Detail
            userDetail={customerInfo}
            onSetData={onSetCustomerInfo}
            inputClass={inputInitialClass}
            title="Bill to"
          />
        </div>
        <InvoiceInfo
          onSetData={onSetInvoiceInfo}
          inputInitialClass={inputInitialClass}
        />
        <ItemsToBill
          onSetData={onSetItemInfo}
          inputInitialClass={inputInitialClass}
        />
        <Button
          onClick={() => {
            onAddItem();
          }}
          className="bg-black text-white mt-4"
        >
          + Add line item
        </Button>
        <SubTotal onSetData={onSetSubTotal} inputClass={inputInitialClass} />
      </div>
    </div>
  );
});
