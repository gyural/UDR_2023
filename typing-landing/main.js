let target = document.querySelector('#dynamic')

// 랜덤 스트링 리턴해주기 
function randomString(){
  let stringArr = ["Learn to HTML", "Learn to CSS", 
  "Learn to javascript", "Learn to python", "Learn to Ruby"]
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)]
  let selectStringArr = selectString.split("");

  return selectStringArr;
  }
// 타이핑 리셋
function resetTyping(){
  target.textContent = "";
  dynamic(randomString());
}
// 한글자씩 텍스트 출력함수
function dynamic(randomAr){
  console.log(randomAr)
  
  if(randomAr.length > 0){
    target.textContent += randomAr.shift();
    setTimeout(function(){
      dynamic(randomAr);

    }, 80)
  }
  else{
    setTimeout(resetTyping, 300);
  }
}

target.textContent = "";
dynamic(randomString());
// 커서 깜빡임 효과
function blink(){
  target.classList.toggle("active");

}
setInterval(blink, 500);