import React from "react";
import style from "./Sidebar.scss";
import classNames from "classnames/bind";
import MenuItem from "./MenuItem";
import Menu from "./Menu";
import { configRouter } from "../../config/route";
import {
  ExploreActiveIcon,
  ExploreIcon,
  HomeActiveIcon,
  HomeIcon,
  LiveActiveIcon,
  LiveIcon,
  UserGroupActiveIcon,
  UserGroupIcon,
} from "../../icons";
import AccountFollow from "./AccountFollow";
const cx = classNames.bind(style);

const Sidebar = () => {
  return (
    <aside className={cx("sidebar")}>
      <div className={cx("sidebar-inner")}>
        <Menu>
          <MenuItem
            title="For Your"
            to={configRouter.home}
            icon={<HomeIcon />}
            activeIcon={<HomeActiveIcon />}
          />
          <MenuItem
            title="Following"
            to={configRouter.following}
            icon={<UserGroupIcon />}
            activeIcon={<UserGroupActiveIcon />}
          />
          <MenuItem
            title="Explore"
            to={configRouter.explore}
            icon={<ExploreIcon />}
            activeIcon={<ExploreActiveIcon />}
          />
          <MenuItem
            title="Live"
            to={configRouter.live}
            icon={<LiveIcon />}
            activeIcon={<LiveActiveIcon />}
          />
        </Menu>
        <div
          style={{
            borderTop: "1px solid #efefef",
            margin: "8px 0",
            marginLeft: "16px",
          }}
        >
          <p className={cx("headers")}>Following accounts</p>
          <AccountFollow />
          <AccountFollow />
          <AccountFollow />
          <AccountFollow />
          <AccountFollow />
          <AccountFollow />
          <AccountFollow />
          <AccountFollow />
          <AccountFollow />
          <AccountFollow />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
