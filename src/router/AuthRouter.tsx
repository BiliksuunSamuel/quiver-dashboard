import { AuthPage, RegisterPage } from "../pages/auth";
import { Route, Routes } from "react-router-dom";
export default function AuthRouter() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />}>
        <Route path="" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}
