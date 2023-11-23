function wordsTracker(arr) {

    let words = {};

    let wordsToSearch = arr.shift().split(' ');

    for (const word of wordsToSearch) {

        words[word] = 0;

        for (const element of arr) {

            if (element === word) {
                words[word]++;
            }
        }
        
    }

    let sorted = Object.entries(words).sort((a, b) => b[1] - a[1]);


    for (const [key, value] of sorted) {

        console.log(`${key} - ${value}`);
    }
    
}

wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])