import { devweather} from "@/entities/weather_data";
import DailyForecast from "@/components/ui/dailyforecast/dailyforecast";
import HourlyForecast from "@/components/ui/hourlyforecast/hourlyforecast";
import Currentweather from "@/components/ui/CurrentWeather/CurrentWeather";
import { GetServerSideProps } from "next";
import { ENV } from "@/utils/env";
import { WeatherData } from "@/entities/weather_data";

export const getServerSideProps:GetServerSideProps<{
  devweather : WeatherData;
}>=async()=>{
  const baseURL = "https://api.openweathermap.org/data/2.5/weather";
  const url = new URL(baseURL);
  url.searchParams.set("appid",ENV.OPEN_WEATHER_API_KEY);
  url.searchParams.set("lat",devweather.loc.latitue.toString());
  url.searchParams.set("lon",devweather.loc.longitude.toString());
  const res = await fetch(url);
  const json = await res.json();
  
  // const res = await fetch("https://api.github.com/repos/vercel/next.js");
  // const repo = await res.json();
  return {props: {devweather:{}}};
};

export default function Home() {
  console.log(process.env.TEST);
  return (
    <main>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-2">
          <Currentweather weatherdata={devweather} />
        </div>
        <div>
          <HourlyForecast hourlyforecast={devweather.hourlyforecast} />
        </div>
        <div>
          <DailyForecast dailyforecast={devweather.dailyforecast} />
        </div>
      </div>
    </main>
  );
}
