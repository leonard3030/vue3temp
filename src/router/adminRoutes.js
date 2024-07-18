import Admin from "../views/admin/Home.vue";
import AdminDashboard from "../views/admin/Dashboard.vue";
import AdminMerchants from "../views/admin/Merchants.vue";
import AdminCollections from "../views/admin/Collections.vue";
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
      {
        path: "/admin/merchants",
        name: "AdminMerchants",
        component: AdminMerchants,
      },
      {
        path: "/admin/collections",
        name: "AdminCollections",
        component: AdminCollections,
      },
    ],
  },
];

export default adminRoutes;
