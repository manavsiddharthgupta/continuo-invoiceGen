import { Input } from "@/components/ui/input";
import { customerInfoType } from "@/types/contextTypes";

export const Detail = ({
  userDetail,
  inputClass: inputInitialClass,
  title,
  onSetData,
}: {
  userDetail: customerInfoType | null;
  inputClass: string;
  title: string;
  onSetData: (prev: any) => void;
}) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <h2>{title}</h2>
      <Input
        className={`${inputInitialClass}`}
        type="text"
        placeholder="PAN OR GSTIN"
        value={userDetail?.pan_gstin || ""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onSetData((prev: any) => {
            return { ...prev, pan_gstin: e.target.value };
          });
        }}
        required
      />
      <Input
        className={`${inputInitialClass}`}
        type="text"
        value={userDetail?.name || ""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onSetData((prev: any) => {
            return { ...prev, name: e.target.value };
          });
        }}
        placeholder="Name"
        required
      />
      <Input
        className={`${inputInitialClass}`}
        type="email"
        value={userDetail?.email || ""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onSetData((prev: any) => {
            return { ...prev, email: e.target.value };
          });
        }}
        placeholder="Email"
        required
      />
      <Input
        className={`${inputInitialClass}`}
        type="text"
        value={userDetail?.address || ""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onSetData((prev: any) => {
            return { ...prev, address: e.target.value };
          });
        }}
        placeholder="Address"
        required
      />
      <div className="flex gap-2">
        <Input
          className={`${inputInitialClass}`}
          type="text"
          value={userDetail?.city || ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onSetData((prev: any) => {
              return { ...prev, city: e.target.value };
            });
          }}
          placeholder="City"
        />
        <Input
          className={`${inputInitialClass}`}
          type="number"
          value={userDetail?.zip_code || ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onSetData((prev: any) => {
              return { ...prev, zip_code: e.target.value };
            });
          }}
          placeholder="Zip Code"
        />
      </div>
      <div className="flex gap-2">
        <Input
          className={`${inputInitialClass}`}
          type="text"
          value={userDetail?.country || ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onSetData((prev: any) => {
              return { ...prev, country: e.target.value };
            });
          }}
          placeholder="Country"
        />
        <Input
          className={`${inputInitialClass}`}
          type="text"
          value={userDetail?.state || ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onSetData((prev: any) => {
              return { ...prev, state: e.target.value };
            });
          }}
          placeholder="State"
          required
        />
      </div>
    </div>
  );
};
