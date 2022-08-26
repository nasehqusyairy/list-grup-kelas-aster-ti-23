const links = ["KOhq1OgihVn6NSrxD44GKT", "EcxZVYdBkOmCyykhTpAQwp", "FrbwwdQXhV67RsvcpmBDrD", "LAjmmnErk7REkvKlpg75Fa", "IPmsPqx9EM1EvRdb55RvpQ", "DXcEgQ0hDSS8q2n791boJa", "E6FcTWm31vHBwLXP52dsvq", "Lwaj0ivJoi13DPxIT7IDKl", "KoPzCHDLRRJJBi9CIlq1PS", "IejihKYnd9z7t6owY0cBEG", "K9aAJdFCmVFKgpGqkaHTAN", "HtzNuBaGkWX77AjtweaDUy", "HpeEXK3Il862jGXLX5j2xj", "LmYdeG1juOm963hZNHlpoX", "D6fxuzcGimfJOkFTo8DreO", "BU5CMD4iXp9AHf5zToFd52", "Bn4iiYbYKP394rrksC70PY", "Ktd9RFm7rDu9cl3RyMLY0E", "KrXsUD8pcBf3mC8QmrgZrV", "GWcKE19c8TZGIl1vN5RISU", "KY92gCwew0q0Zf84enz900", "JboEK5pivHJJLoSlw76dDp", "J9YC8Oe2CS0JHm1jXgHp5v", "BB6csinWbjaBawm93T9mjl", "DAEdJOfUSff7Yiszn3MohZ", "FA02vA2jH7UARETPEMTb9z", "FLXHJLZyPgPHdNmAKSmA3j", "IdJyOlDpYGS0Dvz8LypzKd", "HNADZfqEgZBLczAIBmEkfy", "HZuzA1t65d51RyrGACAV4Y", "Fow8VsHHD5EJiWLLP1n7dN", "GtBtkhBxfs6G05Cr7i0tGL", "FRdtOV1mm7D4Bd5Cr9dC1z", "IKVrTzM2iHWIZ5nnRFjWhO", "L5Fijb8lk383JC8PPx324A", "KifoTx4NcBMACINs32OB7Q", "H01I14sY1kpC08mY2H2b3H", "EV2kkkM21haJsO5HahH9Ny", "Kjxq3XJX89TLkUK1LOkEyf", "C5b2GXe1FZyDmiAlIjAsWk", "D4Hno85qom3InXEDYWhinP", "D9y56QuFFKC5MDymMGW0IM", "Ic7p5UrZRZlAbwQFCnPhyd", "HOfnV57xJFa0ZSKRgk9vHS", "CUJ7fwya9qSEpBa8rEdvEi", "H0MJyGF8usj4f4lB2niBuj", "Hq72fRw6ESJCsqEOlaPSjd", "BqO6lbs3cY91G8G9o73rKA", "KuEqCuhIhnhC9d5RXnE1Eq", "CpJ6u6bDJFuJ1GlFg3taem", "Fu6Nd1vCRMA1y9towPU9uU", "HuHhKoG5mffDQS86X0fQAu", "Dlq0sqJzheD89KxGQ9LNeY", "L0WPWvPSSfmCRpyQzku2rL", "IRRHXoeAii29NjDnD8uD3o", "KprERvTf1UTGpVB57g46RC", "HhMqiRrt1O7CUxQ5OaEiVM", "GLnxP9ERZekEGLhdstFldI", "DQ36NfHwqhNJNv5ykBJYDE", "EuBcxDdBSUf1xjhYNtnZdT", "BAEqClRvWZtHrqVROYYfyv", "GePNy3QtiY35DUp9j9fLGw", "HO5cKRrBMbu7fhZVksy3w0", "K8LVSU0uMmN6ruyfgyIV8f", "D9aZHHV9uwtCfZjqcRbiJI", "ICn1JxmfWl21Se3DTVTq7n", "LdzicZsevhxD237VNTwVjq", "HcCGvMVbwsFGifzxenvqO3", "JyjaM5mVyreGgewzw65A1d", "CX6ra7KfVSG8mbNRZqb8yh", "JOsI4ITG2zlIvax8iusCka", "EgQiv3ODCRg1VOifxuE5xH", "L6N8pQavWuu3PZmPb4NRwi", "CDMGugX0qa632eKk8hnvSl"]

const data = [
  {
    matkul: "Basis Data",
    kelas: ["A", "B", "C", "D", "E", "F", "G"]
  },
  {
    matkul: "Sistem Komputer",
    kelas: ["A", "B", "C", "D", "E", "F"]
  },
  {
    matkul: "Metode Numerik",
    kelas: ["A", "B", "C", "D", "E", "F"]
  },
  {
    matkul: "Struktur Data",
    kelas: ["A", "B", "C", "D", "E", "F", "G"]
  },
  {
    matkul: "Studi Fiqih",
    kelas: ["A", "B", "C", "D", "E", "F"]
  },
  {
    matkul: "Bahasa Inggris I",
    kelas: ["A", "B", "C", "D", "E", "F"]
  },
  {
    matkul: "Studi Al-Qur'an & Hadist",
    kelas: ["A", "B", "C", "D", "E", "F"]
  },
  {
    matkul: "Praktikum Sistem Komputer",
    kelas: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
  },
  {
    matkul: "Praktikum Basis Data",
    kelas: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
  },
  {
    matkul: "Praktikum Struktur Data",
    kelas: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
  },
]

// generate elements
const main = document.querySelector('main') //kontrol elemen main dari DOM
let section = '' //variabel string untuk menampung template literal untuk masing-masing section

// looping array data
data.forEach((el) => {
  let matkul = el.matkul

  let cards = '' //variabel string untuk menampung template literal untuk masing-masing card berisi informasi kelas

  // looping array kelas di masing-masing matkul
  el.kelas.forEach((kls) => {

    // mengisi variabel cards dengan template literal
    cards += `
    <div class="col-6 col-md-3 col-lg-3">
    <div class="card">
      <div class="card-body text-center">
        <h5 class="card-title">Kelas ${kls}</h5>
        <div class="d-grid gap-2">
          <a href="#" target="_blank" class="btn btn-primary text-white join-grup">Gabung</a>
        </div>
      </div>
    </div>
  </div>
    `
  })

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
})

// mengisi elemen main
main.innerHTML = section



// melengkapi link pada navbar
const nav = document.querySelector('.navbar .navbar-nav') //kontrol elemen div.navbar-nav dari DOM

// membuat array berisi template literal untuk elemen .nav-link dari array links kemudian disambungkan menjadi satu string menggunakan method join()
let navLinks = data.map((e) => {
  return `
  <a class="nav-link" href="#${e.matkul.replaceAll(' ', '_').toLowerCase()}">${e.matkul}</a>
  `
}).join('')

// mengisi elemen div.nav-link
nav.innerHTML = navLinks

// distribusi link whatsapp
document.querySelectorAll('.join-grup').forEach((e, i) => {
  e.attributes.href.value = 'https://chat.whatsapp.com/' + links[i]
})