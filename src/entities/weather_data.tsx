import { addDays } from 'date-fns';
import { devloc, location } from './location';

export type Status = "cloudy"|"thunderstorm"|"sunny"|"rainy" ;

export interface DailyForecastData {
    date:Date;
    status: Status;
    maxtemp: number;
    mintemp: number;
}


export interface HourlyForecastData {
    date:Date;
    status: Status;
    maxtemp: number;
    mintemp: number;
}

export interface WeatherData {
    currtemp: number;
    status: Status;
    maxtemp: number;
    mintemp: number;
    hourlyforecast: HourlyForecastData[];
    dailyforecast: DailyForecastData[];
    loc: location;
}

const today = new Date();

export const devdailyforecast:DailyForecastData[] = [
    {
        date: addDays(today,1),
        status: "cloudy",
        maxtemp: 28,
        mintemp: 18,
    },
    {   
        date: addDays(today,2),
        status: "sunny",
        maxtemp: 30,
        mintemp: 21,
    },
    {
        date: addDays(today,3),
        status: "rainy",
        maxtemp: 24,
        mintemp: 15,
    },
    {
        date: addDays(today,4),
        status: "thunderstorm",
        maxtemp: 27,
        mintemp: 19,
    },
]

export const devhourlyforecastdata: HourlyForecastData[] = [
    {
        date: addDays(today,1),
        status: "cloudy",
        maxtemp: 28,
        mintemp: 18,
    },
    {   
        date: addDays(today,2),
        status: "sunny",
        maxtemp: 30,
        mintemp: 21,
    },
    {
        date: addDays(today,3),
        status: "rainy",
        maxtemp: 24,
        mintemp: 15,
    },
    {
        date: addDays(today,4),
        status: "thunderstorm",
        maxtemp: 27,
        mintemp: 19,
    },
];

export const devweather: WeatherData = {
    currtemp: 27,
    status: "cloudy",
    maxtemp: 30,
    mintemp: 21,
    hourlyforecast: devhourlyforecastdata,
    dailyforecast: devdailyforecast,
    loc: devloc
};
