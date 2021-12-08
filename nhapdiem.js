let vatly;
let hoa;
let toan;
vatly = Number(prompt('Nhập điểm môn vật lý'));
hoa = Number(prompt('nhâp điểm môn hóa học'));
toan =Number(prompt('nhập điểm môn toán'));
let tong = (vatly + hoa + toan);
document.write('Tổng 3 môn :' +tong)
let dtb = tong/3;
document.write('điểm trung bình:' + dtb)