'use strict';

////nav bar
//        
//        window.onscroll = function() {scrollFunction()};
//
//        function scrollFunction() {
//            if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
//                document.getElementById("nav").style.display = "block";
//            } else {
//                document.getElementById("nav").style.display = "none";
//            }
//        } scrollFunction();
//        
//        
    
        
//       skills section
        
        function move() {
          var elem = document.getElementById("myBar");   
          var elem2 = document.getElementById("myBar2");   
          var elem3 = document.getElementById("myBar3");   
          var elem4 = document.getElementById("myBar4");   
          var width = 20;
//          var width2 = 20;
          var id1 = setInterval(frame1, 100);
          var id2 = setInterval(frame2, 100);
          var id3 = setInterval(frame3, 100);
          var id4 = setInterval(frame4, 100);
          function frame1() {
            if (width >= 75) {
              clearInterval(id1);
            } else {
              width++; 
              elem.style.width = width + '%'; 
              document.getElementById("demo").innerHTML = width * 1  + '%';
            }
          }
            function frame2() {
            if (width >= 80) {
              clearInterval(id2);
            } else {
              width++; 
              elem2.style.width = width+ '%'; 
 
              document.getElementById("demo2").innerHTML = width * 1  + '%';
            }
          }
            function frame3() {
            if (width >= 75) {
              clearInterval(id3);
            } else {
              width++; 
              elem3.style.width = width+ '%'; 
 
              document.getElementById("demo3").innerHTML = width * 1  + '%';
            }
          }
            function frame4() {
            if (width >= 80) {
              clearInterval(id3);
            } else {
              width++; 
              elem4.style.width = width+ '%'; 
 
              document.getElementById("demo4").innerHTML = width * 1  + '%';
            }
          }
        } move();
        
        
//        modal
        
             
      
      function modall(){
        var modal = document.getElementById('myModal');

        var open = document.getElementById('glowing_icon');
        

            open.onclick = function() { 
            modal.style.display = "block";
          
            document.getElementById('contact_info').style.display = "block";
            }
            


        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() { 
            modal.style.display = "none";
        }
        }modall();
      
//skills section
        
    //getting my canvas from html
var can1 = document.getElementById('my_canvas1').getContext('2d');
var can2 = document.getElementById('my_canvas2').getContext('2d');
var can3 = document.getElementById('my_canvas3').getContext('2d');
var can4 = document.getElementById('my_canvas4').getContext('2d');

//end point of progress bar
var end1 = 0;
var end2 = 0;
var end3 = 0;
var end4 = 0;

//start point of progress bar
var start = 4.72;

//width and height of my canvas
var cw = can1.canvas.width;
var ch = can1.canvas.height; 

//
var diff;
var diff2;
var diff3;
var diff4;
     
var sim = setInterval(progressSim, 50); //timer
function progressSim(){
    
    //canvas 1
	diff = ((end1 / 100) * Math.PI*2*10).toFixed(2);
    
	
	//Clears the specified pixels within a given rectangle
	can1.clearRect(0, 0, cw, ch);
	
	//progress bar width
	can1.lineWidth = 10;
	
    //Sets or returns the color, gradient, or pattern used to fill the drawing
	can1.fillStyle = 'black';
    
	//Sets or returns the color, gradient, or pattern used for strokes
	can1.strokeStyle = "#4CAF50";
    
	//Aligns percentage in the center of the canvas
	can1.textAlign = 'center';
    
	
	//Draws "filled" percentage on the canvas
	can1.fillText( "Critical Thinking", cw*.5, ch*.5+2, cw);
    
	//Begins a path, or resets the current path
	can1.beginPath();
    
	//Creates an arc for circle
	can1.arc(100, 100, 80, start, diff/10+start, false);
    can1.font = "16px Arial";
    
	
	//draws the path
	can1.stroke();
	
	if(end1 >= 80){
		clearTimeout(sim);//stop counting
	  
	}
	end1++; //counter    

}

var sim_2 = setInterval(progressSim2, 50); //timer
function progressSim2(){

	//canvas 2
	diff2 = ((end2 / 100) * Math.PI*2*10).toFixed(2);
    
	can2.clearRect(0, 0, cw, ch);
	can2.lineWidth = 10;
    
	can2.fillStyle = 'black';
    
	can2.strokeStyle = "#2196F3";
    
	can2.textAlign = 'center';
    
	can2.fillText("Integrity", cw*.5, ch*.5+2, cw);
    can2.font = "16px Arial";
	can2.beginPath();
    
	can2.arc(100, 100, 80, start, diff2/10+start, false);
    
	can2.stroke(); 
    
    	if(end2 >= 74){
		clearTimeout(sim_2);
	    
	}
	end2++;
	
}

    var sim_3 = setInterval(progressSim3, 50); //timer
function progressSim3(){

	//canvas3
	diff3 = ((end3 / 100) * Math.PI*2*10).toFixed(2);
    
	can3.clearRect(0, 0, cw, ch);
	can3.lineWidth = 10;
    
	can3.fillStyle = 'black';
    
	can3.strokeStyle = "#f44336";
    
	can3.textAlign = 'center';
    
	can3.fillText("Persistence", cw*.5, ch*.5+2, cw);
    can3.font = "16px Arial";
	can3.beginPath();
    
	can3.arc(100, 100, 80, start, diff3/10+start, false);
    
	can3.stroke();

    	if(end3 >= 70){
		clearTimeout(sim_3);
	    
	}
	end3++;

}


    var sim_4 = setInterval(progressSim4, 50); //timer
function progressSim4(){
	//canvas4
	diff4 = ((end4 / 100) * Math.PI*2*10).toFixed(2);
    
	can4.clearRect(0, 0, cw, ch);
	can4.lineWidth = 10;
    
	can4.fillStyle = 'black';
    
	can4.strokeStyle = "darkorange";
    
	can4.textAlign = 'center';
    
	can4.fillText("Innovation", cw*.5, ch*.5+2, cw);
    can4.font = "16px Arial";
	can4.beginPath();
    
	can4.arc(100, 100, 80, start, diff4/10+start, false);
    
	can4.stroke();
	
	if(end4 >= 75){
		clearTimeout(sim_4);
	    
	}
	end4++;
}
    
        
// education tabs       
  
//document.getElementById("active").style.backgroundColor = "red";
//document.getElementById("active").click();
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

