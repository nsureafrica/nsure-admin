import Index from "views/Index.jsx";
import InsuranceTypes from "./views/InsuranceTypes"
import Policies from "./views/Policies"

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Insurance Types",
    icon: "ni ni-planet text-blue",
    component: InsuranceTypes,
    layout: "/admin"
  },
  {
    path: "/policies",
    name: "Policies",
    icon: "ni ni-pin-3 text-orange",
    component: Policies,
    layout: "/admin"
  }
];
export default routes;
