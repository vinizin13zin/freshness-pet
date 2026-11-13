"use strict";
document.documentElement.classList.add("js");

// Preços: edite aqui (valor original e preço Black Friday, em reais).
const IG = "https://ig.me/m/freshnesspet";
const PRODUCTS = [
  { id: "shampoo-morango", cat: "shampoo", tag: "Shampoo 5L", name: "Shampoo Morango", desc: "pH balanceado e aroma refrescante de morango. Diluição 1:4.", de: 89.9, por: 59.9 },
  { id: "shampoo-neutro", cat: "shampoo", tag: "Shampoo 5L", name: "Shampoo Neutro", desc: "Para todos os tipos de pelagem. Diluição 1:4, alto rendimento.", de: 84.9, por: 56.9 },
  { id: "shampoo-coco", cat: "shampoo", tag: "Shampoo 5L", name: "Shampoo de Coco", desc: "Aroma irresistível de coco e limpeza suave. Diluição 1:4.", de: 89.9, por: 59.9 },
  { id: "shampoo-mel", cat: "shampoo", tag: "Shampoo 5L", name: "Shampoo Banho de Mel", desc: "Hidratação profunda com mel. Rende até 5x mais.", de: 94.9, por: 64.9 },
  { id: "shampoo-branqueador", cat: "shampoo", tag: "Shampoo 5L", name: "Shampoo Branqueador", desc: "Realça pelagens brancas e claras, remove manchas e dá brilho.", de: 99.9, por: 67.9 },
  { id: "shampoo-prelavagem", cat: "shampoo", tag: "Shampoo 5L", name: "Shampoo Pré-lavagem", desc: "Remove sujeira, oleosidade e odores fortes antes do banho.", de: 84.9, por: 56.9 },
  { id: "condicionador", cat: "tratamento", tag: "Condicionador 5L", name: "Condicionador Premium", desc: "Óleos naturais e extratos botânicos contra ressecamento.", de: 99.9, por: 69.9 },
  { id: "condicionador-mel", cat: "tratamento", tag: "Condicionador 5L", name: "Condicionador Banho de Mel", desc: "Envolve cada fio com a suavidade do mel. Pelo macio e perfumado.", de: 104.9, por: 72.9 },
  { id: "mascara-nutricao", cat: "tratamento", tag: "Máscara 1kg", name: "Máscara de Nutrição", desc: "Nutrição intensa com vitaminas: brilho, maciez e resistência.", de: 79.9, por: 54.9 },
  { id: "mascara-hidratacao", cat: "tratamento", tag: "Máscara 1kg", name: "Máscara de Hidratação", desc: "Restaura a saúde e o brilho da pelagem com proteínas.", de: 79.9, por: 54.9 },
  { id: "leave-in", cat: "finalizacao", tag: "Leave-in 300ml", name: "Leave-in Premium", desc: "Sem enxágue. Reduz o frizz e protege do sol e da poluição.", de: 39.9, por: 27.9 },
  { id: "desembaracador", cat: "finalizacao", tag: "Spray 500ml", name: "Desembaraçador", desc: "Elimina nós, facilita a escovação e previne a quebra dos pelos.", de: 44.9, por: 29.9 },
  { id: "oleo-argan", cat: "finalizacao", tag: "Óleo 45ml", name: "Óleo de Argan", desc: "Ômegas 6, 7 e 9 para pelos macios, brilhantes e fortes.", de: 34.9, por: 22.9 },
  { id: "limpador-orelhas", cat: "finalizacao", tag: "100ml / 300ml", name: "Limpador de Orelhas", desc: "Remove cera e impurezas, prevenindo odores e desconfortos.", de: 29.9, por: 19.9 },
  { id: "colonia-afrodite", cat: "colonia", tag: "Colônia 500ml", name: "Colônia Afrodite", desc: "Fragrância suave e elegante, inspirada na deusa da beleza.", de: 49.9, por: 32.9 },
  { id: "colonia-maca-verde", cat: "colonia", tag: "Colônia 500ml", name: "Colônia Maçã Verde", desc: "Fresca e revigorante, como um passeio ao ar livre.", de: 49.9, por: 32.9 },
  { id: "colonia-melancia", cat: "colonia", tag: "Colônia 500ml", name: "Colônia Melancia", desc: "Refrescante e vibrante, com aroma frutado e divertido.", de: 49.9, por: 32.9 },
  { id: "colonia-cool-girl", cat: "colonia", tag: "Colônia 500ml", name: "Colônia Cool Girl", desc: "Delicada e marcante, com frescor que dura o dia todo.", de: 49.9, por: 32.9 },
  { id: "colonia-allure", cat: "colonia", tag: "Colônia 500ml", name: "Colônia Allure", desc: "Suave e envolvente: charme e estilo para o seu pet.", de: 52.9, por: 34.9 },
  { id: "colonia-212-vip", cat: "colonia", tag: "Colônia 500ml", name: "Colônia 212 VIP", desc: "Sofisticada e moderna, com frescor por muito mais tempo.", de: 52.9, por: 34.9 },
];

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

