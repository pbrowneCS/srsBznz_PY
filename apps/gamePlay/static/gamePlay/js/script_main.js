// $(document).ready(function(){
// 	var playerSize = 40;
// 	var MinWidth = 0;
// 	var MinHeight = 0;
// 	var MaxWidth = 1000 - playerSize;
// 	var MaxHeight = 600 - playerSize;
// 	var xVelocity = 0;
// 	var yVelocity = 0;
// 	var coordinates = [];
// 	var projectiles = [];
// 	var wall = [];
// 	//enemy vars
// 	var soldiers = [];
// 	var deadSoldiers = [];
// 	var soldierHealth = 100;
// 	//player vars
// 	var playerMouseDown = false;
// 	var score = 0;
// 	var currentLevel = 0;
// 	var readyUpTimer = 120;
// 	var paused = false;

// 	player = {
// 		x: 0,
// 		y: 0,
// 		velocity:{
// 			x:0,
// 			y:0
// 		},
// 		height: 40,
// 		width: 40,
// 		radius: 20,
// 		attackTimer: 0,
// 		chargeTimer: 0,
// 		damagedTimer: 0,
// 		takesDamage: true,
// 		step: 0,
// 		attacking: 0,
// 		health: 100
// 	};

// 	levels = [
// 				{
// 					wall: [
// 						{x: 750, y: 350, height: 150, width: 50},
// 						{x: 200, y: 350, height: 150, width: 50},
// 					],
// 					soldier: [
// 						{x: 820, y: 400, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100},
// 					],
// 					spawnPoint: {
// 						x: 100,
// 						y: 100
// 					}
// 				},
// 				{
// 					wall: [
// 						{x: 750, y: 350, height: 150, width: 50},
// 						{x: 200, y: 350, height: 150, width: 50},
// 						{x: 300, y: 300, height: 50, width: 150},
// 						{x: 650, y: 100, height: 50, width: 300},
// 						{x: 550, y: 100, height: 250, width: 50},
// 					],
// 					soldier: [
// 						{x: 820, y: 400, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100},
// 					],
// 					spawnPoint: {
// 						x: 100,
// 						y: 200
// 					}
// 				},
// 				{
// 					wall: [
// 						{x: 750, y: 350, height: 150, width: 50},
// 						{x: 200, y: 350, height: 150, width: 50},
// 						{x: 300, y: 300, height: 50, width: 150},
// 						{x: 650, y: 100, height: 50, width: 300},
// 						{x: 550, y: 100, height: 250, width: 50},
// 					],
// 					soldier: [
// 						{x: 820, y: 400, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100},
// 						{x: 320, y: 450, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100},
// 					],
// 					spawnPoint: {
// 						x: 100,
// 						y: 300
// 					}
// 				},
// 				{
// 					wall: [
// 						{x: 750, y: 350, height: 150, width: 50},
// 						{x: 200, y: 350, height: 150, width: 50},
// 						{x: 300, y: 300, height: 50, width: 150},
// 						{x: 650, y: 100, height: 50, width: 300},
// 						{x: 550, y: 100, height: 250, width: 50},
// 					],
// 					soldier: [
// 						{x: 820, y: 400, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100},
// 						{x: 820, y: 50, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100},
// 						{x: 320, y: 500, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100},
// 						{x: 120, y: 150, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100},
// 					],
// 					spawnPoint: {
// 						x: 100,
// 						y: 400
// 					}
// 				},
// 				{
// 					wall: [
// 						{x: 200, y: 50, height: 50, width: 50},
// 						{x: 600, y: 50, height: 150, width: 50},
// 						{x: 50, y: 200, height: 50, width: 150},
// 						{x: 100, y: 300, height: 50, width: 300},
// 						{x: 350, y: 50, height: 150, width: 50},
// 						{x: 650, y: 300, height: 50, width: 300},
// 						{x: 50, y: 450, height: 50, width: 250},
// 						{x: 400, y: 450, height: 150, width: 50},
// 						{x: 750, y: 350, height: 150, width: 50}
// 					],
// 					soldier: [
// 						{x: 820, y: 90, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100},
// 						{x: 600, y: 430, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100},
// 						{x: 400, y: 210, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100}
// 					],
// 					spawnPoint: {
// 						x: 100,
// 						y: 100
// 					}
// 				},
// 				{
// 					wall: [
// 						{x: 100, y: 50, height: 50, width: 50},
// 						{x: 500, y: 50, height: 150, width: 50},
// 						{x: 150, y: 200, height: 50, width: 150},
// 						{x: 150, y: 300, height: 50, width: 300},
// 						{x: 250, y: 50, height: 150, width: 50},
// 						{x: 550, y: 300, height: 50, width: 300},
// 						{x: 150, y: 450, height: 50, width: 250},
// 						{x: 450, y: 450, height: 150, width: 50},
// 						{x: 650, y: 350, height: 150, width: 50}
// 					],
// 					soldier: [
// 						{x: 820, y: 90, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100},
// 						{x: 600, y: 430, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100},
// 						{x: 400, y: 210, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100}
// 					],
// 					spawnPoint: {
// 						x: 100,
// 						y: 100
// 					}
// 				},



