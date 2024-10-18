window.addEventListener('scroll', function () {
    const section1 = document.querySelector('.section1');
    if (window.scrollY > 100) { // Ketika scroll lebih dari 50px
        section1.classList.add('scrolled');
    } else {
        section1.classList.remove('scrolled');
    }
});
const hamburger = document.querySelector('.hamburger')
const iconXSidebar = document.querySelector('.header-sidebar i')
const sidebar = document.querySelector('.sidebar')
hamburger.addEventListener('click', function () {
    sidebar.classList.toggle('active');
})
iconXSidebar.addEventListener('click', function () {
    sidebar.classList.remove('active')
})

const linksSidebar = document.querySelectorAll('.col-link-sidebar a')

linksSidebar.forEach((link) => {
    link.addEventListener('click', function () {
        const linkSidebarActive = document.querySelector('.col-link-sidebar a.active')
        if (linkSidebarActive) {
            linkSidebarActive.classList.remove('active')
        }
        link.classList.add('active');
        setTimeout(() => {

            sidebar.classList.remove('active')
        }, 200);

    })
})
const btnSelanjutnya = document.querySelector('.col-btn-content2 button')
const arcPage1 = document.querySelector('.col-btn-content2 div:nth-child(2)');

btnSelanjutnya.addEventListener('mouseover', function () {
    btnSelanjutnya.classList.add('active')
    arcPage1.classList.add('active')
})

btnSelanjutnya.addEventListener('mouseleave', function () {
    const btnSelanjutnyaActive = document.querySelector('.col-btn-content2 button.active')
    const arcPage1Active = document.querySelector('.col-btn-content2 div:nth-child(2).active');


    btnSelanjutnyaActive.classList.remove('active')
    arcPage1Active.classList.remove('active')
})

const angka1 = document.querySelector('.angka1');
const angka2 = document.querySelector('.angka2');
let index = 0
let index2 = 0
function incrementAngka() {
    if (index <= 325) {
        angka1.innerHTML = index
        index = 25 + index
        setTimeout(incrementAngka, 50)
    }
}
incrementAngka()

setInterval(() => {

    incrementAngka()
    index = 0
}, 1500);

function incrementAngka2() {
    if (index2 <= 6) {
        angka2.innerHTML = index2
        index2++
        setTimeout(incrementAngka2, 100)
    }
}
incrementAngka2()

setInterval(() => {

    incrementAngka2()
    index2 = 0
}, 1500);


// Ambil semua elemen .box-right4
const boxes = document.querySelectorAll('.box-right4');
let activeIndex = 0;

// Array untuk menyimpan gambar untuk setiap kotak
const images = [
    'assets/fenomena-api-biru-di-kawah-ijen-apakah-berbahaya-xtw 1.png', // Gambar kotak 1
    'assets/kawahwurung.jpg', // Gambar kotak 2
    'assets/kawahwurung.jpg', // Gambar kotak 3
];

// Tambahkan event listener untuk setiap box
boxes.forEach((box, index) => {
    box.addEventListener('mouseenter', () => {
        if (index !== 0) { // Hanya untuk box selain kotak pertama
            const footer = box.querySelector('.col-box4-footer');
            const button = box.querySelector('.col-btn-box4-footer');

            // Aktifkan footer di kotak yang sedang di hover
            footer.classList.add('active');
            button.classList.add('active'); // Tampilkan tombol saat di hover
        }
    });

    box.addEventListener('mouseleave', () => {
        if (index !== 0) { // Hanya untuk box selain kotak pertama
            const footer = box.querySelector('.col-box4-footer');
            const button = box.querySelector('.col-btn-box4-footer');

            // Nonaktifkan footer di kotak yang sedang di hover
            footer.classList.remove('active');
            button.classList.remove('active'); // Sembunyikan tombol saat tidak di hover
        }
    });
});

// Fungsi untuk mengubah kotak aktif
function changeActiveBox() {
    // Nonaktifkan kotak sebelumnya
    boxes[activeIndex].classList.remove('active');

    // Update gambar untuk kotak sebelumnya
    boxes[activeIndex].style.backgroundImage = `url(${images[activeIndex]})`;

    // Update indeks untuk kotak berikutnya
    activeIndex = (activeIndex + 1) % boxes.length;

    // Aktifkan kotak baru
    boxes[activeIndex].classList.add('active');

    // Update gambar untuk semua kotak
    boxes.forEach((box, index) => {
        box.style.backgroundImage = `url(${images[index]})`;
    });

    // Memindahkan kotak aktif ke posisi paling kiri
    const frontBox = boxes[activeIndex];
    const parent = document.querySelector('.parent-box4');
    parent.prepend(frontBox); // Pindahkan kotak aktif ke depan
}

// Jalankan fungsi setiap 5 detik
setInterval(changeActiveBox, 5000);

// Tombol pada kotak pertama tetap aktif saat halaman dimuat
const firstBoxButton = boxes[0].querySelector('.col-btn-box4-footer');
firstBoxButton.classList.add('active'); // Pastikan tombol di kotak pertama terlihat

document.addEventListener('DOMContentLoaded', function () {
    const searching = document.querySelector('.searching');
    const colCard = document.querySelector('.col-card');
    const cards = colCard.querySelectorAll('.card'); // Mengambil semua kartu berita
    const colTidakAdaBerita = document.createElement('div'); // Membuat elemen untuk pesan tidak ada berita

    // Menambahkan pesan tidak ada berita ke dalam col-card
    colTidakAdaBerita.classList.add('col-tidakAdaBerita');
    colTidakAdaBerita.innerHTML = '<div class="tidak-ada-data">Tidak ada berita yang ditemukan</div>';
    colTidakAdaBerita.style.display = 'none'; // Awalnya sembunyikan
    colCard.appendChild(colTidakAdaBerita); // Tambahkan ke dalam kolom berita

    searching.addEventListener('keyup', function (e) {
        const searchText = e.target.value.toLowerCase();
        let beritaTersembunyi = 0; // Menghitung jumlah berita yang tersembunyi

        cards.forEach((card) => {
            const title = card.querySelector('.content-card2').textContent.toLowerCase(); // Ambil judul berita
            if (title.includes(searchText)) {
                card.style.display = 'flex'; // Tampilkan jika sesuai dengan pencarian
            } else {
                card.style.display = 'none'; // Sembunyikan jika tidak sesuai
                beritaTersembunyi++; // Tambah jumlah berita yang tersembunyi
            }
        });

        // Tampilkan pesan jika semua berita tersembunyi
        if (beritaTersembunyi === cards.length) {
            colTidakAdaBerita.style.display = 'flex'; // Tampilkan pesan tidak ada berita
            colCard.style.justifyContent = 'center'
            colCard.style.marginTop = '100px'
        } else {
            colTidakAdaBerita.style.display = 'none'; // Sembunyikan pesan jika ada berita yang ditampilkan
            colCard.style.justifyContent = 'start'
            colCard.style.marginTop = '0px'

        }
    });
});

// Ambil semua elemen tombol
const btnCards = document.querySelectorAll('.col-btn-card-footer button');

// Tambahkan event listener untuk setiap tombol
btnCards.forEach((btnCard) => {
    // Cari ikon yang bersangkutan berdasarkan tombol
    const arcCard = btnCard.nextElementSibling;

    // Event listener untuk mouseover
    btnCard.addEventListener('mouseover', function () {
        btnCard.classList.add('active');
        arcCard.classList.add('active');
    });

    // Event listener untuk mouseleave
    btnCard.addEventListener('mouseleave', function () {
        btnCard.classList.remove('active');
        arcCard.classList.remove('active');
    });
});