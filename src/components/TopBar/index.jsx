import React, { useContext } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

import "./styles.css";
import { CurrentViewContext } from "../../contexts/CurrentViewContext";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar () {

    const { currentView } = useContext(CurrentViewContext);

    return (
      <AppBar className="topbar-appBar" position="absolute" sx={{ zIndex: 900 }}>
        <Toolbar>
          <Typography variant="h5" color="inherit">
            Nguyễn Đình Dũng
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            sx={{ marginLeft: "auto" }}
          >
            {currentView}
          </Typography>
        </Toolbar>
      </AppBar>
    );
}

export default TopBar;
