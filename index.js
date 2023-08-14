//Bài Tập 1

function calculating() {
   var soNgay=document.getElementById("nhapSoNgay").value;
   var tienLuong=soNgay * 100000;
   console.log("🚀 ~ calculating ~ tienLuong:", tienLuong);
   document.getElementById("result").innerHTML=` Tiền Lương: ${tienLuong} `;
}

//Bài Tập 2
function ketQuaTrungBinh() {
    var soThuc1=parseInt(document.getElementById("nhapSoThuc1").value);
    var soThuc2=parseInt(document.getElementById("nhapSoThuc2").value);
    var soThuc3=parseInt(document.getElementById("nhapSoThuc3").value);
    var soThuc4=parseInt(document.getElementById("nhapSoThuc4").value);
    var soThuc5=parseInt(document.getElementById("nhapSoThuc5").value);
    var Tong= soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5;
    console.log("🚀 ~ ketQuaTrungBinh ~ Tong:", Tong);
    var giaTriTrungBinh=Tong/5;
    console.log("🚀 ~ ketQuaTrungBinh ~ giaTriTrungBinh:", giaTriTrungBinh);
    document.getElementById("ketQuaTrungBinh").innerHTML=` Kết quả trung bình: ${giaTriTrungBinh}`;
}

//Bài Tập 3
function soTienQuyDoi() {
    var soTienUSD=document.getElementById("nhapSoTien").value;
    var tienQuyDoi=soTienUSD*23500;
    console.log("🚀 ~ soTienQuyDoi ~ tienQuyDoi:", tienQuyDoi);
    document.getElementById("soTienVND").innerHTML=` Số tiền sau khi quy đổi = ${tienQuyDoi} VND`;
}

//Bài tập 4
function ketQua() {
    var chieuDaiValue=parseInt(document.getElementById("chieuDai").value);
    var chieuRongValue=parseInt(document.getElementById("chieuRong").value);
    var chuVi= (chieuDaiValue + chieuRongValue) * 2 ;
    console.log("🚀 ~ ketQua ~ chuVi:", chuVi);
    var dienTich= chieuDaiValue * chieuRongValue ;
    console.log("🚀 ~ ketQua ~ dienTich:", dienTich);
    document.getElementById("chuViDienTich").innerHTML=`Chu vi = ${chuVi} - Diện tích = ${dienTich}`;
}

//Bài tập 5
function tong2So () {
    var soCo2ChuSo=document.getElementById("nhapSo2ChuSo").value;
    hangDonVi=soCo2ChuSo%10;
    console.log("🚀 ~ tong2So ~ hangDonVi:", hangDonVi);
    hangChuc=Math.floor(soCo2ChuSo/10)%10;
    console.log("🚀 ~ tong2So ~ hangChuc:", hangChuc);
    var tong2So = hangChuc + hangDonVi;
    console.log("🚀 ~ tong2So ~ tong2KySo:", tong2So)
    document.getElementById("tong2KySo").innerHTML=` Tổng 2 ký số = ${tong2So} `;
}