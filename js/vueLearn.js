var appList = new Vue({
    el: '#appList',
    data: {
        message: 'Hello Vue!',
        movies: ["星际穿越","黑暗骑士","钢铁之躯","盗梦空间"]
    }
})

var appCounter = new Vue({
    el: '#appCounter',
    data: {
        counter: 0
    },
    methods: {
        add: function(){
            this.counter++
        },
        sub: function(){
            this.counter--
        }
    }
})
