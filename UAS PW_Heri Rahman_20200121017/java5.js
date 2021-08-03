function proses(){
    let usb = document.getElementById("checkusb").checked;
    let memory = document.getElementById("checkmemory").checked;
    let speaker = document.getElementById("checkspeaker").checked;
    let harga=document.getElementById("harga").value;
    let jumlah=document.getElementById("jumlah").value;
    let total=document.getElementById("total").value;
    let bayar=document.getElementById("bayar").value;

    //check checkbox    
    
    if(usb==true){
        document.getElementById("harga").value="50.000";
        harga=50000;
        harga*jumlah;
    }
    // Check memory
    if(memory==true){
        document.getElementById("harga").value="120.000";
        harga=120000;
        harga*jumlah;
    }
    // Check Speaker
    if(speaker==true){
        document.getElementById("harga").value="40.000";
        harga=40000;
        harga*jumlah;
    }
    // check usb & memory
    if(usb==true && memory==true){
        document.getElementById("harga").value="170.000";
        harga=50000+120000;
        harga*jumlah;
    }
    // check usb & speaker
    if(usb==true && memory==true){
        document.getElementById("harga").value="90.000";
        harga=50000+40000;
        harga*jumlah;
    }
    // check memory & speaker
    if(usb==true && memory==true){
        document.getElementById("harga").value="160.000";
        harga=120000+40000;
        harga*jumlah;
    }
    // Check Semua
    if(speaker==true && memo==true && usb==true){
        document.getElementById("harga").value="210.000";
        harga=40000+120000+50000;
        harga*jumlah;
    }

    // Hitung Total
    total=harga*jumlah;
    document.getElementById("total").value=total;
    // Hitung pajak
    pajak=total*0.1;
    document.getElementById("pajak").value=pajak;
    // Bayar
    bayar = total+pajak;
    document.getElementById("bayar").value=bayar;
   
}