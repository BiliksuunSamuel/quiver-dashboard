import {
  ILoanRequestStatistics,
  IStatistics,
  ITrendingCollateral,
  IWalletFunding,
} from "../interface";
import { IUser } from "../models/UserModels";
import resources from "../resources";
import { ErrorShades, PrimaryShades } from "../theme/AppColors";

export const StatisticsData: IStatistics[] = [
  { label: "Total Users", value: "24,459" },
  { label: "Total Records", value: "1,345" },
  { label: "Total Transactions", value: "2.523M" },
  { label: "Total Loan Request", value: "$302,923.41" },
  { label: "Total ROI per Coin", value: "$92,923.41" },
];

export const TrendingCollaterals: ITrendingCollateral[] = [
  {
    rateDirection: "down",
    count: 3750,
    rate: 0.21,
    icon: resources.bitcoin,
    category: "BTC",
    title: "Bitcoin",
    color: ErrorShades[500],
  },
  {
    rateDirection: "down",
    count: 4754,
    rate: 0.21,
    icon: resources.ethereum,
    category: "ETH",
    title: "Ethereum",
    color: PrimaryShades[700],
  },
  {
    rateDirection: "down",
    count: 2145,
    rate: 0.21,
    icon: resources.binance,
    category: "BNB",
    title: "Binance",
    color: ErrorShades[500],
  },
];

export const WalletFundings: IWalletFunding[] = [
  {
    date: "Apr 01,2022",
    email: "debra.holt@example.com",
    transactionId: "led_126TPzIrHFcM1QdkincnSr",
    priority: "Normal",
    status: "Processing",
    amount: 500,
  },
  {
    date: "Apr 01,2022",
    email: "michael.mitc@example.com",
    transactionId: "led_126TPzIrHFcM1QdkincnSr",
    priority: "High",
    status: "Processing",
    amount: 500,
  },
  {
    date: "Apr 01,2022",
    email: "felicia.reid@example.com",
    transactionId: "led_126TPzIrHFcM1QdkincnSr",
    priority: "Urgent",
    status: "Processing",
    amount: 500,
  },
];

export const Users: IUser[] = [
  {
    id: "1343",
    quiverTag: "$PhilipM",
    email: "philip.mason@example.com",
    lastSeen: "2mins. ago",
    isActive: false,
    referredBy: "$wilson",
    numberOfReferrals: 5,
    kycLevel: "Completed",
  },
  {
    id: "10014",
    email: "gerogia.young@example.com",
    quiverTag: "$kristin",
    lastSeen: "",
    isActive: true,
    numberOfReferrals: 2,
    kycLevel: "KYC Level 1",
  },
  {
    id: "10014",
    email: "gerogia.young@example.com",
    quiverTag: "$arthur",
    lastSeen: "2days ago",
    isActive: false,
    numberOfReferrals: 0,
    kycLevel: "KYC Level 2",
  },
  {
    id: "100134",
    email: "gerogia.young@example.com",
    quiverTag: "$ann",
    lastSeen: "10mins. ago",
    numberOfReferrals: 1,
    kycLevel: "Completed",
  },
  {
    id: "10014ee",
    email: "gerogia.young@example.com",
    quiverTag: "$aubrey",
    lastSeen: "20sec. ago",
    numberOfReferrals: 3,
    kycLevel: "Completed",
    referredBy: "$dianne",
  },
];

export const LoanRequestsStatistics: ILoanRequestStatistics[] = [
  {
    title: "Total Loan Request",
    amount: 302923.41,
    request: 2663,
    label: "NO. of Loan Request",
  },

  {
    title: "Total Loan Repayed",
    amount: 223635.89,
    request: 1536,
    label: "NO. of Loan Repayed",
  },

  {
    title: "Total Loan Outstanding",
    amount: 74287.52,
    request: 1127,
    label: "NO. of Loan Outstanding",
  },
];
