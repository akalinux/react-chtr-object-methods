# Chtr Shared Static Data Functions

This npm package is a collection of static data manipulation functions.

## Install

```
yarn add react-chtr-object-methods

```

## Usage

```
import { cloneObject, mergeObjects, objectsDiffer, cloneProps  } 'react-chtr-object-methods';
```

### Methods

* mergeObjects

```
 @param {any} src
 @param {any} dstObj
````

Only merges elements that exist in target and data if they are of the same object type.
 
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

