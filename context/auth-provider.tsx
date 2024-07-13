import { useToast } from "@/components/ui/use-toast"
import { AuthContext } from "./auth-context";
import { useEffect, useState } from "react";
import { Web3 } from "web3";

export default function AuthProvider({ children }: any) {
    const { toast } = useToast()
    const [web3, setWeb3] = useState<Web3 | null>(null);
    const [accounts, setAccounts] = useState<string[] | null | undefined>(undefined);

    useEffect(() => {
        // ensure that there is an injected the Ethereum provider
        if (window?.ethereum) {
            // use the injected Ethereum provider to initialize Web3.js
            setWeb3(new Web3(window?.ethereum));
            // check if Ethereum provider comes from MetaMask
            if (window?.ethereum?.isMetaMask) {
                toast({
                    description: "Connected to Ethereum with MetaMask.",
                })

                const accountKey = localStorage.getItem("account");
                if (accountKey) {
                    setAccounts([accountKey])
                    toast({
                        description: "Account details fetched successfully.",
                    });
                    return;
                } else {
                    setAccounts(null)
                }
            } else {
                toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: "Non-MetaMask Ethereum provider detected.",
                })
                console.error("Non-MetaMask Ethereum provider detected")
            }
        } else {
            // no Ethereum provider - instruct user to install MetaMask
            toast({
                variant: "destructive",
                title: "Uh oh! MetaMask not found.",
                description: "Please install MetaMask",
            })
            console.error("MetaMask not found!");
        }
    }, []);

    // click event for "Request MetaMask Accounts" button
    async function requestAccounts() {
        if (web3 === null) {
            console.error("Web3 instance not found!")
            toast({
                variant: "destructive",
                description: "Uh oh! Web3 instance not found.",
            })
            return;
        }

        // request accounts from MetaMask
        await window?.ethereum?.request({ method: "eth_requestAccounts" });

        // get list of accounts
        const allAccounts = await web3.eth.getAccounts();
        // set list of accounts
        setAccounts(allAccounts);
        localStorage.setItem("account", JSON.stringify(allAccounts[0]));
        toast({
            description: "Account details fetched successfully.",
        })
    }

    function handleDisconnect() {
        localStorage.removeItem("account");
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