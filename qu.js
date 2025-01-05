// Example data
const encoding = {
    x: { field: 'temperature', type: 'quantitative' },
    y: { field: 'humidity', type: 'quantitative' },
    color: { field: 'city', type: 'nominal' }
};

const mainChannel = 'x';

// Assigning the value of encoding[mainChannel] to mainChannelDef
const mainChannelDef = encoding[mainChannel];

console.log(mainChannelDef);
// Output: { field: 'temperature', type: 'quantitative' }
