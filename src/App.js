import logo from './logo.svg';
import './App.css';
import MiniCard from './components/MiniCard';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Sidebar from './components/slides/SideBar';
import Tabs from './components/tabs';
import TableList from './components/TableProfile';
import Commandes from './routes/Commandes';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route element={<Sidebar />}>
        <Route path="/" element={<MiniCard />} />
        <Route path="/tabs" element={<Tabs />} />
        <Route path="/commandes" element={<Commandes/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
