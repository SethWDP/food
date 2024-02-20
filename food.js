function Nav(){
    const NavMenu = ['Home','About','Menu','Contact'];
    let txt = "";
    for(const N of NavMenu){
        txt+=
            `
                <li><a href="#">${N}</a></li>
            `
            document.querySelector("#menu").innerHTML=txt;
    }
}
Nav();

function OrderFood(){
    const FoodMenu = [
        {              
            "name":"Fish Salad Dish",
            "price":"20$",
            "img":"/Testing/Image2/pexels-dana-tentis-262959.jpg"
        },
        {              
            "name":"Burger Cheese",
            "price":"2$",
            "img":"/Testing/Image2/pexels-rajesh-tp-1633525.jpg",
        },
        {              
            "name":"Salad On A Plate",
            "price":"5$",
            "img":"/Testing/Image2/pexels-julie-aagaard-2097090.jpg"
        },
        {              
            "name":"Cream Food on Plate",
            "price":"7$",
            "img":"/Testing/Image2/pexels-jenna-hamra-1370939.jpg"
        },
        {              
            "name":"Ramen Lobster",
            "price":"4$",
            "img":"/Testing/Image2/pexels-jang-‘s-🍂-699953.jpg"
        },
        {              
            "name":"Vegetable Sandwich ",
            "price":"12$",
            "img":"/Testing/Image2/pexels-erin-wang-1647163.jpg"
        },
        {              
            "name":"Pizza with Green Leaves",
            "price":"2$",
            "img":"/Testing/Image2/pexels-photo-12261065.webp"
        },
        {              
            "name":"Fish Salad Dish",
            "price":"20$",
            "img":"/Testing/Image2/pexels-dana-tentis-262959.jpg"
        }
    ]
    console.log(FoodMenu);
    let txt1="";
    for(const F of FoodMenu){
        txt1+=
        `
        <div class="card-box">
        <div class="card-img">
            <img src=${F.img} alt="">
        </div>
        
        <div class="card-text">
            <div class="title">
                <h4>${F.name}</h4>
            </div>
            <div class="pri-star">
                <div class="star-rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    </div>
                <div class="price">
                    <h3>${F.price}</h3>
                </div>
            </div>
            
            <button type="button" id="btn-add" class="btn btn-primary">Add Food</button>
          </div>
    </div>
        `
        document.querySelector(".container").innerHTML=txt1;
    }
}
OrderFood();

function Detail(){
    let noti = document.getElementById("noti");
    let btnAdd = document.querySelectorAll('#btn-add');
    btnAdd.forEach((b,i)=>{
        let num=1;
        b.addEventListener("click",function(){
            noti.innerHTML=num;
            num++;
        })
        let data="";
        
    })
}
Detail();

