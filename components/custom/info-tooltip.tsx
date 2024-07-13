"use client"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { CARD_OUTLINE_STYLES } from "@/data/styles";
import useDimensions from "@/hooks/useDimensions";
import { Info } from "lucide-react";
import { useState } from "react";

type Props = {
    data: any
}

export default function InfoToolrip({ data }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const { width } = useDimensions();

    const enableHover = width > 1024;
    const enableClick = width <= 1024;

    function handleShowTooltip() {
        setIsOpen(true)
    }

    function handleHideTooltip() {
        setIsOpen(false)
    }

    return (
        <TooltipProvider delayDuration={200}>
            <Tooltip open={isOpen}>
                <TooltipTrigger
                    onPointerLeave={!enableHover ? undefined : handleHideTooltip}
                    onPointerEnter={!enableHover ? undefined : handleShowTooltip}
                    onBlur={!enableClick ? undefined : handleHideTooltip}
                    onClick={!enableClick ? undefined : handleShowTooltip}>
                    <Info className="w-4 h-4 text-[var(--muted-foreground)]" />
                </TooltipTrigger>
                <TooltipContent className={`${CARD_OUTLINE_STYLES} max-w-[250px] py-4 px-3`}>
                    <p className="mb-3 text-[1.12rem] font-semibold">{data.title}</p>
                    <p className="mb-0 text-[0.75rem]">{data.description}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}