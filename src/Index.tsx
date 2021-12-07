import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'

const x:string = '1234'


export interface IProps {
    foo:string
}

export async function test(param: string) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return param;
}

export const test2 = ()=>{ return 'test2'}

export function* iter1() {
    yield 'test'

}

const runIter = iter1();
if (!runIter.next().done) {
    runIter.next();
}

ReactDOM.render(<App/>, document.getElementById('root'));

export default x;