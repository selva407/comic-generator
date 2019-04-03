let getExitData = [];

let randomNumber;

let pushContent = [];

let d = new Date();

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function keepValues() {
  pushContent = JSON.parse(localStorage.setComicData);
  getExitData = pushContent;
  console.log(getExitData);
}

function getComicData(randomNumber) {

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
        document.getElementById('output').innerHTML = output;
        console.log(output);

        comicData = {'comicNumber':json.num, 'comicTitle':json.title, 'getYear':d.getFullYear(), 'getMonth':months[d.getMonth()], 'getDate':d.getDate(), 'getHours':d.getHours(), 'getMinutes':d.getMinutes(), 'getSeconds':d.getSeconds()};
        pushContent.push(comicData);
        localStorage.setComicData = JSON.stringify(pushContent);
        })
    }
