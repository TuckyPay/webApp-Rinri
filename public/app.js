(() => {
    const ol = document.getElementById("Box_list");
    const Btn = document.getElementById("AnsBtn");
    const important = document.getElementById("imp");
    const scoreboard = document.getElementById("ScoreBoard")
    const Tab = document.getElementsByClassName("Tab")
    let AnsBox = document.getElementsByClassName("AnsBox");

    let equals = 0;
    let AryCount = null;
    
    let Answer = [];
    
    //CSVファイル読み込み
    function csv_data(dataPath) {
        const request = new XMLHttpRequest();
        request.addEventListener("load" ,(event) => {
            const response = event.target.responseText;
            csv_array(response);
        });
        request.open("GET" ,dataPath ,true);
        request.send();
    }
    //↑まで

    //文字列から配列を生み出す文
    function csv_array(data) {
        const dataArray = [];   //空の配列を作成する
        const dataString = data.split("\r\n");    //一行で分割された配列を作成する
        for(let i = 0; i < dataString.length; i++) {    
            dataArray[i] = dataString[i].split(",");    //dataStringの配列を","で区切る
        }
        Answer = dataArray;
        console.log(Answer);
    }
    csv_data("./answer.csv");
    //↑まで

    function cangeObjectData(element, data){
        let cln = element.cloneNode(true);
        cln.setAttribute("data", data);
        element.parentNode.replaceChild(cln, element);
        return true;
    }

    console.log(Answer);
    scoreboard.innerHTML = "点数：" + equals + "/" + Answer.length;

    function AnsBoxcontrol()
    {
        for(i = 0; i < Answer[AryCount].length; i++)
        {
            ol.innerHTML += '<li><input type="text" name="" class="AnsBox"></li>';
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        switch(e.target.id)
        {
            case "0":
                cangeObjectData(document.getElementById("Obj"), "Text//home.html");
                ol.innerHTML = '';
                AryCount = null;
                scoreboard.innerHTML = "点数：" + "0" + "/" + "0";
                break;
            case "1":
                cangeObjectData(document.getElementById("Obj"), "Text//content01.html");
                ol.innerHTML = '';
                AryCount = 0;
                AnsBoxcontrol()
                break;
            case "2":
                cangeObjectData(document.getElementById("Obj"), "Text//content02.html");
                ol.innerHTML = '';
                AryCount = 1;
                AnsBoxcontrol()
                break;
            case "3":
                cangeObjectData(document.getElementById("Obj"), "Text//content03.html");
                ol.innerHTML = '';
                AryCount = 2;
                AnsBoxcontrol()
                break;
            case "4":
                cangeObjectData(document.getElementById("Obj"), "Text//content04.html");
                ol.innerHTML = '';
                AryCount = 3;
                AnsBoxcontrol()
                break;
            case "5":
                cangeObjectData(document.getElementById("Obj"), "Text//content05.html");
                ol.innerHTML = '';
                AryCount = 4;
                AnsBoxcontrol()
                break;
            case "6":
                cangeObjectData(document.getElementById("Obj"), "Text//content06.html");
                ol.innerHTML = '';
                AryCount = 5;
                AnsBoxcontrol()
                break;
        }
        scoreboard.innerHTML = "点数：" + equals + "/" + Answer[AryCount].length;
    }

    for(i = 0; i < Tab.length; i++)
    {
        Tab[i].addEventListener("click", (e) => handleClick(e));
    }

    Btn.addEventListener("click", () => {
        equals = 0;
        for(i = 0; i < AnsBox.length; i++) {
            if(AnsBox[i].value == Answer[AryCount][i]) {
                console.log("win");
                equals++;
            }
            else {
                console.log("lose");
            }
        }
        scoreboard.innerHTML = "点数：" + equals + "/" + Answer[AryCount].length;
    });

    important.addEventListener("click", (e) => {
        e.preventDefault();
        cangeObjectData(document.getElementById("Obj"), "Text//important.html");
    });
})();