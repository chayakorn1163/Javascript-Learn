/*กำหนดฟังก์ชัน monitorCount:

ฟังก์ชันนี้รับพารามิเตอร์สองตัวคือ rows (จำนวนแถว) และ columns (จำนวนคอลัมน์)
ฟังก์ชันนี้คำนวณและส่งกลับค่าจำนวนจอภาพทั้งหมดโดยการคูณ rows กับ columns
กำหนดฟังก์ชัน cosOfMonitors:

ฟังก์ชันนี้รับพารามิเตอร์สองตัวคือ rows (จำนวนแถว) และ column (จำนวนคอลัมน์, มีการพิมพ์ผิด)
ฟังก์ชันนี้คำนวณราคาทั้งหมดของจอภาพโดยการเรียกใช้ฟังก์ชัน monitorCount เพื่อหาจำนวนจอภาพแล้วคูณด้วย 200 (ราคาต่อจอภาพ)
หมายเหตุ: ฟังก์ชันนี้ไม่ได้ถูกเรียกใช้งานในโค้ดตัวอย่าง
การคำนวณและแสดงผลลัพธ์:

คำนวณจำนวนจอภาพทั้งหมดสำหรับการจัดเรียงแบบ 5 แถว 4 คอลัมน์ โดยเรียกใช้ฟังก์ชัน monitorCount(5, 4)
ผลลัพธ์ที่ได้คือ 20 (เพราะ 5 * 4 = 20)
พิมพ์ผลลัพธ์ 20 ลงในคอนโซล
หลักการทำงานโดยรวม:
ฟังก์ชัน monitorCount ใช้สำหรับคำนวณจำนวนจอภาพทั้งหมดตามจำนวนแถวและคอลัมน์
ตัวแปร totalCost ใช้ในการเก็บจำนวนจอภาพที่คำนวณได้
ค่าของ totalCost ถูกพิมพ์ลงในคอนโซล
ฟังก์ชัน cosOfMonitors ถูกกำหนดขึ้นแต่ไม่ได้ถูกใช้งานในโค้ดนี้ */
/*function monitorCount(rows,columns) {
    return rows * columns;

}

function cosOfMonitors (rows,column) {
    return monitorCount (rows,column) *200;

}

const totalCost = monitorCount (5,4);

console.log(totalCost); */

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "scissors" ||
    userInput === "paper"
  ) {
    return userInput;
  } else {
    console.log("Error,please type : rock,paper or scissors");
  }
};

console.log(getUserChoice("paper"));
console.log(getUserChoice("patato"));
