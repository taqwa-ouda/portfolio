$(function(){
    let ourCountDown =setInterval(function()
    {
        let counter = parseInt($('.countdown').html());
        if(counter !==215)
        {
            $('.countdown').html(counter +1 );
        }
        else{
            clearInterval(ourCountDown);

        }
    },100)
})
$(function(){
    let ourCountDown1 =setInterval(function()
    {
        let counter1 = parseInt($('.countdown1').html());
        if(counter1 !==521)
        {
            $('.countdown1').html(counter1 +1 );
        }
        else{
            clearInterval(ourCountDown1);

        }
    },100)
})
$(function(){
    let ourCountDown2 =setInterval(function()
    {
        let counter2 = parseInt($('.countdown2').html());
        if(counter2 !==1463)
        {
            $('.countdown2').html(counter2 +1 );
        }
        else{
            clearInterval( ourCountDown2);

        }
    },100)
})
$(function(){
    let ourCountDown3 =setInterval(function()
    {
        let counter3 = parseInt($('.countdown3').html());
        if(counter3 !==25)
        {
            $('.countdown3').html(counter3 +1 );
        }
        else{
            clearInterval( ourCountDown3);

        }
    },400)
})