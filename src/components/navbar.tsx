import { Button } from "./button";
import ReactToPrint from "react-to-print";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { useInvoice } from "@/store/context";
import { invoiceData } from "@/types/contextTypes";

export const Navbar = ({
  onAddModal,
  componentRef,
}: {
  onAddModal: () => void;
  componentRef: React.RefObject<HTMLInputElement>;
}) => {
  const { companyInfo, invoiceInfo, invoiceName, customerInfo, companyLogo } =
    useInvoice() as invoiceData;

  const reactToPrintTrigger = useCallback(() => {
    return (
      <Button
        onClick={() => {
          console.log("Download PDF");
        }}
        className="bg-black text-white h-fit"
      >
        Download PDF
      </Button>
    );
  }, []);

  const reactToPrintContent = useCallback(() => {
    if (!componentRef.current) {
      toast.error("Enter invoice details to download", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    return componentRef.current;
  }, [componentRef.current]);

  const handleAfterPrint = () => {
    toast.success("Downloaded", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <div className="flex justify-between items-center max-lg:px-2 px-8 py-4 bg-white">
      <h1 className="text-3xl font-medium">Create an Invoice</h1>
      <div className="flex gap-2">
        <Button
          onClick={() => {
            if (
              !companyInfo &&
              !invoiceInfo &&
              invoiceName === "" &&
              !customerInfo &&
              !companyLogo
            ) {
              toast.error("Enter invoice details to download", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              return;
            }
            onAddModal();
          }}
          className="hover:bg-black hover:text-white h-fit"
        >
          Preview
        </Button>
        <ReactToPrint
          content={reactToPrintContent}
          documentTitle="AwesomeFileName"
          removeAfterPrint
          onAfterPrint={handleAfterPrint}
          trigger={reactToPrintTrigger}
        />
      </div>
    </div>
  );
};
