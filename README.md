# Portofolio PWA — Samidin (Complete Project)

Isi folder ini:
- index.html         -> Halaman utama portofolio
- styles.css         -> Styling sederhana responsif
- manifest.json      -> Web manifest untuk PWA
- service-worker.js  -> Service worker untuk caching offline
- icons/             -> ikon aplikasi (SVG placeholders)
- Samidin_cv.pdf     -> CV (dimasukkan dari file yang Anda upload)

Cara menjalankan secara lokal:
1. Jalankan simple HTTP server dari folder project:
   - Python 3: `python -m http.server 8000`
2. Buka browser ke `http://localhost:8000`
3. Tambahkan ke home screen (di mobile) atau buka DevTools > Application untuk melihat manifest dan service worker.

Deploy: Bisa dideploy ke Netlify, Vercel, atau GitHub Pages. Untuk GitHub Pages, pastikan file di root branch gh-pages atau atur folder publik.
