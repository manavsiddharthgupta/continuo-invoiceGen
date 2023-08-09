export interface companyInfoType {
  pan_gstin: string;
  name: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip_code: number;
  country: string;
}

export interface customerInfoType {
  pan_gstin: string;
  name: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip_code: number;
  country: string;
}

export interface invoiceInfoType {
  invoice_number: string;
  invoice_date: string;
  due_date: string;
}

export interface itemInfoType {
  item_name: string;
  item_quantity: number;
  item_price: number;
  item_totalamt: number;
}

export interface subTotalType {
  gst: number;
  subTotal: number;
  total: number;
  tax: number;
  notes: string;
}

export interface invoiceData {
  invoiceName: string;
  companyLogo: string | null;
  companyInfo: companyInfoType | null;
  customerInfo: customerInfoType | null;
  invoiceInfo: invoiceInfoType | null;
  itemInfo: itemInfoType[];
  subTotal: subTotalType | null;
  onSetInvoiceName: (prev: string) => void;
  onSetSubTotal: (prev: subTotalType) => void;
  onSetItemInfo: (prev: itemInfoType[]) => void;
  onSetInvoiceInfo: (prev: invoiceInfoType) => void;
  onSetCustomerInfo: (prev: customerInfoType) => void;
  onSetCompanyInfo: (prev: companyInfoType) => void;
  onSetCompanyLogo: (logo: string) => void;
}
