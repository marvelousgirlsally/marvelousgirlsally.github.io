var chart = c3.generate({
    data: {
        columns: [
            ['大眾點評', 224, 2, 30, 0, 4, 2, 54, 1496, 0],
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});
