import { ISidebarRoute } from "../interface";
import { CiMoneyBill } from "react-icons/ci";
import { FiPieChart } from "react-icons/fi";
import {
  Coin,
  KeyboardOpen,
  MenuBoard,
  MessageText,
  Profile,
  SecurityUser,
  UserOctagon,
  Wallet1,
} from "iconsax-react";
export default (): ISidebarRoute[] => [
  {
    header: "General",
    routes: [
      {
        title: "Dashboard",
        Icon: <MenuBoard size="18" />,
        isActive: true,
        route: "/dashboard",
      },
      {
        title: "User support",
        Icon: <MessageText size="18" />,
      },
    ],
  },
  {
    header: "Menu",
    routes: [
      {
        title: "Users",
        route: "/dashboard/users",
        Icon: <Profile size="18" />,
      },
      {
        title: "Cryptocurrencies",
        route: "/dashboard/cryptocurrencies",
        Icon: <Coin size="18" />,
      },
      {
        title: "Loans",
        route: "/dashboard/loans",
        Icon: <CiMoneyBill size="18" />,
      },
      {
        title: "Savings",
        route: "/dashboard/savings",
        Icon: <Wallet1 size="18" />,
      },
      {
        title: "Transactions",
        route: "/dashboard/transactions",
        Icon: <FiPieChart size="18" />,
      },
    ],
  },
  {
    header: "Teams",
    routes: [
      {
        title: "Agents",
        route: "/dashboard/agents",
        Icon: <UserOctagon size="18" />,
      },
      { title: "Roles & Permissions", Icon: <SecurityUser size="18" /> },
      {
        title: "Activities",
        route: "/dashboard/activities",
        Icon: <SecurityUser size="18" />,
      },
      { title: "Audit Log", Icon: <KeyboardOpen size="18" /> },
    ],
  },
  {
    header: "Priorities",
    routes: [
      { title: "Urgent", priority: "Urgent", badgeCount: 5 },
      { title: "High", priority: "High", badgeCount: 1 },
      { title: "Normal", priority: "Normal", badgeCount: 12 },
      { title: "Low", priority: "Low", badgeCount: 6 },
    ],
  },
];