// 				{
// 					wall: [
// 						{x: 100, y: 0, height: 450, width: 50},
// 						{x: 250, y: 150, height: 450, width: 50},
// 						{x: 400, y: 0, height: 450, width: 50},
// 						{x: 550, y: 150, height: 450, width: 50},
// 						{x: 700, y: 0, height: 450, width: 50},
// 						{x: 850, y: 150, height: 450, width: 50},
// 					],
// 					soldier: [
// 						{x: 50, y: 450, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100},
// 						{x: 50, y: 50, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100},
// 						{x: 350, y: 550, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100},
// 						{x: 600, y: 300, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100},
// 						{x: 900, y: 450, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100},
// 						{x: 950, y: 50, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100},
// 					],
// 					spawnPoint: {
// 						x: 150,
// 						y: 300
// 					}
// 				},



// 				{
// 					wall: [
// 						{x: 100, y: 0, height: 250, width: 250},
// 						{x: 100, y: 350, height: 250, width: 250},
// 						{x: 650, y: 0, height: 250, width: 250},
// 						{x: 650, y: 350, height: 250, width: 250},
// 						{x: 500, y: 100, height: 400, width: 50},
// 					],
// 					soldier: [
// 						{x: 50, y: 450, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100},
// 						{x: 50, y: 50, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100},
// 						{x: 350, y: 550, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100},
// 						{x: 600, y: 300, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100},
// 						{x: 900, y: 450, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100},
// 						{x: 950, y: 50, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100},
// 					],
// 					spawnPoint: {
// 						x: 150,
// 						y: 300
// 					}
// 				},
// 				{
// 					wall: [
// 						{x: 100, y: 75, height: 100, width: 100},
// 						{x: 275, y: 150, height: 100, width: 100},
// 						{x: 100, y: 250, height: 100, width: 100},
// 						{x: 275, y: 350, height: 100, width: 100},
// 						{x: 100, y: 425, height: 100, width: 100},
// 						{x: 450, y: 75, height: 100, width: 100},
// 						{x: 625, y: 150, height: 100, width: 100},
// 						{x: 450, y: 250, height: 100, width: 100},
// 						{x: 625, y: 350, height: 100, width: 100},
// 						{x: 450, y: 425, height: 100, width: 100},
// 						{x: 800, y: 75, height: 100, width: 100},
// 						{x: 800, y: 250, height: 100, width: 100},
// 						{x: 800, y: 425, height: 100, width: 100},
						
// 					],
// 					soldier: [
// 						{x: 50, y: 450, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100},
// 						{x: 50, y: 50, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100},
// 						{x: 350, y: 550, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100},
// 						{x: 600, y: 300, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100},
// 						{x: 900, y: 450, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100},
// 						{x: 950, y: 50, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100},
// 					],
// 					spawnPoint: {
// 						x: 250,
// 						y: 250
// 					}
// 				},
// 				{
// 					wall: [
// 						{x: 300, y: 75, height: 50, width: 400},
// 						{x: 300, y: 475, height: 50, width: 400},
// 						{x: 100, y: 100, height: 400, width: 50},
// 						{x: 850, y: 100, height: 400, width: 50},
// 						{x: 350, y: 200, height: 50, width: 300},
// 						{x: 230, y: 170, height: 250, width: 50},
// 						{x: 350, y: 350, height: 50, width: 300},
// 						{x: 730, y: 170, height: 250, width: 50},
						
// 					],
// 					soldier: [
// 						{x: -100, y: -100, velocity:{x: 0, y: 0,}, height: 40, width: 40, radius: 20, health: 100},
// 					],
// 					spawnPoint: {
// 						x: 10,
// 						y: 10
// 					}
// 				}
// 			];

// 	var keys = {};

// 	window.addEventListener('keydown',function(e){
// 		keys[e.keyCode || e.which] = true;
// 	},true);

// 	window.addEventListener('keyup',function(e){
// 		//left
// 		keys[e.keyCode || e.which] = false;
// 		if (e.keyCode == 65 || e.keyCode ==  97){
// 			player.velocity.x = 0;
// 		}
// 		//right
// 		if (e.keyCode == 68 || e.keyCode == 100){
// 			player.velocity.x = 0;
// 		}
// 		//up
// 		if (e.keyCode == 87 || e.keyCode ==  119){
// 			player.velocity.y = 0;
// 		}
// 		//down
// 		if (e.keyCode == 83 || e.keyCode == 115){ 
// 			player.velocity.y = 0;
// 		}
// 	},true);

