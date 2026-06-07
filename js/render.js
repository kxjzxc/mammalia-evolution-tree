// ================================
// 哺乳纲演化导航 - 渲染逻辑
// ================================

// 渲染整个页面
function render() {
    renderBreadcrumb();
    renderContent();
}

// 渲染面包屑导航
function renderBreadcrumb() {
    const breadcrumbPath = document.getElementById('breadcrumbPath');
    const pathNodes = getPathNodes();
    
    let html = '';
    
    pathNodes.forEach((node, index) => {
        const isLast = index === pathNodes.length - 1;
        const separator = isLast ? '' : '<span class="breadcrumb-separator">›</span>';
        
        if (isLast) {
            html += `<span class="breadcrumb-item current">${node.name}</span>`;
        } else {
            html += `<span class="breadcrumb-item" data-index="${index}">${node.name}</span>${separator}`;
        }
    });
    
    breadcrumbPath.innerHTML = html;
    
    // 绑定面包屑点击事件（除了最后一个）
    breadcrumbPath.querySelectorAll('.breadcrumb-item:not(.current)').forEach(item => {
        item.addEventListener('click', () => {
            const index = parseInt(item.dataset.index, 10);
            goBackToNode(index);
        });
    });
}

// 渲染主内容区
function renderContent() {
    const contentCard = document.getElementById('contentCard');
    const node = getCurrentNode();
    
    if (!node) {
        showError('无法加载节点数据。');
        return;
    }
    
    // 重新添加fadeIn动画
    contentCard.style.animation = 'none';
    contentCard.offsetHeight; // 触发重排
    contentCard.style.animation = 'fadeIn 0.4s ease-out';
    
    if (node.isLeaf) {
        contentCard.innerHTML = renderDestinationPanel(node);
    } else {
        contentCard.innerHTML = renderQuestionPanel(node);
    }
}

// 渲染问题面板（非叶节点）
function renderQuestionPanel(node) {
    const optionsHtml = node.options.map(opt => `
        <button class="option-btn" data-target="${opt.target}">
            <span class="option-text">${removeEmoji(opt.text)}</span>
        </button>
    `).join('');
    
    const introHtml = node.icon || node.description ? `
        <div class="node-intro">
            <div class="node-intro-header">
                ${node.icon ? `<span class="node-intro-icon">${node.icon}</span>` : ''}
                <h3 class="node-intro-name">${node.name}</h3>
            </div>
            ${node.description ? `<p class="node-intro-text">${node.description}</p>` : ''}
        </div>
    ` : '';
    
    return `
        <div class="question-section">
            ${introHtml}
            <div class="question-icon">🔍</div>
            <p class="question-text">${node.question}</p>
            <div class="options-grid">
                ${optionsHtml}
            </div>
        </div>
        <div style="text-align: center;">
            <button class="reset-btn" onclick="resetToRoot()">重新开始</button>
        </div>
    `;
}

// 渲染终点面板（叶节点）
function renderDestinationPanel(node) {
    const traitsHtml = (node.keyTraits || []).map(trait => 
        `<span class="trait-tag">${trait}</span>`
    ).join('');
    
    const periodHtml = node.geologicalPeriod ? 
        `<span class="destination-period">⏳ ${node.geologicalPeriod}</span>` : '';
    
    return `
        <div class="destination-section">
            <span class="destination-icon">${node.icon || '🐾'}</span>
            <h2 class="destination-name">${node.name}</h2>
            ${periodHtml}
            <p class="destination-description">${node.description}</p>
            ${traitsHtml ? `<div class="destination-traits">${traitsHtml}</div>` : ''}
            <button class="reset-btn" onclick="resetToRoot()">🔄 重新探索</button>
        </div>
    `;
}

// 移除文本中的emoji
function removeEmoji(text) {
    // 移除开头的emoji（包括emoji+空格）
    return text.replace(/^[^\s]+\s*/, '').trim();
}

