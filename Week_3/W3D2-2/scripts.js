


const huiswerkMaken = (vak , callBack) => {
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerkmaken.`);
    setTimeout (() => {
        callBack();}, 10000)
}

const klaarMetHuiswerk = () => {
    console.log('Kijk ma ik ben klaar met mijn huiswerk!');
};

huiswerkMaken('wiskunde' , klaarMetHuiswerk);