// 	function playerMove(){
// 		//left
// 		var count = 0;
// 		if (keys[65] || keys[97]){
// 			count++;
// 			player.step++;
// 			player.velocity.x = -3;
// 		}
// 		//right
// 		if (keys[68] || keys[100]){
// 			count++;
// 			player.step++;
// 			player.velocity.x = +3;
// 		}
// 		//up
// 		if (keys[87] || keys[119]){
// 			count++;
// 			player.velocity.y = -3;
// 		}
// 		//down
// 		if (keys[83] || keys[115]){
// 			count++;
// 			player.velocity.y = +3;
// 		}
// 		if (count > 1){
// 			player.velocity.x = player.velocity.x * .7071;
// 			player.velocity.y = player.velocity.y * .7071;
// 		}
// 		if (player.step > 10){
// 			document.getElementById("player").style.padding = "0px 0px 0px 0px";
// 		}
// 		if (player.step < 10){
// 			document.getElementById("player").style.padding = "2px 0px 0px 0px";
// 		}
// 		if (player.step > 20){
// 			player.step = 0;
// 		}
// 	}

// // START WALL/BORDER COLLISION MECHANICS

// 	function borderCollision(unit){
// 		//make it so stuff can't go outside the border
// 		if (unit.x > MaxWidth){
// 			unit.x = MaxWidth
// 		}
// 		if (unit.x < MinWidth){
// 			unit.x = MinWidth
// 		}
// 		if (unit.y > MaxHeight){
// 			unit.y = MaxHeight
// 		}
// 		if (unit.y < MinHeight){
// 			unit.y = MinHeight
// 		}
// 	}

// 	function wallCollision(unit){
// 		for(var i = 0; i < wall.length; i++){
			
// 			// x,y
// 			if (((unit.x+unit.velocity.x > wall[i].x) && (unit.x+unit.velocity.x < wall[i].x+wall[i].width)) && (((unit.y > wall[i].y) && (unit.y< wall[i].y+wall[i].height))||((unit.y + unit.height > wall[i].y) && (unit.y + unit.height< wall[i].y+wall[i].height)))){
// 				if (unit.y + unit.height - unit.velocity.y <= wall[i].y){
// 				}else if (unit.y - unit.velocity.y >= wall[i].y + wall[i].height){
// 				}else if (unit.velocity.x < 0) {
// 					unit.x = wall[i].x + wall[i].width;
// 				}else if (unit.velocity.x > 0) {
// 					unit.x = wall[i].x;
// 				}
// 			}
// 			if (((unit.x + unit.width+unit.velocity.x > wall[i].x) && (unit.x + unit.width+unit.velocity.x < wall[i].x+wall[i].width)) && (((unit.y > wall[i].y) && (unit.y< wall[i].y+wall[i].height))||((unit.y + unit.height > wall[i].y) && (unit.y + unit.height< wall[i].y+wall[i].height)))){
// 				if (unit.y + unit.height - unit.velocity.y <= wall[i].y){
// 				}else if (unit.y - unit.velocity.y >= wall[i].y + wall[i].height){
// 				}else if (unit.velocity.x < 0) {
// 					unit.x = wall[i].x + wall[i].width - unit.width;
// 				}else if (unit.velocity.x > 0) {
// 					unit.x = wall[i].x - unit.width;
// 				}
// 			}
// 			if ((((unit.x > wall[i].x) && (unit.x < wall[i].x+wall[i].width))||((unit.x + unit.width > wall[i].x) && (unit.x + unit.width< wall[i].x+wall[i].width))) && ((unit.y + unit.velocity.y > wall[i].y) && (unit.y + unit.velocity.y< wall[i].y+wall[i].height))){
// 				if (unit.velocity.y < 0) {

// 					unit.y = wall[i].y + wall[i].height;
// 				}
// 				if (unit.velocity.y > 0) {
// 					unit.y = wall[i].y;
// 				}
// 			}
// 			if ((((unit.x > wall[i].x) && (unit.x < wall[i].x+wall[i].width))||((unit.x + unit.width > wall[i].x) && (unit.x + unit.width< wall[i].x+wall[i].width))) && ((unit.y + unit.height+ unit.velocity.y > wall[i].y) && (unit.y + unit.height+ unit.velocity.y< wall[i].y+wall[i].height))){
// 				if (unit.velocity.y < 0) {
// 					unit.y = wall[i].y - unit.height;
// 				}
// 				if (unit.velocity.y > 0) {
// 					unit.y = wall[i].y - unit.height;
// 				}
// 			}
// 			}
// 	}				
// 	function displayWalls(){
// 		var string = "";
// 		for(var i = 0; i < wall.length; i++){
// 			string += "<div class='wall' style='top:" + wall[i].y + "px; left:" + wall[i].x + "px; height:" + wall[i].height + "px; width:" + wall[i].width + "px;'></div>"
// 		}
// 		document.getElementById("walls").innerHTML=string;
// 	}

// // START PROJECTILES
// 	$("#gameRegion").mousedown(function(e){
// 		playerMouseDown = true;
// 	});

