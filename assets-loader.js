<!-- Place this just before </body> on pages that show tools -->
<script>
(function(){
  const toFavicon = (domain)=>`https://www.google.com/s2/favicons?sz=128&domain=${encodeURIComponent(domain)}`;
  document.querySelectorAll('img[data-domain]').forEach(img=>{
    const d = img.getAttribute('data-domain');
    img.src = toFavicon(d);
    img.onerror = ()=>{ img.src = toFavicon('github.com'); }; // fallback
  });
})();
</script>
