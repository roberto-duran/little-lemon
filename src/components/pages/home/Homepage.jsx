import Hero from "./components/Hero.jsx";
import {Box} from "@chakra-ui/react";

export default function Homepage(){
    return (
        <Box bg="bg-surface">
            <section id="hero">
                <Hero/>
            </section>
        </Box>
    );
};
