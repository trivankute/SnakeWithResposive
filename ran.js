var score=document.querySelector('#score')
var Score=0;
//create Squares in box game
var box=document.querySelector('#box')
for(let i=0;i<100;i++)
{
    var square=document.createElement('div')
    square.setAttribute('class','square')
    box.appendChild(square);
}
//create the snake
var squares=document.querySelectorAll('.square')
var snake=[0,1,2]
var tinHieuApple=0
for(let i=0;i<snake.length;i++)
{
    squares[snake[i]].classList.add('ran')
    if(i==snake.length-1)
    {
        squares[snake[i]].classList.add('head')
    }
}
var NumApple=window.prompt("Bao nhiu trai' apple:? ");
while(NumApple>97||NumApple<1)
{
    alert('Vui long` nhap so Apple>0 hoac <=97')
    NumApple=window.prompt("Bao nhiu trai' apple:? ");
}
var AppleId=[]
var ApplePresence=0
for(let i=1;i<=NumApple;i++)
{
apple=makeApple();
while(ApplePresence===0)
{
for(let i=0;i<AppleId.length;i++)
{
    if(apple===AppleId[i]){ApplePresence=1;}
}
    if(ApplePresence===0){ApplePresence=1}
    else{apple=makeApple();ApplePresence=0}
}
ApplePresence=0
AppleId.push(apple)
squares[apple].classList.add('apple')
}
function makeApple()
{
    let apple=Math.floor(Math.random()*100)
    while(squares[apple].classList.contains('ran'))
    {
    apple=Math.floor(Math.random()*100)
    }
    return apple
}
//create the snake auto move
var direction='Right';
var width=10;
function move()
{
    
    squares.forEach(i => i.classList.remove('ran'))
    squares[snake[snake.length-1]].classList.remove('head')
    if(direction === 'Right')
    {
        for(let i=0;i<snake.length;i++)
        {
            if(i==snake.length-1)
            {
                snake[i]++;
                if(snake[i]%width==0){snake[i]=snake[i]-width;
                squares[snake[i]].classList.add('head');
                Apple();Logic()
                
            }
                squares[snake[i]].classList.add('head')
                Apple()
                Logic()
                }
            else{
            if(tinHieuApple==1)
            {
            snake.unshift(snake[0])
            squares[snake[0]].classList.add('ran')
            tinHieuApple=0;
            }
            else{
                snake[i]=snake[i+1];
            squares[snake[i]].classList.add('ran')
        }
        }
        }
    }
    if(direction === 'Left')
    {
        for(let i=0;i<snake.length;i++)
        {
            if(i==snake.length-1)
            {
                snake[i]--;
                if((snake[i]+1)%width==0){snake[i]=width+snake[i];
                    squares[snake[i]].classList.add('head')
                Apple()
                Logic()}
                    squares[snake[i]].classList.add('head')
                    Apple()
                    Logic()
                }
            else{
                if(tinHieuApple==1)
                {
                snake.unshift(snake[0])
                squares[snake[0]].classList.add('ran')
                tinHieuApple=0;
                }
                else{
            snake[i]=snake[i+1];
            squares[snake[i]].classList.add('ran')}}
        }
    }
    if(direction === 'Up')
    {
        for(let i=0;i<snake.length;i++)
        {
            if(i===snake.length-1)
           {
               
            snake[i]=snake[i]-width;
            if(snake[i]<0){snake[i]=snake[i]+10*width;
            squares[snake[i]].classList.add('head')
        Apple()
        Logic()}
            squares[snake[i]].classList.add('head')
            Apple()
            Logic()
           }
           else{
            if(tinHieuApple==1)
            {
            snake.unshift(snake[0])
            squares[snake[0]].classList.add('ran')
            tinHieuApple=0;
            }
            else{
           snake[i]=snake[i+1]
           squares[snake[i]].classList.add('ran')}
           }
        }
    }
    if(direction === 'Down')
    {
        for(let i=0;i<snake.length;i++)
        {
            if(i===snake.length-1)
           {
               
            snake[i]=snake[i]+width;
            if(snake[i]>99){snake[i]=snake[i]-10*width;
            squares[snake[i]].classList.add('head')
        Apple()
        Logic()}
            squares[snake[i]].classList.add('head')
            Apple()
            Logic()
           }
           else{
            if(tinHieuApple==1)
            {
            snake.unshift(snake[0])
            squares[snake[0]].classList.add('ran')
            tinHieuApple=0;
            }
            else
            {
           snake[i]=snake[i+1]
           squares[snake[i]].classList.add('ran')}
           }
        }
    }
}
//the player conntrols the snake
function Control(e)
{
    if(e.keyCode === 87 && direction!="Down")
    {
        direction='Up';
        move()
    }
    else if(e.keyCode === 65&& direction!="Right")
    {
        direction='Left';
        move()
    }
    else if(e.keyCode === 83&& direction!="Up")
    {
        direction='Down';
        move()
    }
    else if(e.keyCode === 68&& direction!="Left")
    {
        direction='Right';
        move()
    }
}
document.addEventListener('keyup',Control)
var up=document.querySelector('#Up')
up.addEventListener('click',()=> 
{
    if(direction!='Down')
    direction='Up'
}
)
var right=document.querySelector('#Right')
right.addEventListener('click',()=> 
{
    if(direction!='Left')
    direction='Right'
}
)
var left=document.querySelector('#Left')
left.addEventListener('click',()=> 
{
    if(direction!='Right')
    direction='Left'
}
)
var down=document.querySelector('#Down')
down.addEventListener('click',()=> 
{
    if(direction!='Up')
    direction='Down'
}
)
var startGame = setInterval(move, 150);
//logic eat apple
function Apple()
{
    if(squares[snake[snake.length-1]].classList.contains('apple'))
    {
        squares[snake[snake.length-1]].classList.remove('apple')
        var index=AppleId.indexOf()
        apple=makeApple();
        while(ApplePresence===0)
    {
        for(let i=0;i<AppleId.length;i++)
        {
            if(apple===AppleId[i]){ApplePresence=1;}
        }
            if(ApplePresence===0){ApplePresence=1}
            else{apple=makeApple();ApplePresence=0}
    }
            ApplePresence=0
            AppleId.splice(index,1)
            AppleId.push(apple)
            squares[apple].classList.add('apple')


        Score++
        score.textContent=Score
        tinHieuApple=1;
    }
}
function Logic()
{
    if(squares[snake[snake.length-1]].classList.contains('ran'))
    {
        clearInterval(startGame)
        setTimeout(()=>alert('You Lose, your score is: '+Score),200)
    }
}