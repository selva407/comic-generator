let getExitData = [];

let randomNumber;

const n=4;

let pushContent = [];

let d = new Date();

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function keepValues() {
  pushContent = JSON.parse(localStorage.setComicData);
  getExitData = pushContent;
  console.log(getExitData);
}

  function getComicData() {
    for(let i = 0; i < n; i++) {
            getData(Math.floor(Math.random() * 1000));
     }
    document.getElementById("loader-two").style.display = "block";
  }
  function yHandler() {
  	let wrap = document.getElementById('wrap');
  	let contentHeight = wrap.offsetHeight;
  	let yOffset = window.pageYOffset;
  	let y = yOffset + window.innerHeight;
  	if(y >= contentHeight){
      document.getElementById("loader").style.display = "block";
        for (let i = 0; i < n; i++) {
          getData(Math.floor(Math.random() * 1000));
      }
  	}
  }
  window.onscroll = yHandler;

  function getData(randomNumber) {
    promise  = new Promise(function(resolve, reject) {
      fetch(`https://xkcd.now.sh/${randomNumber}`)
      .then(response => response.json())
      .then(json => {
        let	output = `
        <div class="root">
            <div class="num-and-title">
                <div class="numBer">${json.num}.</div>
                <div class="Title">${json.title}</div>
            </div>
          <div class="image"><img src="${json.img}"></div>
        </div>
        `;
        console.log(json);
        console.log(output);
        document.getElementById('output').innerHTML += output;
        resolve(output);

        comicData = {'comicNumber':json.num, 'comicTitle':json.title, 'getYear':d.getFullYear(), 'getMonth':months[d.getMonth()], 'getDate':d.getDate(), 'getHours':d.getHours(), 'getMinutes':d.getMinutes(), 'getSeconds':d.getSeconds()};
        pushContent.push(comicData);
        localStorage.setComicData = JSON.stringify(pushContent);
            })
        });
        //console.log(promise);
          promise.then(function(value) {
            console.log("The guessing is good", value);
            displayNone();
          });

        // console.log("I have log first, Because i'm not asynchronous right..");
        function displayNone() {
          document.getElementById("loader").style.display = "none";
          document.getElementById('loader-two').style.display = "none";
        }
      }
