// 折れ線グラフ
var labels = ['January', 'February', 'March', 'April', 'May', 'June'];

var data = {
    labels: labels,
    datasets: [{
        label: '初めてのグラフ',
        borderColor: 'rgb(255, 100, 130)',
        backgroundColor: 'rgb(150, 50, 60)',
        data: [0, 10, 15, 3, 60, 10]

    }]
};

var config = {
    type: 'line',
    data,
    options: {},
};



var linechart = new Chart(
    // document.getElementById('lineChart'),
    $('#lineChart'),
    config,
);


// 円グラフ
var labels2 = ['January', 'February', 'March', 'April', 'May', 'June'];

var data = {
    labels: labels2,
    datasets: [{
        label: '初めてのグラフ',
        borderColor: 'rgb(255, 100, 130)',
        backgroundColor: 'rgb(50, 50, 255)',
        data: [0, 10, 15, 3, 60, 10]

    }]
};

var config = {
    type: 'doughnut',
    data: data,
};

var PieCharts = new Chart(
    document.getElementById('Pie Charts'),
    config,
);
