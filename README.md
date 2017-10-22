# Charter Telemetry-dev Shared Static Data Functions for React

This npm package is a collection of static data manipulation functions.

## Install

```
yarn add react-chtr-object-methods

```

## Usage

```
import { cloneObject, mergeObjects, objectsDiffer, cloneProps  } from 'react-chtr-object-methods';
```

### Methods

#### result=mergeObjects(srcObj,dstobj)

```
 @param {any} srcObj
 @param {any} dstObj
````

Returns a recursive merge, which favors the structure of ```srcObject``` and the contents of ```dstObj```.
 
Example:
 
Given:

```
const   srcObj={
     a: 1,
     b: 2,
     c: [0, 1, 3,{d: 0,f: [0,1],g: {x: 11} }]
   };
const   dstObj={
        e: [0,0,0],
        c: [1,0,2,{f: [1],g: {x: 12,y: 13}}]
    };

const result=mergeObjects(srcObj,dstObj);
```

The ```result``` object would be:

 ```
{
      a: 1,
      b: 2,
      c: [1, 0, 2,{d: 0,f: [1,1],g: {x: 12, y: 13}}],
      e: [0,0,0]
};
```
#### result=cloneProps(props,exclude);

```
  @param {react props object} props
  @param {Array} exclude 
````

Makes a recursive copy of primitives and objects of type Array and Object, all other objects are copied via reference.  The ```exclude``` array is optional, it is used to define properties of props that are to be excluded, by default 'root' is excluded.

#### result=cloneObject(src)

```
  @param {src} object to be copied
````

Makes a recursive copy of primitives and objects of type Array and Object, all other objects are copied via reference. 


##### boolean=objectsDiffer(src,dst)

```
  @param {any} src
  @param {any} dst
```

Returns true when 2 objects differ.