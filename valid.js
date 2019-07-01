window.onload = function() {
    document.getElementById("fname").focus();
  };

  function temp(e) {
    e.preventDefault();
    var flag=0;
    var f = e.target.fname.value;
    var l = e.target.lname.value;
    var u = e.target.userId.value;
    var p = e.target.password.value;
    var g = e.target.gender.value;
    if(f == ""){
      e.target.fname.style.border = "1.5px solid red";
      flag=1;
    }
    if(l == ""){
      e.target.lname.style.border = "1.5px solid red";
      flag=1;
    }
    if(u == ""){
      e.target.userId.style.border = "1.5px solid red";
      flag=1;
    }
    else{
      var l = u.indexOf("@");
      if(l != -1){
        var d = u.lastIndexOf(".");
        if(l<1 || d<l+2 || d+2>=u.length)
        alert("Enter valid email!");
        flag=1;
      }
      else{
        if(isNaN(u)==1 || u.length != 10)
        alert("Enter correct no. of 10 digits!");
        flag=1;
      }
    }
    if(p == ""){
      e.target.password.style.border = "1.5px solid red";
      flag=1;
    }  
    if(p.length < 8){
      // alert("Password must atleast be of 8 characters");
      flag=1;
    }
    if(g == ""){
      // document.getElementById("border").style.border  = "1px solid red";
      // document.getElementById("border").style.borderRadius = "5px";
      // document.getElementById("border").style.padding = "7px";
      let radioBtns = document.getElementsByClassName('radio-box');
      for(let i=0; i< radioBtns.length; i++) {
        radioBtns[i].classList.add('defective-field');
        // console.log(radioBtns[i])
      }
      // radioBtns.forEach(rdoBtn => {
        
      // });
      flag=1;
    }
    if(flag == 1)
    return false;
    else
    return true;
  }

  // function check(){
  //   var f = document.getElementById("fname").value;
  //   var l = document.getElementById("lname").value;
  //   var u = document.getElementById("userId").value;
  //   var p = document.getElementById("password").value;
  //   var g = document.getElementById("radio");
  //   if(f == ""){
  //     document.getElementById("fname").style.border = "1.5px solid red";
  //   }
  //   if(l == ""){
  //     document.getElementById("lname").style.border = "1.5px solid red";
  //   }
  //   if(u == ""){
  //     document.getElementById("userId").style.border = "1.5px solid red";
  //   }
  //   if(p == ""){
  //     document.getElementById("password").style.border = "1.5px solid red";
  //   }  
  //   if(p.length < 8)
  //   alert("Password must atleast be of 8 characters");
  //   if(g == ""){
  //     alert("adfaf");
  //   }
  // }
  function checkfn(){
    var f = document.getElementById("fname").value;
    if(f == ""){
      document.getElementById("fname").style.border = "1.5px solid red";
    }
  }
  function checkln(){
    var l = document.getElementById("lname").value;
    if(l == ""){
      document.getElementById("lname").style.border = "1.5px solid red";
    }
  }
  function checkuid(){
    var u = document.getElementById("userId").value;
    if(u == ""){
      document.getElementById("userId").style.border = "1.5px solid red";
    }
  }
  function checkp(){
    var p = document.getElementById("password").value;
    if(p == ""){
      document.getElementById("password").style.border = "1.5px solid red";
    }
    if(p.length < 8)
    alert("Password must atleast be of 8 characters");
  }
  // function f(){
  //   document.getElementById("fname").style.border = "1px solid rgb(164, 180, 245)";
  //   document.getElementById("fname").onblur = checkfn();

  //   document.getElementById("lname").style.border = "1px solid rgb(164, 180, 245)";
  //   document.getElementById("lname").onblur = checkln();
  // }