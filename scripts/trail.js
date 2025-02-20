document.addEventListener('mousemove', function (e) {
    // 创建一个新的拖尾元素
    const trail = document.createElement('div');
    trail.classList.add('trail');
    // 设置拖尾元素的位置
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';
    // 将拖尾元素添加到文档中
    document.body.appendChild(trail);
    // 一段时间后移除拖尾元素，避免占用过多资源
    setTimeout(() => {
        trail.remove();
    }, 1000);
});