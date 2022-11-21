
const counterFunc = (initialValue: number = 0) => {
    let counter = initialValue;
    return [()=> counter, ()=>{ counter++;}];
}

const [getCounter, counterIncByOne] = counterFunc(10);

counterIncByOne();
counterIncByOne();
counterIncByOne();
counterIncByOne();
counterIncByOne();

console.log(getCounter());

export default counterFunc;
