
async function getData() {
    const response = await fetch('json/data.json');
    return await response.json();
}

async function getMonth() {
    const arr = [];

    Array.from(await getData()).forEach(x => arr.push(x.month));
    return arr;
}
async function getUSA() {
    const arr = [];

    Array.from(await getData()).forEach(x => arr.push(x.USA));
    return arr;
}
async function getChina() {
    const arr = [];

    Array.from(await getData()).forEach(x => arr.push(x.China));
    return arr;
}
async function getUK() {
    const arr = [];

    Array.from(await getData()).forEach(x => arr.push(x.UK));
    return arr;
}
const ctx = document.getElementById('chart-1').getContext("2d");

var gradientChina = ctx.createLinearGradient(0, 0, 0, 400);
gradientChina.addColorStop(0.2, '#cc87fa');
gradientChina.addColorStop(1, '#884ddb');

var gradientUSA = ctx.createLinearGradient(0, 0, 0, 400);
gradientUSA.addColorStop(0.2, '#f2a885');
gradientUSA.addColorStop(1, '#e33974');

var gradientUK = ctx.createLinearGradient(0, 0, 0, 400);
gradientUK.addColorStop(0.2, '#83d4f7');
gradientUK.addColorStop(1, '#aa7eed');
(async () => {


var data = {
    labels: await getMonth(),
    datasets: [
        {
            label: "CHN",
            barThickness:"flex",
            barPercentage:0.4,
            backgroundColor: gradientChina,
            data: await getChina()
        },
        {
            label: "USA",
            barThickness:"flex",
            barPercentage:0.4,
            backgroundColor: gradientUSA,
            data: await getUSA()
        },
        {
            label: "UK",
            barThickness:"flex",
            barPercentage:0.4,
            backgroundColor: gradientUK,
            data: await getUK()
        }
    ]
};

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
       resizeDelay:2,
        responsive:true,
        maintainAspectRatio:false,
        plugins: {
            legend: {
                display: false,
                position:'top',
                align:'end',
                labels: {
                    display:false,
                    pointStyle:"circle",
                    usePointStyle:true
                }
            },
            title:{
                text:"Visit & Sales Statistics",
                display:false,
                position:'top',
                align:'start',
                font:{
                    size:24,
                    weight:"bold",
                    color:"black"
                }
            }
        },
        scales:{
            x:{
                grid:{
                    display:false
                },
                border:{
                    display:false
                }
            },
            y:{
                ticks:{
                    display:false
                },
                grid:{
                    drawTicks:false
                }
            }
        }
    }
});
})();





async function getCircleData() {
    const response = await fetch('json/circle.json');
    return await response.json();
}

async function getTitle() {
    const arr = [];

    Array.from(await getCircleData()).forEach(x => arr.push(x.title));
    return arr;
}

async function getCount() {
    const arr = [];

    Array.from(await getCircleData()).forEach(x => arr.push(x.count));
    return arr;
}



const ctx2 = document.getElementById('chart-2').getContext("2d");

var greadientE = ctx2.createLinearGradient(0, 0, 0, 400);
greadientE.addColorStop(0.2, '#83d4f7');
greadientE.addColorStop(1, '#884ddb');

var gradientD = ctx2.createLinearGradient(0, 0, 0, 400);
gradientD.addColorStop(0.2, '#83ebca');
gradientD.addColorStop(1, '#10b58f');

var gradientB = ctx2.createLinearGradient(0, 0, 0, 400);
gradientB.addColorStop(0.2, '#f2a885');
gradientB.addColorStop(1, '#e33974');

(async () => {

    var data = {
        labels: await getTitle(),
        datasets: [{
            label: 'My First Dataset',
            data: await getCount(),
            backgroundColor: [
                greadientE,
                gradientD,
                gradientB
            ],
            hoverOffset: 4
        }]
    };


    var myBarChart = new Chart(ctx2, {
        type: 'doughnut',
        data: data,
        options: {
            resizeDelay:2,
            borderWidth:0,
            responsive:true,
            maintainAspectRatio:false,
            plugins: {
                legend: {
                    display: false

                },
                title:{
                    display:false
                }
            },
            scales:{
                x:{
                    grid:{
                        display:false
                    },
                    ticks:{
                        display:false
                    },
                    border:{
                        display:false
                    }
                },
                y:{
                    ticks:{
                        display:false
                    },
                    grid:{
                        display:false
                    },
                    border:{
                        display:false
                    }
                }
            }
        }
    });
})();



(async () => {
    const arr=await getCount();
    var sum=0;
    arr.forEach(x=>sum=sum+x);
    const clicks= await getCircleData();
    clicks.forEach(x =>document.getElementById(x.title).textContent=((parseInt(x.count)/sum)*100).toPrecision(3)+"%");
})();