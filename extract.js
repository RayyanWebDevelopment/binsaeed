const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream('C:\\Users\\Rayyan\\.gemini\\antigravity-ide\\brain\\18c55f24-ebd6-4aef-9df7-94fc978b2e7c\\.system_generated\\logs\\transcript_full.jsonl'),
    crlfDelay: Infinity
});

rl.on('line', (line) => {
    try {
        const obj = JSON.parse(line);
        if (obj.step_index === 145 || obj.step_index === 156) {
            if (obj.content.includes("Updated Lawn articles database")) {
                fs.writeFileSync('C:\\Users\\Rayyan\\Desktop\\New folder (20)\\extracted_products.json', obj.content);
                console.log('Saved extracted products from step ' + obj.step_index);
            }
        }
    } catch (e) {}
});
