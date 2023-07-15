const car_info = (manufacturer: string, modelName: string, temp: [string, any]): { manufact: string, modeln: string } => {
    let carInfo: { manufact: string, modeln: string } = {
      manufact: manufacturer,
      modeln: modelName,
    };
  
    for (let [key, value] of temp) {
      carInfo[key] = value;
    }
  
    return carInfo;
  };
  
  let car = car_info('Tesla', 'Model S', ['color', 'red']);
  console.log(car);
  