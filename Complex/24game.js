/**
 * @param {number[]} cards
 * @return {boolean}
 */
var judgePoint24 = function (cards) {

    if (cards.length === 1) return Math.abs(cards[0] - 24) < 1e-6;
    for (let i = 0; i < cards.length; i++) {
        for (let j = i + 1; j < cards.length; j++) {
            let a = cards[i], b = cards[j];
            let rest = cards.filter((_, k) => k !== j && k !== i)
            let calcs = [
                a + b,
                a - b,
                b - a,
                a * b
            ]
            if (a !== 0) {
                calcs.push(b / a)
            }
            if (b !== 0) {
                calcs.push(a / b)
            }

            for (let c of calcs) {
                if(judgePoint24([...rest, c]))
                {
                    return true
                }
            }

        }
    }
    return false


}