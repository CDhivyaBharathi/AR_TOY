AFRAME.registerComponent('markerHandler',{
    init:async function(){
        this.el.addEventListener("markerFound",()=>{
            console.log("Marker Is Found")
        })
        this.el.addEventListener("markerLost",()=>{
            console.log("Marker Is Lost")
        })
    },
    handleMarkerFound:function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "flex";
        var ratingButton = document.getElementById("rating-button")
        var orderButtton = document.getElementById("order-button");
        ratingButton.addEventListener("click",function(){
            swal({
                icon: "warning",
                title: "Rate Dish",
                text: "Work In Progress"
            })
        })
        orderButtton.addEventListener("click",function(){
            swal({
                icon: "https://i.imgur.com/4NZ6uLY.jpg",
                title: "Thanks for the order",
                text: "Your order will be served soon at your table!"
            })
        })

    },
    handleMarkerLost:function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none";
    }
})