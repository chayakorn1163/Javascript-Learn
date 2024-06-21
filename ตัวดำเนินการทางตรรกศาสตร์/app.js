/*

ตัดเดรด 
and => และ
or => หรือ


ex
ซื่อมะม่วง และมะม่วงหรือเปล่า ? => กลับบ้านได้ (true)
and
a = true && b = true => a && b || false

*/

// ตัดเกรด


 // 70-80 => A
 // 60-70 => B
 // 50-60 => C
 // 40-50 => D
 // 0-40 => F

 let score =78;
 console.log(score >= 70  && score <= 80,"A") ;
 console.log(score >= 50 && score <= 60, "B");
 console.log(score >= 40 && score <= 50, "C");