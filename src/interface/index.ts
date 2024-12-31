import { DialogProps } from "@mui/material";
import {
  CoinCategory,
  PriorityTypes,
  RateDirection,
  TransactionStatus,
} from "../types";
import { ReactNode } from "react";

export interface ISidebarRouteItem {
  title: string;
  Icon?: ReactNode; //IconType | OverridableComponent<SvgIconTypeMap<{}, "svg">> | Icon;
  priority?: PriorityTypes;
  isActive?: boolean;
  iconSize?: any;
  badgeCount?: number;
  route?: string;
}

export interface ISidebarRoute {
  header: string;
  routes: ISidebarRouteItem[];
}

export interface IStatistics {
  label: string;
  value: string;
}

export interface ITrendingCollateral {
  category: CoinCategory;
  title: string;
  icon: string;
  rate: number;
  count: number;
  rateDirection: RateDirection;
  color: string;
}

export interface IWalletFunding {
  date: string;
  email: string;
  transactionId: string;
  priority: PriorityTypes;
  status: TransactionStatus;
  amount: number;
}

export interface ILoanRequestStatistics {
  amount: number;
  request: number;
  title: string;
  label: string;
}

export interface IModalProps extends DialogProps {
  showCloseIcon?: boolean;
  zIndex?: number;
  header?: string;
  subHeading?: string;
}
