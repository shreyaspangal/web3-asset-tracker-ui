import { useToast } from "@/components/ui/use-toast"
import { AuthContext } from "./auth-context";
import { useEffect, useState } from "react";
import { Web3 } from "web3";
import { ToastAction } from "@/components/ui/toast";

export default function AuthProvider({ children }: any) {
    const { toast } = useToast()
    const [web3, setWeb3] = useState<Web3 | null>(null);
    const [provider, setProvider] = useState<string | null>(null);
    const [warning, setWarning] = useState<string | null>(null);
    const [accounts, setAccounts] = useState<string[] | null>(null);

    useEffect(() => {
        // ensure that there is an injected the Ethereum provider
        if (window.ethereum) {
            // use the injected Ethereum provider to initialize Web3.js
            setWeb3(new Web3(window.ethereum));
            // check if Ethereum provider comes from MetaMask
            if (window.ethereum.isMetaMask) {
                setProvider("Connected to Ethereum with MetaMask.");
                toast({
                    description: "Connected to Ethereum with MetaMask.",
                })
            } else {
                setProvider("Non-MetaMask Ethereum provider detected.");
                toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: "Non-MetaMask Ethereum provider detected.",
                    action: <ToastAction altText="Try again">Try again</ToastAction>,
                })
            }
        } else {
            // no Ethereum provider - instruct user to install MetaMask
            setWarning("Please install MetaMask");
            // setAccountButtonDisabled(true);
            toast({
                variant: "destructive",
                title: "Uh oh! MetaMask not found.",
                description: "Please install MetaMask",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        }
    }, []);

    // click event for "Request MetaMask Accounts" button
    async function requestAccounts() {
        if (web3 === null) {
            return;
        }

        // request accounts from MetaMask
        await window.ethereum.request({ method: "eth_requestAccounts" });
        // document.getElementById("requestAccounts")?.remove();

        // get list of accounts
        const allAccounts = await web3.eth.getAccounts();
        setAccounts(allAccounts);
        // get the first account and populate placeholder
        // setConnectedAccount(`Account: ${allAccounts[0]}`);
        toast({
            description: "Account details fetched successfully.",
        })
    }

    function handleDisconnect() {
        setAccounts(null);
        toast({
            description: "Wallet disconnected successfully.",
        })
    }

    return (
        <AuthContext.Provider value={{ requestAccounts, accounts, handleDisconnect }}>
            {children}
        </AuthContext.Provider>
    )
}