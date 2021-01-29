let list = new Vue({
    el: '.pro-page',
    data: {
        ul:[
            {
                img:
                    `src/bot.jpg`,
                text:
                    `عبود للشاي و القهوه

                    بوت للتسلية في المجموعات`,
                url: "https://t.me/artea_bot",
                type: 1
            },
            {
                img:`src/alif.jpg`,

                text:`موقع لغة الف البرمجية

            محاولة عمل اعاد تصميم لموقع لغه الف البرمجية`,

                url: "https://superastorh.github.io/aliflang/",
                type: 2
            },

        ],
        type: 0
        /*
        * 0 = all
        * 1 = bot
        * 2 = web
        * */
    },
    method:{
        isShow(t){
            return this.Type === t || this.type === 0;
        },
    },
    computed:{
        showItem(){
            let myShow = []
            this.ul.forEach(
                e=>{
                    if( this.type === e.type || this.type === 0){
                        myShow.push(e);
                    }
                }
            )
            return myShow;
        }

    }

})