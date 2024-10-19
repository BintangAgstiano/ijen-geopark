window.addEventListener('scroll', function () {
    const section1 = document.querySelector('.section1');
    if (window.scrollY > 100) {
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
const alumnis = document.querySelectorAll('.box-right4');
const parent = document.querySelector(".parent-box4");

if (alumnis.length > 0) {
    function changePosition() {
        // parent.style.opacity = "0";
        alumnis.forEach(alumni => {
            if (alumni.classList.contains('first-card')) {
                alumni.classList.replace('first-card', 'five-card');
            } else if (alumni.classList.contains('second-card')) {
                alumni.classList.replace('second-card', 'first-card');
            } else if (alumni.classList.contains('third-card')) {
                alumni.classList.replace('third-card', 'second-card');
            }
            else if (alumni.classList.contains('for-card')) {
                alumni.classList.replace('for-card', 'third-card');
            }
            else if (alumni.classList.contains('five-card')) {
                alumni.classList.replace('five-card', 'for-card');
            }
        });

        setTimeout(() => {
            parent.style.opacity = "1";
        }, 300);
    }

    setInterval(changePosition, 3000);
}


