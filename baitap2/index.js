//input: nhập vào họ tên và số kw điện
//progress: khai báo biến họ tên và số kw điện, 50kw đầu = 500d/kw, 51-100 = 650d, 101-200 = 850d, 201-350 = 1100d, từ 351 trở lên = 1300d.
// output : xuất họ tên và giá tiền điện

const KW_DAU = "50kwdau";
const KW_TU_50 = "50kwKe";
const KW_TU_100 = "100kwke";
const KW_TU_200 = "150kwke";
const KW_TREN_350 = "tren350"
function giaTienKw(mucKw){
    switch(mucKw){
        case KW_DAU:{
            return 500;
        }   
        case KW_TU_50:{
            return 650;
        }
        case KW_TU_100:{
            return 850;
        }
        case KW_TU_200:{
            return 1100;
        }
        default:{
            return 1300;
        };   
    }     
};


    
document.getElementById("btnTienDien").onclick = function(){
    
    var hoTen = document.getElementById("hoTen").value;
    var soKw = document.getElementById("soKw").value * 1;
    var giaTien = giaTienKw(KW_DAU);
    var giaTien50Ke = giaTienKw(KW_TU_50);
    var giaTien100Ke = giaTienKw(KW_TU_100);
    var giaTien150Ke = giaTienKw(KW_TU_200);
    var giaTienTren350 = giaTienKw(KW_TREN_350);
    var tongTien = 0;
    if(soKw <= 50){
        tongTien = giaTien * soKw;
    } else if(soKw > 50 && soKw <= 100){
        tongTien = (50 * giaTien) + (soKw -50) * giaTien50Ke;
    }else if(soKw > 100 && soKw <= 200){
        tongTien = (50 * giaTien )+ (50 * giaTien50Ke) +  (soKw -100) * giaTien100Ke;
    }else if(soKw > 200 && soKw <= 350){
        tongTien = (50 * giaTien )+ (50 * giaTien50Ke) + (100 * giaTien100Ke) + (soKw -200) * giaTien150Ke ;
    }else {
       tongTien = (50 * giaTien )+ (50 * giaTien50Ke) + (100 * giaTien100Ke) + (150 * giaTien150Ke) + (soKw -350) * giaTienTren350;
    }
    document.getElementById("txtKetQua").innerHTML = `<i class="fa-regular fa-hand-point-right fs-3 px-3" style="color: orange;"></i> Họ Tên : ${hoTen} ; Tiền điện ${tongTien}`;
}



