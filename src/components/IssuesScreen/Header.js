import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Badge } from "@mui/material";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton sx={{ flexGrow: 1 }} align="center">
            <GitHubIcon
              fontSize="50px"
              style={{ color: "white", fontSize: "45px", padding: "5px" }}
            />
          </IconButton>
          <Button
            color="inherit"
            startIcon={
              <Badge color="secondary" variant="dot">
                <NotificationsNoneOutlinedIcon />
              </Badge>
            }
          ></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
