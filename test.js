const character = ['доктор','полицейский','пожарный','начальник','бандит','сосед',];
const reason = ['месть','зависть','обида','ограбление','долг',]
const place = ['парк','машина','зал','туалет','ванна',]
const death = {
    зарезали: ['нож','вилы', 'бритва'],
    застрелили: ['пистолет','автомат', 'арбалет'],
}
function randomVariant(max) {
    return Math.floor(Math.random() * max)
};
let characterResult = character[randomVariant(character.length)];
let reasonResult = reason[randomVariant(reason.length)];
let placeResult = place[randomVariant(place.length)];
let deathCause = Object.keys(death)[randomVariant(Object.keys(death).length)];
let deathWeapon = death[deathCause][randomVariant(Object.keys(death[deathCause]).length)];
console.log(characterResult, reasonResult, placeResult, deathCause, deathWeapon);