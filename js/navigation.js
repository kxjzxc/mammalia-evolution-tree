// ================================
// 哺乳纲演化导航 - 路径管理
// ================================

// 核心状态
let currentPathIds = [ROOT_NODE_ID];
let unlockedNodes = new Set();
let newlyUnlockedNode = null; // 新解锁的节点

// 初始化：从 localStorage 加载已解锁的节点
function initUnlockedNodes() {
    const saved = localStorage.getItem('mammalia-unlocked');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            unlockedNodes = new Set(data);
        } catch (e) {
            unlockedNodes = new Set();
        }
    }
    // 确保当前路径的所有节点都被解锁
    currentPathIds.forEach(id => unlockNode(id));
}

// 保存已解锁的节点到 localStorage
function saveUnlockedNodes() {
    localStorage.setItem('mammalia-unlocked', JSON.stringify([...unlockedNodes]));
}

// 解锁一个节点
function unlockNode(nodeId) {
    if (!unlockedNodes.has(nodeId)) {
        unlockedNodes.add(nodeId);
        saveUnlockedNodes();
        // 记录新解锁的节点
        newlyUnlockedNode = nodeMap[nodeId];
    }
}

// 获取当前节点
function getCurrentNode() {
    const currentId = currentPathIds[currentPathIds.length - 1];
    return nodeMap[currentId] || null;
}

// 获取路径节点数组
function getPathNodes() {
    return currentPathIds.map(id => nodeMap[id]).filter(Boolean);
}

// 导航到指定节点
function goToNode(targetId) {
    if (!nodeMap[targetId]) {
        showError(`节点 "${targetId}" 不存在，该分支尚未完善。`);
        return;
    }
    
    currentPathIds.push(targetId);
    unlockNode(targetId);
    render();
    
    // 显示新解锁的弹窗提示
    if (newlyUnlockedNode) {
        showUnlockPopup(newlyUnlockedNode);
    }
}

// 显示新解锁弹窗
function showUnlockPopup(node) {
    // 移除已存在的弹窗
    const existingPopup = document.getElementById('unlockPopup');
    if (existingPopup) {
        existingPopup.remove();
    }
    
    const popup = document.createElement('div');
    popup.id = 'unlockPopup';
    popup.className = 'unlock-popup';
    popup.innerHTML = `
        <div class="unlock-popup-content">
            <div class="unlock-icon">✨</div>
            <div class="unlock-title">新物种解锁！</div>
            <div class="unlock-node">
                <span class="unlock-icon-animal">${node.icon}</span>
                <span class="unlock-name">${node.name}</span>
            </div>
            <div class="unlock-desc">${node.description || '恭喜解锁新物种！'}</div>
            <button class="unlock-close" onclick="closeUnlockPopup()">太棒了！</button>
        </div>
    `;
    document.body.appendChild(popup);
    
    // 自动显示动画
    setTimeout(() => {
        popup.classList.add('show');
    }, 100);
    
    // 3秒后自动关闭
    setTimeout(() => {
        closeUnlockPopup();
    }, 5000);
}

// 关闭解锁弹窗
function closeUnlockPopup() {
    const popup = document.getElementById('unlockPopup');
    if (popup) {
        popup.classList.remove('show');
        setTimeout(() => {
            popup.remove();
        }, 300);
    }
    newlyUnlockedNode = null;
}

// 重置到根节点
function resetToRoot() {
    currentPathIds = [ROOT_NODE_ID];
    render();
}

// 回溯到指定节点（通过面包屑点击）
function goBackToNode(index) {
    if (index < 0 || index >= currentPathIds.length) {
        return;
    }
    currentPathIds = currentPathIds.slice(0, index + 1);
    render();
}

// 显示错误信息
function showError(message) {
    const contentCard = document.getElementById('contentCard');
    contentCard.innerHTML = `
        <div class="error-message">
            <h3>⚠️ 出错了</h3>
            <p>${message}</p>
            <button class="reset-btn" onclick="resetToRoot()">返回起点</button>
        </div>
    `;
}

// 导出存档
function exportSave() {
    const saveData = {
        version: '1.0',
        timestamp: new Date().toISOString(),
        totalNodes: Object.keys(nodeMap).length,
        unlockedNodes: [...unlockedNodes],
        unlockedCount: unlockedNodes.size
    };
    
    const blob = new Blob([JSON.stringify(saveData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mammalia-atlas-save-${new Date().toISOString().slice(0,10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('存档已导出！', 'success');
}

// 导入存档
function importSave() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const saveData = JSON.parse(e.target.result);
                
                // 验证存档格式
                if (!saveData.version || !saveData.unlockedNodes || !Array.isArray(saveData.unlockedNodes)) {
                    throw new Error('无效的存档格式');
                }
                
                // 导入存档
                unlockedNodes = new Set(saveData.unlockedNodes);
                saveUnlockedNodes();
                
                // 刷新图鉴显示
                renderAtlas();
                
                showNotification(`成功导入存档！已解锁 ${unlockedNodes.size} 个节点`, 'success');
                
            } catch (error) {
                showNotification('导入失败：' + error.message, 'error');
            }
        };
        reader.readAsText(file);
    };
    
    input.click();
}

// 显示通知消息
function showNotification(message, type = 'info') {
    const existingNotification = document.getElementById('notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.id = 'notification';
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">×</button>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        if (document.getElementById('notification')) {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }
    }, 3000);
}

// 获取解锁进度
function getProgress() {
    const totalLeafNodes = Object.values(nodeMap).filter(node => node.isLeaf).length;
    return {
        unlocked: unlockedNodes.size,
        total: totalLeafNodes,
        percentage: Math.round((unlockedNodes.size / totalLeafNodes) * 100)
    };
}