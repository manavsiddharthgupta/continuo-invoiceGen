"use client";
import { Editor } from "@/components/editor/editor";
import { Preview } from "@/components/preview/preview";
import { Navbar } from "@/components/navbar";
import { InvoiceProvider } from "@/store/context";
import {
  companyInfoType,
  customerInfoType,
  invoiceInfoType,
  itemInfoType,
  subTotalType,
} from "@/types/contextTypes";
import { useState, useRef } from "react";
import { Modal } from "@/components/preview/modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [companyData, setCompanyData] = useState<companyInfoType | null>(null);
  const [customerData, setCustomerData] = useState<customerInfoType | null>(
    null
  );
  const [invoiceInfo, setInvoiceInfo] = useState<invoiceInfoType | null>(null);
  const [items, setItems] = useState<itemInfoType[]>([
    {
      item_name: "",
      item_quantity: 0,
      item_price: 0,
      item_totalamt: 0,
    },
  ]);
  const [subtotal, setSubtotal] = useState<subTotalType | null>(null);
  const [invoiceName, setInvoiceName] = useState<string>("");
  const [companyLogo, setCompanyLogo] = useState<string | null>(null);
  const [modal, setModal] = useState<boolean>(false);

  const componentRef = useRef(null);

  const onAddItem = () => {
    setItems((prev) => {
      return [
        ...prev,
        {
          item_name: "",
          item_quantity: 0,
          item_price: 0,
          item_totalamt: 0,
        },
      ];
    });
  };

  const onDissimalModal = () => {
    setModal(false);
  };

  const onAddModal = () => {
    setModal(true);
  };

  const onSetCompanyLogo = (logo: string) => {
    setCompanyLogo(logo);
  };

  return (
    <InvoiceProvider
      value={{
        companyInfo: companyData,
        customerInfo: customerData,
        companyLogo: companyLogo,
        invoiceInfo,
        itemInfo: items,
        subTotal: subtotal,
        invoiceName,
        onSetCompanyInfo: setCompanyData,
        onSetCustomerInfo: setCustomerData,
        onSetInvoiceInfo: setInvoiceInfo,
        onSetItemInfo: setItems,
        onSetSubTotal: setSubtotal,
        onSetInvoiceName: setInvoiceName,
        onSetCompanyLogo: onSetCompanyLogo,
      }}
    >
      <Navbar componentRef={componentRef} onAddModal={onAddModal} />
      <main className="min-h-screen p-8 bg-[#F4F4F4] flex justify-between max-lg:flex-col max-lg:gap-8">
        <Editor onAddItem={onAddItem} />
        <Preview ref={componentRef} />
      </main>
      {modal && <Modal onDissimalModal={onDissimalModal} />}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </InvoiceProvider>
  );
}
