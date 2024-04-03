// default keyword를 사용하여 내보내기

/*
function sayStatus(status) {
  console.log(`now I'm ${status}.`);
}

 export default sayStatus;
 */

// 바로 export
export default function sayStatus(status) {
  console.log(`now I'm ${status}.`);
}
