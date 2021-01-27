 /*let html_bolit = document.querySelectorAll(".header-area li");
let myBolit = document.querySelectorAll("section");
html_bolit = Array.from(html_bolit);


html_bolit.forEach( (li) => {

    li.onclick = event => {
        console.log( myBolit[html_bolit.indexOf(li)] );
        console.log("click")
        myBolit[html_bolit.indexOf(li)].scrollIntoView({
          behavior: "smooth"
        });
    }
});
*/

let tap_prpgect = document.querySelectorAll(".pro-page .nav .type-pro *");

tap_prpgect.forEach(
  tap => {
    tap.onclick = ()=>{
      tap_prpgect.forEach(
        e => e.classList.remove('active')
      )
      tap.classList.add('active');
    };
  }
)
