import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown } from 'lucide-react';
import { COINS_LIST, DEPOSIT_SUMMARY, STAT_DETAILS, SUB_CARDS_DATA, TABS } from "@/data/asset-details";
import { CARD_OUTLINE_STYLES } from "@/data/styles";
import InfoTooltip from "@/components/custom/info-tooltip";
import CardWithTabs from "@/components/custom/card-with-tabs";
import SubCard from "@/components/custom/sub-card";

export default function Home() {
    return (
        <main className="min-h-screen bg-[var(--background)] py-[32px] px-[16px]">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-5">
                <section className="assets-overview">
                    <Card className={`${CARD_OUTLINE_STYLES}`}>
                        <CardContent className="p-0">
                            <div className="grid lg:grid-cols-[300px_1fr] xl:grid-cols-[400px_1fr]">
                                <CoinsDropdown />
                                <StatDetails />
                            </div>
                        </CardContent>
                    </Card>
                </section>
                <section className="assets-details">
                    <div className="grid lg:grid-cols-2 gap-[16px]">
                        <CardWithTabs />
                        <CardWithTabs />
                    </div>
                </section>
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-[16px]">
                    {
                        SUB_CARDS_DATA.map((card: any, index: number) => (
                            <SubCard key={card.id} data={card} />
                        ))
                    }
                </section>
            </div>
        </main>
    );
}

// Child Components START

function CoinsDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="w-full text-left lg:border-r-[1px] border-[var(--border)] py-[24px]">
                <div className="border-l-[4px] border-[rgb(98, 104, 142)]">
                    <div className="flex items-center justify-between gap-2 pl-[10px] sm:pl-[20px] lg:pl-[40px] pr-[20px]">
                        <div className="flex items-center gap-2">
                            <Image alt="Eth coin" src="/images/coins/eth-coin.svg" width={48} height={48} />
                            <div className="max-w-full">
                                <p className="mb-0 uppercase text-[0.88rem] font-semibold text-[var(--muted-foreground)] truncate">eth</p>
                                <p className="mb-0 capitalize text-[1.12rem] font-semibold truncate">ethereum</p>
                            </div>
                        </div>
                        <ChevronDown className="w-7 h-7" />
                    </div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={0} className="w-[85vw] sm:w-[95vw] lg:w-[350px] rounded-[var(--card-radius)] border-[var(--border)]">
                {
                    COINS_LIST.map((coin, index) => (
                        <DropdownMenuItem key={coin.id} className="cursor-pointer hover:bg-[var(--muted)] focus:bg-[var(--muted)] rounded-[var(--card-radius)] py-3">
                            <div key={coin.id} className="flex items-center justify-between gap-2 w-full">
                                <div className="flex items-center gap-2">
                                    <Image alt="Eth coin" src="/images/coins/eth-coin.svg" width={24} height={24} />
                                    <p className="mb-0 text-[1.12rem] font-semibold truncate lh-[1.6]">{coin.symbol}</p>
                                </div>
                                <p className="mb-0 text-[0.88rem] font-semibold text-[var(--muted-foreground)] truncate">{coin.title}</p>
                            </div>
                        </DropdownMenuItem>
                    ))
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

function StatDetails() {
    return (
        <div className="stat-details hidden lg:flex items-center justify-around gap-5 py-[24px]">
            {
                STAT_DETAILS.map((stat, index) => (
                    <div key={stat.id} className="stat-detail flex flex-col">
                        <p className="mb-0 text-[0.88rem] font-medium text-[var(--muted-foreground)]">{stat.title}</p>
                        <p className="mb-0 text-[1.5rem] font-bold text-[var(--primary)]">{stat.value}</p>
                    </div>
                ))
            }
        </div>
    )
}

// Child Components END
