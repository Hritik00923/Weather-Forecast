import { WeatherData } from "@/entities/weather_data";
import { formattemp } from "@/utils/formatting";
import Image from "next/image";
import { getstatusIcon } from "@/utils/formatting/functions";
import { Card, CardContent } from "@/components/ui/card";

interface CurrentweatherProps {
    weatherdata: WeatherData;
}

export default function Currentweather({ weatherdata }: CurrentweatherProps) {
    const { loc, currtemp, status, maxtemp, mintemp } = weatherdata;

    return (
        <Card className="flex h-40 w-64 flex-col items-center rounded-lg shadow-lg bg-gradient-to-r from-blue-400 to-blue-600 p-4">
            <CardContent className="flex flex-col items-center justify-center space-y-2">
                <h2 className="text-3xl font-bold text-white">{formattemp(currtemp)}</h2>
                <div className="text-lg font-semibold text-white mb-2">{loc.name}</div>
                <div>
                    <Image 
                        src={getstatusIcon(status)}
                        alt={status}
                        width={32}
                        height={32}
                    />
                </div>
                <div className="text-sm text-white">
                    {formattemp(maxtemp)}/{formattemp(mintemp)}
                </div>
            </CardContent>
        </Card>
    );
}
