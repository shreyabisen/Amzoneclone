import React from 'react'
import { acceptRequest, num, rejectRequest, sendRequest } from './Exports'

export function acceptRequest() {
    console.log("accept request");
}

export function rejectRequest() {
    console.log("reject request");
}

export function sendRequest() {
    console.log("sendRequest");
}
//we can export this variable to multiple files
export var abc = 10;
export var obj = {
    age: "john",
    age: 30
};
export var arr = ['goa', 'kerla', 'karnataka'];