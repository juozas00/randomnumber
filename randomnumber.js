const input = '16288702667259649191288508714143034077013828341091303938566550418564502462782133729124242799140012584602228839213503943426630327811084920656819533683880701';

function findMostFrequentNumberPairs(input) {
  const pairs = {};
  const pairSize = 2;

  for (let i = 0; i < input.length - pairSize + 1; i++) {
    const pair = input.slice(i, i + pairSize);

    if (pairs[pair]) {
      pairs[pair]++;
    } else {
      pairs[pair] = 1;
    }
  }

  const sortedPairs = Object.entries(pairs).sort((a, b) => b[1] - a[1]);
  const mostFrequentPairs = sortedPairs.filter(pair => pair[1] === sortedPairs[0][1]);

  return mostFrequentPairs;
}

const mostFrequentNumberPairs = findMostFrequentNumberPairs(input);
console.log('Most frequent number pairs:', mostFrequentNumberPairs);
