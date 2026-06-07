# Smiley - Tugas Ujian Praktik

Project ini dibuat menggunakan React JS untuk memenuhi tugas Ujian Praktik kelas XI PPLG 3. Smiley adalah website sosial media sederhana yang menampilkan data user dari API publik. Di dalamnya ada beberapa fitur seperti pencarian username secara real-time, sistem upvote dan downvote yang terinspirasi dari Reddit, serta fitur follow.

---

## 1. Penjelasan Komponen

Agar kode lebih rapi dan gampang dikelola, project ini dibagi menjadi beberapa komponen:

### App.jsx

Komponen utama yang menjadi pembungkus seluruh aplikasi. Di sini saya memasang `SearchProvider` agar data pencarian bisa digunakan oleh komponen lain. Selain itu, App.jsx juga mengatur urutan tampilan seperti Navbar, UserCard, dan Footer.

### Navbar.jsx

Komponen bagian atas website yang berisi logo, kolom pencarian username, dan tombol untuk menampilkan modal "About Developer".

### UserCard.jsx

Komponen yang menampilkan seluruh data user. Di sini data diambil dari API, kemudian difilter berdasarkan kata kunci yang diketik di kolom pencarian. Selain itu, komponen ini juga menampilkan tombol upvote, downvote, dan follow.

### SearchContext.jsx

Komponen yang digunakan untuk menyimpan data pencarian secara global. Dengan adanya Context, Navbar dan UserCard bisa saling berbagi data tanpa perlu mengirim props secara berulang.

### Footer.jsx

Komponen bagian bawah website yang berisi informasi pembuat dan copyright.

---

## 2. Penjelasan Fetch API

Website ini menggunakan Fetch API untuk mengambil data user dari API publik.

URL yang digunakan:

`https://jsonplaceholder.typicode.com/users`

Alur kerjanya cukup sederhana:

1. Program mengirim request ke API.
2. Data yang diterima diubah ke format JSON menggunakan `.json()`.
3. Setelah itu data disimpan ke dalam state `users` menggunakan `setUsers()`.
4. Data tersebut kemudian ditampilkan ke halaman website.

Proses fetch ditempatkan di dalam `useEffect()` dengan dependency array kosong (`[]`) supaya data hanya diambil satu kali saat website pertama kali dibuka dan tidak melakukan request berulang-ulang.

---

## 3. Implementasi React Hooks

Pada project ini saya menggunakan beberapa React Hooks, yaitu:

### useState

Digunakan untuk menyimpan data yang bisa berubah selama aplikasi berjalan.

Contohnya:

* Menyimpan data user hasil fetch API.
* Menyimpan status buka atau tutup modal.
* Menyimpan teks yang diketik pada kolom pencarian.

### useEffect

Digunakan untuk menjalankan proses fetch API saat komponen pertama kali dimuat.

### useContext

Digunakan melalui SearchContext agar data pencarian bisa digunakan oleh beberapa komponen sekaligus. Dengan cara ini, Navbar dapat mengirim data pencarian dan UserCard dapat langsung menggunakannya tanpa harus mengoper props berkali-kali.

### useRef

Digunakan untuk mengakses elemen DOM secara langsung. Pada project ini, `useRef` dipasang pada input pencarian. Saat logo diklik, fokus kursor otomatis berpindah ke kolom pencarian sehingga pengguna bisa langsung mengetik.

---

## Kesimpulan

Melalui project ini saya belajar cara mengambil data dari API menggunakan Fetch API, mengelola state dengan React Hooks, menggunakan Context untuk berbagi data antar komponen, serta membuat tampilan website yang lebih interaktif menggunakan React JS.

---

**Disusun Oleh:**
Reza Aldiansyah
XI PPLG 3 / Absen 33
