
const numberToRoundedString = (num: number, afterComma: number) => {
    const mult = Math.pow(10, afterComma);
    
    const numRounded = Math.round(num * mult) / mult;
    
    return numRounded + "";
}

export default numberToRoundedString;