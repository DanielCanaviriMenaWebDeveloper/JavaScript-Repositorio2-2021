function cuadradoPromise(value) {
    if(typeof value !== "number") {
        return Promise.reject(`Error, el valor "${value}" ingresado no es un número`);
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result : value * value 
            });
        }, 0 | Math.random() * 1000);
    });
}

