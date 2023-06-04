
//input : 2 loai khach hang : nha dan va doanh nghiep voi 2 muc gia tinh tien cap
// nha dan: phi hoa don 4.5$
//phi co ban 20.5
//thue kenh cao cap 7.5
// nhap vao ma khach hang, loai hang, so ke noi, so kenh cao cap. 
//outPut : tinh hoa don khach hang
const PHI_HOA_DON = "PHI_HOA_DON";
const PHI_CO_BAN = "PHI_CO_BAN";
const PHI_CO_BAN_THEM = "PHI_CO_BAN_THEM";
const PHI_CAO_CAP = "PHI_CAO_CAP";
const NHA_DAN = "nhaDan";
const DOANH_NGHIEP = "doanhNghiep";

function phiDichVu(khachHang) {
    let phiHoaDon = 0;
    let phiCoBan = 0;
    let phiCaoCap = 0;
    let phiCoBanThem = 0;
    switch(khachHang) {
        case NHA_DAN : {
            phiHoaDon = 4.5;
            phiCoBan = 20.5;
            phiCaoCap = 7.5;
            return {phiHoaDon, phiCoBan, phiCaoCap};
        }
        case DOANH_NGHIEP : {
            phiHoaDon = 15;
            phiCoBan = 75;
            phiCaoCap = 50;
            phiCoBanThem = 80;
            return {phiHoaDon, phiCoBan, phiCaoCap, phiCoBanThem};
        }
    }
}

var valueSelected = document.getElementById('txtKhachHang');
var soKetNoi = document.getElementById('soKetNoi');
var valueSoKetNoi = soKetNoi.value * 1;

document.getElementById("btnTienCap").onclick = function () {
    var maKhachHang = document.getElementById("maKhachHang").value * 1;
    var soKenhCaoCap = document.getElementById('soKenh').value * 1;
    var valueSoKetNoi = soKetNoi.value
    const {phiHoaDon, phiCoBan, phiCaoCap, phiCoBanThem} = phiDichVu(valueSelected.value);
    var tongPhi = 0;
    var tongPhiCaoCap = phiCaoCap * soKenhCaoCap;
    if(valueSelected.value == "doanhNghiep") {
        var tongPhiCoBan = valueSoKetNoi > 10 ? (valueSoKetNoi - 10) * 5 + phiCoBan : phiCoBan;
        tongPhi = phiHoaDon + tongPhiCoBan + tongPhiCaoCap
    } else {
        tongPhi = phiHoaDon + phiCoBan + tongPhiCaoCap
    }

    document.getElementById("txtKetQua").innerHTML = `<i
    class="fa-regular fa-hand-point-right fs-3 px-3" style="color: orange;"></i> Mã khách hàng: ${maKhachHang} ; Tiền cáp: $${tongPhi}`
}

function tinhPhi() {
    
}

function onChangeDropDown() {
    if(valueSelected.value == "doanhNghiep") {
        soKetNoi.style.display = "block";
    } else {
        soKetNoi.style.display = "none";
    }
}