// 	$("#gameRegion").mouseup(function(e){
// 		var mouseX = e.pageX-100;
// 		var mouseY = e.pageY-100;
// 		coordinates = [mouseX,mouseY];
// 		if(player.attackTimer == 0){
// 			projectile(player,coordinates);
// 			player.attackTimer = 20;
// 		}
// 		var coords = "X coords: " + mouseX + ", Y coords: " + mouseY;
// 		document.getElementById("democlick").innerHTML = coords;
// 		playerMouseDown = false;
// 	});


// 	function projectile(unit, target){
// 		var centerX = unit.x + (unit.width/2);
// 		var centerY = unit.y + (unit.height/2);
// 		var targetX = target[0];
// 		var targetY = target[1];
// 		var distanceX = targetX - centerX;
// 		var distanceY = targetY - centerY;
// 		var projWidth = 25;
// 		var projHeight = 10;
// 		var theta = Math.atan2(distanceY, distanceX);
// 		var xSpeed = Math.cos(theta) * 5;
// 		var ySpeed = Math.sin(theta) * 5;
// 		var r = Math.sqrt((Math.pow(projWidth/2,2))+(Math.pow(projHeight/2,2)));
// 		var newX = centerX + r*Math.cos(theta);
// 		var newY = centerY + r*Math.sin(theta);
// 		var damage = 20*player.chargeTimer/10;
// 		if(damage < 20){
// 			damage = 20;
// 		}
// 		projectiles.push({currentX: centerX, currentY: centerY, velX: xSpeed ,velY: ySpeed, type: "arrow", angle: theta*(180/Math.PI), pxm: newX, pym: newY, damage: damage})
// 	}
// 	function projectileUnitCollision(projectile){
// 		for (var i=0;i<soldiers.length;i++){
// 			var dx = soldiers[i].x-projectile.pxm;
// 			var dy = soldiers[i].y-projectile.pym;
// 			var distance = Math.sqrt((dx*dx)+(dy*dy));
// 			if(distance < soldiers[i].radius){
// 				soldiers[i].health -= projectile.damage;
// 				// console.log("Enemy health is now: " + soldiers[i].health);
// 				if(soldiers[i].health<1){
// 					var coords = {x:soldiers[i].x, y:soldiers[i].y};
// 					deadSoldiers.push(coords);
// 					score+=100;
// 					if(i!=soldiers.length-1){
// 						soldiers[i] = soldiers.pop();
// 						i--;
// 					}
// 					else{
// 						deadSoldiers.push(coords);
// 						soldiers.pop();
// 					}

// 				}
// 				return true;
// 			}
// 		}
// 		return false;
// 	}
	
	
// 	function checkProjectileUnitCollision(){
// 		for(var i = 0; i<projectiles.length; i++){
// 			if(projectileUnitCollision(projectiles[i])){

// 			}
// 		}
// 	}

// 	function projectileMove(){
// 		var string = "";
// 		for (var i=0; i<projectiles.length;i++){
// 			projectiles[i].currentX += projectiles[i].velX;
// 			projectiles[i].currentY += projectiles[i].velY;
// 			projectiles[i].pxm += projectiles[i].velX;
// 			projectiles[i].pym += projectiles[i].velY;
// 			if ((projectiles[i].currentX > MaxWidth+playerSize || projectiles[i].currentX < 0) || (projectiles[i].currentY > MaxHeight + playerSize || projectiles[i].currentY < 0)){
// 				projectiles[i] = projectiles[projectiles.length-1];
// 				projectiles.pop();
// 				i--;	
// 			}

// 			else if(projectileCollision(projectiles[i]) || projectileUnitCollision(projectiles[i])){
// 				projectiles[i] = projectiles[projectiles.length-1];
// 				projectiles.pop();
// 				i--;	
// 			}

// 			else{
// 			string += "<div id='arrow' style='top:" + (projectiles[i].currentY-2.5) + "px; left:" + (projectiles[i].currentX-6.25) + "px; transform: rotate(" + projectiles[i].angle + "deg); '></div>";
// 			}
// 		}
// 		document.getElementById("projectiles").innerHTML=string;
// 	}


// 	function projectileCollision(projectile){

// 		for(var i = 0; i < wall.length; i++){
// 			// x,y
// 			if (((projectile.pxm+12.5 > wall[i].x) && (projectile.pxm+12.5 < wall[i].x+wall[i].width)) && ((projectile.pym > wall[i].y) && (projectile.pym < wall[i].y+wall[i].height))){
// 				return true;
// 			}
// 			// x+width, y
// 			if ((projectile.pxm+12.5+projectile.width > wall[i].x && projectile.pxm+12.5+projectile.width < wall[i].x+wall[i].width) && (projectile.pym > wall[i].y && projectile.pym < wall[i].y+wall[i].height)){
// 				return true;
// 			}
// 			// x+width, y+height
// 			if ((projectile.pxm+12.5+projectile.width > wall[i].x && projectile.pxm+12.5+projectile.width < wall[i].x+wall[i].width) && (projectile.pym+projectile.height > wall[i].y && projectile.pym+projectile.height < wall[i].y+wall[i].height)){
// 				return true;
// 			}
// 			// x, y+height
// 			if ((projectile.pxm+12.5 > wall[i].x && projectile.pxm+12.5 < wall[i].x+wall[i].width) && (projectile.pym+projectile.height > wall[i].y && projectile.pym+projectile.height < wall[i].y+wall[i].height)){
// 				return true;
// 			}
// 		}
// 		return false;
// 	}

