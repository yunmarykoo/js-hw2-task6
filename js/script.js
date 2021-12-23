var guessNum = Math.floor (Math.random() * (11 - 1) + 1);

var userNum = +prompt('Угадайте число от 1 до 10, заданное компьютером');

if (userNum > guessNum) {
    alert ('Введите число меньше!')
} else if (userNum < guessNum) {
    alert ('Введите число больше!')
} else {
    alert('Молодец! Вы угадали число!')
}