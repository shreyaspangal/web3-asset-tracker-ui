import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { CARD_OUTLINE_STYLES } from "@/data/styles";
import InfoTooltip from "@/components/custom/info-tooltip";

export default function SubCard({ data }: any) {
    return (
        <Card className={`${CARD_OUTLINE_STYLES}`}>
            <CardHeader className="p-[16px_24px] border-b-[1px] border-[var(--border)]">
                <CardTitle className="text-[1rem] text-[var(--primary)]">{data.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-[24px] flex flex-col gap-[12px]">
                {
                    data.content.map((row: any, index: number) => (
                        <div key={row.id} className="flex justify-between">
                            <div className="flex items-center gap-1">
                                <p className="font-medium text-[0.75rem] text-[var(--muted-foreground)] flex-1">
                                    {row.title}
                                </p>
                                {row.info && <InfoTooltip data={row.info} />}
                            </div>
                            <p className="font-medium text-[0.75rem] shrink-0">{row.value}</p>
                        </div>
                    ))
                }
            </CardContent>
        </Card>
    )
}