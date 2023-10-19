console.log("-----------------------")
console.log("Nama   : Siti Nurviatika")
console.log("Nim    : 20220040281")
console.log("Kelas  : TI22A")
console.log("------------------------")

// Pemrograman sederhana menggunakan if else, dan switch case

function menghitungKomisiDanUangJasa(pendapatan) {
    let uangJasa;
    let komisi;

    if (pendapatan <=200000) {
        uangJasa = 10000;
        komisi = 0.10 * pendapatan;
    } else if (pendapatan > 200000 && pendapatan <= 500000) {
        uangJasa = 20000;
        komisi = 0.15 + pendapatan;
    } else if (pendapatan > 500000) {
        uangJasa = 30000;
        komisi = 0.20 * pendapatan;
    } 
    return uangJasa + komisi;
}

function MemberikanKomisiDanUangJasa(pendapatan) {
    switch(true) {
        case (pendapatan <= 200000) :
            return 10000 + 0.10 * pendapatan;
        case (pendapatan > 200000 && pendapatan <= 500000) :
            return 20000 + 0.15 * pendapatan;
        case (pendapatan > 500000) :
            return 30000 + 0.20 * pendapatan;
        default:
            return 0;
    }

}

// contoh penggunaannya
let pendapatan1 = 200000; 
    // pendapatan Rp200.000
let pendapatan2 = 250000;
    // pendapatan Rp250.000
let pendapatan3 = 300000;
    // pendapatan Rp300.000

console.log("Komisi dan uangJasa untuk pendapatan Rp200.000:", menghitungKomisiDanUangJasa(pendapatan1));
console.log("Komisi dan uangJasa untuk pendapatan Rp250.000:", menghitungKomisiDanUangJasa(pendapatan2));
console.log("Komisi dan uangJasa untuk pendapatan Rp300.000:", menghitungKomisiDanUangJasa(pendapatan3));

console.log("Komisi dan uangJasa (swich case) untuk pendapatan Rp200.000: ",MemberikanKomisiDanUangJasa(pendapatan1));
console.log("Komisi dan uangJasa (swich case) untuk pendapatan Rp250.000: ",MemberikanKomisiDanUangJasa(pendapatan2));
console.log("Komisi dan uangJasa (swich case) untuk pendapatan Rp300.000: ",MemberikanKomisiDanUangJasa(pendapatan3));

