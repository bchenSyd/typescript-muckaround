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

