type TempUnit = "celsius" | "fahrenheit";

export const formattemp = (temp: number, unit: TempUnit = "celsius"): string => {
    if (unit === "fahrenheit") {
        temp = (temp * 9 / 5) + 32;
    }
    const unitSymbol = unit === "celsius" ? "C" : "F";
    return `${temp}° ${unitSymbol}`;
}
