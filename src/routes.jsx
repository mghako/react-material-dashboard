import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  PowerIcon,
  UserGroupIcon,
  DocumentDuplicateIcon,
  DocumentIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import AllUsers from "./pages/user/all";
import OldItemRegistration from "./pages/old-data-reg/create";

const icon = {
  className: "w-4 h-4 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      // {
      //   icon: <UserCircleIcon {...icon} />,
      //   name: "profile",
      //   path: "/profile",
      //   element: <Profile />,
      // },
      // {
      //   icon: <TableCellsIcon {...icon} />,
      //   name: "tables",
      //   path: "/tables",
      //   element: <Tables />,
      // },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "users",
        path: "/users",
        element: <AllUsers />,
      },
      // {
      //   icon: <InformationCircleIcon {...icon} />,
      //   name: "notifications",
      //   path: "/notifications",
      //   element: <Notifications />,
      // },
      {
        icon: <DocumentIcon {...icon} />,
        name: "old item reg",
        path: "/old-item-registration",
        element: <OldItemRegistration />,
      }
    ],
  },
  // {
  //   title: "Settings",
  //   layout: "auth",
  //   pages: [
  //     {
  //       icon: <ServerStackIcon {...icon} />,
  //       name: "sign in",
  //       path: "/sign-in",
  //       element: <SignIn />,
  //     },
  //     {
  //       icon: <RectangleStackIcon {...icon} />,
  //       name: "sign up",
  //       path: "/sign-up",
  //       element: <SignUp />,
  //     },
  //     {
  //       icon: <PowerIcon {...icon} />,
  //       name: "sign out",
  //       path: "/sign-out",
  //       element: <SignUp />,
  //     },
  //   ],
  // },
];

export default routes;
