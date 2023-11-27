let information = document.querySelector(".hide");
let nhapnhap = document.querySelector(".noinhap");
document.querySelector(".nutgui").addEventListener("click", function () {
  const inf = nhapnhap.value;
  if (inf.length === 0) {
    alert("bạn chưa nhập");
    information.style.display = "none";
  } else if (inf !== "nguyenthuytrang090904@gmail.com") {
    alert("bạn nhập sai");
    information.style.display = "none";
  } else {
    information.style.display = "block";
    document.querySelector(".anhien").style.display = "none";
  }
});
document.querySelector(".nutrest").addEventListener("click", function () {
  information.style.display = "none";
  document.querySelector(".anhien").style.display = "block";
});
//
/*
let Knhd = document.querySelector(".item5");

let Hvhd = document.querySelector(".item1");

let Hdhd = document.querySelector(".item8");

let Sthd = document.querySelector(".item11");

let Nnhd = document.querySelector(".item14");
let kynhd = document.querySelector(".item17");
let KNgr = document.querySelector(".KNgr");
let HVgr = document.querySelector(".HVgr");
let HDgr = document.querySelector(".HDgr");
let STgr = document.querySelector(".STgr");
let NNgr = document.querySelector(".styleline");
let KYNgr = document.querySelector(".styleline1");*/
/*
Knhd.classList.add("kinhnghiem");
Hvhd.classList.add("kinhnghiem");
Hdhd.classList.add("kinhnghiem");
Sthd.classList.add("kinhnghiem1");
Nnhd.classList.add("kinhnghiem1");
kynhd.classList.add("kinhnghiem1");

let nutvi = document.querySelector(".nutview");
//




const manglap = [
  `(Knhd.style.display = "none")`,
  `(Knhd.style.display = "block")`,
];

for (let i = 0; i < manglap.length; i++) {
  if ((Knhd.style.display = "i")) {
    document.querySelector("#certificate").style.margin = "-990px 0px 0px 0px";
    nutvi.addEventListener("click", function () {
      document.querySelector("#certificate").style.margin =
        "-200px 0px 0px 0px";
      Knhd.style.display = "block";
      nutvi.textContent = "viewless";
      if ((Knhd.style.display = "block")) {
        nutvi.addEventListener("click", function () {
          Knhd.style.display = "none";
          nutvi.textContent = "viewmore";
        });
      }
    });
  } else {
    if ((Knhd.style.display = "none")) {
      document.querySelector("#certificate").style.margin =
        "-670px 0px 0px 0px";
      nutvi.addEventListener("click", function () {
        document.querySelector("#certificate").style.margin =
          "-200px 0px 0px 0px";

        Knhd.style.display = "block";
        nutvi.textContent = "viewless";
        if ((Knhd.style.display = "block")) {
          nutvi.addEventListener("click", function () {
            Knhd.style.display = "none";
            nutvi.textContent = "viewmore";
          });
        }
      });
    }
  }
}*/
/*
if (nutvi.classList.contains("show")) {
  nutvi.addEventListener("click", function () {
    Knhd.style.display = "block";
    nutvi.textContent = "viewless";
  });
} else {
  nutvi.addEventListener("click", function () {
    Knhd.style.display = "none";
    nutvi.textContent = "viewmore";
  });
}
*/
//
/*
if ((Hvhd.style.display = "none")) {
  document.querySelector("#certificate").style.margin = "-990px 0px 0px 0px";
}
document.querySelector(".nutview1").addEventListener("click", function () {
  document.querySelector("#certificate").style.margin = "-200px 0px 0px 0px";
  Hvhd.style.display = "block";
});
//
if ((Hdhd.style.display = "none")) {
  document.querySelector("#certificate").style.margin = "-990px 0px 0px 0px";
}
document.querySelector(".nutview2").addEventListener("click", function () {
  document.querySelector("#certificate").style.margin = "-200px 0px 0px 0px";
  Hdhd.style.display = "block";
});
//
if ((Sthd.style.display = "none")) {
  document.querySelector("#job-info").style.margin = "0px 0px 1931px 0px";
}
document.querySelector(".nutview3").addEventListener("click", function () {
  document.querySelector("#certificate").style.margin = "100px 0px 0px 0px";
  Sthd.style.display = "block";
});
//
if ((Nnhd.style.display = "none")) {
  document.querySelector("#job-info").style.margin = "0px 0px 1911px 0px";
}
document.querySelector(".nutview4").addEventListener("click", function () {
  document.querySelector("#certificate").style.margin = "100px 0px 0px 0px";
  Nnhd.style.display = "block";
});
//
if ((kynhd.style.display = "none")) {
  document.querySelector("#job-info").style.margin = "0px 0px 1921px 0px";
}
document.querySelector(".nutview5").addEventListener("click", function () {
  document.querySelector("#certificate").style.margin = "100px 0px 0px 0px";
  kynhd.style.display = "block";
});*/
/*
let buttons = document.querySelectorAll(".nutview");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let chitiets = document.querySelectorAll(".chitiet");
    chitiets.forEach((chitiet) => {
      chitiet.classList.add("kinhnghiem");
    });

    let parent =
      button.closest(
        ".box"
      ); 
/* console.log(parent);
      let chitiet = parent.querySelector(".chitiet");
      chitiet.classList.remove("kinhnghiem");
    });
  });*/
//

let chitiets = document.querySelectorAll(".chitiet");
console.log(chitiets[0]);
let buttons = document.querySelectorAll(".nutview");
let susis = document.querySelectorAll(".susi");
console.log(susis[1]);
for (let i = 0; i < chitiets.length; i++) {
  buttons[i].addEventListener("click", function () {
    chitiets[i].classList.toggle("kinhnghiem");
    if (chitiets[i].classList.contains("kinhnghiem")) {
      buttons[i].innerHTML = `&#9660; view more`;
    } else {
      buttons[i].innerHTML = `&#9650; view less`;
    }
  });
}
array.forEach((element) => {});
