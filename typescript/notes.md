# Around Typescript in (less than) 60 minutes

## Introduction and Contact

* [Twitter](https://twitter.com/YashdalfTheGray)
* [Github](https://github.com/YashdalfTheGray)
* [Website](https://yashkulshrestha.carrd.co/)

## Using Typescript

You can lean on Typescript to get type information and documentation on Javascript's API and built-in functions and objects. The easiest way to see this is by creating an array for ourselves and using `.map` and `.reduce` to double and then add the numbers into one. Typscript will also infer types, like it did with the array that we just assigned. 

```typescript
const a = [1, 2, 3, 4, 5];

console.log(a.map(v => v * 2).reduce((acc, a) => acc + a, 0));
```

As you write out this code, you'll notice that documentation and the types for the code that you're typing pops up as help from the editor that you're using. 

## Adding Types

Next we're going to create our own function to encapsulate the code above and in the process, we're going to learn how to assign our own types to things we create.  

```typescript
function doubleThenAdd(numbers: number[]): number {
    return numbers.map(v => v * 2).reduce((acc, a) => acc + a, 0);
}

console.log(doubleThenAdd([1, 2, 3, 4, 5]));
```

The best way to assign types is using the `:` notation in front of properties, arguments and return types in functions.

## More Fun With Types

In addition to numbers, we can also have more complex types like functions, object and interfaces. We can just assign function types to parameters and properties but we can also create types out of them and use those. 

```typescript
function addListener(event: string, l: (data: any) => void): () => void {
    events.addEventListener(event, l);
    return () => events.removeListener(event, l);
}

type Listener = (data: any) => void;
type DeregisterFunction = () => void;

function addListener(event: string, l: Listener): DeregisterFunction {
    events.addEventListener(event, l);
    return () => events.removeListener(event, l);
}
```

We can also create interfaces which work just like in any other OO language. 

```typescript
interface PortMapping {
    hostPort?: number;
    containerPort: number;
    protocol: string;
}

function validatePortMappings(portMaps: PortMapping[]): boolean {

}
```

What if part of the interface is optional like `hostPort` in the `PortMapping` interface? We can just add a `?` after the name of the property to tell Typescript that this property is optional and can be excluded. 

## Generic Types

Consider the listener function from above. Right now, the data is of type `any` which is a catch-all type in Typescript. It is generally better for the consumer of your code and for documentation to be more specific than `any`. This is where Generic types are useful.

```typescript
type Listener<T> = (data: T) => void;

function addListener(event: string, l: Listener<string>): DeregisterFunction {
    events.addEventListener(event, l);
    return () => events.removeListener(event, l);
}
```

Generics can actually be extended to classes and interfaces as well!

## Enums

You can create enumerations in Typescript to serve as constants that we can then use in the code. Most of the time, these constants are going to be, well, constants so it's wise to use the `const` keyword to make Typescript optimize the code a little more. 

```typescript
enum Directions {
    Up,
    Down,
    Left,
    Right
};

const enum NetworkModes {
    None = "none",
    Awsvpc = "awsvpc",
    Bridge = "bridge",
    Host = "host",
    Default = "default"
}
```

## Even More Fun With Types

After all, this is Typescript! We'll get into some advanced types and talk about Union and Intersection types. We'll also use this to talk about the `strictNullChecks` flag that you can pass into the Typescript compiler which will prevent `null` or `undefined` from being assigned to anything that has a specific type. 

```typescript
type ExtendFunction<T, U> = (first: T, second: U) => T & U;

type StringOrNull = string | null;
```

With union types like this, we'll have to do typechecks to make sure that we're using the right thing at the right time. One way to do this is to use casting.

```typescript
type StringOrNull = string | null;

function hello(name: StringOrNull): void {
    if ((<string>name).length > 0) {
        console.log(`Hello ${name}`);
    }
}
```

## Importing Modules and Typings Files

All of these typings are great but it would be an immense pain if we were using a library in our code and we had to write the typings ourselves. Luckily most libraries either have typings that they export like `aws-sdk` or types that are maintained under the `@types` namespace on NPM like `@types/lodash`. 

All we need to do is install the typings and we can start taking advantage of the types. What's better, most Typescript IDE/Text Editor integrations will read the types even if you're not working in Typescript! Free types in Javascript!

```shell
npm install aws-sdk lodash @types/lodash
```

```typescript
import * as ECS from 'aws-sdk/clients/ecs';
import { find } from 'lodash';
```