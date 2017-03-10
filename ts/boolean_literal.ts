import { IBetSlipH2H, Result } from './typings/boolean_literal';

//https://github.com/Microsoft/TypeScript/issues/10432
function foo(): Result<number> {
    if (Math.floor(Math.random() * 100) % 2 === 0) {
        return {
            success: true,
            value: 42
        };
    }
    else {
        return {
            success: false
        };
    }
}



//frankel 
const getH2HBetSlipInfo: (any) => IBetSlipH2H = winBetSlip => {
    // Object.assign can't be used here for 2 reasons
    // 1. typescript doesn't polyfill it when targeting es5
    // 2. even when you target es6, you still get an error becuase of typescript bug
    return {
        isHead2Head: true,
        parentMeeting: {},
        ...winBetSlip
    }
}


