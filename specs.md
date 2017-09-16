lastResult: number
    initialized:0000
    purpose: to allow chained operations

add: function
    args: 2
        arg1, arg2: number
            purpose: required operands
    return: number
    behavior: adds arg1 to arg2 and returns a number
    purpose: so users can add

subtract: function
    args: 2
        arg1, arg2: number
            purpose: required operands
    return: number
    behavior: subtracts arg1 to arg2 and returns a number
    purpose: so users can subtract

multiply: function
    args: 2
        arg1, arg2: number
            purpose: required operands
    return: number
    behavior: multiplies arg1 to arg2 and returns a number
    purpose: so users can multiply

divide: function
    args: 2
        arg1, arg2: number
            purpose: required operands
    return: number
    behavior: divides arg1 to arg2 and returns a number
    purpose: so users can divide

operateIntermediary: function
    args: 3
        operation: string
            purpose: designates method to call
        arg1: number
            purpose: required operand
        arg2: number
            purpose: optional operand
    return: number
    behavior: calls method with args 1 or 2 or lastResult
    purpose: allows uswers to access math methods from single interface
    