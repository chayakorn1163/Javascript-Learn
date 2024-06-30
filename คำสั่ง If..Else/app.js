let balance = 5000;
let withDraw = 4999;


if (withDraw<=balance) {
    // คำสั่งให้ทำอะไร
    // เมื่อเงื่อนไขเป้นจริง
console.log("ดำเนินการถอนเงิน =",withDraw);
    balance -= withDraw;
    console.log("คงเหลือเงิน =",balance);
}
else{
    // เมื่อเงือนไขเป็นเท็จ
    console.log("ยอดเงินของคุณไม่พอ ");

}
