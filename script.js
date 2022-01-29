function show() {
    var number = document.getElementById("thirukkuralNumber").value;
    console.log(number);

    var kuralURl = "https://api-thirukkural.vercel.app/api?num=" + number;
    fetch(kuralURl)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
        display(result);
      })
      .catch((error) => {
        document.body.append(error);
      });
  }

  function display(data) {
    document.querySelector(".card").style.backgroundImage =
      "url('Thiruvalluvar.jpg')";
      document.getElementById("chapter").style.color= "white";
    document.getElementById("chapter").innerHTML = data.chap_tam;
    document.getElementById("head1").style.color= "white";
    document.getElementById("head1").innerHTML = "திருக்குறள்";

    document.getElementById("result").innerHTML = data.line1;
    document.getElementById("result1").innerHTML = data.line2;


    document.getElementById("head2").style.color= "white";
    document.getElementById("head2").innerHTML = "குறள் விளக்கம்";
    document.querySelector(".explain").innerHTML = data.tam_exp;

    document.getElementById("enghead").style.color= "white";
    document.getElementById("enghead").innerHTML = "English Version";
    document.querySelector(".enghead1").innerHTML = data.eng;

    document.getElementById("engexpheading").style.color= "white";
    document.getElementById("engexpheading").innerHTML = "English Meaning";
    document.querySelector(".engexplain").innerHTML = data.eng_exp;
  }