// 	function checkProjectileWallCollision(){
// 		for(var i = 0; i < projectiles.length; i++){
// 			if(projectileCollision(projectiles[i])){
// 				projectiles[i] = projectiles[projectiles.length-1];
// 				projectiles.pop();
// 				i--;	
// 			}
// 			else{
// 			string += "<div id='arrow' style='top:" + projectiles[i].currentY + "px; left:" + projectiles[i].currentX + "px;'></div>"
// 			}
// 		}
// 	}
	

// // START NPCs HERE

// 	function lineOfSight(unit, player){
// 		var playerCoord = [player.x, player.y];
// 		for(var i = 0; i < wall.length; i++){
// 			var npcCoord = [unit.x, unit.y];
			
// 			if(player[0] != unit[0]){
// 				var slope = (player[1]-unit[1])/(player[0] - unit[0]);
			
// 				// for Player left of NPC
// 				if((unit[0]-player[0])>0){
// 					if(wall[i].x+wall[i].width < unit[0] && wall[i].x+wall[i].width > player[0]){
// 						var vPos = ((unit[0]-wall[i].x+wall[i].width)*slope)+unit[1];
// 						if((wall[i].y >= vPos) && (vPos <= (wall[i].y+wall[i].height))){
// 							return false;	
// 						}	
// 					}
// 				}
// 				// for Player right of NPC
// 				else if((unit[0]-player[0])<0){
// 					if(wall[i].x < unit[0] && wall[i].x > player[0]){
// 						var vPos = ((unit[0]-wall[i].x)*slope)+unit[1];
// 						if((wall[i].y >= vPos) && (vPos <= (wall[i].y+wall[i].height))){
// 							return false;	
// 						}	
// 					}		
// 				}
// 			}

// 			else if((unit[0]-player[0]) === 0){
// 			// for Player Above NPC and Slope === 0
// 				if(unit[0] < wall[i].x+wall[i].width && unit[0] > wall[i].x){
// 					if(wall[i].y > unit[1] && wall[i].y < player[1]){
// 						return false;
// 					}
// 				}
	
// 			// for Player Below NPC and Slope === 0
// 				if(unit[0] < wall[i].x+wall[i].width && unit[0] > wall[i].x){
// 					if(wall[i].y < unit[1] && wall[i].y > player[1]){
// 						return false;
// 					}
// 				}		
// 			}
// 		}
// 		return true;
// 	}	

// 	function displaySoldiers(){
// 		var string = "";
// 		for(var i = 0; i<soldiers.length; i++){
// 			string += "<div class='soldiers' style='top:" + soldiers[i].y + "px; left:" + soldiers[i].x + "px; height:" + soldiers[i].height + "px; width:" + soldiers[i].width + "px;'><img id='soldierImg' src='static/gamePlay/img/sword_idle.png'></div>";
// 		}
// 		document.getElementById("soldiers").innerHTML=string;
// 	}

// 	function soldierMove(player){
// 		target = [player.x, player.y];
// 		for (var i = 0; i < soldiers.length; i++) {
// 			var centerX = soldiers[i].x + ((player.width/2)-10);
// 			var centerY = soldiers[i].y + (player.height/2);
// 			var targetX = target[0];
// 			var targetY = target[1];
// 			var distanceX = targetX - centerX;
// 			var distanceY = targetY - centerY;
// 			var theta = (Math.atan2(distanceY, distanceX));

// 			// right**********************
// 			if(theta >= (-Math.PI/8) && theta <= (Math.PI/8)){
// 				soldiers[i].velocity.x = 2;
// 				soldiers[i].velocity.y = 0;
// 			// down right ***********
// 			}else if((Math.PI/8) < theta && theta <= (3*Math.PI/8)){
// 				soldiers[i].velocity.x = 1.41;
// 				soldiers[i].velocity.y = 1.41;
// 			// down *************
// 			}else if((3*Math.PI/8) < theta && theta <= (5*Math.PI/8)){
// 				soldiers[i].velocity.x = 0;
// 				soldiers[i].velocity.y = 2;
// 			// down left *******************
// 			}else if((5*Math.PI/8) < theta && theta <= (7*Math.PI/8)){
// 				soldiers[i].velocity.x = -1.41;
// 				soldiers[i].velocity.y = 1.41;
// 			// down left***************
// 			}else if((-7*Math.PI/8) < theta && theta <= (-5*Math.PI/8)){
// 				soldiers[i].velocity.x = -1.41;
// 				soldiers[i].velocity.y = -1.41;
// 			// up**************
// 			}else if((-5*Math.PI/8) < theta && theta <= (-3*Math.PI/8)){
// 				soldiers[i].velocity.x = 0;
// 				soldiers[i].velocity.y = -2;
// 			// up right ***********
// 			}else if((-3*Math.PI/8) < theta && theta <= (-1*Math.PI/8)){
// 				soldiers[i].velocity.x = 1.41;
// 				soldiers[i].velocity.y = -1.41;
// 			// left 
// 			}else{
// 				soldiers[i].velocity.x = -2;
// 				soldiers[i].velocity.y = 0;
// 			}
// 		}

