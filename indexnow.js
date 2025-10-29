(function(){
  // === IndexNow auto-ping for Blogger (AthenasAtticLLC) ===
  const INDEXNOW_KEY = "ed693176adf84b109953a0acf2b16bfc";
  const pageUrl = (document.querySelector('link[rel="canonical"]') || {}).href || window.location.href;

  // Only run on post pages (Blogger posts include /YYYY/MM/)
  if (!/\/20\d{2}\//.test(pageUrl)) return;

  // Build the IndexNow ping URL
  const pingUrl = "https://www.bing.com/indexnow?url=" +
                  encodeURIComponent(pageUrl) +
                  "&key=" + INDEXNOW_KEY;

  fetch(pingUrl, {method:"GET", mode:"no-cors"})
    .then(()=>console.log("IndexNow ping sent:", pageUrl))
    .catch(e=>console.warn("IndexNow ping failed:", e));
})();
