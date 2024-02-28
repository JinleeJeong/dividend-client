import { formatDateStringToMonthDay } from "@/utils/date";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";

interface InsightsStock {
  dividendYield?: number;
  exDividendDate?: string;
  lastModifiedAt?: string;
  logoUrl: string;
  stockId: string;
  ticker: string;
}

interface SectorInsightsItemProps {
  title: string;
  data: {
    dividends: InsightsStock[];
    lastModifiedAt: string;
  };
  type: InsightsType;
}

type InsightsType = "Date" | "Rate";

export const SectorInsightsItem = React.memo(({ title, data, type }: SectorInsightsItemProps) => {
  const router = useRouter();

  const handleItemClick = useCallback(
    (ticker: string) => {
      router.push(`/stock/${ticker}`);
    },
    [router]
  );

  return (
    <div className="flex w-full flex-col">
      <h4 className="mb-4 px-5 text-h4 text-grey-900 ">{title}</h4>

      <div className="scrollbar-none flex gap-2.5 overflow-x-auto overflow-y-hidden px-5 ">
        {data.dividends.map((stock, idx) => {
          return (
            <div
              key={idx}
              className="rounded-lg border border-grey-200 p-4"
              style={{ minWidth: 119, maxWidth: 119 }}
              onClick={() => {
                handleItemClick(stock.ticker);
              }}
            >
              <div className="flex flex-col gap-4">
                <Image
                  src={stock.logoUrl ?? "/next.svg"}
                  alt={stock.ticker}
                  className="h-8 w-8 rounded-full border border-grey-100"
                  width={32}
                  height={32}
                />

                <div>
                  <h5 className="text-h5 text-grey-900">{stock.ticker}</h5>
                  <p className="mt-0.5 truncate text-body2 text-main-900">
                    {type === "Date" && stock.exDividendDate && formatDateStringToMonthDay(stock.exDividendDate)}
                    {type === "Rate" &&
                      `${stock.dividendYield !== undefined ? Math.floor(stock.dividendYield * 100) / 100 : 0}%`}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});
