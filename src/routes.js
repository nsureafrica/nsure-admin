import Index from "views/Index.jsx";
import Maps from "views/examples/Maps.jsx";
import Icons from "views/examples/Icons.jsx";

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
    name: "Edit rates",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Policies",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin"
  }
];
export default routes;
