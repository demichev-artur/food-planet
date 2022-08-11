import './App.css';
import Main from "./pages/Main/Main";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound/NotFound";
import Contacts from "./pages/Contacts/Contacts";
import Delivery from "./pages/Delivery/Delivery";
import Basket from "./pages/Basket/Basket";
import Admin from "./pages/Admin/Admin";
import AdminMain from "./pages/Admin/components/AdminMain/AdminMain";
import AdminReviews from "./pages/Admin/components/AdminReviews/AdminReviews";
import AdminOrders from "./pages/Admin/components/AdminOrders/AdminOrders";
import AdminMenu from "./pages/Admin/components/AdminMenu/AdminMenu";
import AdminContacts from "./pages/Admin/components/AdminContacts/AdminContacts";
import AdminEmployees from "./pages/Admin/components/AdminEmployees/AdminEmployees";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header/>}>
                        <Route index element={<Main/>}/>
                        <Route path="delivery" element={<Delivery/>}/>
                        <Route path="contacts" element={<Contacts/>}/>
                        <Route path="basket" element={<Basket/>}/>
                    </Route>

                    <Route path="admin" element={<Admin/>}>
                        <Route index element={<AdminMain/>}/>
                        <Route path="orders" element={<AdminOrders/>}/>
                        <Route path="menu" element={<AdminMenu/>}/>
                        <Route path="contacts" element={<AdminContacts/>}/>
                        <Route path="reviews" element={<AdminReviews/>}/>
                        <Route path="employees" element={<AdminEmployees/>}/>
                    </Route>

                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>

        </>
    );
}

export default App;
