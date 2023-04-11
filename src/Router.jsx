import {Route, Routes} from "react-router-dom";
import Homepage from "./components/pages/home/Homepage.jsx";
import Reservation from "./components/pages/reservation/Reservation.jsx";

export default function Router(){
    return (
        <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/reservations" element={<Reservation />}></Route>
            <Route path="/" element={<Homepage />}></Route>
        </Routes>
    );
};
