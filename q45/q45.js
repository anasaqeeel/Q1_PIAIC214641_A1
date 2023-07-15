var car_info = function (manufacturer, modelName, temp) {
    var carInfo = {
        manufact: manufacturer,
        modeln: modelName,
    };
    for (var _i = 0, temp_1 = temp; _i < temp_1.length; _i++) {
        var _a = temp_1[_i], key = _a[0], value = _a[1];
        carInfo[key] = value;
    }
    return carInfo;
};
var car = car_info('Tesla', 'Model S', ['color', 'red']);
console.log(car);
