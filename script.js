// 初始化变量
let players = [
    { name: "玩家1", money: 1000000, bet: 0 },
    { name: "玩家2", money: 1000000, bet: 0 },
    { name: "玩家3", money: 1000000, bet: 0 },
    { name: "玩家4", money: 1000000, bet: 0 }
];

let currentPot = 0;
let timer = 60;

// 下注函数
function placeBet(amount) {
    // 这里暂时用第一个玩家演示
    let player = players[0];
    
    if (player.money >= amount) {
        player.money -= amount;
        player.bet += amount;
        currentPot += amount;
        
        updateDisplay();
    } else {
        alert("筹码不足！");
    }
}

// 梭哈函数
function allIn() {
    let player = players[0];
    currentPot += player.money;
    player.bet += player.money;
    player.money = 0;
    updateDisplay();
}

// 更新显示
function updateDisplay() {
    // 更新玩家信息
    players.forEach((player, index) => {
        document.getElementById(`player${index+1}`).innerHTML = 
            `${player.name}: $${player.money.toLocaleString()}（已押：${player.bet.toLocaleString()}）`;
    });
    
    // 更新奖池
    document.querySelector(".pot").innerHTML = `奖池: $${currentPot.toLocaleString()}`;
}

// 初始化游戏
function initGame() {
    updateDisplay();
    startTimer();
}

// 倒计时
function startTimer() {
    setInterval(() => {
        timer--;
        document.querySelector(".timer").innerHTML = `剩余时间：${timer}秒`;
        
        if (timer <= 0) {
            endRound();
        }
    }, 1000);
}

// 结束回合
function endRound() {
    // 这里简单重置游戏
    alert("本局结束！");
    timer = 60;
    currentPot = 0;
    players.forEach(player => {
        player.money += player.bet;
        player.bet = 0;
    });
    updateDisplay();
}

// 启动游戏
initGame();