let getExitData = [];

let randomNumber;

let n=5;

let pushContent = [];

let getValue = [];

let d = new Date();

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function keepValues() {
  pushContent = JSON.parse(localStorage.setComicData);
  getExitData = pushContent;
  console.log(getExitData);
}

  function getComicData() {
    getValue.splice(0,4);
    // getValue = [];
    for(let i = 1; i < n; i++) {
            getData(Math.floor(Math.random() * 1000));
     }
     // function getValuesNone() {
     //   document.getElementById('output').style.display = "none";
     // }
     // getValuesNone();
  }
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
        // document.getElementById('output').innerHTML += output;
        console.log(output);
        getValue.push(output);
        console.log(getValue);
        document.getElementById('output').innerHTML = getValue;
        resolve(output);

        comicData = {'comicNumber':json.num, 'comicTitle':json.title, 'getYear':d.getFullYear(), 'getMonth':months[d.getMonth()], 'getDate':d.getDate(), 'getHours':d.getHours(), 'getMinutes':d.getMinutes(), 'getSeconds':d.getSeconds()};
        pushContent.push(comicData);
        localStorage.setComicData = JSON.stringify(pushContent);
            })
        });

        document.getElementById("loader").style.display = "block";
        //console.log(promise);
          promise.then(function(value) {
            console.log("The guessing is good", value);
            displayNone();
          });

        // console.log("I have log first, Because i'm not asynchronous right..");
        function displayNone() {
          document.getElementById("loader").style.display = "none";
        }
      }
