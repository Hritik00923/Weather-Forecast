import { useState, useEffect } from 'react';
import { HourlyForecastData } from "@/entities/weather_data";
import { format } from "date-fns";
import { formattemp } from "@/utils/formatting";
import Image from "next/image";
import { getstatusIcon } from "@/utils/formatting/functions";
import { Card, CardContent } from "@/components/ui/card";

interface HourlyForecastProps {
    hourlyforecast: HourlyForecastData[];
}

export default function HourlyForecast({ hourlyforecast }: HourlyForecastProps) {
    const [currentTime, setCurrentTime] = useState(new Date());

    // Update current time every minute
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    return (
        <Card className="p-4">
            <CardContent className="flex flex-row items-center justify-start space-x-4">
                {hourlyforecast.map((forecast) => (
                    <div key={format(forecast.date, "yyyy-MM-dd HH:mm")} className="flex flex-col items-center justify-center space-y-2">
                        <div className="text-xs text-gray-500">{format(forecast.date, "HH:mm")}</div>
                        <div>
                            <Image 
                                src={getstatusIcon(forecast.status)}
                                alt={forecast.status}
                                width={32}
                                height={32}
                            />
                        </div>
                        <div>
                            {formattemp(forecast.maxtemp)}/{formattemp(forecast.mintemp)}
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
