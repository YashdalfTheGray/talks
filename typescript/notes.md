# Around Typescript in (less than) 60 minutes

## Introduction and Contact

* [Twitter](https://twitter.com/YashdalfTheGray)
* [Github](https://github.com/YashdalfTheGray)
* [Website](https://yashkulshrestha.carrd.co/)

## Using Typescript

You can lean on Typescript to get type information and documentation on Javascript's API and built-in functions and objects. The easiest way to see this is by creating an array for ourselves and using `.map` and `.reduce` to double and then add the numbers into one. 

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
    hostPort: number;
    containerPort: number;
    protocol: string;
}

function validatePortMappings(portMaps: PortMapping[]): boolean {

}
```