// 		for(var i = 0; i < soldiers.length; i++){
// 			soldiers[i].x += soldiers[i].velocity.x;
// 			soldiers[i].y += soldiers[i].velocity.y;
// 		}
// 	}


// 	function npcCollision(unit,player){
// 		//attack
// 		var dx = unit.x-player.x;
// 		var dy = unit.y-player.y;
// 		var distance = Math.sqrt((dx*dx)+(dy*dy));
// 		if (distance<unit.radius+player.radius) {
// 			//collision
// 			var theta = Math.atan2(dy,dx)
// 			player.velocity.x = -6*Math.cos(theta);
// 			player.velocity.y = -6*Math.sin(theta);
// 			if(player.takesDamage){
// 				player.damagedTimer = 60;
// 				player.health -= 20;
// 				player.attackTimer = 60;
// 			}
			
// 		}
// 	}

// 	function enemyWallCollision(unit){
// 		for(var i = 0; i < wall.length; i++){
			
// 			// x,y
// 			if (((unit.x+unit.velocity.x > wall[i].x) && (unit.x+unit.velocity.x < wall[i].x+wall[i].width)) && (((unit.y > wall[i].y) && (unit.y< wall[i].y+wall[i].height))||((unit.y + unit.height > wall[i].y) && (unit.y + unit.height< wall[i].y+wall[i].height)))){
// 				if (unit.y + unit.height - unit.velocity.y <= wall[i].y){
// 				}else if (unit.y - unit.velocity.y >= wall[i].y + wall[i].height){
// 				}else if (unit.velocity.x < 0) {
// 					unit.x = wall[i].x + wall[i].width;
// 					findEndofWall(unit, wall[i]);
// 				}else if (unit.velocity.x > 0) {
// 					unit.x = wall[i].x;
// 					findEndofWall(unit, wall[i]);
// 				}
// 			}
// 			if (((unit.x + unit.width+unit.velocity.x > wall[i].x) && (unit.x + unit.width+unit.velocity.x < wall[i].x+wall[i].width)) && (((unit.y > wall[i].y) && (unit.y< wall[i].y+wall[i].height))||((unit.y + unit.height > wall[i].y) && (unit.y + unit.height< wall[i].y+wall[i].height)))){
// 				if (unit.y + unit.height - unit.velocity.y <= wall[i].y){
// 				}else if (unit.y - unit.velocity.y >= wall[i].y + wall[i].height){
// 				}else if (unit.velocity.x < 0) {
// 					unit.x = wall[i].x + wall[i].width - unit.width;
// 					findEndofWall(unit, wall[i]);
// 				}else if (unit.velocity.x > 0) {
// 					unit.x = wall[i].x - unit.width;
// 					findEndofWall(unit, wall[i]);
// 				}
// 			}
// 			if ((((unit.x > wall[i].x) && (unit.x < wall[i].x+wall[i].width))||((unit.x + unit.width > wall[i].x) && (unit.x + unit.width< wall[i].x+wall[i].width))) && ((unit.y + unit.velocity.y > wall[i].y) && (unit.y + unit.velocity.y< wall[i].y+wall[i].height))){
// 				if (unit.x + unit.width - unit.velocity.x <= wall[i].x){
// 				}else if (unit.x - unit.velocity.x >= wall[i].x + wall[i].width){
// 				}
// 				else if (unit.velocity.y < 0) {
// 					unit.y = wall[i].y + wall[i].height;
// 					findEndofWall(unit, wall[i]);
// 				}
// 				else if (unit.velocity.y > 0) {
// 					unit.y = wall[i].y;
// 					findEndofWall(unit, wall[i]);

// 				}
// 			}
// 			if ((((unit.x > wall[i].x) && (unit.x < wall[i].x+wall[i].width))||((unit.x + unit.width > wall[i].x) && (unit.x + unit.width< wall[i].x+wall[i].width))) && ((unit.y + unit.height+ unit.velocity.y > wall[i].y) && (unit.y + unit.height+ unit.velocity.y< wall[i].y+wall[i].height))){
// 				if (unit.x + unit.widthx - unit.velocity.x <= wall[i].x){
// 				}else if (unit.x - unit.velocity.x >= wall[i].x + wall[i].widthx){
// 				}
// 				else if (unit.velocity.y < 0) {
// 					unit.y = wall[i].y - unit.height;
// 					findEndofWall(unit, wall[i]);
// 				}
// 				else if (unit.velocity.y > 0) {
// 					unit.y = wall[i].y - unit.height;
// 					findEndofWall(unit, wall[i]);
// 				}
// 			}
// 		}
// 	}

