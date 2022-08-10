import './App.css';
import Main from "./pages/Main/Main";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound/NotFound";
import Contacts from "./pages/Contacts/Contacts";
import Delivery from "./pages/Delivery/Delivery";
import Basket from "./pages/Basket/Basket";
import Admin from "./pages/Admin/Admin";

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

                    <Route path="/admin" element={<Admin/>}/>

                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>

        </>
    );
}

export default App;
