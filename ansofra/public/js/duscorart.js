/* ══════════ DATA ══════════ */
const STORIES = [
  {id:0,tag:"Artist Journal",title:"The Day the Canvas Spoke",mins:"12 min",image:"https://picsum.photos/id/1015/800/600",authorImg:"https://picsum.photos/id/1011/80/80",author:"Adebayo Olumide",date:"April 2, 2026",kicker:"Artist Journal",deck:"The brush moved before I did. This is not a metaphor.",linkedProduct:0,
  body:`<p class="dc">It was 3am when I walked into my studio and understood, for the first time in my life, that I was not alone in the room. The canvas stood there — already primed, already waiting — and something in the air told me that tonight was not for sleeping.</p><p>I had been working on what would become <em>Eternal Flame</em> for three months. Seven layers of oil, gesso, and more failures than I could count.</p><blockquote>"I was merely the vessel. The painting had its own will."</blockquote><p>But that night, something shifted. I picked up the brush and my hand moved without instruction. The gold leaf folded perfectly.</p><div class="story-artwork-inline"><img src="https://picsum.photos/id/1015/900/600" alt="detail"><div class="story-artwork-cap">Eternal Flame · Oil and gold leaf · 2026 · Adebayo Olumide</div></div><p>Some artworks are made. Others arrive. This one arrived. All I did was hold the brush and try not to get in the way.</p>`},
  {id:1,tag:"Sacred Process",title:"Bronze That Remembers",mins:"9 min",image:"https://picsum.photos/id/1005/800/600",authorImg:"https://picsum.photos/id/1005/80/80",author:"Fatima Nkemdilim",date:"March 28, 2026",kicker:"Sacred Process",deck:"Metal carries memory. My ancestors taught me this.",linkedProduct:3,
  body:`<p class="dc">Before every pour, I say their names. All of them — every ancestor I know, and the ones whose names were lost to time. I speak into the fire, into the liquid bronze.</p><p>This is not superstition. This is methodology.</p><blockquote>"The bronze holds the names. Collectors tell me the room changes."</blockquote><div class="story-artwork-inline"><img src="https://picsum.photos/id/1005/900/600" alt="Bronze"><div class="story-artwork-cap">Heart of the Ancestors · Bronze · 65cm · Jos, Nigeria</div></div><p>The sculpture stands 65cm tall. Every collector reports the same thing: an unusual quiet in the room. That silence is the ancestors, still listening.</p>`},
  {id:2,tag:"Digital Sacred",title:"When Pixels Become Prayer",mins:"15 min",image:"https://picsum.photos/id/201/800/600",authorImg:"https://picsum.photos/id/1009/80/80",author:"Chinedu Eze",date:"March 15, 2026",kicker:"Digital Sacred",deck:"Every frame is a prayer. I just translate.",linkedProduct:2,
  body:`<p class="dc">The first mural I painted was on a crumbling wall in Surulere in 2014. A face — enormous, maybe five metres tall — staring out at traffic. People stopped.</p><blockquote>"Sacred geometry is mathematics that remembers it has a soul."</blockquote><div class="story-artwork-inline"><img src="https://picsum.photos/id/201/900/600" alt="Digital Divine"><div class="story-artwork-cap">Divine Reflection · Digital Print 1/50 · Sacred Geometry · 2026</div></div><p>I told a collector in London: "You're not buying a print. You're buying a 500-year conversation." She cried. I understood.</p>`},
  {id:3,tag:"Acrylic Stories",title:"Colour is a Language I Had to Learn",mins:"8 min",image:"https://picsum.photos/id/338/800/600",authorImg:"https://picsum.photos/id/338/80/80",author:"Zainab Musa",date:"March 10, 2026",kicker:"Acrylic Stories",deck:"I did not speak until I was six. By seven, I was painting what I couldn't say.",linkedProduct:5,
  body:`<p class="dc">Language came late for me. Words arrived slowly, reluctantly. But colour — colour arrived immediately. Acrylic is honest. It dries fast. It commits.</p><blockquote>"The women in my paintings are never named. They are every woman."</blockquote><div class="story-artwork-inline"><img src="https://picsum.photos/id/120/900/600" alt="Celestial Veil"><div class="story-artwork-cap">Celestial Veil · Acrylic Triptych · Lagos · 2026</div></div><p>The veil in the painting is not mourning. It is a door. My grandmother is on the other side, still laughing at something I probably said.</p>`},
  {id:4,tag:"Dawn Series",title:"Twenty-One Dawns",mins:"6 min",image:"https://picsum.photos/id/1016/800/600",authorImg:"https://picsum.photos/id/1011/80/80",author:"Adebayo Olumide",date:"Feb 28, 2026",kicker:"Dawn Series",deck:"I painted at 5am for 21 days straight to capture one moment.",linkedProduct:4,
  body:`<p class="dc">I set my alarm for 4:45am for twenty-one consecutive days. The light between 5:03am and 5:18am in Abuja in February is unlike anything I have ever seen — a rose gold that exists for minutes and then is gone forever.</p><blockquote>"By the fifth morning, I stopped fighting the light and started listening."</blockquote><div class="story-artwork-inline"><img src="https://picsum.photos/id/1016/900/600" alt="Dawn of Grace"><div class="story-artwork-cap">Dawn of Grace · Oil on canvas · Abuja, 5:11am · February 2026</div></div><p>Dawn of Grace is the twenty-first attempt. The others are destroyed. This is what survived.</p>`},
  {id:5,tag:"Between Worlds",title:"The Hidden Map of Heaven",mins:"11 min",image:"https://picsum.photos/id/120/800/600",authorImg:"https://picsum.photos/id/1005/80/80",author:"Fatima Nkemdilim",date:"Feb 14, 2026",kicker:"Between Worlds",deck:"Turn off the lights and the hidden universe appears.",linkedProduct:5,
  body:`<p class="dc">There is a version of the night sky mapped by Yoruba astronomers in the 17th century and never published in any Western journal. I found it in a manuscript in my great-uncle's home in Ibadan.</p><blockquote>"Understanding is one way of knowing. Painting is another. Sometimes painting is faster."</blockquote><div class="story-artwork-inline"><img src="https://picsum.photos/id/120/900/600" alt="Celestial Veil UV"><div class="story-artwork-cap">Celestial Veil · UV constellation overlay visible · 2026</div></div><p>Two collectors shone a UV torch on the panels and wept. I consider those letters my most important art reviews.</p>`}
];