// 	function displayDead(){
// 		var string = "";
// 		for(var i =0; i<deadSoldiers.length;i++){
// 		string += "<div class='deadSoldiers' style='top:" + deadSoldiers[i].y + "px; left:" + deadSoldiers[i].x + "px;'></div>";
// 		}
// 		document.getElementById("deadSoldiers").innerHTML=string;
// 	}

// 	function findEndofWall(unit, wall){
// 		//unit above
// 		if(unit.y<player.y){
// 			if (Math.abs(player.x-wall.x) < Math.abs((player.x+player.width)-(wall.x+wall.width))){
// 				unit.y += 0;
// 				unit.x += -2;
// 				unit.velocity.x = 0;
// 				unit.velocity.y = 0;
// 			}else{
// 				unit.y += 0;
// 				unit.x += 2;
// 				unit.velocity.x = 0;
// 				unit.velocity.y = 0;
// 			}
// 		}
// 		//unit right
// 		if(unit.x>player.x){
// 			if( Math.abs(player.y-wall.y) < Math.abs((player.y+player.height)-(wall.y+wall.height))){
// 				unit.y += -2;
// 				unit.x += 0;
// 				unit.velocity.x = 0;
// 				unit.velocity.y = 0;
// 			}else{
// 				unit.y += 2;
// 				unit.x += 0;
// 				unit.velocity.x = 0;
// 				unit.velocity.y = 0;
// 			}
// 		}
// 		//unit below
// 		if (unit.y>player.y) {
// 			if (Math.abs(player.x-wall.x) < Math.abs((player.x+player.width)-(wall.x+wall.width))){
// 				unit.y += 0;
// 				unit.x += -2;
// 				unit.velocity.x = 0;
// 				unit.velocity.y = 0;
// 			}else{
// 				unit.y += 0;
// 				unit.x += 2;
// 				unit.velocity.x = 0;
// 				unit.velocity.y = 0;
// 			}
// 		}
// 		//unit left
// 		if(unit.x<player.x){
// 			if( Math.abs(player.y-wall.y) < Math.abs((player.y+player.height)-(wall.y+wall.height))){
// 				unit.y += -2;
// 				unit.x += 0;
// 				unit.velocity.x = 0;
// 				unit.velocity.y = 0;
// 			}else{
// 				unit.y += 2;
// 				unit.x += 0;
// 				unit.velocity.x = 0;
// 				unit.velocity.y = 0;
// 			}
// 		}
// 	}

// 	function npcTonpcCollision(){
// 		for (var i = 0; i < soldiers.length; i++){
// 			for (var j = 0; j < soldiers.length; j++){
// 				var dx = soldiers[i].x-soldiers[j].x;
// 				var dy = soldiers[i].y-soldiers[j].y;
// 				var distance = Math.sqrt((dx*dx)+(dy*dy));
// 				if (distance<soldiers[i].radius+soldiers[j].radius && i != j) {
// 					var theta = Math.atan2(dy,dx);
// 					soldiers[i].x = soldiers[i].x + (2 * Math.cos(theta));
// 					soldiers[i].y = soldiers[i].y + (2 * Math.sin(theta));
// 				}
// 			}
// 		}
// 	}

// // START GAMEPLAY

// 	$("#gameRegion").mousemove(function(e){
// 		var mouseX = e.pageX;
// 		var mouseY = e.pageY;
// 		coordinates = [mouseX,mouseY];
// 		var coor = "X coords: " + mouseX + ", Y coords: " + mouseY;
// 		document.getElementById("demo").innerHTML = coor;
// 		if(mouseX < player.x+(player.width/2)){
// 			document.getElementById("player").style.transform = "rotateY(0deg)";
// 		}
// 		if(mouseX > player.x+(player.width/2)){
// 			document.getElementById("player").style.transform = "rotateY(180deg)";
// 		}
// 	});

// 	function loadUI(){
// 		var health = player.health;
// 		var healthBar = health *2;
// 		var charge = player.chargeTimer;
// 		var chargeBar = charge*10/3;
// 		if(healthBar < 0){
// 			healthBar = 0;
// 		}
// 		document.getElementById("score").innerHTML="<h2>Score: " + score + "</h2>";
// 		document.getElementById("currentHealth").innerHTML="<div id='healthBar' style='height: 30px; width: " + (200 - healthBar) + "px; left: " + healthBar + "px;'> </div>";
// 		document.getElementById("currentCharge").innerHTML="<div id='chargeBar' style='height: 30px; width: " + (200 - chargeBar) + "px; left: " + chargeBar + "px;'> </div>";
// 	}

// // SAVE GAME
// 	function saveGame(){
// 		$('#savebtn').click(function(){
// 		var URL = "{% url 'save' id={{game.id}}%}";
// 		var prompt = str(prompt("Please provide a name for your quest:"));
		
