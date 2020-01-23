import EmailFlowPage from "../pages/EmailFlow/EmailFlowPage";
import LoginPage from "../pages/Login/LoginPage";
import OffersPage from "../pages/Offers/OffersPage";

export const LOGIN = {
  path: "/login",
  component: LoginPage
};

export const DEFAULT = {
  name: "Home",
  path: "/home",
  component: OffersPage,
  protected: true,
  icon: "home"
};

export const EMAIL = {
  name: "Email Flow",
  path: "/email",
  component: EmailFlowPage,
  protected: true,
  icon: "email"
};

export const Routes = [LOGIN, DEFAULT, EMAIL];