function renderProducts() {
  const list = document.getElementById("products");
  const tpl = document.getElementById("card-tpl");
  PRODUCTS.forEach((p, i) => {
    const li = tpl.content.firstElementChild.cloneNode(true);
    li.dataset.cat = p.cat;
    li.style.animationDelay = (i % 8) * 50 + "ms";
    li.querySelector(".off").textContent = "-" + Math.round((1 - p.por / p.de) * 100) + "%";
    const img = li.querySelector("img");
    img.src = "img/" + p.id + ".webp";
    img.alt = p.name;
    li.querySelector(".tag").textContent = p.tag;
    li.querySelector("h3").textContent = p.name;
    li.querySelector(".desc").textContent = p.desc;
    li.querySelector("s").textContent = brl.format(p.de);
    li.querySelector("strong").textContent = brl.format(p.por);
    const a = li.querySelector("a");
    a.href = IG;
    a.setAttribute("aria-label", "Quero o " + p.name + " — abrir Instagram");
    list.appendChild(li);
  });

  const tabs = document.querySelectorAll(".filters button");
  tabs.forEach((btn) => btn.addEventListener("click", () => {
    tabs.forEach((b) => b.setAttribute("aria-selected", String(b === btn)));
    const cat = btn.dataset.cat;
    list.querySelectorAll(".card").forEach((c) => {
      const show = cat === "todos" || c.dataset.cat === cat;
      c.hidden = !show;
      if (show) { c.style.animation = "none"; void c.offsetWidth; c.style.animation = ""; }
    });
  }));
}

function countdown() {
  const end = Date.parse("2026-11-30T23:59:59-03:00");
  const el = ["d", "h", "m", "s"].map((k) => document.getElementById("cd-" + k));
  const pad = (n) => String(n).padStart(2, "0");
  const tick = () => {
    let t = Math.max(0, Math.floor((end - Date.now()) / 1000));
    const v = [Math.floor(t / 86400), Math.floor(t / 3600) % 24, Math.floor(t / 60) % 60, t % 60];
    v.forEach((n, i) => { el[i].textContent = pad(n); });
  };
  tick();
  setInterval(tick, 1000);
}

function reveals() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.12 });
  els.forEach((e, i) => { e.style.transitionDelay = (i % 4) * 70 + "ms"; io.observe(e); });
}

