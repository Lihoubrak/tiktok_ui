import Home from "../Page/Home";
import Following from "../Page/Following";
import Upload from "../Page/Upload";
import Profile from "../Page/Profile";
import Search from "../Page/Search";
import { configRouter } from "../config/route";
const publicRoutes = [
  { path: configRouter.home, component: Home },
  { path: configRouter.Profile, component: Profile },
  { path: configRouter.following, component: Following },
  { path: configRouter.upload, component: Upload, layout: null },
  { path: configRouter.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
