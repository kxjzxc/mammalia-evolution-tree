// ================================
// 哺乳纲演化导航 - 入口初始化
// ================================

document.addEventListener('DOMContentLoaded', () => {
    // 初始化已解锁的节点
    initUnlockedNodes();
    
    // 初始化渲染
    render();
    
    // 添加页面过渡效果
    document.body.style.opacity = '0';
    requestAnimationFrame(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    });
});