"use client";
import { Separator } from "../ui/separator";
import { InvoiceName } from "./invoice-name";
import { UserContext } from "./user-context";
import { Items } from "./items-data";
import { SubTotalPreview } from "./subtotal";
import Image from "next/image";
import cross from "../../store/cross.png";

export const Modal = ({ onDissimalModal }: { onDissimalModal: () => void }) => {
  return (
    <div className="bg-[#00000077] w-full h-full fixed top-0 left-0 z-10 flex items-center">
      <div className="max-w-3xl w-full bg-white mx-auto h-full overflow-y-auto z-20">
        <div className="w-full flex flex-col gap-8 p-6 relative">
          <Image
            src={cross}
            width={30}
            height={30}
            alt="cross"
            onClick={() => {
              onDissimalModal();
            }}
            className="absolute top-3 right-3 font-bold text-lg text-black z-20 cursor-pointer"
          ></Image>
          <InvoiceName />
          <UserContext />
          <Items />
          <Separator />
          <SubTotalPreview />
        </div>
      </div>
    </div>
  );
};