const PRODUCTS = [
  {id:0,title:"Eternal Flame",artist:"Adebayo Olumide",cat:"oil",price:1250000,origPrice:1500000,badge:"Original",image:"https://picsum.photos/id/1015/600/800",desc:"Breathtaking oil painting — the sacred fire that burns within every soul. Gold leaf applied by hand, 7 months in the making."},
  {id:1,title:"Whispers of the Cosmos",artist:"Fatima Nkemdilim",cat:"acrylic",price:850000,origPrice:null,badge:"",image:"https://picsum.photos/id/133/600/800",desc:"Acrylic on canvas inspired by Yoruba creation myth. UV elements reveal hidden star constellations under ultraviolet light."},
  {id:2,title:"Divine Reflection",artist:"Chinedu Eze",cat:"digital",price:450000,origPrice:600000,badge:"1 of 50",image:"https://picsum.photos/id/201/600/800",desc:"Limited edition digital print (1/50). Sacred geometry encoded with 300 layers of meaning. NFT certificate included."},
  {id:3,title:"Heart of the Ancestors",artist:"Zainab Musa",cat:"sculpture",price:2100000,origPrice:null,badge:"Sculpture",image:"https://picsum.photos/id/1005/600/800",desc:"Bronze sculpture 65cm. Hand-cast in Jos. Incorporates a 400-year-old Igbo libation ritual. Provenance docs included."},
  {id:4,title:"Dawn of Grace",artist:"Adebayo Olumide",cat:"oil",price:980000,origPrice:1200000,badge:"",image:"https://picsum.photos/id/1016/600/800",desc:"Oil on canvas — rose-gold light of a February dawn in Abuja. Painted at 5am over 21 consecutive mornings."},
  {id:5,title:"Celestial Veil",artist:"Fatima Nkemdilim",cat:"acrylic",price:675000,origPrice:null,badge:"Triptych",image:"https://picsum.photos/id/120/600/800",desc:"Three-panel acrylic encoding a 17th-century Yoruba star chart in UV-reactive paint. Hidden lines appear under UV light."},
  {id:6,title:"Sacred Geometry I",artist:"Chinedu Eze",cat:"frame",price:280000,origPrice:350000,badge:"Framed",image:"https://picsum.photos/id/167/600/800",desc:"Museum-quality framed giclée print. Ebony frame, UV glass. Limited edition 1/30. Certificate included."},
  {id:7,title:"Ancestral Voices",artist:"Zainab Musa",cat:"frame",price:195000,origPrice:240000,badge:"Framed",image:"https://picsum.photos/id/250/600/800",desc:"Framed acrylic on board. Solid wood floating frame. Ready to hang. Artist's handwritten story card included."},
];

