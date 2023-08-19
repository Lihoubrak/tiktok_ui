import Home from "../Page/Home";
import Following from "../Page/Following";
import Upload from "../Page/Upload";
import Profile from "../Page/Profile";
import Search from "../Page/Search";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/profile", component: Profile },
  { path: "/following", component: Following },
  { path: "/upload", component: Upload, layout: null },
  { path: "/search", component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
