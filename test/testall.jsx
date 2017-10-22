var test = require( 'unit.js' );
const util = require( 'util' );
import {cloneObject,mergeObjects,objectsDiffer, cloneProps} from '../index.jsx';

describe( 'Static Data Structure tests', function() {
    
    it('check clone Object check', function () {
        const check={a: 0, b: 1};
        let clone=cloneObject(check);
        check['a']=1;
        test.assert.notDeepEqual(check,clone);
        check['x']=[{},'test']
        clone=cloneObject(check);
        test.assert.deepEqual(check,clone,'validate 2nd clone');
        check['x']=[];
        test.assert.notDeepEqual(check,clone);
        test.assert(0==cloneObject(0),'cloning a 0 should a zero!');
        check['z']={a: 0, b: 1, c: 2};
        clone=cloneObject(check);
        //console.log(util.inspect(clone,false,null));
        test.assert.deepEqual(check,clone);
        check['z']['c']=0;
        test.assert.notDeepEqual(check,clone);
    });
    it('check partial strucure merges', function () {
        let left={
                a: 1,
                b: 2,
                c: [0, 1, 3,{d: 0,f: [0,1],g: {x: 11} }]
        };
        let right={
                e: [0,0,0],
                c: [1,0,2,{f: [1],g: {x: 12,y: 13}}]
        };
        
        let target={
                a: 1,
                b: 2,
                c: [1, 0, 2,{d: 0,f: [1,1],g: {x: 12, y: 13}}],
                e: [0,0,0]
        };
        let result=mergeObjects(left,right);
        //console.log(util.inspect(result,false,null));
        test.assert.deepEqual(result,target);

        left={'sublist': ['one']};
        right={sublist: ['two','one']};
        result=mergeObjects(left,right);
        target={sublist: ['two','one']};
        test.assert.deepEqual(result,target,"Should merge as per spec");
        
        
    });
    it('Structures diff checking',function () {
        let left={
                a: 1,
                b: 2,
                c: [0, 1, 3,{d: 0,f: [0,1],g: {x: 11} }]
        };
        let right={
                e: [0,0,0],
                c: [1,0,2,{f: [1],g: {x: 12,y: 13}}]
        };
        
        let b=[null,'b',{a: null,0: 'test'}];
        
        test.assert(objectsDiffer(left,right),'complex example differ');
        test.assert(objectsDiffer(b,left),'complex example differ 2');
        test.assert(!objectsDiffer(left,left),'complex example same 1');
        test.assert(!objectsDiffer(right,right),'complex example same 2');
        test.assert(!objectsDiffer(b,b),'complex example same 3');
        test.assert(!objectsDiffer(null,null),'simple null,null checking');
        test.assert(objectsDiffer(1,null),'simple primitive,null checking');
        test.assert(objectsDiffer(1,0),'simple primitive,primitive checking');
        
        let c={
                a: { a: ""},
                b: "",
        };
        let d={
                a: { a: "f" },
                b: "",
        };
        test.assert(objectsDiffer(c,d),'hash of hash, with 2nd hash having a differnt string');
        
    });
    it('test props clone',function () {
        const base={a: 1,b: 2,c: 3};
        let result=cloneProps(base);
        test.assert.deepEqual(result,base);
        base['a']=2;
        test.assert.notDeepEqual(result,base);
        
        
    });
} );

