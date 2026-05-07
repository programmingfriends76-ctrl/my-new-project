// ------------------------- القائمة الجانبية -------------------------
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
const overlay = document.getElementById('menuOverlay');

if (menuBtn && menu && overlay) {
  menuBtn.onclick = () => {
    menu.classList.toggle('open');
    overlay.classList.toggle('show');
  };
  overlay.onclick = () => {
    menu.classList.remove('open');
    overlay.classList.remove('show');
  };
}

// ------------------------- نافذة الصور المنبثقة -------------------------
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImage');
const closeModal = document.querySelector('.modal-close');
const cards = document.querySelectorAll('.card');

if (cards.length) {
  cards.forEach(card => {
    card.onclick = function() {
      const imgSrc = this.getAttribute('data-image');
      if (modalImg) modalImg.src = imgSrc;
      if (modal) modal.classList.add('show');
    };
  });
}
if (closeModal) closeModal.onclick = () => modal.classList.remove('show');
if (modal) modal.onclick = (e) => { if (e.target === modal) modal.classList.remove('show'); };

// ------------------------- التبويبات (مشاريع الأفق) -------------------------
const tabsHorizon = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

function activateTab(tabId) {
    panels.forEach(panel => panel.classList.remove('active'));
    const activePanel = document.getElementById('panel-' + tabId);
    if (activePanel) activePanel.classList.add('active');
}

if (tabsHorizon.length) {
    const firstTab = tabsHorizon[0];
    if (firstTab) {
        const firstId = firstTab.getAttribute('data-tab');
        activateTab(firstId);
        firstTab.classList.add('active');
    }
    tabsHorizon.forEach(tab => {
        tab.onclick = function(e) {
            tabsHorizon.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            activateTab(tabId);
        };
    });
}

// ------------------------- العد التنازلي -------------------------
function updateCountdown(targetDateStr, daysId, hoursId, minsId, secsId) {
    const targetDate = new Date(targetDateStr).getTime();
    const currentDate = new Date().getTime();
    const difference = targetDate - currentDate;

    if (difference <= 0) {
        document.getElementById(daysId).innerText = '00';
        document.getElementById(hoursId).innerText = '00';
        document.getElementById(minsId).innerText = '00';
        document.getElementById(secsId).innerText = '00';
        return;
    }
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    document.getElementById(daysId).innerText = days;
    document.getElementById(hoursId).innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById(minsId).innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById(secsId).innerText = seconds < 10 ? '0' + seconds : seconds;
}

if (document.querySelector('.countdown')) {
    setInterval(() => {
        if (document.getElementById('days-theline')) updateCountdown('2030-01-01', 'days-theline', 'hours-theline', 'mins-theline', 'secs-theline');
        if (document.getElementById('days-qiddiya')) updateCountdown('2027-06-01', 'days-qiddiya', 'hours-qiddiya', 'mins-qiddiya', 'secs-qiddiya');
        if (document.getElementById('days-trojena')) updateCountdown('2026-12-01', 'days-trojena', 'hours-trojena', 'mins-trojena', 'secs-trojena');
        if (document.getElementById('days-murabba')) updateCountdown('2030-01-01', 'days-murabba', 'hours-murabba', 'mins-murabba', 'secs-murabba');
    }, 1000);
}

// ------------------------- الصوت -------------------------
const audioBtn = document.getElementById('audioBtn');
const bgAudio = document.getElementById('bgAudio');

if (audioBtn && bgAudio) {
  bgAudio.volume = 0.3;
  audioBtn.onclick = () => {
    if (bgAudio.paused) {
        bgAudio.play().catch(e => console.log("Audio play failed:", e));
        audioBtn.textContent = '🔊';
    } else {
        bgAudio.pause();
        audioBtn.textContent = '🎵';
    }
  };
}