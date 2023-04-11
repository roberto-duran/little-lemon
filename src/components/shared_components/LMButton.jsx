import {Button} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function LMButton({text, redirect}){
    const navigation = useNavigate();
    const redirectHandler = () => {
        navigation(redirect? redirect : '/');
    }
    return (
        <Button width={44} borderRadius={16} bgColor='secondary.100' onClick={redirectHandler}>
            {text}
        </Button>
    );
};
