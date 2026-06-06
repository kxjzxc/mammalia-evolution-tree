// ================================
// 哺乳纲演化导航 - 入口初始化
// ================================

document.addEventListener('DOMContentLoaded', () => {
    // 初始化已解锁的节点
    initUnlockedNodes();
    
    // 初始化渲染
    render();
    
    // 初始化背景音乐控制
    initMusicControl();
    
    // 添加页面过渡效果
    document.body.style.opacity = '0';
    requestAnimationFrame(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    });
});

// ================================
// 背景音乐控制
// ================================
function initMusicControl() {
    const musicBtn = document.getElementById('musicBtn');
    const backgroundMusic = document.getElementById('backgroundMusic');
    
    if (!musicBtn || !backgroundMusic) return;
    
    // 默认不播放
    backgroundMusic.volume = 0.5;
    
    let isPlaying = false;
    
    musicBtn.addEventListener('click', () => {
        if (isPlaying) {
            backgroundMusic.pause();
            musicBtn.textContent = '🔇';
            musicBtn.classList.remove('playing');
            isPlaying = false;
        } else {
            backgroundMusic.play().then(() => {
                musicBtn.textContent = '🎵';
                musicBtn.classList.add('playing');
                isPlaying = true;
            }).catch(err => {
                console.log('无法播放音频:', err);
            });
        }
    });
}