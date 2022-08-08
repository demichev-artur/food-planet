import './App.css';
import Main from "./pages/Main/Main";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound/NotFound";
import Contacts from "./pages/Contacts/Contacts";
import Delivery from "./pages/Delivery/Delivery";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/delivery" element={<Delivery/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>

        </>
    );
}

export default App;
