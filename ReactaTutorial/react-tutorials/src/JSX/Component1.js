import React from 'react'

function Component1() {
    // var a = 10;
    // var b = 20;
    // var c = a + b;

    // const handleClick = (d, e,) => {
    //     console.log(d + e);
    //     console.log("button clicked ");
    // }


    return (
        <div>

            {/* //         <h1>{c}</h1>
    //         <h1>{c + 20}</h1>
    //         <h1>{c / 0.5}is the output of c/0.5</h1>

    //         <input type="text" placeholder={c} />
    //         <button onClick={() => handleClick(100, 123)}>Click Me</button>
    //         {
    //             c > 100 ? <h1>c is greater than 100</h1> :
    //                 <h1>c is lss than 100</h1>
    //         }
    //         <h1 style={{ color: c > 100 ? 'green' : 'red' }}>my name is shreyaaa i am a girl</h1> */}

            {
                [10, 20, 30, 40].map((value, i) => (
                    <>
                        <h4>{value}</h4>
                        <h4>{i}</h4>
                        <h4>----------------------------------------------------------------</h4>
                    </>
                ))
            }
        </div>
    )
}

export default Component1