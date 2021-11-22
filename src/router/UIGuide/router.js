import Home from "../../page/Home";
import Trash from "../../page/Trash";
import Storage from "../../page/Storage";

import { pathUIGuide } from "./path";
export const routerUI = [
  {
    id: "privateRoutes",
    name: "HomePage",
    path: pathUIGuide.HOME,
    component: Home,
  },
  {
    id: "privateRoutes",
    name: "HomePage",
    path: pathUIGuide.Trash,
    component: Trash,
  },
  {
    id: "privateRoutes",
    name: "HomePage",
    path: pathUIGuide.STORAGE,
    component: Storage,
  },
];
