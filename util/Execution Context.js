// 1.Creation Stage [when the function is called, but before it executes any code inside]:
// Create the Scope Chain.
//     Create variables, functions and arguments.
//     Determine the value of "this".
// 2.Activation / Code Execution Stage:
//     Assign values, references to functions and interpret / execute code.
executionContextObj = {
    'scopeChain': { /* variableObject + all parent execution context's variableObject */ },
    'variableObject': { /* function arguments / parameters, inner variable and function declarations */ },
    'this': {}
}

function foo(i) {
    var a = 'hello';
    var b = function privateB() {

    };
    function c() {

    }
}

foo(22);

// fooExecutionContext = {
//     scopeChain: { ... },
//     variableObject: {
//         arguments: {
//             0: 22,
//             length: 1
//         },
//         i: 22,
//         c: pointer to function c()
//         a: undefined,
//         b: undefined
//     },
//     this: { ... }
// }
