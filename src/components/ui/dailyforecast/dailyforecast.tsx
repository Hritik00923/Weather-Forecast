import { DailyForecastData } from "@/entities/weather_data";
import { format } from "date-fns";
import { formattemp } from "@/utils/formatting";
import { getstatusIcon } from "@/utils/formatting/functions";
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { useMemo } from "react";

interface DailyForecastProps {
    dailyforecast: DailyForecastData[];
}

export default function DailyForecast({ dailyforecast }: DailyForecastProps) {
    const mintempe = useMemo(()=>Math.min(...dailyforecast.map((f)=>f.mintemp)),[dailyforecast]);
    const maxtempe = useMemo(()=>Math.max(...dailyforecast.map((f)=>f.maxtemp)),[dailyforecast]);
    return (
        <Card>
            <CardContent className="flex flex-col items-start justify-center space-y-4">
                {dailyforecast.map((forecast,index) => {
                    const isLast = index===dailyforecast.length-1;
                    const min = forecast.mintemp;
                    const max = forecast.maxtemp;
                    return (
                        <div key={format(forecast.date, "yyyy-MM-dd")} className={cn({
                            "flex flex-row items-center space-x-2":true,
                            "mb-2":!isLast,
                        })}>
                            <div className="mr-4">
                                <Image 
                                    src={getstatusIcon(forecast.status)}
                                    alt={forecast.status}
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div className="flex flex-row items-center space-x-2">
                                <div>{formattemp(forecast.mintemp)}</div>
                                <div className="mx-4 flex w-[150px] flex-row items-center">
                                    <Progress 
                                    value={[forecast.mintemp,forecast.maxtemp]}
                                    min = {mintempe}
                                    max = {maxtempe}
                                    />
                                </div>
                                <div>{formattemp(forecast.maxtemp)}</div>
                            </div>
                        </div>
                    );
                })}
            </CardContent>
        </Card>
    );
}