// 渲染图鉴
function renderAtlas() {
    const grid = document.getElementById('atlasGrid');
    const stats = document.getElementById('atlasStats');
    
    let html = '';
    const allNodes = Object.values(nodeMap);
    let unlockedCount = 0;
    
    allNodes.forEach(node => {
        const isUnlocked = unlockedNodes.has(node.id);
        if (isUnlocked) unlockedCount++;
        
        // 已解锁的卡片可以点击跳转
        const clickHandler = isUnlocked ? `onclick="navigateToNodeFromAtlas('${node.id}')"` : '';
        const cardClass = isUnlocked ? 'atlas-card unlocked' : 'atlas-card locked';
        
        html += `
            <div class="${cardClass}" 
                 data-node-id="${node.id}"
                 ${clickHandler}
                 title="${isUnlocked ? '点击查看详情' : '尚未解锁'}">
                <div class="atlas-card-icon">
                    ${isUnlocked ? (node.icon || '🐾') : '❓'}
                </div>
                <div class="atlas-card-name">
                    ${isUnlocked ? node.name : '???'}
                </div>
            </div>
        `;
    });
    
    const percentage = Math.round((unlockedCount / allNodes.length) * 100);
    stats.innerHTML = `
        <span class="atlas-progress">已解锁: ${unlockedCount} / ${allNodes.length}</span>
        <span class="atlas-percentage">(${percentage}%)</span>
    `;
    grid.innerHTML = html;
}

// 打开图鉴弹窗
function openAtlasModal() {
    renderAtlas();
    document.getElementById('atlasModal').classList.add('show');
}

// 关闭图鉴弹窗
function closeAtlasModal() {
    document.getElementById('atlasModal').classList.remove('show');
}

// 从图鉴跳转到指定节点
function navigateToNodeFromAtlas(nodeId) {
    // 关闭图鉴弹窗
    closeAtlasModal();
    
    // 构建从根节点到目标节点的路径
    const path = buildPathToNode(nodeId);
    
    if (path.length === 0) {
        showNotification('无法到达该节点', 'error');
        return;
    }
    
    // 设置当前路径
    currentPathIds = path;
    
    // 渲染页面
    render();
    
    // 显示成功提示
    const node = nodeMap[nodeId];
    if (node) {
        showNotification(`正在查看：${node.name}`, 'success');
    }
}

// 构建从根节点到目标节点的路径
function buildPathToNode(nodeId) {
    // 如果目标节点不存在，返回空路径
    if (!nodeMap[nodeId]) {
        return [];
    }
    
    // 如果是根节点，直接返回
    if (nodeId === ROOT_NODE_ID) {
        return [ROOT_NODE_ID];
    }
    
    // 使用 BFS 搜索从根到目标的最短路径
    const visited = new Set();
    const queue = [[ROOT_NODE_ID]];
    
    while (queue.length > 0) {
        const path = queue.shift();
        const currentId = path[path.length - 1];
        
        if (currentId === nodeId) {
            return path;
        }
        
        if (visited.has(currentId)) {
            continue;
        }
        visited.add(currentId);
        
        const currentNode = nodeMap[currentId];
        if (currentNode && currentNode.options) {
            for (const option of currentNode.options) {
                if (!visited.has(option.target)) {
                    queue.push([...path, option.target]);
                }
            }
        }
    }
    
    // 如果找不到路径，尝试直接设置（对于叶子节点）
    return [nodeId];
}

// 页面加载完成后绑定事件
document.addEventListener('DOMContentLoaded', () => {
    // 绑定选项按钮点击事件（使用事件委托）
    document.getElementById('contentCard').addEventListener('click', (e) => {
        const optionBtn = e.target.closest('.option-btn');
        if (optionBtn) {
            const targetId = optionBtn.dataset.target;
            goToNode(targetId);
        }
    });
    
    // 绑定图鉴按钮
    document.getElementById('atlasBtn').addEventListener('click', openAtlasModal);
    document.getElementById('atlasClose').addEventListener('click', closeAtlasModal);
    
    // 点击弹窗外部关闭
    document.getElementById('atlasModal').addEventListener('click', (e) => {
        if (e.target.id === 'atlasModal') {
            closeAtlasModal();
        }
    });
});