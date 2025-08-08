// --- i18n copy ---
const COPY = {
  en: {
    about: "Grounds by Barns turns café coffee grounds into feel‑good body care. We blend reclaimed arabica with fine sugar and cold‑pressed oils for a gentle polish and soft, nourished skin.",
    scentLabel: "scent notes",
    made: "made with upcycled coffee",
    usageTitle: "How to Use",
    aboutTitle: "About Grounds",
    originTitle: "Origin Story",
    tipsTitle: "Tips & FAQ",
    qrHint: "This page was unlocked from your sleeve QR.",
    shop: "Shop now",
    howTo: "How to Use →",
  },
  ar: {
    about: "تحوّل غراوندز باي بارنز بقايا القهوة من المقاهي إلى عناية بالجسم. نمزج حبوب أرابيكا المعاد تدويرها مع سكر ناعم وزيوت معصورة على البارد لتقشير لطيف وبشرة مغذاة.",
    scentLabel: "نوتات العطر",
    made: "مصنوع من بقايا القهوة المعاد تدويرها",
    usageTitle: "طريقة الاستخدام",
    aboutTitle: "عن غراوندز",
    originTitle: "قصة البداية",
    tipsTitle: "نصائح وأسئلة",
    qrHint: "تم فتح هذه الصفحة عبر رمز QR على الغلاف.",
    shop: "تسوق الآن",
    howTo: "طريقة الاستخدام →",
  }
};

// --- character dataset (5 sleeves) ---
// Replace avatar with your art and tweak colors/taglines/copy
const CHARACTERS = {
  1: {
    name: { en: "Kind Brew", ar: "مشروب لطيف" },
    tagline: { en: "soft glow, gentle polish", ar: "توهج ناعم وتقشير لطيف" },
    avatar: "assets/characters/muneria.png",
    gradA: "#ef4444", gradB: "#f59e0b",
    scent: ["orange peel","brown sugar","espresso"],
    usage: [
      { en: "Dampen skin in the shower.", ar: "بلّلي البشرة في الدش." },
      { en: "Scoop a small handful.", ar: "خذي كمية صغيرة بيدك." },
      { en: "Massage in circles 60–90s.", ar: "دلّكي بحركات دائرية 60–90 ثانية." },
      { en: "Rinse well and pat dry.", ar: "اشطفي جيدًا وجفّفي بلطف." },
      { en: "Use 2–3× per week.", ar: "استخدميه 2–3 مرات أسبوعيًا." },
    ],
    origin: {
      en: "Born from a love of coffee and care—what once flavored your cup now pampers your skin.",
      ar: "وُلد من حب القهوة والعناية—ما كان ينعش فنجانك أصبح يدلل بشرتك."
    },
    sourcing: { en: "Ethically sourced arabica · roasted in Jeddah", ar: "أرابيكا من مصادر مسؤولة · مُحمّصة في جدة" },
    tips: [
      { en: "Patch test if skin is sensitive.", ar: "جرّبي على منطقة صغيرة إن كانت البشرة حساسة." },
      { en: "Avoid open cuts or freshly shaved areas.", ar: "تجنبي الجروح والمناطق المحلوقة حديثًا." },
      { en: "Keep water out of the jar.", ar: "حافظي على العبوة جافة." },
    ],
    buy: "#"
  },
  2: {
    name: { en: "Calm Cover", ar: "هدوء أنيق" },
    tagline: { en: "extra hydration, spa vibe", ar: "ترطيب عميق وإحساس سبا" },
    avatar: "assets/characters/Faisal.png",
    gradA: "#a78bfa", gradB: "#6366f1",
    scent: ["lavender","vanilla","espresso"],
    usage: [
      { en: "Wet skin and apply gently.", ar: "رطّبي البشرة وطبّقي بلطف." },
      { en: "Let oils sit for 1–2 min.", ar: "اتركي الزيوت دقيقة إلى دقيقتين." },
      { en: "Rinse and glow.", ar: "اشطفي وتألقّي." },
      { en: "Use 1–2× per week.", ar: "استخدميه 1–2 مرة أسبوعيًا." },
    ],
    origin: {
      en: "We upcycle café grounds and small‑batch blend with mineral salts for deep calm.",
      ar: "نعيد تدوير بقايا القهوة من المقاهي ونمزجها مع أملاح معدنية بكمّيات صغيرة لهدوء عميق."
    },
    sourcing: { en: "Small batch · responsible sourcing", ar: "دفعات صغيرة · مصادر مسؤولة" },
    tips: [
      { en: "Great as a pre‑tan polish.", ar: "مناسب قبل التسمير." },
      { en: "Add a few drops of your favorite oil for extra moisture.", ar: "أضيفي قطرات من زيتك المفضل لمزيد من الترطيب." },
    ],
    buy: "#"
  },
  3: {
    name: { en: "Fresh Roast", ar: "تحميصة منعشة" },
    tagline: { en: "bright & energizing", ar: "منعش ومفعم بالطاقة" },
    avatar: "assets/characters/Salman.png",
    gradA: "#10b981", gradB: "#22d3ee",
    scent: ["mint","citrus","coffee"],
    usage: [
      { en: "Scoop, scrub, smile.", ar: "خذي، افركي، وابتسمي." },
      { en: "Focus on elbows & knees.", ar: "ركّزي على الكوعين والركبتين." },
      { en: "Rinse well.", ar: "اشطفي جيدًا." },
    ],
    origin: {
      en: "From daily cups to daily care—energy you can feel.",
      ar: "من فنجانك اليومي إلى عنايتك اليومية—طاقة تُحَس."
    },
    sourcing: { en: "Local partners · reduced waste", ar: "شراكات محلية · تقليل الهدر" },
    tips: [
      { en: "Avoid eye area.", ar: "تجنّبي منطقة العين." },
      { en: "Use gentle pressure.", ar: "استخدمي ضغطًا خفيفًا." },
    ],
    buy: "#"
  },
  4: {
    name: { en: "Gold Blend", ar: "المزيج الذهبي" },
    tagline: { en: "warm notes, cozy feel", ar: "نوتات دافئة وإحساس مريح" },
    avatar: "assets/characters/najd.png",
    gradA: "#f59e0b", gradB: "#ef4444",
    scent: ["caramel","spice","espresso"],
    usage: [
      { en: "Massage 60s then rinse.", ar: "دلّكي 60 ثانية ثم اشطفي." },
      { en: "Pat dry and moisturize.", ar: "جفّفي وربّتي مرطبًا." },
    ],
    origin: {
      en: "Crafted for cozy self‑care rituals on busy days.",
      ar: "مصمم لطقوس عناية دافئة في الأيام المزدحمة."
    },
    sourcing: { en: "Arabica blend · small batch", ar: "مزيج أرابيكا · دفعات صغيرة" },
    tips: [
      { en: "Best used away from open cuts.", ar: "يفضّل تجنّبه على الجروح." },
    ],
    buy: "#"
  },
  5: {
    name: { en: "Classic Cup", ar: "الكوب الكلاسيكي" },
    tagline: { en: "original, balanced, reliable", ar: "أصلي ومتوازن" },
    avatar: "assets/characters/shahad.png",
    gradA: "#0ea5e9", gradB: "#1f2937",
    scent: ["roasted coffee","cocoa","vanilla"],
    usage: [
      { en: "Apply on wet skin.", ar: "يستخدم على بشرة مبللة." },
      { en: "Rinse without harsh scrubbing.", ar: "اشطفي بدون فرك عنيف." },
    ],
    origin: {
      en: "Where it all started—our first upcycled blend, still a favorite.",
      ar: "هنا كانت البداية—أول مزيج معاد تدويره وما زال المفضل."
    },
    sourcing: { en: "Trusted partners · consistent quality", ar: "شركاء موثوقون · جودة ثابتة" },
    tips: [
      { en: "Store cool and dry.", ar: "يُحفظ في مكان بارد وجاف." },
    ],
    buy: "#"
  }
};