// 		$.ajax({
// 			url: URL,
// 			type: "GET",
// 			data: {'save_name': prompt, 'level': currentLevel, 'score':score }
// 		});

// 		// $.post(URL, data, function(response){
// 		// 	if(response === 'success'){ alert('!'); }
//   		//  	else{ alert('Error! Game not saved.'); }
//   		// });
// 		});
// 	}

// // RESTART METHOD 
	
// 	$("#restart").click(function(){
// 		soliders = [];
// 		currentLevel = 0;
// 		score = 0;
// 		$("#pause").toggle();
// 		$("#gameRegion").toggle();
// 	});

// 	function setLevel(){
// 		readyUpTimer = 120;
// 		wall = levels[currentLevel].wall;
// 		soldiers = levels[currentLevel].soldier;
// 		player.x = levels[currentLevel].spawnPoint.x;
// 		player.y = levels[currentLevel].spawnPoint.y;
// 		player.health = 100;
// 		currentLevel++;
// 	}

// 	function gameOverCheck(){
// 		if(player.health<1){
// 			return true;
// 		}
// 		return false;
// 	}

// 	function loop(){
// 		if(soldiers.length === 0){
// 			setLevel();
// 		}
// 		if(readyUpTimer > 0){
// 			if(readyUpTimer > 40){
// 				string="Ready?"
// 				document.getElementById("readyScreen").innerHTML=string;
// 			}
// 			else{
// 				string="Go!"
// 				document.getElementById("readyScreen").innerHTML=string;
// 			}
// 			document.getElementById("readyScreen").innerHTML=string;
// 			document.getElementById('player').style.left = player.x+"px";
// 			document.getElementById('player').style.top = player.y+"px";
// 			displayWalls();
// 			displaySoldiers();
// 			displayDead();
// 			loadUI();
// 			readyUpTimer--;
// 		}
// 		else{
// 			string=""
// 			document.getElementById("readyScreen").innerHTML=string;
// 			playerMove();
// 			projectileMove();
// 			displayWalls();
// 			soldierMove(player);
// 			for(var i = 0; i < soldiers.length; i++){
// 				npcCollision(soldiers[i], player);
// 			}
// 			for (var i = 0; i<soldiers.length; i++){
// 				enemyWallCollision(soldiers[i]);
// 			}
// 			npcTonpcCollision();
// 			displaySoldiers();
// 			displayDead();
// 			player.x += player.velocity.x;
// 			player.y += player.velocity.y;
// 			document.getElementById('player').style.left = player.x+"px";
// 			document.getElementById('player').style.top = player.y+"px";
// 			if(player.attackTimer !=0){
// 				player.attackTimer--;
// 				document.getElementById("playerImg").src = "static/gamePlay/img/archer_attack.png";
// 				player.chargeTimer=0;
// 			}
// 			else if(playerMouseDown == false && player.attackTimer == 0){
// 				document.getElementById("playerImg").src = "static/gamePlay/img/archer_idle.png";
// 			}
// 			if(playerMouseDown == true && player.attackTimer == 0){
// 				if(player.chargeTimer < 60){
// 					player.chargeTimer++;
// 				}
// 				if(player.chargeTimer > 5 && player.chargeTimer < 60){
// 					document.getElementById("playerImg").src = "static/gamePlay/img/archer_draw.png";
// 				}
// 				if(player.chargeTimer >= 60){
// 					document.getElementById("playerImg").src = "static/gamePlay/img/archer_fully_charged.png";
// 				}
// 			}
// 			if(player.damagedTimer > 0){
// 				player.takesDamage = false;
// 				player.damagedTimer--;
// 				document.getElementById("playerImg").src = "static/gamePlay/img/archer_idle_hit.png";
// 			}
// 			else{
// 				player.takesDamage = true;
			
// 			}
// 			if (player.health>0){
// 				// console.log("health " + player.health);
// 			}
// 			else {
// 				// console.log("dead");
// 			}
// 			wallCollision(player);
// 			borderCollision(player);
// 			for (var i = 0; i<soldiers.length; i++){
// 				wallCollision(soldiers[i]);
// 			}
// 			if (gameOverCheck()) {
// 				clearInterval(gameloop);
// 			}
// 			loadUI();
// 		}
// 	}
// 	var gameloop = setInterval(loop, (16+(2/3)));
	
// 	// PAUSE ON SPACE
// 	window.addEventListener('keypress',function(e){
// 		if(paused == false && e.keyCode == 32){
// 			e.preventDefault();
// 			clearInterval(gameloop);
// 			paused = true;
// 			$("#pause").toggle();
// 			$("#gameRegion").toggle();
// 		}
// 		else if (paused == true && e.keyCode == 32){
// 			e.preventDefault();
// 			gameloop = setInterval(loop, (16+(2/3)));
// 			paused = false;
// 			$("#pause").toggle();
// 			$("#gameRegion").toggle();
// 		}
// 	});
// });