const ARTISTS = [
  {name:"Adebayo Olumide",spec:"Oil & Gold Leaf",img:"https://picsum.photos/id/1011/120/120",story:0},
  {name:"Fatima Nkemdilim",spec:"Bronze & Acrylic",img:"https://picsum.photos/id/1005/120/120",story:1},
  {name:"Chinedu Eze",spec:"Digital",img:"https://picsum.photos/id/1009/120/120",story:2},
  {name:"Zainab Musa",spec:"Acrylic",img:"https://picsum.photos/id/338/120/120",story:3},
];

/* ══════════ STATE ══════════ */
let cart=[], curProduct=null, curCat='all', liked=new Set();

/* ══════════ RENDER: STORIES STRIP ══════════ */
function renderStoryStrip(){
  document.getElementById('story-strip').innerHTML = STORIES.map(s=>`
    <div class="story-chip" onclick="openStory(${s.id})">
      <img class="story-chip-img" src="${s.image}" alt="${s.title}" loading="lazy">
      <div class="story-chip-body">
        <div class="story-chip-tag">${s.tag}</div>
        <div class="story-chip-title">${s.title}</div>
        <div class="story-chip-mins"><i class="fa-regular fa-clock" style="margin-right:3px"></i>${s.mins}</div>
      </div>
    </div>
  `).join('');
}

/* ══════════ RENDER: ARTISTS ══════════ */
function renderArtists(){
  document.getElementById('artists-row').innerHTML = ARTISTS.map(a=>`
    <div class="a-chip" onclick="openStory(${a.story})">
      <img class="a-chip-img" src="${a.img}" alt="${a.name}" loading="lazy">
      <div class="a-chip-name">${a.name.split(' ')[0]}</div>
      <div class="a-chip-spec">${a.spec}</div>
    </div>
  `).join('');
}

