import { Route, Routes } from "react-router-dom";
import {
  AccountSettingsPage,
  ActivitiesPage,
  AgentsPage,
  ContentPage,
  CurrenciesPage,
  HomePage,
  LoansPage,
  SavingsPage,
  TransactionsPage,
  UsersPage,
} from "../pages/home";

export default function HomeRouter() {
  return (
    <Routes>
      <Route path="/dashboard" element={<HomePage />}>
        <Route path="" element={<ContentPage />} />
        <Route path="account-settings" element={<AccountSettingsPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="cryptocurrencies" element={<CurrenciesPage />} />
        <Route path="loans" element={<LoansPage />} />
        <Route path="savings" element={<SavingsPage />} />
        <Route path="transactions" element={<TransactionsPage />} />
        <Route path="agents" element={<AgentsPage />} />
        <Route path="activities" element={<ActivitiesPage />} />
      </Route>
    </Routes>
  );
}
