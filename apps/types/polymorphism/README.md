#

## Types

### Primitives, Data Types

- `undefined`
- `Boolean`
- `Number`
- `String`
- `BigInt`
- `Symbol`

checked by typeof operator

### Structural Types

- `Object` -
- `Function`

### Structural Root Primitive

- `null` - if object is not inherited `typeof instance === "object"`

## Returns

```js
typeof (l + 1) // number
typeof ('1' + '1') // string
typeof (undefined + undefined) // number
typeof ([] + []) // string
typeof ({} + {}) // string	Я
typeof (true + true) // number	Я

typeof new Number(1) // object
typeof new String('1') // object
typeof class A {} // function
typeof new A() // object
```
