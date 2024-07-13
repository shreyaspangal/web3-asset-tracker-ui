"use client"

import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Wallet } from 'lucide-react';
import { DEPOSIT_SUMMARY, TABS, UNWIND_SUMMARY } from "@/data/asset-details";
import { CARD_OUTLINE_STYLES, } from "@/data/styles";
import { useState } from "react";
import { Input } from "../ui/input";
import { Slider } from "../ui/slider";

export const TAB_STYLES = "data-[state=active]:bg-[#fff] text-[var(--muted-foreground)] hover:text-[var(--primary)] data-[state=active]:text-[var(--primary)] data-[state=active]:rounded-[13px] py-[6px] px-[12px] capitalize w-full font-semibold"

export default function CardWithTabs() {
    const [sliderValue, setSliderValue] = useState([1.1]);
    const [activeTab, setActiveTab] = useState("deposit");

    function handleSliderValueChange(value: number[]) {
        setSliderValue(value);
    }

    const SLIDER_PROPS = {
        sliderValue,
        handleSliderValueChange
    }

    const TABS_CONTENT: any = {
        deposit: <DepositTabContent {...SLIDER_PROPS} />,
        borrow: <DepositTabContent {...SLIDER_PROPS} />,
        unwind: <UnwindTabContent />,
    }

    return (
        <Card className={`${CARD_OUTLINE_STYLES} p-[1.5rem]`}>
            <CardContent className="p-0">
                <Tabs defaultValue="deposit" value={activeTab} onValueChange={setActiveTab} className="w-full flex flex-col gap-y-[32px]">
                    <TabsList className="bg-[var(--muted)] rounded-[var(--card-radius)] w-full justify-between">
                        {
                            TABS.map((tab, index) => (
                                <TabsTrigger key={tab.id} value={tab.value} className={`${TAB_STYLES}`}>{tab.label}</TabsTrigger>
                            ))
                        }
                    </TabsList>
                    <TabsContent value={activeTab}>
                        {TABS_CONTENT[activeTab]}
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    )
}

function DepositTabContent({ sliderValue, handleSliderValueChange }: any) {
    return (
        <div className="flex flex-col gap-[24px]">
            <div className="">
                <p className="mb-0 text-[var(--primary)] text-[1.12rem] font-semibold mb-[4px]">
                    1-Click Leverage
                </p>
                <p className="mb-0 text-[var(--muted-foreground)] text-[0.88rem]">
                    Increase the yield potential of your
                    tokens with up to 4x leverage.
                    This process deposits a user's tokens and automatically borrows against them,
                    repeating these steps until your desired amount of leverage is acquired.
                </p>
            </div>
            <Card className={`${CARD_OUTLINE_STYLES}`}>
                <CardContent className="p-[16px]">
                    <div className="flex items-center justify-between gap-2">
                        <div className="">
                            <Input type="number" className="border-none text-[1.5rem] font-medium pl-0" placeholder="0" />
                            <p className="mb-0 text-[0.88rem] text-[var(--muted-foreground)] font-medium">$0</p>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                            <Image alt="Eth coin" src="/images/coins/eth-coin.svg" className="" width={20} height={20} />
                            <p className="mb-0 uppercase">eth</p>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-end gap-1 text-[var(--accent)]">
                        <p className="mb-0 text-[var(--accent)] font-semibold">0</p>
                        <Wallet className="w-[18px] h-[18px] text-[var(--accent)]" />
                    </div>
                </CardContent>
            </Card>

            <div className="flex flex-col gap-[12px]">
                <div className="flex items-center justify-between">
                    <p className="mb-0 text-[var(--muted-foreground)] font-[0.88rem]">1.1</p>
                    <p className="mb-0 text-[var(--muted-foreground)] font-[0.88rem]">Leverage x{sliderValue}</p>
                    <p className="mb-0 text-[var(--muted-foreground)] font-[0.88rem]">4</p>
                </div>
                <Slider defaultValue={[1.1]} value={sliderValue} onValueChange={handleSliderValueChange} min={1.1} max={4} step={0.01} />
            </div>

            <div className="summary">
                {
                    DEPOSIT_SUMMARY.map((summary, index) => (
                        <div key={summary.id} className="flex justify-between items-center py-[8px] px-[16px] even:bg-[var(--muted)]">
                            <div className="flex items-center gap-1">
                                {summary?.imgSrc && <Image alt="icon" src={summary.imgSrc} className="" width={14} height={14} />}
                                <p className="text-[var(--muted-foreground)] text-[0.75rem] font-medium">{summary.title}</p>
                            </div>
                            <p className="text-[var(--muted-foreground)] text-[0.75rem] medium">{summary.value}</p>
                        </div>
                    ))
                }
            </div>

            <ConnectBtn />
        </div>
    )
}

function UnwindTabContent() {
    return (
        <div className="flex flex-col gap-[24px]">
            <div className="">
                <p className="mb-0 text-[var(--primary)] text-[1.12rem] font-semibold mb-[4px]">
                    Adjust / Repay
                </p>
                <p className="mb-0 text-[var(--muted-foreground)] text-[0.88rem]">
                    Decrease or close out your leverage position. This process will automatically adjust or repay your position while avoiding liquidation.
                </p>
            </div>
            <Card className={`${CARD_OUTLINE_STYLES}`}>
                <CardContent className="p-[16px]">
                    <div className="flex items-center justify-between gap-2">
                        <div className="">
                            <Input className="border-none text-[1.5rem] font-medium pl-0" value={0.0} />
                            <p className="mb-0 text-[0.88rem] text-[var(--muted-foreground)] font-medium">$0</p>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                            <Image alt="Eth coin" src="/images/coins/eth-coin.svg" className="" width={20} height={20} />
                            <p className="mb-0 uppercase">eth</p>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-end gap-1 text-[var(--accent)]">
                        <p className="mb-0 text-[var(--accent)] font-semibold">0</p>
                        <Wallet className="w-[18px] h-[18px] text-[var(--accent)]" />
                    </div>
                </CardContent>
            </Card>

            <div className="summary">
                {
                    UNWIND_SUMMARY.map((summary: any, index: number) => (
                        <div key={summary.id} className="flex justify-between items-center py-[8px] px-[16px] even:bg-[var(--muted)]">
                            <div className="flex items-center gap-1">
                                {summary?.imgSrc && <Image alt="icon" src={summary.imgSrc} className="" width={14} height={14} />}
                                <p className="text-[var(--muted-foreground)] text-[0.75rem] font-medium">{summary.title}</p>
                            </div>
                            <p className="text-[var(--muted-foreground)] text-[0.75rem] medium">{summary.value}</p>
                        </div>
                    ))
                }
            </div>

            <ConnectBtn />
        </div>
    )
}

function ConnectBtn() {
    return (
        <button type="button" className="py-[16px] px-[32px] font-medium bg-[var(--accent)] text-[#fff] rounded-[var(--button-radius)] hover:contrast-75 focus:contrast-75 transition-all">
            Connect
        </button>
    )
}
