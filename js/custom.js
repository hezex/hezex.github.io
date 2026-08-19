// 监听解密事件：必须先 destroy 销毁空目录实例，再调用 Fluid 重建目录
function reloadFluidToc() {
  if (window.tocbot) {
    try {
      window.tocbot.destroy(); // 关键：必须先销毁初始加载时的空目录！
    } catch (e) {}

    if (window.Fluid && window.Fluid.plugins && window.Fluid.plugins.initTocBot) {
      window.Fluid.plugins.initTocBot(); // 重新扫描解密后的正文标题生成目录
    }
  }
}

window.addEventListener('hexo-blog-decrypt', function() {
  setTimeout(reloadFluidToc, 100);
});
document.addEventListener('hexo-blog-decrypt', function() {
  setTimeout(reloadFluidToc, 100);
});