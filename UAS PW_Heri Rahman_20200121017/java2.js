function proses(){
 
    // Deklarasi
    var jamkerja=document.getElementById("jamkerja").value;
    var upahperjam=document.getElementById("upahperjam").value;
    var anak=document.getElementById("anak").value;

    // menghitung Gaji karyawan

    var gaji=jamkerja*upahperjam;
    document.getElementById("gaji").value=gaji;

    // menghitung Tunjangan anak 10%
    var tunjangananak=gaji*.1*anak;
    document.getElementById("tunjangananak").value=tunjangananak;

    // menghitung Total Gaji
    var totalgaji=gaji+tunjangananak;
    document.getElementById("totalgaji").value=totalgaji

    

}