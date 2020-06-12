<<<<<<< HEAD



const huiswerkMaken = (vak , callBack) => {
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerkmaken.`);
    setTimeout (() => {
        callBack();}, 10000)
}

const klaarMetHuiswerk = () => {
    console.log('Kijk ma ik ben klaar met mijn huiswerk!');
};

=======



const huiswerkMaken = (vak , callBack) => {
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerkmaken.`);
    setTimeout (() => {
        callBack();}, 10000)
}

const klaarMetHuiswerk = () => {
    console.log('Kijk ma ik ben klaar met mijn huiswerk!');
};

>>>>>>> ddbde54c2d318be8f18a81f211fb6f4b9da7a1a8
huiswerkMaken('wiskunde' , klaarMetHuiswerk);