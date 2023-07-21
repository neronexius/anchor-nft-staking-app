import {FC} from "react"
import { HStack, Spacer, Box } from "@chakra-ui/react"
import { WalletConnectButton } from "@solana/wallet-adapter-react-ui"

const NavBar:FC = () => {

    return(
    <Box 
    width='100%'
    bg='black'
    height='10%'
    >
        <HStack>
            <WalletConnectButton></WalletConnectButton>
        </HStack>
    </Box>
    )
}

export default NavBar;