"use strict";

module.exports = [/\d{2}กว่าวัน|(\d{1})-(\d{1}) วัน|\d{2}สัปดาห์|\d{2} สัปดาห์|\d{1}สัปดาห์|\d{1} สัปดาห์|\d{1}อาทิตย์|\d{1} อาทิตย์|\d{2} จังหวัด|\d{2}กว่า|\d{3} ประเทศ|\d{2} ประเทศ|\d{1} ประเทศ|\d{1} เบอร์|\d{1}เบอร์|\d{2}[.]\d{2} - \d{2}[.]\d{2}\sน[.]|\d{2}[.]\d{2} - \d{2}[.]\d{2}น[.]|\d{1}[.]\d{2}-\d{2}[.]\d{2}น[.]|\d{1}[.]\d{2} - \d{2}[.]\d{2}น[.]|\d{1}[.]\d{2}-\d{2}[.]\d{2}\sน[.]|\d{2}[.]\d{2}-\d{2}[.]\d{2}\sน[.]|\d{1}[.]\d{2}[-]\d{1}[.]\d{2}|\d{1}mbps|\d{2}mbps|\d{3}mbps|\d{2}Mbps|\d{3}Mbps|\d{1}Mbps|เมื่อวานตอนเช้า|เมื่อวานนี้|เมือวาน|เมื่อวาน|บ่ายสาม|สามวัน|หลายๆกิ๊ก|\d{1}กิ้ก|\d{2}[:]\d{2}[-]\d{2}[:]\d{2}|\d{2}[:]\d{2} am[.]|\d{2}[/]\d{2}[/]\d{4}|\d{2}[/]\d{2}[/]\d{2}|มากกว่า \d{3} ข้อความ|\d{3}ข้อความ|\d{3} ข้อความ|\s\d{3} ข้อความ|\d{2}ข้อความ|\d{2} ข้อความ|ไม่เกิน \d{2} ข้อความ|ไม่เกิน \d{1} ข้อความ|เกิน\d{2}ข้อความ|เกิน\d{1}ข้อความ|\d{1} ข้อความ|\s\d{3} Mbps|\d{2} Mbps|\d{1} Mbps|\d{1}บาท[/]\d{1}วัน|นาทีละ \d{2} สตางค์|นาทีละ\d{2} สตางค์|นาทีละ \d{2}สต[.]|นาทีละ \d{2} สต[.]|นาทีละ \d{1} สต[.]|นาทีละ \d{1} สตางค์|\d{2} สต[.]|นาทีละบาท|เดือนละ\d{4}|เดือนละ \d{3} บาท|\s\d{2} บาท[/]\d{1} วัน|\s\d{1} บาท [/] \d{1} วัน| สัปดาห์ละ \d{2} บาท|สัปดาห์ละ \d{2}บาท|นาทีละ \d{1}... บาท|นาทีละ \d{1} บาท|นาที \d{3} บาท|นาที \d{2} บาท|ไม่เกิน \d{3} บาท|ไม่เกิน \d{3}|ไม่เกิน \d{1} ชม[.]|ไม่เกิน\d{2}นาที|ไม่เกิน\d{1}นาที|ไม่เกิน \d{2} นาที|ไม่เกิน \d{1} นาที|เกิน \d{1} ชม[.]|ไม่เกิน \d{1}ชม[.]|เกิน \d{2} นาที|เกิน \d{1} นาที|\d{1}[,]\d{3} นาที|\s\d{3} นาที|\d{3} นาที|\d{2} นาที|\d{2}นาที|\d{1} นาที|\d{2} ชั่วโมง|\d{1} ชั่วโมง|\d{2}ชั่วโมง|\d{1}ชั่วโมง|\d{2} ชม[.]|\d{1} ชม[.]|\d{2}ชม[.]|\d{2}ชม[.]|\d{1}ชม[.]|\d{2} ชม|\d{1} ชม|\d{2}ชม|\d{1}ชม|\d{3} kbps|\s\d{2} kbps|\s\d{1}.. Kbps|\s\d{1}.. kbps|\d{1}..Kbps|\d{1}.Kbps|\s\d{2} บาท [/] วัน|\s\d{2} บาท[/]วัน|\s\d{1} บาท [/] วัน|\s\d{1} บาท[/]วัน|\s\d{3} บาท[/]อาทิตย์|\s\d{2} บาท[/]อาทิตย์|\s\d{2} บาท[/]สัปดาห์|\s\d{2} บาทต่อสัปดาห์|\s\d{3} บาท[/]เดือน|\sถูกๆกว่า\d{3} [/]เดือน|\d{2} เดือนหน้า|\d{2} เดือน|\d{1} เดือน|\d{1}เดือน|เดือนหน้า|เดือนนี้|เดือน|วันอาทิตย์นี้|อาทิตย์หน้า|อาทิตย์นี้|ทั้งอาทิตย์|อาทิตย์|\d{2} มิถุนายน \d{4}|\d{1}บาท[/]วัน|\d{2}บาท[/]วัน|ไม่เกิน\d{1}[,]\d{3}บาท|ไม่เกิน\d{1}[,]\d{3}|ไม่เกิน\d{1}บาท|ไม่เกิน \d{2} บาท|ไม่เกิน \d{2}บาท|ไม่เกิน\d{3}บาท|ไม่เกิน\d{2}บาท|เกิน \d{3}|\s..\d{1} บาท|\s\d{2} บาท|\d{2} บาท|\d{3}บาท|\d{2}บาท|\d{1}บาท|\s\d{1} บาท|ราคา \d{1}[,]\d{3} บาท|ราคา \d{1}[,]\d{3}บาท|\s\d{1}.. MB|\d{1}. MB|\d{1}..MB|\d{1}.MB|\d{2}บ[.]|\s\d{3} บ|ราคา \d{1}[,]\d{3}|ราคา\d{1}[,]\d{3}|ราคา \d{3}บาท|ราคา \d{3} บาท|ราคา \d{3}บาท|ราคา \d{2} บาท|ราคา \d{2}บาท|ราคา \d{3}|ราคา \d{2}|\d{3}[.]\d{2} บาท|\d{2} กว่าบาท|\d{4}บาท|ไม่กี่วัน|\d{2}วัน|\s\d{1}วัน|\d{1}วัน|\d{1}วัน|สัปดาห์หน้า|ทั้งสัปดาห์|สัปดาห์นี้|สัปดาห์|ถึงเที่ยงคืน|เที่ยงคืน|\s\d{1} วัน|\d{2} วัน|[*]\d{3}[*]\d{3}[*]\d{6}[#]|[*]\d{1}..[*]\d{1}...[#]|[*]\d{1}..[*]\d{1}..#|\d{1}..[*]\d{1}..[#]|[*]\d{1}..#|\s[*]\d{3}[*]\d{1}[*]|[*]\d{1}..|ส่วนลด \d{2}%|ลด\d{2}%|ลด \d{2}%|\d{2}%|\d{3}฿|หลายๆGB|\d{1}GB ขึ้นไป|\d{1}GB ขึ้น|เป็น GB|วันเดียว|\d{1}[.]\d{2} GB|\d{3}GB|\d{1}[.]\d{1} GB|\d{1}[.]\d{1}GB|\d{2}GB|\d{3} GB|\d{1} GB|\d{2} GB|\d{1}GB|\s\d{1}G B|\d{2}G|\d{2} G|\d{2} gb|\d{2}gb|\d{1}[.]\d{1}gb|\d{1} gb|\d{1}gb|\d{1} โมงเย็น [-] \d{1} ทุ่ม|\d{1} ทุ่ม - \d{1} โมงเย็น|ตี \d{1}[-]\d{1}โมงเย็น|ตี \d{1} [-] \d{1} โมงเย็น|ตีห้าถึงห้าโมงเย็น|หลัง \d{1} โมง|ตอนนี้ \d{1} โมง|\d{1} โมง|ตอนนี้|ตี \d{1}|\d{1} ปี|\d{1}ปี|\d{2}MMS|\d{2} MMS|MMS \d{2}|\d{1} MMS|\d{1}d|\d{1} ใบ|\d{2} Baht|\d{2}B|\d{2}thb|\d{4}|\d{3}|\s\d{3}\s/g, /หลายวัน/g, /พรุ่งนี้/g, /ทั้งวัน/g, /วันเสาร์ที่ผ่านมา|เสาร์หน้า|วันเสาร์นี้/g, /ตั้งแต่ตีห้า/g];
//# sourceMappingURL=regexCheckInput.js.map