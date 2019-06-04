let Var1=9866070
sleep(8000)
for (let i = 0; i < 50; i++) {
    Var1++;
    click(1000, 142);
    sleep(1000)
    click(931, 654);
    sleep(1000);
    setText(0,Var1)
    sleep(1000)
    click(300, 450);
    sleep(1000)
    setText(1,Var1) ;
    sleep(1000)
    click(300, 600);
    sleep(1000)
    setText(2,"123") ;
    sleep(200)
    click(1000, 135);
    sleep(3000);
    click(600, 1000);
    sleep(1000)
    click(17, 135);
    sleep(1000)
}