import { Button } from "@chakra-ui/react";


export default function LMButton({text, action}){
    console.log(action)
    return (
        <Button width={44} borderRadius={16} bgColor='secondary.100' >
            {text}
        </Button>
    );
};
