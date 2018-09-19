export const isAdult = (age) => {
    if(age >= 18){
        return "isAdult";
    }
    else{
        return "isNotAdult";
    }
};

export const canDrink = (age) => {
    if(age >= 21){
        return "canDrink";
    }
    else{
        return "canNotDrink";
    }
};

export default (age) => age>= 65;