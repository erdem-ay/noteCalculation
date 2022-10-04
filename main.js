//const $ = (par) => document.querySelector(par);

function Calculate() {
  let vizeNotu, finalNote, sonuc,ortalama,harfNot;
  vizeNotu = Number(document.querySelector("#vize").value);
  finalNote = Number(document.querySelector("#final").value);
  sonuc = Math.floor(vizeNotu * 0.4 + finalNote * 0.6);
  ortalama = document.querySelector("#result");
  harfNot = document.querySelector("#letterNote");

  if (sonuc >= 0 && sonuc < 45) {
    ortalama.innerText="Ortalamanız:" + sonuc;
    harfNot.innerText="FF";
  } else if (sonuc >= 45 && sonuc <= 60) {
    ortalama.innerText="Ortalamanız:" + sonuc;
    harfNot.innerText="DD";
  } else if (sonuc > 60 && sonuc <= 80) {
    ortalama.innerText="Ortalamanız:" + sonuc;
    harfNot.innerText="CC";
  } else if (sonuc > 80 && sonuc <= 90) {
    ortalama.innerText="Ortalamanız:" + sonuc;
    harfNot.innerText="BB";
  } else if (sonuc > 90 && sonuc <= 100) {
    ortalama.innerText="Ortalamanız:" + sonuc;
    harfNot.innerText="AA"
  }

  // $("#result").innerHTML = sonuc + "<br>" + message;
}
