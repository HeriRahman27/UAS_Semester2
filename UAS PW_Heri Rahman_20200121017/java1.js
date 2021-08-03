function proses(){

    // Deklarasi
    var harga=document.getElementById("harga").value;
    var jumlah=document.getElementById("jumlah").value;

    // menghitung hasil
    var hasil= harga*jumlah;
    document.getElementById("total").value=hasil;

    // menghitung diskon
    if(hasil<250000){
        diskon=0;
        document.getElementById("diskon").value="tidak dapat diskon";
    }else{
        diskon=.2;
        document.getElementById("diskon").value="20%";
    }

    // menghitung total yang harus dibayar sesudah diskon
    var totalbayar=hasil*diskon;
    bayar=hasil-totalbayar
    document.getElementById("bayar").value=bayar;

}