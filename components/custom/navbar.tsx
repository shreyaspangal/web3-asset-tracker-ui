import Image from "next/image"
import FULL_WIDTH_ICON from "@/public/images/full-width-logo.svg"
import { useContext } from "react"
import { AuthContext } from "@/context/auth-context"

export default function Navbar() {
    const { handleDisconnect } = useContext(AuthContext);

    return (
        <nav className="w-full bg-[#fff] shadow-md">
            <div className="max-w-[1400px] mx-auto py-4 px-3 flex justify-between">
                <Image alt="Logo" src={FULL_WIDTH_ICON} width={128} height={30} />
                <button onClick={handleDisconnect} type="button" className="action-btn text-[var(--accent)] border-[1px] border-[var(--border)] rounded-[var(--button-radius)] hover:bg-[#cecece] px-[24px] py-[8px] text-[14px] font-semibold transition-all">
                    Disconnect Wallet
                </button>
            </div>
        </nav>
    )
}