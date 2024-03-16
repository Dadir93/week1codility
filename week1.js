function solution(S) {
    const letterPositions = {};

    for (let j = 0; j < S[0].length; j++) {
        const positions = {};

        for (let i = 0; i < S.length; i++) {
            const letter = S[i][j];

            if (Object.keys(positions).includes(letter)) {
                return [positions[letter], i, j];
            } else {
                positions[letter] = i;
            }
        }
    }
    
    return [];
}

const S1 = ["abc", "bca", "dbe"];
console.log(solution(S1));

const S2 = ["zzzz", "ferz", "zdsr", "fgtd"];
console.log(solution(S2));

const S3 = ["gr", "sd", "rg"];
console.log(solution(S3));

const S4 = ["bdafg", "ceagi"];
console.log(solution(S4));
