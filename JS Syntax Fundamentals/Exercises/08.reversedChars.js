function solve(char1, char2, char3){
    string = [];

    string.push(char1)
    string.push(char2)
    string.push(char3)

    string.reverse();

    console.log(string.join(" "));
}

solve('A',
'B',
'C')