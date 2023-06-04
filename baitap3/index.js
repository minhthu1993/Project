const THUE1 = "THUE1";
const THUE2 = "THUE2";
const THUE3 = "THUE3";
const THUE4 = "THUE4";
const THUE5 = "THUE5";
const THUE6 = "THUE6";
const THUE7 = "THUE7";

function phanTramThuNhapChiuThue(tongThuNhap) {
    var mucThue = 0;
    if(tongThuNhap <= 60e+6) {
        mucThue = tongThuNhap * 0.05
    } else if (tongThuNhap > 60e+6 && tongThuNhap <= 120e+6) {
        mucThue = (60e+6 * 0.05) + (tongThuNhap - 60e+6) * 0.1;
    } else if( tongThuNhap > 120e+6 && tongThuNhap <= 210e+6) {
        mucThue = (60e+6 * 0.05) + 60e+6 * 0.1 + (tongThuNhap - 120e+6) * 0.15;
    } else if( tongThuNhap > 210e+6 && tongThuNhap <= 384e+6) {
        mucThue = (60e+6 * 0.05) + 60e+6 * 0.1 + 90e+6 * 0.15 + (tongThuNhap - 210e+6) * 0.2;
    } else if( tongThuNhap > 384e+6 && tongThuNhap <= 624e+6) {
        mucThue = (60e+6 * 0.05) + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + (tongThuNhap - 384e+6) * 0.25;
    } else if( tongThuNhap > 624e+6 && tongThuNhap <= 960e+6) {
        mucThue = (60e+6 * 0.05) + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + 240e+6 * 0.25 + (tongThuNhap - 624e+6) * 0.3;
    } else {
        mucThue = (60e+6 * 0.05) + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + 240e+6 * 0.25 +  336e+6 * 0.3 + (tongThuNhap - 960e+6) * 0.35;
    }

    return mucThue
}

document.getElementById("btnTienThue").onclick = function () {
    var hoTen = document.getElementById("hoTen").value;
    var tongThuNhapNam = document.getElementById("tongThuNhap").value * 1;
    var soNguoiPhuThuoc = document.getElementById("soNguoi").value * 1;
    var ketQua = phanTramThuNhapChiuThue(tongThuNhapNam - 4e+6 - (soNguoiPhuThuoc * 16e+5));
    console.log(16e+5);
    console.log(ketQua)
    document.getElementById("txtKetQua").innerHTML = `<i
    class="fa-regular fa-hand-point-right fs-3 px-3" style="color: orange;"></i> Họ tên : ${hoTen}; Tiền thuế thu nhập cá nhân : ${ketQua}`;
}