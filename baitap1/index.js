//input: nhập điểm chuẩn, chọn khu vực , chon đối tượng , nhâp điểm các môn
//progress: tính tổng 3 môn, sau đó so sánh với điểm chuẩn qua các case khu vực và điểm đối tượng. nếu dưới  có môn 0 điểm thì rớt
//output: kết quả đậu rớt.

document.getElementById("btnKetQua").onclick = function(){
    var diemChuan = document.getElementById("diemChuan").value * 1;
    var khuVuc = document.getElementById("khuVuc").value * 1;
    var doiTuong = document.getElementById("doiTuong").value * 1;
    var monThu1 = document.getElementById("monThu1").value * 1;
    var monThu2 = document.getElementById("monThu2").value * 1;
    var monThu3 = document.getElementById("monThu3").value * 1;
    var ketQua = document.getElementById("txtKetQua");
    if(monThu1 <= 0 || monThu2 <= 0 || monThu3 <= 0){
        ketQua.innerHTML = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
    }
    var tongDiem = monThu1 + monThu2 + monThu3 + khuVuc + doiTuong;
    if(tongDiem < diemChuan){
        ketQua.innerHTML = `<i class="fa-regular fa-hand-point-right fs-3 px-3" style="color: orange;"></i> Bạn đã rớt. Tổng điểm là : ${tongDiem}`;;
        console.log(11)
    } else {
        ketQua.innerHTML = `<i class="fa-regular fa-hand-point-right fs-3 px-3" style="color: orange;"></i> Bạn đã đậu. Tổng điểm là : ${tongDiem}`;
    }
  
    
}