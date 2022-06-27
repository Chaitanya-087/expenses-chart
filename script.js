const ctx = document.getElementById('myChart').getContext('2d')

//from data.json
const labels = [
    'mon',
    'tue',
    'wed',
    'thu',
    'fri',
    'sat',
    'sun'
]
const values = [17.45,34.91,52.36,31.07,23.39,43.28,25.48]
let maxVal = values[0]
values.forEach((value)=> {
    if (maxVal < value) maxVal = value
})
const bg = values.map((value)=> {
    if(value === maxVal) return 'hsl(186, 34%, 60%)'
    else return 'hsl(10, 79%, 65%)'
})
const data = {
    labels,
    datasets: [
        {
            data:values,
            backgroundColor:bg,
            borderRadius:5,
        }
    ],
}
const titleTooltip = () => {
    return ''
}

const config = {
    type: 'bar', 
    data: data,
    options: {
        plugins: {
            legend: {
                display: false,
            },
            tooltip:{
                displayColors :false,
                yAlign:'bottom',
                caretSize:0,

                callbacks:{
                    title:titleTooltip
                }
            }
        },
        resposive: true,
        scales:{
            x:{
                ticks:{
                    color:'hsl(28, 10%, 53%)',
                },
                grid : {
                    borderWidth:0,
                    display:false,
                },
            },
            y: {
                ticks:{
                    display: false,
                },
                grid: {
                    borderWidth:0,
                    display: false,
                },
            },
        }
    }
};

const myChart = new Chart(ctx,config) 