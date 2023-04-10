import {Box, Grid, GridItem} from "@chakra-ui/react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

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
                <Main/>
            </Box>
            <Box height='13.8rem'>
                <Footer/>
            </Box>
        </Box>
    );
}

export default App;
