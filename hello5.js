if (10 > 1){
    console.log("10>1")
}

let isCollectedCoin = true;
let point = 0;
let coins = 0;

if (isCollectedCoin){
    coins++;
    point +=200;
    console.log(`累计金币：${coins}`)
    console.log(`累计分数：${point}`)
} else{
    console.log("TMD")
}

let isLeveDone=true;
let currentLevel=1;

if (isLeveDone){
    if(currentLevel === 1){
        console.log("进入第2关");
        currentLevel++;
    }else if (currentLevel===2) {
        console.log("进入第三关，和TMD决斗");
        currentLevel++;
    }else if (currentLevel===3){
        console.log("TMD，回到第一关");
        currentLevel=1;
    else{
        console.log("滚")
    }
}
else{
    console.log("任何未完成，漏油！")
}}