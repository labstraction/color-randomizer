

function randomColorArray(){
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);

    return [r, g, b];
}


function randomColorHex(){
    const cArray = randomColorArray();
    // const r = (('0' + cArray[0].toString(16)).slice(-2));
    // const g = (('0' + cArray[1].toString(16)).slice(-2));
    // const b = (('0' + cArray[2].toString(16)).slice(-2));

    const r = cArray[0].toString(16).padStart(2, '0');
    const g = cArray[1].toString(16).padStart(2, '0');
    const b = cArray[2].toString(16).padStart(2, '0');


    return '#' + r + g + b;
}


function randomColorRgb(){
    const cArray = randomColorArray();
    return `rgb(${cArray[0]},${cArray[1]},${cArray[2]})`
}


function randomColorObj(){
    const cArray = randomColorArray();
    return {r: cArray[0], g:cArray[1], b:cArray[2]}
}

