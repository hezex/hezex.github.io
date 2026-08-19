// 解密后精准扫描 #board 容器并重建右侧目录
function initDecryptedToc() {
  if (window.tocbot) {
    window.tocbot.init({
      tocSelector: '#tocbot',
      contentSelector: '#board',
      headingSelector: 'h1, h2, h3, h4, h5, h6',
      linkClass: 'tocbot-link',
      activeLinkClass: 'tocbot-active-link',
      listClass: 'tocbot-list',
      isCollapsedClass: 'tocbot-is-collapsed',
      collapsibleClass: 'tocbot-is-collapsible',
      scrollSmooth: true,
      includeTitleTags: true
    });
  }
}

window.addEventListener('hexo-blog-decrypt', function() {
  setTimeout(initDecryptedToc, 100);
});
document.addEventListener('hexo-blog-decrypt', function() {
  setTimeout(initDecryptedToc, 100);
});