import Trash from "../../page/Trash";
import Storage from "../../page/Storage";
import Note from "../../page/Note";

import { pathUIGuide } from "./path";
export const routesUIGuide = [
  {
    id: "privateRoutes",
    name: "NotePage",
    path: pathUIGuide.NOTE,
    component: Note,
  },
  {
    id: "privateRoutes",
    name: "TrashPage",
    path: pathUIGuide.TRASH,
    component: Trash,
  },
  {
    id: "privateRoutes",
    name: "StoragePage",
    path: pathUIGuide.STORAGE,
    component: Storage,
  },
];
