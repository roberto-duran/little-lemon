import Hero from "./components/Hero.jsx";
import {Box} from "@chakra-ui/react";
import Specials from "./components/Specials.jsx";

export default function Homepage(){
    return (
        <Box bg="bg-surface">
            <section id="hero">
                <Hero />
            </section>
            <section id="specials">
                <Specials />
            </section>
        </Box>
    );
};
