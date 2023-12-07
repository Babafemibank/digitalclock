setInterval(() => {
    // get time indicator elements
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let ampm = document.getElementById("ampm");
    let secondes = document.getElementById('seconds');

    let hh = document.getElementById('hrs');
    let mm = document.getElementById('min');
    
    let dotH = document.querySelector('.h_dot');
  let dotM = document.querySelector('.m_dot');
  



// get time zone for current location
  // var locationTime = new Date().toLocaleDateString('en-GB', {
  //   timeZoneName: "short" });
  //   locationTime.toString();
  //   let pattern = /[\+\-]\d+/g;
  // let pattern1 = locationTime.match(pattern);
  //  pattern1 = pattern1==null?pattern1="00":pattern1;
  // let pattern2 = pattern1.toString();
  // let pattern3 = parseInt(pattern2);
  // let pattern_1 = /\:\d+/g;
  // let pattern_2 = locationTime.match(pattern_1);
  // pattern_2 = pattern_2==null?pattern_2="00":pattern_2;
  // let pattern_3 =  pattern_2.toString();
  // let pattern_4 = pattern_3.slice(1);
  // let pattern_5 =  parseInt(pattern_4);
  //  let assignValue = document.querySelector('select');


//add event listener to the select tag
  let selection = document.querySelector('select');
  let optionValue = selection.options[selection.selectedIndex].value;

  chosen = () => selection.options[selection.selectedIndex].value;
  selection.addEventListener('change',chosen);



// enabling changing time zone for difference in hours and for minutes
let utc = parseInt(chosen());
 let addToDate = new Date();
 addToDate.setHours(addToDate.getUTCHours() + utc);
 let h = addToDate.getHours();
let localTime =new Date();
//  let addToDateM = new Date();
//  addToDateM.setMinutes(addToDateM.getUTCMinutes() + pattern_5);
// let i = addToDateM.getMinutes();

// getting date and time
let m = new Date().getUTCMinutes ();
  let s = new Date().getSeconds();
  let ap = h >= 12 ? 'PM' : 'AM';

// get default time zone
if(optionValue == 'local'){
 h = localTime.getHours();
 m = localTime.getMinutes();
//   addToDate = new Date();
//  addToDate.setHours(addToDate.getUTCHours() + pattern3);
//   h = addToDate.getHours();
  ap = h >= 12 ? 'PM' : 'AM';
}


//using 12hrs format and appending "0" to single digit
  if (h > 12) {
    h = h - 12;
  }

  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

// didplaying time in HTML
  hours.innerHTML = h ;
  minutes.innerHTML = m ;
  secondes.innerHTML = s ;
  ampm.innerHTML = ap;


  // javascript DOM manipulation for styles
  hh.style.strokeDashoffset = 440 - (440 * h) / 12;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;

  dotH.style.transform = `rotate(${h * 30}deg)`;
  dotM.style.transform = `rotate(${m * 6}deg)`;
}, 1000);