/* ══════════ RENDER: PRODUCT GRID ══════════ */
function renderGrid(list){
  const g = document.getElementById('product-grid');
  document.getElementById('grid-count').textContent = list.length+' items';
  if(!list.length){g.innerHTML='<div class="empty-state">No artworks found</div>';return;}
  g.innerHTML = list.map(p=>{
    const disc = p.origPrice ? Math.round((1-p.price/p.origPrice)*100) : 0;
    const isLiked = liked.has(p.id);
    return `
    <div class="p-card" onclick="openProduct(${p.id})">
      <div class="p-card-img-wrap">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
        ${p.badge?`<div class="p-card-badge">${p.badge}</div>`:''}
        <button class="p-card-fav ${isLiked?'liked':''}" onclick="event.stopPropagation();toggleLike(${p.id},this)">
          <i class="fa-${isLiked?'solid':'regular'} fa-heart"></i>
        </button>
      </div>
      <div class="p-card-body">
        <div class="p-card-title">${p.title}</div>
        <div class="p-card-artist">${p.artist}</div>
        <div class="p-card-price-row">
          <div>
            <div class="p-card-price">₦${p.price.toLocaleString()}</div>
            ${p.origPrice?`<div class="p-card-orig">₦${p.origPrice.toLocaleString()}</div>`:''}
            ${disc?`<div class="p-card-disc">${disc}% off</div>`:''}
          </div>
          <button class="p-card-add" onclick="event.stopPropagation();quickAdd(${p.id})">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
}

/* ══════════ CATEGORY / SEARCH FILTER ══════════ */
function setCategory(btn, cat){
  curCat = cat;
  document.querySelectorAll('.pill').forEach(p=>p.classList.remove('active'));
  btn.classList.add('active');
  const q = document.getElementById('search-input').value.toLowerCase().trim();
  applyFilters(cat, q);
  // hide/show story section
  const ss = document.getElementById('stories-section');
  if(cat==='stories'){showStoriesView();return;}
  else{ss.style.display='block';}
  document.getElementById('grid-title').textContent =
    cat==='all'?'Art Collection':cat.charAt(0).toUpperCase()+cat.slice(1);
  document.getElementById('promo-banner').style.display = cat==='all'?'':'none';
}

function showStoriesView(){
  // show full story cards in grid
  document.getElementById('promo-banner').style.display='none';
  document.getElementById('grid-title').textContent='All Stories';
  const g=document.getElementById('product-grid');
  document.getElementById('grid-count').textContent=STORIES.length+' stories';
  g.innerHTML=STORIES.map(s=>`
    <div class="p-card" onclick="openStory(${s.id})" style="cursor:pointer">
      <div class="p-card-img-wrap" style="aspect-ratio:3/2">
        <img src="${s.image}" alt="${s.title}" loading="lazy">
        <div class="p-card-badge" style="background:var(--gold)">${s.tag}</div>
      </div>
      <div class="p-card-body">
        <div class="p-card-title">${s.title}</div>
        <div class="p-card-artist">${s.author}</div>
        <div class="p-card-price-row">
          <div style="font-size:11px;color:var(--ink2)"><i class="fa-regular fa-clock" style="margin-right:3px"></i>${s.mins} read</div>
          <button class="p-card-add" style="background:var(--ink)">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>`).join('');
}

function applyFilters(cat, q){
  let list = PRODUCTS;
  if(cat!=='all' && cat!=='stories') list=list.filter(p=>p.cat===cat);
  if(q) list=list.filter(p=>p.title.toLowerCase().includes(q)||p.artist.toLowerCase().includes(q));
  renderGrid(list);
}

function handleSearch(){
  const q=document.getElementById('search-input').value.toLowerCase().trim();
  applyFilters(curCat,q);
  if(curCat==='stories' && q){
    const filtered=STORIES.filter(s=>s.title.toLowerCase().includes(q)||s.author.toLowerCase().includes(q));
    document.getElementById('grid-count').textContent=filtered.length+' stories';
    document.getElementById('product-grid').innerHTML=filtered.map(s=>`
      <div class="p-card" onclick="openStory(${s.id})">
        <div class="p-card-img-wrap" style="aspect-ratio:3/2"><img src="${s.image}" alt="${s.title}" loading="lazy"><div class="p-card-badge" style="background:var(--gold)">${s.tag}</div></div>
        <div class="p-card-body"><div class="p-card-title">${s.title}</div><div class="p-card-artist">${s.author}</div><div class="p-card-price-row"><div style="font-size:11px;color:var(--ink2)"><i class="fa-regular fa-clock"></i> ${s.mins}</div><button class="p-card-add" style="background:var(--ink)"><i class="fa-solid fa-arrow-right"></i></button></div></div>
      </div>`).join('');
  }
}

/* ══════════ PRODUCT SHEET ══════════ */
function openProduct(id){
  curProduct=PRODUCTS[id]; if(!curProduct)return;
  document.getElementById('sh-img').src=curProduct.image;
  document.getElementById('sh-cat').textContent=curProduct.cat.toUpperCase();
  document.getElementById('sh-title').textContent=curProduct.title;
  document.getElementById('sh-artist').textContent=curProduct.artist;
  document.getElementById('sh-desc').textContent=curProduct.desc;
  document.getElementById('sh-price').textContent='₦'+curProduct.price.toLocaleString();
  openSheet('prod-sheet');
}
function closeProdSheet(){closeSheet('prod-sheet');}
function addCurrent(){if(!curProduct)return;addToCart(curProduct);closeProdSheet();}
function quickAdd(id){addToCart(PRODUCTS[id]);}

/* ══════════ STORY SHEET ══════════ */
function openStory(id){
  const s=STORIES[id]; if(!s)return;
  document.getElementById('ss-img').src=s.image;
  document.getElementById('ss-kicker').textContent=s.kicker;
  document.getElementById('ss-title').textContent=s.title;
  document.getElementById('ss-deck').textContent=s.deck;
  document.getElementById('ss-auth-img').src=s.authorImg;
  document.getElementById('ss-auth').textContent=s.author;
  document.getElementById('ss-date').textContent=s.date+' · '+s.mins+' read';
  document.getElementById('ss-text').innerHTML=s.body;
  const buy=document.getElementById('ss-buy');
  if(s.linkedProduct!==undefined){
    const p=PRODUCTS[s.linkedProduct];
    document.getElementById('ss-buy-img').src=p.image;
    document.getElementById('ss-buy-title').textContent=p.title;
    document.getElementById('ss-buy-price').textContent='₦'+p.price.toLocaleString()+' · '+p.cat;
    document.getElementById('ss-buy-btn').onclick=()=>{closeStorySheet();openProduct(p.id);};
    buy.style.display='flex';
  } else {buy.style.display='none';}
  openSheet('story-sheet');
  const sheet=document.getElementById('story-sheet');
  sheet.onscroll=()=>{
    const pct=sheet.scrollTop/(sheet.scrollHeight-sheet.clientHeight)*100;
    document.getElementById('story-prog-fill').style.width=pct+'%';
  };
}
function closeStorySheet(){closeSheet('story-sheet');}

/* ══════════ CART ══════════ */
function addToCart(item){
  const ex=cart.find(c=>c.id===item.id);
  if(ex)ex.qty++;else cart.push({...item,qty:1});
  updateBadge();toast('<i class="fa-solid fa-check"></i> '+item.title+' added to cart');
}
function updateBadge(){
  const n=cart.reduce((s,i)=>s+i.qty,0);
  document.getElementById('cart-badge').textContent=n;
  const bb=document.getElementById('bn-badge');
  bb.textContent=n;bb.style.display=n?'flex':'none';
}
function openCart(){renderCartSheet();openSheet('cart-sheet');}
function closeCartSheet(){closeSheet('cart-sheet');}
function renderCartSheet(){
  const body=document.getElementById('cart-body'),foot=document.getElementById('cart-foot');
  if(!cart.length){
    body.innerHTML='<div class="cart-empty"><i class="fa-solid fa-bag-shopping"></i><p>Your cart is empty</p></div>';
    foot.style.display='none';return;
  }
  let total=0;
  body.innerHTML=cart.map((item,i)=>{const sub=item.price*item.qty;total+=sub;return`
    <div class="c-row">
      <img class="c-img" src="${item.image}" alt="${item.title}">
      <div style="flex:1">
        <div class="c-title">${item.title}</div>
        <div class="c-artist">${item.artist}</div>
        <div class="c-bot">
          <div class="qty-wrap">
            <button class="qty-b" onclick="cqty(${i},-1)">−</button>
            <span class="qty-n">${item.qty}</span>
            <button class="qty-b" onclick="cqty(${i},1)">+</button>
          </div>
          <span class="c-price">₦${sub.toLocaleString()}</span>
        </div>
        <span class="c-rm" onclick="crm(${i})">Remove</span>
      </div>
    </div>`;}).join('');
  document.getElementById('cart-total').textContent='₦'+total.toLocaleString();
  foot.style.display='block';
}
function cqty(i,d){cart[i].qty+=d;if(cart[i].qty<1)cart.splice(i,1);updateBadge();renderCartSheet();}
function crm(i){cart.splice(i,1);updateBadge();renderCartSheet();}
function checkout(){const t=cart.reduce((s,i)=>s+i.price*i.qty,0);closeCartSheet();setTimeout(()=>{toast('🎉 Order placed! ₦'+t.toLocaleString()+' (Demo)');cart=[];updateBadge();},300);}

/* ══════════ LIKE ══════════ */
function toggleLike(id,btn){
  if(liked.has(id)){liked.delete(id);btn.classList.remove('liked');btn.innerHTML='<i class="fa-regular fa-heart"></i>';}
  else{liked.add(id);btn.classList.add('liked');btn.innerHTML='<i class="fa-solid fa-heart"></i>';toast('<i class="fa-solid fa-heart" style="color:var(--rust)"></i> Saved to favourites');}
}

/* ══════════ LOGIN ══════════ */
function openLogin(){openSheet('login-sheet');}
function closeLoginSheet(){closeSheet('login-sheet');}
function switchLoginTab(t){
  document.getElementById('lf0').style.display=t===0?'block':'none';
  document.getElementById('lf1').style.display=t===1?'block':'none';
  document.getElementById('lt0').classList.toggle('active',t===0);
  document.getElementById('lt1').classList.toggle('active',t===1);
  document.getElementById('login-title').textContent=t===0?'Welcome Back':'Join DeusCorArtis';
}
function doLogin(){const e=document.getElementById('li-email').value,p=document.getElementById('li-pass').value;if(!e||!p){toast('⚠ Please fill in all fields');return;}closeLoginSheet();toast('<i class="fa-solid fa-check"></i> Welcome back!');}
function doSignup(){const f=document.getElementById('su-first').value,e=document.getElementById('su-email').value;if(!f||!e){toast('⚠ Please fill in all fields');return;}closeLoginSheet();toast('🎉 Welcome to the divine family!');}

/* ══════════ MOBILE MENU (simple scroll) ══════════ */
function openMobileMenu(){toast('<i class="fa-solid fa-info"></i> Use the bottom nav or category pills to explore');}

/* ══════════ SHEET OPEN/CLOSE ══════════ */
function openSheet(id){
  document.getElementById('veil').classList.add('open');
  document.getElementById(id).classList.add('open');
  document.body.style.overflow='hidden';
}
function closeSheet(id){
  document.getElementById(id).classList.remove('open');
  // close veil only if no other sheet open
  const anyOpen=['prod-sheet','story-sheet','cart-sheet','login-sheet'].some(s=>document.getElementById(s).classList.contains('open'));
  if(!anyOpen){document.getElementById('veil').classList.remove('open');document.body.style.overflow='';}
}
function closeAll(){
  ['prod-sheet','story-sheet','cart-sheet','login-sheet'].forEach(s=>document.getElementById(s).classList.remove('open'));
  document.getElementById('veil').classList.remove('open');
  document.body.style.overflow='';
}

/* ══════════ TOAST ══════════ */
function toast(html){
  const c=document.getElementById('toasts'),el=document.createElement('div');
  el.className='toast';el.innerHTML=html;c.appendChild(el);
  setTimeout(()=>{el.classList.add('out');setTimeout(()=>el.remove(),350);},3000);
}

/* ══════════ GALLERY DATA ══════════ */
const GALLERY = {
  biro: [
    {id:'b1',title:'The Watcher',sub:'Biro on cartridge · 2024',tag:'Portrait',img:'https://picsum.photos/id/1011/600/800'},
    {id:'b2',title:'Fractured Light',sub:'Ballpoint on board · 2023',tag:'Abstract',img:'https://picsum.photos/id/1074/600/900'},
    {id:'b3',title:'Market Morning',sub:'Biro on A2 paper · 2024',tag:'Scene',img:'https://picsum.photos/id/1067/600/750'},
    {id:'b4',title:'Ancient Faces',sub:'Biro cross-hatch · 2023',tag:'Portrait',img:'https://picsum.photos/id/1012/600/820'},
    {id:'b5',title:'Urban Weave',sub:'Ballpoint on canvas paper · 2024',tag:'Abstract',img:'https://picsum.photos/id/1043/600/700'},
    {id:'b6',title:'The Elder',sub:'Biro stipple · 2022',tag:'Portrait',img:'https://picsum.photos/id/1013/600/860'},
    {id:'b7',title:'River Dance',sub:'Ballpoint · 2024',tag:'Scene',img:'https://picsum.photos/id/1040/600/750'},
    {id:'b8',title:'Geometric Soul',sub:'Blue biro on white · 2023',tag:'Abstract',img:'https://picsum.photos/id/1050/600/780'},
    {id:'b9',title:'The Dreamer',sub:'Biro on brown paper · 2024',tag:'Portrait',img:'https://picsum.photos/id/1025/600/900'},
    {id:'b10',title:'Crosshatch City',sub:'Biro architectural study · 2023',tag:'Scene',img:'https://picsum.photos/id/1060/600/720'},
  ],
  digital: [
    {id:'d1',title:'Celestial Circuit',sub:'Digital · Procreate · 2024',tag:'Abstract',img:'https://picsum.photos/id/201/600/750'},
    {id:'d2',title:'Sacred Pulse',sub:'Digital painting · 2024',tag:'Spiritual',img:'https://picsum.photos/id/167/600/860'},
    {id:'d3',title:'Neon Ancestor',sub:'Digital mixed media · 2023',tag:'Portrait',img:'https://picsum.photos/id/250/600/800'},
    {id:'d4',title:'Data Garden',sub:'Generative art · 2024',tag:'Abstract',img:'https://picsum.photos/id/180/600/780'},
    {id:'d5',title:'Divine Signal',sub:'Digital · After Effects · 2024',tag:'Spiritual',img:'https://picsum.photos/id/193/600/900'},
    {id:'d6',title:'Lagos at Light',sub:'Digital cityscape · 2023',tag:'Scene',img:'https://picsum.photos/id/325/600/720'},
    {id:'d7',title:'The Algorithm',sub:'Generative · p5.js · 2024',tag:'Abstract',img:'https://picsum.photos/id/338/600/840'},
    {id:'d8',title:'Pixel Ritual',sub:'Digital painting · 2024',tag:'Spiritual',img:'https://picsum.photos/id/289/600/760'},
    {id:'d9',title:'Afrofuture I',sub:'Digital collage · 2023',tag:'Portrait',img:'https://picsum.photos/id/301/600/880'},
    {id:'d10',title:'Holy Geometry',sub:'Digital sacred art · 2024',tag:'Spiritual',img:'https://picsum.photos/id/342/600/730'},
    {id:'d11',title:'Chrome Dreams',sub:'3D render · Blender · 2024',tag:'Abstract',img:'https://picsum.photos/id/355/600/800'},
    {id:'d12',title:'The Oracle',sub:'Digital portrait · 2024',tag:'Portrait',img:'https://picsum.photos/id/375/600/860'},
  ]
};

const BIRO_TAGS   = ['All','Portrait','Abstract','Scene'];
const DIGITAL_TAGS= ['All','Portrait','Abstract','Spiritual','Scene'];

let galleryTab = 'biro';
let galleryFilter = 'All';
let lbItems = [], lbIdx = 0;

/* ══════════ GALLERY OPEN/CLOSE ══════════ */
function openGallery(){
  document.getElementById('gallery-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
  renderGallerySubPills();
  renderGalleryGrid();
}
function closeGallery(){
  document.getElementById('gallery-modal').classList.remove('open');
  document.body.style.overflow = '';
}

/* ══════════ GALLERY TABS ══════════ */
function switchGalleryTab(tab){
  galleryTab = tab;
  galleryFilter = 'All';
  document.getElementById('gtab-biro').classList.toggle('active', tab==='biro');
  document.getElementById('gtab-digital').classList.toggle('active', tab==='digital');
  renderGallerySubPills();
  renderGalleryGrid();
}

/* ══════════ GALLERY SUB-PILLS ══════════ */
function renderGallerySubPills(){
  const tags = galleryTab==='biro' ? BIRO_TAGS : DIGITAL_TAGS;
  document.getElementById('gallery-sub-pills').innerHTML = tags.map(t=>`
    <button class="g-pill ${t===galleryFilter?'active':''}" onclick="setGalleryFilter('${t}')">${t}</button>
  `).join('');
}

function setGalleryFilter(tag){
  galleryFilter = tag;
  renderGallerySubPills();
  renderGalleryGrid();
}

/* ══════════ GALLERY GRID ══════════ */
function renderGalleryGrid(){
  const items = GALLERY[galleryTab];
  const filtered = galleryFilter==='All' ? items : items.filter(i=>i.tag===galleryFilter);
  lbItems = filtered;

  const grid = document.getElementById('gallery-grid');
  if(!filtered.length){
    grid.innerHTML = '<div class="gallery-empty"><i class="fa-solid fa-image"></i><p>No artworks in this category yet.</p></div>';
    return;
  }

  // Alternate heights for masonry feel
  grid.innerHTML = filtered.map((item, idx) => {
    const heights = ['auto','auto','auto'];
    return `
    <div class="masonry-item" onclick="openLightbox(${idx})" style="animation:fadeUp .4s ${idx*40}ms both">
      <img src="${item.img}" alt="${item.title}" loading="lazy" style="aspect-ratio:${idx%3===1?'3/4':idx%3===2?'1/1':'3/5'}">
      <div class="masonry-item-badge">${item.tag}</div>
      <div class="masonry-item-overlay">
        <div class="masonry-item-title">${item.title}</div>
        <div class="masonry-item-tag">${item.sub}</div>
      </div>
    </div>`;
  }).join('');
}

/* ══════════ LIGHTBOX ══════════ */
function openLightbox(idx){
  lbIdx = idx;
  renderLightboxSlide();
  document.getElementById('lightbox').classList.add('open');
}
function closeLightbox(){
  document.getElementById('lightbox').classList.remove('open');
}
function renderLightboxSlide(){
  const item = lbItems[lbIdx];
  if(!item) return;
  const img = document.getElementById('lb-img');
  img.src = item.img;
  img.alt = item.title;
  document.getElementById('lb-title').textContent = item.title;
  document.getElementById('lb-sub').textContent = item.sub;
  document.getElementById('lb-counter').textContent = `${lbIdx+1} / ${lbItems.length}`;
}
function lbNav(dir){
  const img = document.getElementById('lb-img');
  img.classList.add(dir===-1 ? 'slide-out-right' : 'slide-out-left');
  setTimeout(()=>{
    lbIdx = (lbIdx + dir + lbItems.length) % lbItems.length;
    img.classList.remove('slide-out-left','slide-out-right');
    renderLightboxSlide();
  }, 200);
}
// Swipe support for lightbox
(function(){
  let sx=0;
  document.getElementById('lightbox')?.addEventListener('touchstart',e=>{sx=e.touches[0].clientX},{passive:true});
  document.getElementById('lightbox')?.addEventListener('touchend',e=>{
    const dx=e.changedTouches[0].clientX-sx;
    if(Math.abs(dx)>50) lbNav(dx<0?1:-1);
  },{passive:true});
})();
// Keyboard nav in lightbox
document.addEventListener('keydown',e=>{
  if(document.getElementById('lightbox').classList.contains('open')){
    if(e.key==='ArrowLeft') lbNav(-1);
    if(e.key==='ArrowRight') lbNav(1);
    if(e.key==='Escape') closeLightbox();
  } else if(document.getElementById('gallery-modal').classList.contains('open')){
    if(e.key==='Escape') closeGallery();
  } else {
    if(e.key==='Escape') closeAll();
  }
});

/* ══════════ FADE UP KEYFRAME ══════════ */
const styleEl = document.createElement('style');
styleEl.textContent = `@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}`;
document.head.appendChild(styleEl);

/* ══════════ SCROLL TOP ══════════ */
function scrollToTop(){window.scrollTo({top:0,behavior:'smooth'});}

/* ══════════ INIT ══════════ */
renderStoryStrip();
renderArtists();
renderGrid(PRODUCTS);