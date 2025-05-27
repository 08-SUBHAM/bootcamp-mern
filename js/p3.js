const weight = 70;
const height = 5.7;
const bmi = weight / (height * height);
const trainer = {
    name : 'nitin',
    age : 25,
    gender : 'male',
    height : height,
    weight : weight,
    isHealthy : bmi < 25,
    isTrainer : true
}
console.log("hi", trainer);