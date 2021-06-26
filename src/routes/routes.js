import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";


import Login from "@/pages/Auth/Login.vue";
import Student from "@/pages/Students/List";
import Teacher from "@/pages/Teachers/List";

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/",
    component: DashboardLayout,
    children: [

      {
        path: "teachers",
        name: "Teachers",
        component: Teacher
      },
      {
        path: "students",
        name: "Students",
        component: Student
      }
    ]
  }
];

export default routes;
