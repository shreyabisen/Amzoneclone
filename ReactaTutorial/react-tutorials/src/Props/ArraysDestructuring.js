import React from 'react'
function ArraysDestructuring() {

    const [a, b, c, d, e] = [1, 2, 3, 4, 5, 6];
    //const[, , , , ,a,b]=[100,200,300,400,500];
    //const [a,b,c,...abc]=[100,200,300,400,500];

    // const [a, , , ,] = [100, 200, 300, 400, 500];

    console.log('a=>', a);
    console.log('b=>', b);
    console.log('c=>', c);

    return (
        <div>ArraysDestructuring</div>
    )
}

export default ArraysDestructuring