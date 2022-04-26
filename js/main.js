/**
 * Bài tập 1
 */
const tienNPT = 1600000;
const tienDuocTru = 4000000;
var thuNhapChiuThue = 0;
var thueThuNhap = 0;
var tongThuNhap = 0;
var soNPT = 0;

function getEle(id) {
    return document.getElementById(id);
};

function tinhThuNhapChiuThue(tongThuNhapNam, soNPT) {
    thuNhapChiuThue = tongThuNhap - tienDuocTru - soNPT * tienNPT;
    return thuNhapChiuThue;
};

function tinhThuePhaiDong(a) {
    if (a == 60000000) {
        thueThuNhap = a * 5 / 100;
    } else if (a > 60000000 && a <= 120000000) {
        thueThuNhap = a * 10 / 100;
    } else if (a > 120000000 && a <= 210000000) {
        thueThuNhap = a * 15 / 100;
    } else if (a > 210000000 && a <= 384000000) {
        thueThuNhap = a * 20 / 100;
    } else if (a > 384000000 && a <= 624000000) {
        thueThuNhap = a * 25 / 100;
    } else if (a > 624000000 && a <= 960000000) {
        thueThuNhap = a * 30 / 100;
    } else if (a > 960000000) {
        thueThuNhap = a * 35 / 100;
    } else {
        thueThuNhap = "Không phải chịu thuế thu nhập!";
    }
    return thueThuNhap;
}
getEle("btnTinh1").onclick = function() {
    tongThuNhap = getEle("tongThuNhapNam").value * 1;
    soNPT = getEle("soNPT").value * 1;
    var hoTen = getEle("hoTen").value;
    thuNhapChiuThue = tinhThuNhapChiuThue(tongThuNhapNam, soNPT);
    thueThuNhap = tinhThuePhaiDong(thuNhapChiuThue);
    var currentFormat = new Intl.NumberFormat("vn-Vn");
    getEle("divInfo").style.display = "block";
    getEle("divInfo").innerHTML = "Số tiền thuế thu nhập cá nhân của: " + hoTen + " phải trả là: " + currentFormat.format(thueThuNhap);
};



/**
 * Bài tập 2
 */
const phiXLND = 4.5;
const phiDVCBND = 20.5;
const thueKCCND = 7.5;
const phiXLDN = 15;
const thueKCCDN = 50;
var loaiKH = "";
getEle("doanhNghiep").onclick = function() {
    if (doanhNghiep.checked) {
        getEle("soKN").style.display = "block";
    }
};
getEle("nhaDan").onclick = function() {
    if (nhaDan.checked) {
        getEle("soKN").style.display = "none";
    }
};

function loaiKhachHang() {
    var nhaDan = getEle("nhaDan");
    var doanhNghiep = getEle("doanhNghiep");
    var loaiKhachHang = "";

    if (nhaDan.checked) {
        loaiKhachHang = "nhaDan";
    } else if (doanhNghiep.checked) {
        loaiKhachHang = "doanhNghiep";
    }
    return loaiKhachHang;
};

function tinhThueCC(soKenhCaoCap, thueCaoCap) {
    return soKenhCaoCap * thueCaoCap;
};

function tinhThueDVCB(soKenhCoBan) {
    var tinhThueDVCBDN = 0;
    if (0 < soKenhCoBan && soKenhCoBan <= 10) {
        tinhThueDVCBDN = 75;
    } else {
        tinhThueDVCBDN = 75 + (soKenhCoBan - 10) * 5;
    }
    return tinhThueDVCBDN;
}
getEle("btnTinhTienCap").onclick = function() {
    var maKH = getEle("maKH").value;
    var soKenhCaoCap = getEle("soKenhCaoCap").value * 1;
    var soKenhCoBan = getEle("soKetNoi").value * 1;
    var tinhHoaDon = 0;
    loaiKH = loaiKhachHang();
    switch (loaiKH) {
        case "nhaDan":
            tinhHoaDon = phiXLND + phiDVCBND + tinhThueCC(soKenhCaoCap, thueKCCND);
            break;
        case "doanhNghiep":
            tinhHoaDon = phiXLDN + tinhThueDVCB(soKenhCoBan) + tinhThueCC(soKenhCaoCap, thueKCCDN);
            break;
        default:
            alert("Vui lòng nhập đầy đủ thông tin!");
            break;
    }



    getEle("divInfo1").style.display = "block";
    getEle("divInfo1").innerHTML = "Tiền hoá đơn của mã Khác Hàng: " + maKH + " là: " + tinhHoaDon + "$";
};