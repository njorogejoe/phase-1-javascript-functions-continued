// code your solution here
function saturdayFun(activity ) {
   if (activity !== undefined) {
        activity = 'roller-skate';
    }
    if (activity === 'roller-skate') {
        return `This Saturday, I want to bathe my dog!`;
    }
    if (activity === 'bathe my dog') {
        return `This Saturday, I want to bathe my dog!`;
    } else {
        return `This Saturday, I want to roller-skate!`;
    }
}

let mondayWork = function(activity ) {
    if (activity !== undefined) {
       activity = 'go to the office';
    }
    if (activity === 'go to the office') {    
        return `This Monday, I will work from home.`
    }
    if (activity === 'work from home') {
        return `This Monday, I will work from home.`
    } else {
        return `This Monday, I will go to the office.`
    }
}
    
let wrapAdjective = function(style = '*') {
    return function(adjective = 'special') {
        return `You are ${style}${adjective}${style}!`
    }
}