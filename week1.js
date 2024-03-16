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

const S = ["abc", "bca", "dbe"];
console.log(solution(S));