// Hero: imagem do pet vira partículas que fogem do cursor e voltam (efeito "image particles").
function particles() {
  const canvas = document.getElementById("particles");
  const img = document.getElementById("westie");
  const root = document.documentElement;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ctx = canvas.getContext && canvas.getContext("2d");
  if (!ctx || reduce) { root.classList.add("no-canvas"); return; }

  let parts = [], w = 0, h = 0, dpr = 1, raf = 0, visible = true;
  const mouse = { x: -9999, y: -9999, active: false };

  function build() {
    const box = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = box.width; h = box.height;
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const ih = h * 0.9, iw = ih * (img.naturalWidth / img.naturalHeight);
    const scale = Math.min(1, (w * 0.98) / iw);
    const dw = Math.round(iw * scale), dh = Math.round(ih * scale);
    const ox = (w - dw) / 2, oy = h - dh - h * 0.04;

    const off = document.createElement("canvas");
    off.width = dw; off.height = dh;
    const octx = off.getContext("2d");
    octx.drawImage(img, 0, 0, dw, dh);
    const data = octx.getImageData(0, 0, dw, dh).data;

    const step = Math.max(2, Math.round(Math.sqrt((dw * dh) / 24000)));
    const old = parts;
    parts = [];
    for (let y = 0; y < dh; y += step) {
      for (let x = 0; x < dw; x += step) {
        const i = (y * dw + x) * 4;
        if (data[i + 3] < 140) continue;
        const hx = ox + x, hy = oy + y;
        const prev = old[parts.length];
        parts.push({
          hx, hy,
          x: prev ? prev.x : hx + (Math.random() - 0.5) * w * 0.7,
          y: prev ? prev.y : hy + (Math.random() - 0.5) * h * 0.7,
          vx: 0, vy: 0,
          c: "rgb(" + Math.min(255, data[i] + 12) + "," + Math.min(255, data[i + 1] + 6) + "," + data[i + 2] + ")",
        });
      }
    }
    parts.size = Math.max(1.3, step * 0.95);
    wake();
  }

  function frame() {
    raf = 0;
    ctx.clearRect(0, 0, w, h);
    const R = Math.max(70, Math.min(w, h) * 0.2), R2 = R * R, s = parts.size;
    let energy = 0;
    for (let k = 0; k < parts.length; k++) {
      const p = parts[k];
      if (mouse.active) {
        const dx = p.x - mouse.x, dy = p.y - mouse.y, d2 = dx * dx + dy * dy;
        if (d2 < R2 && d2 > 0.01) {
          // Empurra para fora com um leve giro, mais forte perto do cursor/dedo.
          const d = Math.sqrt(d2), t = 1 - d / R, f = t * t * 9;
          p.vx += (dx / d) * f - (dy / d) * f * 0.35;
          p.vy += (dy / d) * f + (dx / d) * f * 0.35;
        }
      }
      p.vx = (p.vx + (p.hx - p.x) * 0.045) * 0.86;
      p.vy = (p.vy + (p.hy - p.y) * 0.045) * 0.86;
      p.x += p.vx; p.y += p.vy;
      energy += Math.abs(p.vx) + Math.abs(p.vy);
      ctx.fillStyle = p.c;
      ctx.fillRect(p.x, p.y, s, s);
    }
    // Para o loop quando tudo assentou, para não gastar bateria.
    if (visible && (mouse.active || energy > parts.length * 0.01)) wake();
  }
  function wake() { if (!raf && visible) raf = requestAnimationFrame(frame); }

  // Eventos no contêiner inteiro (a <img> invisível fica por cima do canvas).
  const area = canvas.parentElement;
  function point(x, y) {
    const r = canvas.getBoundingClientRect();
    mouse.x = x - r.left; mouse.y = y - r.top; mouse.active = true;
    area.classList.add("touched");
    wake();
  }
  const release = () => { mouse.active = false; wake(); };
  area.addEventListener("mousemove", (e) => point(e.clientX, e.clientY));
  area.addEventListener("mouseleave", release);
  // Toque: listeners passivos, então a página continua rolando normalmente.
  const touch = (e) => { const t = e.touches[0]; if (t) point(t.clientX, t.clientY); };
  area.addEventListener("touchstart", touch, { passive: true });
  area.addEventListener("touchmove", touch, { passive: true });
  area.addEventListener("touchend", release);
  area.addEventListener("touchcancel", release);

  new IntersectionObserver(([e]) => { visible = e.isIntersecting; wake(); }).observe(canvas);
  let rt;
  window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(safeBuild, 150); });

  function safeBuild() {
    try { build(); } catch (err) { root.classList.add("no-canvas"); }
  }
  if (img.complete && img.naturalWidth) safeBuild(); else img.addEventListener("load", safeBuild, { once: true });
}

renderProducts();
countdown();
reveals();
particles();
