export function toRoman(number){
    
    const romanNumbers = {
        "1": "I",
        "2": "II",
        "3": "III",
        "4": "IV",
        "5": "V",
        "6": "VI"
    }

    return romanNumbers[number];
}