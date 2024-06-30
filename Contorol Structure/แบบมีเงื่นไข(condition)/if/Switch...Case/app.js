let Frank = 4520; // ยอดเงินในบัญชีนาย Frank
let Tom = 450; // ยอดเงินในบัญชีนาย Tom
let Mod = 870; // ยอดเงินในบัญชีนางสาว Mod
let borrow_mod_frank = 874; // นางสาว Mod ยืมเงินจากนาย Frank
let borrow_tom_frank = 1000; // นาย Tom ยืมเงินจากนาย Frank
let borrow_frank_tom = 250;

// นางสาว Mod ยืมเงินจาก นาย Frank
/*if (borrow_mod_frank <= Frank) {
    console.log("นางสาว Mod ยืมเงินจาก นาย Frank มา 874 บาท =", borrow_mod_frank);
    Frank -= borrow_mod_frank;
    console.log("ยอดคงเหลือในบัญชีนาย Frank =", Frank);
    Mod += borrow_mod_frank;
    console.log("ยอดคงเหลือในบัญชีนางสาว Mod =", Mod);
} else {
    console.log("นาย Frank มีเงินไม่เพียงพอที่จะให้ยืม");
}

// นาย Tom ยืมเงินจาก นาย Frank
if (borrow_tom_frank <= Frank) {
    console.log("นาย Tom ยืมเงินจาก นาย Frank มา 1000 บาท =", borrow_tom_frank);
    Frank -= borrow_tom_frank;
    console.log("ยอดคงเหลือในบัญชีนาย Frank =", Frank);
    Tom += borrow_tom_frank;
    console.log("ยอดคงเหลือในบัญชีนาย Tom =", Tom);
} else {
    console.log("นาย Frank มีเงินไม่เพียงพอที่จะให้ยืม");
}*/


// นาย Frankfurt ยืมจาก นาย TOM

if (borrow_frank_tom<= Tom){
    console.log("นาย frank ยืมเงินจาก นาย tom มา 250 บาท =",borrow_frank_tom);
    Tom -= borrow_frank_tom;
    console.log("ยอดคงเหลือในบัญชีนาย tom =",Tom);
    Frank += borrow_frank_tom;
    console.log("ยอดคงเหลือของนาย frank =", Frank);

}

const workoutJournal = (miles, avgTime) => {
  console.log(
    "I ran " + miles + " miles at an average of " + avgTime + " per mile."
  );
};

workoutJournal("3");

const multiplier = (number) => {
  console.log(3 * number);
};