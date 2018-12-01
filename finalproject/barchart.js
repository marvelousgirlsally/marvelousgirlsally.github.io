$(function () {
    var myChart = Highcharts.chart('container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: '大眾點評'
        },
        xAxis: {
            categories: ['家居品牌', 'Pricerite', 'Homeless', 'BoConcept', 'Zara Home', 'Tree', 'Francfranc', 'MUJI', 'NOME']
        },
        yAxis: {
            title: {
                text: '評論數'
            }
        },
        series: [{
            name: 'IKEA',
            data: [244]
        }, {
            name: 'Pricerite',
            data: [2]
        }, {
            name: 'Homeless',
            data: [30]
        }, {
            name: 'BoConcept',
            data: [0]
        }, {
            name: 'Zara Home',
            data: [4]
        }, {
            name: 'Tree',
            data: [2]
        }, {
            name: 'Francfranc',
            data: [54]
        }, {
            name: 'MUJI',
            data: [1496]
        }, {
            name: 'NOME',
            data: [0]
        }]
    });
});

$(function () {
    var myChart = Highcharts.chart('container1', {
        chart: {
            type: 'bar'
        },
        title: {
            text: '小紅書'
        },
        xAxis: {
            categories: ['家居品牌', 'Pricerite', 'Homeless', 'BoConcept', 'Zara Home', 'Tree', 'Francfranc', 'MUJI', 'NOME']
        },
        yAxis: {
            title: {
                text: '評論數'
            }
        },
        series: [{
            name: 'IKEA',
            data: [495]
        }, {
            name: 'Pricerite',
            data: [1]
        }, {
            name: 'Homeless',
            data: [57]
        }, {
            name: 'BoConcept',
            data: [6]
        }, {
            name: 'Zara Home',
            data: [30]
        }, {
            name: 'Tree',
            data: [341]
        }, {
            name: 'Francfranc',
            data: [2038]
        }, {
            name: 'MUJI',
            data: [6173]
        }, {
            name: 'NOME',
            data: [44]
        }]
    });
});

$(function () {
    var myChart = Highcharts.chart('container2', {
        chart: {
            type: 'bar'
        },
        title: {
            text: '谷歌地圖'
        },
        xAxis: {
            categories: ['家居品牌', 'Pricerite', 'Homeless', 'BoConcept', 'Zara Home', 'Tree', 'Francfranc', 'MUJI', 'NOME']
        },
        yAxis: {
            title: {
                text: '評論數'
            }
        },
        series: [{
            name: 'IKEA',
            data: [6350]
        }, {
            name: 'Pricerite',
            data: [969]
        }, {
            name: 'Homeless',
            data: [64]
        }, {
            name: 'BoConcept',
            data: [16]
        }, {
            name: 'Zara Home',
            data: [7]
        }, {
            name: 'Tree',
            data: [8]
        }, {
            name: 'Francfranc',
            data: [155]
        }, {
            name: 'MUJI',
            data: [5135]
        }, {
            name: 'NOME',
            data: [2]
        }]
    });
});
