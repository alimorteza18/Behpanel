import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import MenuIcon from "@mui/icons-material/Menu";
import { theme } from "./../ui/theme";
import { menuData } from "../../data/MenuData";
import { AppBar, Toolbar, Typography, Box, CssBaseline, Divider, Drawer, IconButton, List, Stack, Badge, Tooltip, } from "@mui/material";
import SubMenu from "./SubMenu";
import { NavbarData } from "../../data/NavbarData";
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import httpService from "../../Services/httpService";
import { SCRIPT_URL } from "../../Services/contactService";
import { Link } from "react-router-dom";

//NOTE Create RTL Cache
const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const MainLayout = (props) => {
  const [res, setres] = useState([]);
  useEffect(() => {
    if (pathname !== props.location) {
      try {
        async function fetchdata() {
          let res = await httpService.get(`${SCRIPT_URL}/dashboard/info`)
          setres(res.data)
        }
        fetchdata()

      } catch (e) {
        console.log(e);
      }
    }

  }, []);
  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const pathname = window.location.pathname;
  const drawer = (
    <div style={{ backgroundColor: "rgb(44 , 48 , 52)", }}>
      <Toolbar />
      <Divider />
      <List>
        {menuData.map((item, index) => (
          <SubMenu item={item} key={index} />
        ))}
      </List>
      <Divider />
    </div>
  );
  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>Behpanel</title>
          </Helmet>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
              color="black"
              position="fixed"
              sx={{
                // width: { md: `calc(100% - ${drawerWidth}px)` },
                zIndex: (theme) => theme.zIndex.drawer + 1,
                display: pathname === props.location ? "none" : "block"
              }}
            >
              <Toolbar disableGutters >
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ ml: 0.5, display: { md: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
                <img className="navbar-logo" src="logo.svg" alt="Behpanel Logo" />
                <div style={{ width: "100vw", display: "flex", justifyContent: "flex-end" }}>
                  <Stack direction="row" spacing={1}>
                    <Link to="/task" style={{ textDecoration: 'none', color: 'white' }}>
                      <IconButton>
                        <Badge anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }} color="secondary" badgeContent={res.remainingTaskCount} showZero>
                          <Tooltip title="وظایف" arrow>
                            <PlaylistAddCheckIcon style={{ color: "white", width: "2rem" }} />
                          </Tooltip>
                        </Badge>
                        <Typography variant="subtitle2" sx={{ fontSize: "12px", display: { xs: "none", sm: "block" }, }} color="white">
                          وظایف
                        </Typography>
                      </IconButton>

                    </Link>
                    {NavbarData.map((item, index) => (
                      <Link to={item.to} key={index} style={{ textDecoration: 'none', color: 'white' }}>
                        <IconButton>
                          <Tooltip title={item.title} arrow>
                            {item.icon}
                          </Tooltip>
                          <Typography variant="subtitle2" sx={{ ml: 0.7, fontSize: "12px", display: { xs: "none", sm: "block" }, }} color="white">
                            {item.title}
                          </Typography>
                        </IconButton>
                      </Link>
                    ))}
                  </Stack>
                </div>
              </Toolbar >
            </AppBar>
            <Box
              component="nav"
              sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 }, display: pathname === props.location ? "none" : "block" }}
              aria-label="mailbox folders"

            >
              {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
              <Drawer

                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: "block", md: "none", },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                  }
                }}
              >
                {drawer}
              </Drawer>
              <Drawer
                variant="permanent"
                sx={{
                  display: { xs: "none", md: pathname === props.location ? "none" : "block" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                  }
                }}
                open
              >
                {drawer}
              </Drawer>
            </Box>
            <Box

              component="main"
              sx={{
                flexGrow: 1,
                p: 3,
                width: { md: `calc(100% - ${drawerWidth}px)` },

              }}
            >
              <Toolbar />
              {props.children}
            </Box>
          </Box>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};
export default MainLayout;