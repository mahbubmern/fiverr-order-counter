const order_counter = document.getElementById('order_counter');
const h1 = document.querySelector('h1');





order_counter.onsubmit = (e)=>{
    e.preventDefault();

    let form_data = new FormData(e.target);
    let {date, time} = Object.fromEntries(form_data.entries());

    let start_date = Date.now();
    let end_date = new Date(date + ' '+ time).getTime();
   
    let order_time = end_date - start_date;

    let total_sec = Math.floor((order_time/1000));
    let total_min = Math.floor((total_sec / 60 ));
    let total_hour = Math.floor((total_min / 60));
    let total_day = Math.floor((total_hour / 24));


    let hour = total_hour -(total_day *24 ); 
    let min = total_min - ( total_day * 24 *60) -(hour * 60); 
    let sec = total_sec - ( total_day * 24 *60 * 60) -(hour * 60 * 60) - (min * 60); 

    if (total_sec ==0) {
        clearInterval(count);
    }


    h1.innerHTML = ` ${total_day} Days : ${hour} Hours : ${min} Mins : ${sec} Sec Left`

    let count = setInterval(() => {
        let start_date = Date.now();
    let end_date = new Date(date + ' '+ time).getTime();
   
    let order_time = end_date - start_date;

    let total_sec = Math.floor((order_time/1000));
    let total_min = Math.floor((total_sec / 60 ));
    let total_hour = Math.floor((total_min / 60));
    let total_day = Math.floor((total_hour / 24));


    let hour = total_hour -(total_day *24 ); 
    let min = total_min - ( total_day * 24 *60) -(hour * 60); 
    let sec = total_sec - ( total_day * 24 *60 * 60) -(hour * 60 * 60) - (min * 60); 

    if (total_sec ==0) {
        h1.style.color = 'red';
        clearInterval(count);
    }


    h1.innerHTML = ` ${total_day} Days : ${hour} Hours : ${min} Mins : ${sec} Sec Left`
    }, 1000);



}