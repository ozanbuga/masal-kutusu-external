function masalGoster(id, butonElementi) {
    document.querySelectorAll('.masal-icerik').forEach(icerik => icerik.classList.remove('active'));
    const secilenMasal = document.getElementById('masal-' + id);
    if (secilenMasal) {
        secilenMasal.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    butonElementi.classList.add('active');
}

function geceModuGecis() {
    document.body.classList.toggle('dark-mode');
}

let mevcutBoyut = 18;
function degistirMetinBoyutu(degisim) {
    mevcutBoyut += degisim;
    if (mevcutBoyut < 14) mevcutBoyut = 14;
    if (mevcutBoyut > 26) mevcutBoyut = 26;
    document.documentElement.style.setProperty('--font-size-base', mevcutBoyut + 'px');
}

function masallariFiltrele() {
    const arananKelime = document.getElementById('aramaKutusu').value.toLowerCase();
    const secilenTur = document.getElementById('kategoriFiltresi').value;
    const masalMaddeleri = document.querySelectorAll('#masalListesi li');

    masalMaddeleri.forEach(madde => {
        const isim = madde.getAttribute('data-isim');
        const tur = madde.getAttribute('data-tur');

        const isimUyuyor = isim.includes(arananKelime);
        const turUyuyor = (secilenTur === "Tümü" || secilenTur === tur);

        if (isimUyuyor && turUyuyor) {
            madde.classList.remove('gizli');
        } else {
            madde.classList.add('gizli');
        }
    });
}

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('progressBar').style.width = scrolled + '%';
});