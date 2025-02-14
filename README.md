# TypeScript Type Mismatch Bug

This repository demonstrates a common TypeScript error related to type mismatches. The `greeter` function expects a single string argument, but an array of strings is passed, resulting in a runtime error.  The solution showcases how to handle this situation correctly.

## Bug Description
The `bug.ts` file contains a function `greeter` that expects a string argument but receives an array. This causes the TypeScript compiler to generate a runtime error.

## Solution
The `bugSolution.ts` file demonstrates a corrected version of the code.  It addresses the type mismatch appropriately, preventing the error.

## How to reproduce
1. Clone this repository
2. Compile and run `bug.ts` (expect an error)
3. Compile and run `bugSolution.ts` (expect correct output)