import {FC} from "react"
import { HStack, Spacer, Box, Text } from "@chakra-ui/react"
import dynamic from "next/dynamic"
import styles from "../styles/Home.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"

const NavBar:FC = () => {
    const WalletMultiButtonDynamic = dynamic(
        async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
        { ssr: false }
    );
    

    return(
    <div>
        <HStack>
            <Text
            color={"black"}
            >LOGO HERE</Text>
            <Spacer/>
            <WalletMultiButtonDynamic/>
        </HStack>
    </div>
    )
}

export default NavBar;