import Admin from "../views/admin/Home.vue";
import AdminDashboard from "../views/admin/Dashboard.vue";
const adminRoutes = [
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    redirect: "/admin/dashboard",
    children: [
      {
        path: "/admin/dashboard",
        name: "AdminDashboard",
        component: AdminDashboard,
      },
    ],
  },
];

export default adminRoutes;
