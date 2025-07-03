import React from "react";
type Props = {
  isLoading: boolean;
};
export default function Loader({ isLoading }: Props) {
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-main1">
        <div className="w-52 h-10 relative rounded-full border-3 border-darkMain1">
          <div className="absolute inset-0 rounded-full border-4 border-main1 overflow-hidden">
            <div className="h-full w-full animate-loading rounded-full bg-darkMain1"></div>
          </div>
        </div>
      </div>
    );
  }
  return "";
}
