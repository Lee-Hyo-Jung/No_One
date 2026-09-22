// 아이콘 라이브러리 실행
lucide.createIcons()

// 이미지 슬라이드
new Swiper('.gallery-swiper', {
  slidesPerView: 1.15,
  spaceBetween: 16,
  loop: true,
  navigation: { nextEl: '.gallery-next', prevEl: '.gallery-prev' },
  pagination: { el: '.swiper-pagination', clickable: true },
  breakpoints: {
    640: { slidesPerView: 2, spaceBetween: 20 },
    900: { slidesPerView: 3, spaceBetween: 24 },
  },
})

// 더 알아보기 클릭 시, SweetAlert2
const $btn = document.getElementById("introButton")
$btn.addEventListener ("click", function() {
    Swal.fire({
    title: '눌러보셨군요',
    html: '이 <span style="color: #ae79d4; font-weight: bold;">팝업</span>은 2026년 대한민국 대전의 한 작은 학원에서 처음 시작되어 지금까지 지구를 몇 바퀴나 돌며 전해지고 있는 정체불명의 <span style="color: #ae79d4; font-weight: bold;">🍀행운의 팝업🍀</span>으로...',
    icon: 'info',
    confirmButtonText: '확인',
    confirmButtonColor: '#785b8d',
    background: '#ffffff',
    color: '#17232c',
  })
})



// 6번째 카드 이미지 + 텍스트 동시 글리치

setInterval(() => {
  const cards = document.querySelectorAll('.gallery-section .gallery-card');
  
  cards.forEach(card => {
    const p = card.querySelector('p');
    const img = card.querySelector('img');
    
    if (p && (p.textContent.includes('ъ씠') || p.textContent.includes('留롪굅'))) {
      
      // 첫 번째 움직임

      // 이름
      setTimeout(() => {
        p.style.setProperty('text-shadow', '5px 2px #de4aff', 'important');
        p.style.setProperty('transform', 'translate(-2px, -3px) scaleY(1.3) skewX(12deg)', 'important');
        
        // 이미지
        if (img) {
          img.style.setProperty('transform', 'translate(-2px, -5px) skewX(-3deg)', 'important');
          img.style.setProperty('filter', 'sepia(1) hue-rotate(300deg) saturate(3.5) contrast(1.2)', 'important');
        }
      }, 100);

      // 두 번째 움직임

      // 이름
      setTimeout(() => {
        p.style.setProperty('text-shadow', '-5px -2px #b151f6', 'important');
        p.style.setProperty('transform', 'translate(2px, 3px) scaleX(1.1) skewX(-4deg)', 'important');
        
        // 이미지
        if (img) {
          img.style.setProperty('transform', 'translate(2px, 7px) scale(1.02) skewX(2deg)', 'important');
          img.style.setProperty('filter', 'invert(0.7) brightness(0.5)', 'important');
        }
      }, 170);

      // 원상복구

      // 이름
      setTimeout(() => {
        p.style.cssText = '';

        // 이미지
        if (img) img.style.cssText = ''; 
      }, 220);
    }
  });
}, 3000);   // 3초마다 한 번
