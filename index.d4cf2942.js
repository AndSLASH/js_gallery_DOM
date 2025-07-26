document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("largeImg"),t=document.getElementById("thumbs");t.addEventListener("click",function(n){n.preventDefault();var r=n.target.closest("a");if(r&&t.contains(r)){var a=new URL(r.getAttribute("href"),location.origin).href;e.src=a}})});
//# sourceMappingURL=index.d4cf2942.js.map
