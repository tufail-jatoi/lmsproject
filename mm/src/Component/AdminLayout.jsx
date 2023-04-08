import  React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Route, Routes, useNavigate } from "react-router-dom";
import Institute from "../Screens/Admin/Institute";
import InstituteDetails from "../Screens/Admin/InstituteDetails";
import InstituteForm from "../Screens/Admin/InstituteForm";
import AdminStudent from "../Screens/Admin/AdminStudent";
import StudentRegisteration from "../Screens/Admin/StudentRegisteration";
import ViewStudentKU from "../Screens/Admin/ViewStudentKU";
import ViewStudentDow from "../Screens/Admin/ViewStudentDow";
import ViewStudentSMIT from "../Screens/Admin/ViewStudentSMIT";
import ViewStudentSAIMS from "../Screens/Admin/ViewStudentSAIMS";
import ViewStudentNED from "../Screens/Admin/ViewStudentNED";
import ViewTeacherNED from "../Screens/Admin/ViewTeacherNED";
import TeacherRegisteration from "../Screens/Admin/TeacherRegisteration";
import ViewTeacherDow from "../Screens/Admin/ViewTeacherDow";
import ViewTeacherSAIMS from "../Screens/Admin/ViewTeacherSAIMS";
import ViewTeacherSMIT from "../Screens/Admin/ViewTeacherSMIT";
import ViewTeacherKU from "../Screens/Admin/ViewTeacherKU";
import AdminTeacher from "../Screens/Admin/AdminTeacher";

const drawerWidth = 240;

function AdminLayout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigator = useNavigate();
  const nestinRoutesChange = (Routing) => {
    navigator(Routing);
    console.log(Routing);
  };

  const [menulist, setMeinlist] = React.useState([
    {
      name: "Institute",
      route: "institute",
    },

    {
      name: "Student",
      route: "student",
    },

    {
      name: "Teacher",
      route: "teacher",
    },
 
  ]);

  const drawer = (
    <div>
      <Box sx={{ margin: "10px 0" }}>
        <Typography
          sx={{ fontSize: "20px", fontWeight: "bold" }}
          variant="p"
          noWrap
          component="div"
        >
          Admin Routing
        </Typography>
      </Box>

      <Divider />
      <List>
        {menulist.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => nestinRoutesChange(text.route)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
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
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Routes>
          <Route path="/institute" element={<Institute />}></Route>
          <Route path="/student" element={<AdminStudent />}></Route>
          <Route path="/studentregisteration" element={<StudentRegisteration />}></Route>
          <Route path="/viewstudentku" element={<ViewStudentKU />}></Route>
          <Route path="/viewstudentdow" element={<ViewStudentDow />}></Route>
          <Route path="/viewstudentsmit" element={<ViewStudentSMIT />}></Route>
          <Route path="/viewstudentsaims" element={<ViewStudentSAIMS />}></Route>
          <Route path="/viewstudentned" element={<ViewStudentNED />}></Route>
          <Route path="/teacher" element={<AdminTeacher />}></Route>
          <Route path="/viewteacherned" element={<ViewTeacherNED />}></Route>
          <Route path="/teacherregisteration" element={<TeacherRegisteration />}></Route>
          <Route path="/viewteacherdow" element={<ViewTeacherDow />}></Route>
          <Route path="/viewteacherku" element={<ViewTeacherKU />}></Route>
          <Route path="/viewteachersaims" element={<ViewTeacherSAIMS />}></Route>
          <Route path="/viewteachersmit" element={<ViewTeacherSMIT />}></Route>
          <Route path="/institutedetails" element={<InstituteDetails />}></Route>
          <Route path="/instituteform" element={<InstituteForm />}></Route>
        </Routes>
      </Box>     
    </Box>
    
    </>
  );
}

AdminLayout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default AdminLayout;