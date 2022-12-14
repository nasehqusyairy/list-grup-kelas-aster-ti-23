const preloadState = document.querySelector('.splash p') //kontrol elemen p pada splash screen dari DOM

// Ambil data dari file data_matkul.json kemudian jalankan fungsi create_sections()
fetch('assets/json/data_matkul.json').then((response) => {
  return response.json().then((data) => {
    create_sections(data)
  })
}).catch((reason) => { preloadState.innerHTML = "Terjadi kesalahan : " + reason.message }) //error handling

// fungsi untuk membuat section
function create_sections(data) {
  const main = document.querySelector('main') //kontrol elemen main dari DOM
  let section = '' //variabel string untuk menampung template literal untuk masing-masing section

  // looping array data
  data.forEach((el, i) => {
    let { matkul } = el

    //variabel string untuk menampung template literal untuk masing-masing card berisi informasi kelas
    let cards = el.kelas.map(kls =>
      `
    <div class="col-6 col-md-3 col-lg-3">
    <div class="card">
      <div class="card-body text-center">
        <h5 class="card-title text-primary">Kelas ${kls}</h5>
        <div class="d-grid gap-2">
          <a href="#" target="_blank" class="btn btn-primary text-white join-grup">Gabung</a>
        </div>
      </div>
    </div>
  </div>
    `
    ).join('')

    // menyusun cards pada section dan mengisi variabel section
    // mengolah judul masing-masing matkul untuk dijadikan id section dan href pada link navigasi
    section += `
   <section id="${matkul.replaceAll(' ', '_').toLowerCase()}"> 
   <div class="container">
     <h3 class="text-center text-md-start mb-3"><a href="#${matkul.replaceAll(' ', '_').toLowerCase()}" class="text-white"># ${matkul}</a></h3>
     <div class="row">
       ${cards}
     </div>
   </div>
 </section>
   `
    // animasi loading
    document.querySelector('.progress-bar').style.width = ((i + 1) / data.length * 100) + '%'
    document.querySelector('.splash p span').innerHTML = `(${i + 1}/${data.length})`

  })

  // mengisi elemen main
  main.innerHTML = section

  setTimeout(() => {
    // Ambil data dari file links.json kemudian distribusikan link whatsapp
    fetch('assets/json/links.json').then((response) => {
      return response.json().then((data) => {
        // distribusi link whatsapp
        document.querySelectorAll('.join-grup').forEach((e, i) => {
          e.attributes.href.value = 'https://chat.whatsapp.com/' + data[i]
        })

        // menghilangkan splash screen
        const splash = document.querySelector('.splash')
        splash.style.opacity = '0'
        setTimeout(() => {
          splash.style.display = 'none'
          document.body.style.overflow = 'auto'
        }, 1000); //timeout untuk menyamakan timing animasi

      })
    }).catch((reason) => { preloadState.innerHTML = "Terjadi kesalahan : " + reason }) //error handling;
  }, 1000); //timeout untuk menyamakan timing animasi

  // melengkapi link navigasi pada navbar
  const nav = document.querySelector('.navbar .navbar-nav') //kontrol elemen div.navbar-nav dari DOM

  // membuat array berisi template literal untuk elemen .nav-link dari array links kemudian disambungkan menjadi satu string menggunakan method join()
  let navLinks = data.map((e) => {
    return `
    <a class="nav-link" href="#${e.matkul.replaceAll(' ', '_').toLowerCase()}">${e.matkul}</a>
    `
  }).join('')

  // mengisi elemen div.nav-link
  nav.innerHTML = navLinks
}