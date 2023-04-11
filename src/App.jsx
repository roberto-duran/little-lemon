    import {Box} from "@chakra-ui/react";

import Header from "./components/Header";
import Footer from "./components/Footer";
    import Router from "./Router.jsx";

function App(){
    return (
        <Box
            minH="100vh"
            display="flex"
            flexDirection="column"
        >
            <Box height='5rem'>
                <Header />
            </Box>
            <Box flex={1}>
                <main>
                    <Router/>
                </main>
            </Box>
            <Box height='13.8rem'>
                <Footer/>
            </Box>
        </Box>
    );
}

export default App;
