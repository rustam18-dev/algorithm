// let phone_book = {}

// phone_book['hasan'] = 927777777
// phone_book['Ali'] = 928888888
// phone_book['Police'] = 102
// phone_book['Emergency'] = 103

// console.log(phone_book)

let voted = {};

function check_voter(name) {
    if (name in voted) {
        console.log("Вы уже голосовали");
    } else {
        voted[name] = true;
        console.log("Добро пожаловать! Вы можете голосовать!");
    }
}

check_voter("Hasan");
check_voter("Hasa1");
check_voter("Hasan");
