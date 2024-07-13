import Image from "next/image"
import FULL_WIDTH_ICON from "@/public/images/full-width-logo.svg"
import MOBILE_LOGO_ICON from "@/public/icons/logo.svg"
import { useContext, useState } from "react"
import { AuthContext } from "@/context/auth-context"
import { Menu } from 'lucide-react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


export default function Navbar() {
    const { handleDisconnect } = useContext(AuthContext);
    const [disconnectAlert, setDisconnectAlert] = useState(false);

    function handleWalletDisconnect() {
        handleDisconnect();
        hideDisconnectAlert();
    }

    function showDisconnectAlert() {
        setDisconnectAlert(true);
    }

    function hideDisconnectAlert() {
        setDisconnectAlert(false);
    }

    const DISCONNECT_ALERT_PROPS = {
        open: disconnectAlert,
        handleDisconnect: handleWalletDisconnect,
        hideDisconnectAlert,
    }

    return (
        <nav className="w-full bg-[#fff] shadow-md">
            <div className="max-w-[1400px] mx-auto py-4 px-3 flex items-center justify-between">
                <Image alt="Logo" src={FULL_WIDTH_ICON} width={128} height={30} className="object-contain hidden sm:inline-block" />
                <Image alt="Logo" src={MOBILE_LOGO_ICON} width={30} height={30} className="object-contain sm:hidden" />
                <button onClick={showDisconnectAlert} type="button" className="action-btn text-[var(--accent)] border-[1px] border-[var(--border)] rounded-[var(--button-radius)] hover:bg-[#cecece] px-[24px] py-[8px] text-[14px] font-semibold transition-all">
                    Disconnect Wallet
                </button>
                <DisconnectAlert {...DISCONNECT_ALERT_PROPS} />
            </div>
        </nav>
    )
}

function DisconnectAlert({ open, handleDisconnect, hideDisconnectAlert }: any) {
    return (
        <AlertDialog open={open}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action will disconnect your wallet account and redirect you to login page.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={hideDisconnectAlert} className="border-none">Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDisconnect} className="rounded-[var(--card-radius)] border-[1px] border-destructive text-destructive hover:bg-destructive/25 focus:bg-destructive/25">Disconnect</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}