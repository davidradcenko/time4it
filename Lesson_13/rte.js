
//for(let i=2;i<10;i++){
//  if(i % 2 == 0){
//     console.log(i);
//    continue;
//     }
//}
let rezult;
//while(rezult!==null){
//  rezult=prompt('Введите число >100');
//  if( rezult!==null){
//  
//  }else if(+rezult<=100 || rezult===""){
//            alert('Тыдурак?');
//           }else{
//    alert('СПАСИБО');
//  }
//}

do {
  rezult=prompt('Введите число >100');
  console.log(rezult);
  if(rezult!==null){
    if (rezult < 100 || rezult === "") {
      alert('Тыдурак?');
    }else{
    alert('СПАСИБО');
    break;
  }
  }
} while(rezult!==null)