


function Blob(){

  this.position = new THREE.Vector3();
  this.velocity = new THREE.Vector3();
  this.acceleration = new THREE.Vector3();

}

Blob.prototype.randomPosition = function(){
  
  this.position.x = Math.random();
  this.position.y = Math.random();
  this.position.z = Math.random();
  
};

Blob.prototype.initialize = function(){


}
