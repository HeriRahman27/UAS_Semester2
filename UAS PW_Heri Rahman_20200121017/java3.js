function proses(){

    // deklarasi

    var pilihan=document.getElementById("pilihan").value;
    var jumlah=document.getElementById("jumlah").value;

    // Proses
    switch(pilihan){
        case "1":
        var hm=2000000;
        document.getElementById("harga").value=hm;
        break;

        case "2":
        var hv=3000000;
        document.getElementById("harga").value=hv;
        break;

        case "3":
        var hc=5000000;
        document.getElementById("harga").value=hc;
        break;

        default:
        break;
    }

    // deklarasi dibawah agar nilai harga berubah
    var harga=document.getElementById("harga").value;

    // menghitung Total
    var total=jumlah*harga
    document.getElementById("total").value=total;
    
}