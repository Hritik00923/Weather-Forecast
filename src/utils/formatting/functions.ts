import {Status} from '@/entities/weather_data';
export const getstatusIcon = (status:Status)=>{
    const iconMap = {
        cloudy:"cloudy",
        sunny: "sun",
        thunderstorm: "thunderstorm",
        rainy: "storm"
    };
    return `/icons/${iconMap[status]}.png`;
}