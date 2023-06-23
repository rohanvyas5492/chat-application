import ChatFeed from "./pages/ChatFeed";
import Landing from "./pages/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./layout/SharedLayout";
import AllUsers from "./pages/admin/AllUsers";
import AddUser from "./pages/admin/CreateUser";
import StaffMembers from "./pages/admin/StaffMembers";
import Messages from "./pages/admin/Messages";
import Dashboard from "./pages/admin/Dashboard";
import AllGroups from "./pages/admin/AllGroups";
import CreateGroup from "./pages/admin/CreateGroup";
import CreateStaff from "./pages/admin/CreateStaff";
import CreateRole from "./pages/admin/CreateRole";
import AllRoles from "./pages/admin/AllRoles";
import Login from "./pages/admin/Login";
import Settings from "./pages/admin/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Landing />}/>
        <Route path="/chats" element={<ChatFeed />}/>
        <Route path="/admin-login" element={<Login />}/>
        <Route path="/admin" element={<SharedLayout />}>
          <Route index path="dashboard" element={<Dashboard />} />
          <Route path="all-users" element={<AllUsers />} />
          <Route path="add-user" element={<AddUser />} />
          <Route path="staff-members" element={<StaffMembers />} />
          <Route path="create-staff" element={<CreateStaff />} />
          <Route path="messages" element={<Messages />} />
          <Route path="all-groups" element={<AllGroups />} />
          <Route path="create-group" element={<CreateGroup />} />
          <Route path="all-roles" element={<AllRoles />} />
          <Route path="create-role" element={<CreateRole />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
