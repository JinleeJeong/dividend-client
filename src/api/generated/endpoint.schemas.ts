/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * Payout Server API
 * Payout Server API 명세서입니다.
 * OpenAPI spec version: 1.0.0
 */
export type SearchStockParams = {
  /**
   * tickerName or companyName of stock ex) APPL, APPLE
   */
  keyword: string;
  /**
   * page number(start with 1) for pagination
   */
  pageNumber: number;
  /**
   * page size for pagination
   */
  pageSize: number;
};

export type StockDetailResponseDividendMonthsItem =
  (typeof StockDetailResponseDividendMonthsItem)[keyof typeof StockDetailResponseDividendMonthsItem];

export const StockDetailResponseDividendMonthsItem = {
  JANUARY: "JANUARY",
  FEBRUARY: "FEBRUARY",
  MARCH: "MARCH",
  APRIL: "APRIL",
  MAY: "MAY",
  JUNE: "JUNE",
  JULY: "JULY",
  AUGUST: "AUGUST",
  SEPTEMBER: "SEPTEMBER",
  OCTOBER: "OCTOBER",
  NOVEMBER: "NOVEMBER",
  DECEMBER: "DECEMBER",
} as const;

export interface StockDetailResponse {
  companyName?: string;
  dividendMonths?: StockDetailResponseDividendMonthsItem[];
  dividendPerShare?: number;
  dividendYield?: number;
  earliestPaymentDate?: string;
  exchange?: string;
  exDividendDate?: string;
  industry?: string;
  logoUrl?: string;
  price?: number;
  sectorName?: string;
  stockId?: string;
  ticker?: string;
  volume?: number;
}

export interface SingleMonthlyDividendResponse {
  dividend?: number;
  logoUrl?: string;
  share?: number;
  ticker?: string;
  totalDividend?: number;
}

export interface MonthlyDividendResponse {
  dividends?: SingleMonthlyDividendResponse[];
  month?: number;
  totalDividend?: number;
  year?: number;
}

export interface SingleYearlyDividendResponse {
  logoUrl?: string;
  share?: number;
  ticker?: string;
  totalDividend?: number;
}

export interface YearlyDividendResponse {
  dividends?: SingleYearlyDividendResponse[];
  totalDividend?: number;
}

export interface DividendRequest {
  tickerShares?: TickerShare[];
}

export interface StockResponse {
  companyName?: string;
  exchange?: string;
  industry?: string;
  logoUrl?: string;
  price?: number;
  sectorName?: string;
  stockId?: string;
  ticker?: string;
  volume?: number;
}

export interface SectorRatioResponse {
  sectorName?: string;
  sectorRatio?: number;
  stocks?: StockResponse[];
}

export interface ErrorResponse {
  code?: number;
  message?: string;
}

export interface TickerShare {
  share?: number;
  ticker: string;
}

export interface SectorRatioRequest {
  tickerShares?: TickerShare[];
}