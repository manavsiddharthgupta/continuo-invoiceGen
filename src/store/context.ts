import { invoiceData } from "@/types/contextTypes";
import { createContext, useContext } from "react";

export const InvoiceContext = createContext<invoiceData | null>(null);

export const InvoiceProvider = InvoiceContext.Provider;

export const useInvoice = () => useContext(InvoiceContext);
