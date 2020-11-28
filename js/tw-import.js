let tw_list = ["empty"];
let tw_index = 0;
let tw_next = document.querySelector("#tw-next");
let tw_before = document.querySelector("#tw-before");

let twP = document.querySelector("#tw-p");

tw_next.addEventListener("click", next);
tw_before.addEventListener("click", before);

twP.innerHTML = makefeed(
  tw_list[0].Message,
  tw_list[0].username,
  tw_list[0].work,
  tw_list[0].url
);

function next() {
  tw_index++;
  if (tw_index == tw_list.length) {
    tw_index = 0;
  }
  console.log(tw_index);
  twP.innerHTML = makefeed(tw_list[tw_index]);
}

function before() {
  tw_index--;
  if (tw_index == -1) {
    tw_index = tw_list.length;
    tw_index--;
  }
  console.log(tw_index);
  twP.innerHTML = makefeed(tw_list[tw_index]);
}

function makefeed(Message, username, work, work_url) {
  return `<div class="carousel-item active" style="min-height: 90px;">
  <div class="carousel-item-width mx-auto" style="width: 70% !important;">

      <p class="font-italic text-muted mb-1 text-center">
          ${Message}
      </p>
      <div class="text-center small">
          <a dir="ltr" class="text-secondary" href="https://twitter.com/${username}">@${username}</a>
      </div>
      <div class="text-center small">
          <a class="text-secondary" title="${work}" href="https://${work_url}">${work}</a>
      </div>

  </div>
</div>`;
}

