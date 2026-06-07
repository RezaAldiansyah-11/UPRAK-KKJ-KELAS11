# Smiley - Web Sosial Media Sederhana

Proyek website sosial media sederhana ini dibuat menggunakan **React JS** untuk memenuhi tugas Ujian Praktik (UPRAK) kelas XI PPLG 3. Aplikasi ini menampilkan data pengguna dari API publik yang dilengkapi dengan fitur interaktivitas seperti pencarian real-time, sistem voting, dan fitur follow.

---

## 1. Penjelasan Komponen

Biar struktur kode rapi dan mudah diatur, proyek ini dibagi menjadi beberapa komponen modular di folder `src/components`:

* **`App.jsx`**
    Komponen utama (*root*) yang berfungsi sebagai pembungkus besar aplikasi. Di sini tempat kita memasang `SearchProvider` agar data pencarian bisa disebarkan, serta mengatur urutan tampilan komponen (Navbar, UserCard, lalu Footer).
* **`Navbar.jsx`**
    Komponen untuk bagian atas website. Isinya berupa logo aplikasi, kolom input pencarian username, dan tombol khusus untuk memunculkan popup/modal biodata "About Developer".
* **`UserCard.jsx`**
    Komponen inti tempat seluruh data diproses. Tugasnya adalah mengambil data dari internet, menyaring data berdasarkan ketikan di navbar, lalu menggambar kartu informasi masing-masing user ke layar lengkap dengan tombol vote dan follow.
* **`SearchContext.jsx`**
    Komponen State Global yang tidak memunculkan bentuk fisik di layar, melainkan bertindak sebagai satelit pusat data untuk menghubungkan komunikasi antara komponen `Navbar` dan `UserCard`.
* **`Footer.jsx`**
    Komponen penutup di bagian paling bawah halaman untuk menampilkan informasi hak cipta (*copyright*) dan identitas pembuat.

---

## 2. Penjelasan Fetch API

Aplikasi ini menggunakan **Fetch API** (fungsi bawaan JavaScript) untuk mengambil data pengguna secara dinamis dari server eksternal melalui internet.

* **Alur Kerja:** Program melakukan permintaan (*request*) ke URL API publik: `https://jsonplaceholder.typicode.com/users`.
* **Konversi Data:** Setelah server memberikan respon, data tersebut diubah menjadi format objek JSON melalui perintah `.then((res) => res.json())`.
* **Penyimpanan:** Data yang sudah rapi kemudian dimasukkan ke dalam state lokal `users` menggunakan fungsi `setUsers(data)`. Proses fetch ini wajib dibungkus di dalam `useEffect` dengan dependensi parameter kosong `[]` agar aplikasi hanya mengambil data satu kali saja di awal saat web dibuka, sehingga tidak terjadi *looping fetch* yang bisa membuat aplikasi *crash*.

---

## 3. Implementasi React Hooks

Sesuai dengan ketentuan tugas, proyek ini menerapkan 4 jenis React Hooks utama:

1.  **`useState`**
    Digunakan untuk membuat variabel dinamis yang datanya bisa berubah dan memicu perubahan tampilan layar secara instan.
    * `useState([])` di UserCard: Menampung array data users dari API.
    * `useState(false)` di Navbar: Mengatur status buka/tutup modal "About Developer".
    * `useState("")` di SearchContext: Menyimpan teks yang diketik di kolom pencarian.
2.  **`useEffect`**
    Digunakan untuk menangani perintah *side-effect* di luar React, yaitu mengeksekusi fungsi Fetch API. Dipasang dengan *empty dependency array* `[]` agar proses pengambilan data ke server hanya berjalan satu kali saat komponen pertama kali dimuat (*mount*).
3.  **`useContext`**
    Digunakan untuk mengaktifkan manajemen data global lewat `SearchContext`. Dengan hook ini, komponen `Navbar` bisa mengirim data ketikan (`setSearchTerm`) dan langsung dibaca oleh `UserCard` (`searchTerm`) tanpa perlu repot melakukan oper-operan data lewat *props* di App.jsx (*anti-prop drilling*).
4.  **`useRef`**
    Digunakan untuk menembak atau memegang elemen DOM HTML secara langsung tanpa memicu *render* ulang. Di sini `useRef` dipasang pada tag `<input>` di Navbar. Ketika ikon gambar logo diklik, fungsi akan memanggil `triggerRef.current.focus()` agar kursor ketikan otomatis aktif kedip-kedip di dalam kolom pencarian.

---
**Disusun Oleh:** Reza Aldiansyah (XI PPLG 3 / Absen: 33)
