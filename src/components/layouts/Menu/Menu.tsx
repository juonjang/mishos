import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Layers from "@mui/icons-material/Layers";
import BarChart from "@mui/icons-material/BarChart";
import Person from "@mui/icons-material/Person";
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat';
import ContactPhoneTwoToneIcon from '@mui/icons-material/ContactPhoneTwoTone';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';

import { NavLink } from "react-router-dom";
import { ListItemButton, Stack, createTheme } from "@mui/material";
import AirlineSeatFlat from "@mui/icons-material/AirlineSeatFlat";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: prop => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  })
}));



interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== "open"
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end"
}));

type MenuProp = {
  open: boolean;
  onDrawerClose: () => void;
};

export default function Menu({ open, onDrawerClose }: MenuProp) {
  const theme = useTheme();
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  const handleDrawerClose = () => {
    // setOpen(false);
    onDrawerClose();
  };

  const MyNavLink = React.forwardRef<any, any>((props, ref) => (
    <NavLink
      ref={ref}
      to={props.to}
      className={({ isActive }) =>
        `${props.className} ${isActive ? props.activeClassName : ""}`
      }
    >
      {props.children}
    </NavLink>
  ));

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box"
        }
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <Stack direction="row" alignItems="center">
          <img
            src={`/images/logo.png`}
            style={{ height: 30 }}
          />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </Stack>
      </DrawerHeader>
      <Divider />


      <List>
        {/* Stock */}
        <ListItem
          button
          to="/stock"
          component={MyNavLink}
          activeClassName="Mui-selected"
          exact
        >
          <ListItemIcon>
            <AssignmentIndIcon />
          </ListItemIcon>
          <ListItemText primary="ผู้ป่วยนอก" />
        </ListItem>



        {/* Report */}
        <ListItem
          button
          to="/report"
          component={MyNavLink}
          activeClassName="Mui-selected"
          exact
        >
          <ListItemIcon>
            <AirlineSeatFlat />
          </ListItemIcon>
          <ListItemText primary="ผู้ป่วยใน" />
        </ListItem>

        {/*About us */}
        <ListItem
          button
          to="/about"
          component={MyNavLink}
          activeClassName="Mui-selected"
          exact
        >
          <ListItemIcon>
            <ContactPhoneTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Refer" />
        </ListItem>
      </List>

      <Divider />
      <List>
        {/*Report */}
        <ListItem
          button
          to="/"
          component={MyNavLink}
          activeClassName="Mui-selected"
          exact
        >
          <ListItemIcon>
            <AssignmentTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Report" />
        </ListItem>


        {/*Login */}
        <ListItem
          button
          to="/"
          component={MyNavLink}
          activeClassName="Mui-selected"
          exact
        >
          <ListItemIcon>
            <LoginTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItem>


        {/*LogOut */}
        <ListItem
          button
          to="/"
          component={MyNavLink}
          activeClassName="Mui-selected"
          exact
        >
          <ListItemIcon>
            <LogoutTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="LogOut" />
        </ListItem>

       
        
      </List>
    </Drawer>
  );
}
