import { Box } from "@chakra-ui/react";
import Hero from "./Hero.jsx";
import Specials from "./Specials.jsx";
import {Route, Routes} from "react-router-dom";
import Reservations from "./Reservations.jsx";
import Homepage from "./Homepage.jsx";

export default function Main(){
    return (
        <main>
            <Box bg="bg-surface">
                <section id="hero">
                    <Hero/>
                </section>
                <Routes>
                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="/specials" element={<Specials />}></Route>
                    <Route path="/reservations" element={<Reservations />}></Route>
                </Routes>
            </Box>
        </main>
    );
}
