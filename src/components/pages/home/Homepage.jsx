import Hero from "./components/Hero.jsx";
import {Box} from "@chakra-ui/react";
import Specials from "./components/Specials.jsx";
import Testimonials from "./components/Testimonials.jsx";
import About from "./components/About.jsx";

export default function Homepage(){
    return (
        <Box bg="bg-surface">
            <section id="hero">
                <Hero />
            </section>
            <section id="specials">
                <Specials />
            </section>
            <section id="testimonials">
                <Testimonials />
            </section>
            <section id="about">
                <About />
            </section>
        </Box>
    );
};
