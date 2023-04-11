import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {Icon} from "@chakra-ui/react";

export default function Rating({isFilled}){
    return isFilled ? <Icon as={AiFillStar} color='secondary.100'/> : <Icon as={AiOutlineStar} color='blackAlpha.600'/>;
};
