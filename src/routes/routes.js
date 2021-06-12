import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/user",
    children: [
      {
        path: "user",
        name: "User Profile",
        component: UserProfile
      },
      {
        path: "table",
        name: "Table List",
        component: TableList
      },
      {
        path: "teachers",
        name: "Teachers",
        component: UserProfile
      },
      {
        path: "students",
        name: "Students",
        component: UserProfile
      }
    ]
  }
];

export default routes;
