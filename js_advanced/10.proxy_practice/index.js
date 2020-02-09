// Use proxy for creating decorators

const sum = (a, b) => a + b;

const decorator = func => {
    return new Proxy(func, {
        apply(target, context, args) {
            console.log(`Функция ${func.name} начала работу`);
            console.log(`Результат функции ${func.name}: ${func.apply(context, args)}`);
            console.log(`Функция ${func.name} закончила работу`);
          
            return func.apply(context, args);
        } 
    });  
};

const sumDecorator = decorator(sum);
const result = sumDecorator(10, 20);

console.log(result);