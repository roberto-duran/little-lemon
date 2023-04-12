import {Route, Routes} from "react-router-dom";
import Homepage from "./components/pages/home/Homepage.jsx";
import BookingPage from "./components/pages/booking/BookingPage.jsx";

export default function Router(){
    return (
        <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/reservations" element={<BookingPage />}></Route>
            <Route path="/" element={<Homepage />}></Route>
        </Routes>
    );
};
