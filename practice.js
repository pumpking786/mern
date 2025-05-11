//Electricty fare
// 0-20=80
// 20-30=per unit 5
// 30-50=per unit 7
// 50-80=per unit 10
// more than 80=per unit 15

units=25
fare=0

 if (units <= 20) {
        fare = 80;
    } else if (units <= 30) {
        fare = 80 + (units - 20) * 5;
    } else if (units <= 50) {
        fare = 80 + (10 * 5) + (units - 30) * 7;
    } else if (units <= 80) {
        fare = 80 + (10 * 5) + (20 * 7) + (units - 50) * 10;
    } else {
        fare = 80 + (10 * 5) + (20 * 7) + (30 * 10) + (units - 80) * 15;
    }

console.log(fare)