function qs(key, def){ const v=new URLSearchParams(location.search).get(key); return v ?? def; }

function setTheme(a,b){
  document.documentElement.style.setProperty("--gradA", a);
  document.documentElement.style.setProperty("--gradB", b);
}

function setLang(lang){
  document.documentElement.dir = (lang==='ar') ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
}

function fillPage(charId, lang){
  const t = COPY[lang] || COPY.en;
  const c = CHARACTERS[charId] || CHARACTERS[1];

  setTheme(c.gradA, c.gradB);
  setLang(lang);

  // hero
  document.getElementById('charTitle').textContent = (c.name?.[lang]) || c.name?.en || "Character";
  document.getElementById('charTag').textContent   = (c.tagline?.[lang]) || c.tagline?.en || "";
  document.getElementById('qrHint').textContent    = t.qrHint;
  document.getElementById('charImg').src = c.avatar;

  // buttons
  const buyLink = document.getElementById('buyLink');
  buyLink.textContent = t.shop;
  buyLink.href = c.buy || "#";

  // section titles
  document.getElementById('usageTitle').textContent = t.usageTitle;
  document.getElementById('aboutTitle').textContent = t.aboutTitle;
  document.getElementById('originTitle').textContent = t.originTitle;
  document.getElementById('tipsTitle').textContent = t.tipsTitle;

  // about & scent
  document.getElementById('aboutCopy').textContent = t.about;
  const scentList = document.getElementById('scentList');
  scentList.innerHTML = "";
  (c.scent || []).forEach(s => {
    const li = document.createElement('li');
    li.textContent = s;
    scentList.appendChild(li);
  });
  document.getElementById('madeBadge').textContent = t.made;

  // usage
  const usage = document.getElementById('usageSteps');
  usage.innerHTML = "";
  (c.usage || []).forEach(step => {
    const li = document.createElement('li');
    li.textContent = step?.[lang] || step?.en || step;
    usage.appendChild(li);
  });

  // origin + sourcing
  document.getElementById('originCopy').textContent = c.origin?.[lang] || c.origin?.en || "";
  document.getElementById('sourcingCopy').textContent = c.sourcing?.[lang] || c.sourcing?.en || "";

  // tips
  const tips = document.getElementById('tipsList');
  tips.innerHTML = "";
  (c.tips || []).forEach(tip => {
    const li = document.createElement('li');
    li.textContent = tip?.[lang] || tip?.en || tip;
    tips.appendChild(li);
  });

  // set selector and update URL
  const langSelect = document.getElementById('langSelect');
  langSelect.value = lang;
  const url = new URL(location.href);
  url.searchParams.set('char', String(charId));
  url.searchParams.set('lang', lang);
  history.replaceState({}, "", url);
}

function init(){
  const charId = Number(qs('char', '1'));
  const lang = (qs('lang','en')||'en').toLowerCase();

  // events
  document.getElementById('langSelect').addEventListener('change', (e)=>{
    fillPage(Number(qs('char','1')), e.target.value);
  });

  document.getElementById('shareBtn').addEventListener('click', async ()=>{
    const url = new URL(location.href);
    try{
      if (navigator.share){
        await navigator.share({ title: "Grounds by Barns", text: "Check this character", url: url.toString() });
      }else{
        await navigator.clipboard.writeText(url.toString());
        alert("Link copied");
      }
    }catch(e){}
  });

  fillPage(charId, lang);
}

document.addEventListener('DOMContentLoaded', init);
