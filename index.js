import{a as p,S as d,i as n}from"./assets/vendor-B4VkUtbg.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="33585643-9c58632f9e2f8de5398e8abd3",y="https://pixabay.com/api/";function h(i){return p.get(y,{params:{key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),b=new d(".gallery a",{captionsData:"alt",captionDelay:250});function L(i){const r=i.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:s,comments:f,downloads:m})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${a}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${e}"
              loading="lazy"
            />
          </a>
          <ul class="info">
            <li class="info-item"><b>Likes</b><span>${t}</span></li>
            <li class="info-item"><b>Views</b><span>${s}</span></li>
            <li class="info-item"><b>Comments</b><span>${f}</span></li>
            <li class="info-item"><b>Downloads</b><span>${m}</span></li>
          </ul>
        </li>`).join("");l.insertAdjacentHTML("beforeend",r),b.refresh()}function S(){l.innerHTML=""}function q(){c.classList.add("is-active")}function v(){c.classList.remove("is-active")}const u=document.querySelector(".form");u.addEventListener("submit",w);function w(i){i.preventDefault();const r=u.elements["search-text"].value.trim();if(!r){n.warning({message:"Please enter a search query",position:"topRight"});return}S(),q(),h(r).then(o=>{if(o.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o.hits)}).catch(()=>{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{v()})}
//# sourceMappingURL=index.js.map
