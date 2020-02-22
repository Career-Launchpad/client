import EmailFlowPage from "../pages/EmailFlow/EmailFlowPage";
import LoginPage from "../pages/Login/LoginPage";
import OffersPage from "../pages/Offers/OffersPage";
import MajorsPage from "../pages/Majors/MajorsPage";
import StudentsPage from "../pages/Students/StudentsPage";
import CompaniesPage from "../pages/Companies/CompaniesPage";
import AddOfferPage from "../pages/AddOffer/AddOfferPage";
import AddStudentPage from "../pages/AddStudent/AddStudentPage";

export const LOGIN = {
  path: "/login",
  component: LoginPage
};

export const OFFERS = {
  name: "Offers",
  path: "/offers",
  component: OffersPage,
  protected: true,
  icon: "description"
};

export const EMAIL = {
  path: "/email",
  component: EmailFlowPage,
  protected: true
};

export const MAJORS = {
  name: "Majors",
  path: "/majors",
  component: MajorsPage,
  protected: true,
  icon: "school"
};

export const STUDENTS = {
  name: "Students",
  path: "/students",
  component: StudentsPage,
  protected: true,
  icon: "group"
};

export const COMPANIES = {
  name: "Companies",
  path: "/companies",
  component: CompaniesPage,
  protected: true,
  icon: "apartment"
};

export const addStudent = {
  path: "/add-student",
  component: AddStudentPage
};

export const addOffer = {
  path: "/add-offer",
  component: AddOfferPage
};

export const DEFAULT = OFFERS;

export const Routes = [
  LOGIN,
  EMAIL,
  OFFERS,
  MAJORS,
  STUDENTS,
  COMPANIES,
  addStudent,
  addOffer
];
