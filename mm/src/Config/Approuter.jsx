
import { Routes ,Route } from 'react-router-dom';


import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";
import Login from "../Component/LoginSignup/Login";
import Signup from "../Component/LoginSignup/signup";
import ProtectedRoute from "./ProtectedRoute";
import TeacherLayout from "../Component/TeacherLayout";
import StudentLayout from "../Component/StudentLayout";
import AdminLayout from "../Component/AdminLayout";

function AppRouter() {
  const [user] = useAuthState(auth);

  return (
    <Routes>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <ProtectedRoute path="/teacher" component={TeacherLayout} user={user} />
      <ProtectedRoute path="/student" component={StudentLayout} user={user} />
      <ProtectedRoute path="/admin" component={AdminLayout} user={user} />
    </Routes>
  );
}

export default AppRouter;
