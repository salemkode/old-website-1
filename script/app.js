let list = new Vue({
    el: '.pro-page',
    data: {
        ul: [
            {

                img:
                    `src/bot.jpg`,
                text:
                    `عبود للشاي و القهوه

                    بوت للتسلية في المجموعات`,
                url: "https://t.me/artea_bot",
                type: 1,
                title:"بوت للقهوة"
            },
            {

                img: `src/alif.jpg`,

                text: `موقع لغة الف البرمجية

            محاولة عمل اعاد تصميم لموقع لغه الف البرمجية`,

                url: "https://superastorh.github.io/aliflang/",
                type: 2,
                title:"موقع للغة الف"

            },

        ],
        type: 0
        /*
        * 0 = all
        * 1 = bot
        * 2 = web
        * */
    },
    methods: {
        clicked(e, int) {
            let imgLi = document.querySelectorAll(".img-list > *");
            imgLi.forEach(e => e.style.opacity = '0')
            setTimeout(
                () => {

                    this.type = int;

                    imgLi.forEach(e => {
                        e.style.transition = "all 0s ease";
                        e.style.opacity = '0';
                        e.style.transition = "all 1s ease";
                        e.style.opacity = '1'

                    })


                }, 1000
            )
            setTimeout(
                () => {
                }, 2000
            )

        },
    },
    computed: {
        showItem() {
            let myShow = []
            this.ul.forEach(
                e => {
                    if (this.type === e.type || this.type === 0) {
                        myShow.push(e);
                    }
                }
            )
            return myShow;
        }
    }

})