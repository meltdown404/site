// 懐かしのアクセスカウンター（ローカルストレージを使って疑似的にカウントアップ）
document.addEventListener("DOMContentLoaded", function() {
    let count = localStorage.getItem("retro_access_count");
    
    if (!count) {
        count = 12340; // キリ番（12345）が近い絶妙な初期値
    } else {
        count = parseInt(count, 10) + 1;
    }
    
    // 値を保存
    localStorage.setItem("retro_access_count", count);
    
    // 7桁のゼロ埋め（例：0012345）
    let formattedCount = count.toString().padStart(7, '0');
    
    let counterElement = document.getElementById("access-counter");
    if (counterElement) {
        counterElement.innerText = formattedCount;
    }
});
