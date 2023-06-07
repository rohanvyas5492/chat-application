import ChatFeed from "./pages/ChatFeed";
import Landing from "./pages/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./layout/SharedLayout";
import AllUsers from "./pages/admin/AllUsers";
import AddUser from "./pages/admin/CreateUser";
import AddStaff from "./pages/admin/CreateStaff";
import Messages from "./pages/admin/Messages";
import Dashboard from "./pages/admin/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" index element={<Landing />}/>
        <Route path="/chats" element={<ChatFeed />}/>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="all-users" element={<AllUsers />} />
          <Route path="add-user" element={<AddUser />} />
          <Route path="add-staff" element={<AddStaff />} />
          <Route path="messages" element={<Messages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
