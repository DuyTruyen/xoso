let xoso = function (soO, soTrungThuong, time) {
    this.soO = soO;
    this.soTrungThuong = soTrungThuong;
    this.time = time;
  
    this.khoiTaoO = function (so) {
      const el = document.querySelector(".xoso");
      let html = "";
      for (let i = 0; i < so; i++) {
        html += `<div id="div${i}" class="o-xo-so page-item" style="padding: 10px;">2</div>`;
      }
      el.insertAdjacentHTML("afterbegin", html);
    };
  
    /////////////////////   Khởi tạo ô;
  
    this.khoiTaoO(this.soO);
    ///////////////////////////
  
    this.tachSo = function (so) {
      return ("" + so).split("");
    };
  
    ///////////////////////
    this.randomColor = function (el) {
      return (el.style.background = `rgb(${Math.random() * 255}, ${
        Math.random() * 255
      }, ${Math.random() * 255})`);
    };
    /////////////////
  
  
    this.rederO = function (tachSo) {
      let els = document.querySelectorAll(".o-xo-so");
  
      els.forEach((el, index) => {
  
        for (i = 0; i <= 9; i++) {
  
            if (i == Number(tachSo[index]) ) {break;}
  
            console.log(tachSo[index] );
            
            
            el.innerHTML = i;
          this.randomColor(el);
  
        
  
        }
      });
    };
  
  
          // let to=setTimeout(
          //   (ix) => {
          //     el.innerHTML = ix;
          //     this.randomColor(el);
          //     console.log(i);
  
          //     if (i == tachSo[index]) {
          //       return;
          //       clearTimeout(to);
  
          //     }
          //     console.log(ix);
          //   },
          //   1000 * i,
          //   i
          // );
  
          // el.innerHTML = i;
          // this.randomColor(el);
          // if (i == tachSo[index]) {
          //   break;
          // }
          
          
  
  
    //   this.rederO = function (tachSo) {
    //     let els = document.querySelectorAll(".o-xo-so");
  
    //     els.forEach((el, index) => {
    //         var counter = 0;
  
    //         var timer = setInterval(function () {
  
    //             console.log("turn no. " + counter);
  
    //             if (table.game.playerWon) {
    //                 console.log('Player won');
    //             }
  
    //             if (counter >= 75 || table.game.playerWon) {
    //                 clearInterval(timer);
    //             }
  
    //             counter++;
  
    //         }, 100);
  
    //     })}
  
    ////////////// Chạy thời gian
    //   this.time = function (f, t) {
    //     return setInterval(f, t * 1000);
    //   };
  
    // this.time(this.rederO(this.tachSo(this.soTrungThuong),this.t)
    // )
  
    this.rederO(this.tachSo(this.soTrungThuong));
  };
  /////////
  const xoSo1 = new xoso(6, 542135,10);
  console.log(xoSo1.tachSo());
  
  
  // xoSo1.time(console.log('a'),1);
  
  // const a = xoSo1.tachSo(2344);
  // // xoSo1.randomColor(document.querySelector("#xoso"));
  // console.log(a);
  
  // class xoSo{
  //      soO;
  //      soTrungThuong;
  
  //     constructor(soO,soTrungThuong){
  //     this.soO=soO;
  //     this.soTrungThuong=soTrungThuong;
  
  //     }
  
  //     let khoitaoO = function (soo){
  
  //     }
  // }
  