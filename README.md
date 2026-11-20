# Masal Kutusu - Türk Masalları Derlemesi

Bu proje, İstanbul Medipol Üniversitesi **Programlamaya Giriş** dersi kapsamında geliştirilen; geleneksel Türk masallarını modern, sade ve etkileşimli bir arayüzle sunan **Tek Sayfa Web Uygulamasıdır (SPA)**.

Vize aşamasında tek bir HTML dosyası olarak tasarlanan uygulama, **External CSS ve JavaScript Yapılandırması** ödevi doğrultusunda modüler bir yapıya geçirilerek üç ayrı dosyaya (`index.html`, `style.css`, `script.js`) ayrılmıştır.

---

## Özellikler
* **8 Anonim Türk Masalı:** Keloğlan, Billur Köşk, Nardaniye Hanım, Tembel Ahmet, Yedi Başlı Ejderha, Sabır Taşı, Üç Turunçlar ve Altın Bülbül.
* **Anlık Arama ve Kategori Filtreleme:** Başlığa ve masal türüne göre eş zamanlı filtreleme.
* **Gece / Gündüz Modu (Dark Mode):** CSS değişkenleri (`:root`) üzerinden anlık tema geçişi.
* **Dinamik Metin Boyutu (A+ / A-):** 14px–26px aralığında okuma boyutunu özelleştirme.
* **Okuma İlerleme Çubuğu:** Sayfa kaydırıldıkça üst kısımda güncellenen ilerleme göstergesi.
* **Duyarlı (Responsive) ve Çevrimdışı Tasarım:** Harici kütüphane/framework kullanılmadan, saf HTML5, CSS3 ve Vanilla JS ile geliştirilmiştir; internet bağlantısı olmadan çalışır.

---

## Proje Mimarisi ve Dosya Yapısı

Proje, sorumlulukların ayrılması (Separation of Concerns) ilkesine uygun olarak yapılandırılmıştır:

* **`index.html`**: Uygulamanın semantik HTML5 iskeleti, masal içerikleri ve arayüz bileşenleri. Harici stil dosyasına `<link rel="stylesheet" href="style.css">` ve betik dosyasına `<script src="script.js"></script>` ile bağlanır.
* **`style.css`**: Tüm görsel tasarım kuralları, açık/koyu tema değişkenleri, duyarlı (responsive) düzen, Drop Cap tipografi, Anadolu motifi ayraç ve erişilebilirlik (`:focus-visible`) stilleri.
* **`script.js`**: Masallar arası geçiş (`masalGoster`), gece modu (`geceModuGecis`), metin boyutu kontrolü (`degistirMetinBoyutu`), arama/filtreleme (`masallariFiltrele`) ve kaydırma ilerleme çubuğu işlevleri.
* **`*.jpg`**: Masallara ait görsel dosyaları.

---

## Nasıl Çalıştırılır?
1. Bu depodaki tüm dosyaları bilgisayarınıza indirin (**Code > Download ZIP** veya `git clone`).
2. `index.html`, `style.css`, `script.js` ve görsel (`.jpg`) dosyalarının **aynı klasör içinde** olduğundan emin olun.
3. **`index.html`** dosyasına çift tıklayarak herhangi bir modern web tarayıcısında (Chrome, Edge, Firefox, Safari vb.) doğrudan açabilirsiniz.

---

**Öğrenci:** Ozan Ali Bugaoğlu (86230065)  
**Bölüm:** Görsel İletişim Tasarımı – İstanbul Medipol Üniversitesi
