import HomeLayout from "../page/Layout/HomeLayout";
import LoginLayout from "../page/Layout/LoginLayout";

export const layoutRoutes = {
  private: [
    {
      id: "privateRouter",
      path: "/",
      component: HomeLayout,
    },
  ],
  public: [
    {
      id: "publicRouter",
      path: "/",
      component: LoginLayout,
    },
  ],
};
