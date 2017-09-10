### Introduction

A series of movetowards implementations.  Move towards are linear functions that move
a value towards a target outcome with a maximum delta. Often this delta is the current
frame time of a game.

### Installation

```language-shell
npm intall --save playcanvas-movetowards
```

### Usage

```language-javascript
import moveTowards from 'playcanvas-movetowards'
import moveTowardsAngle from 'playcanvas-movetowards/angle'
import moveTowardsVector from 'playcanvas-movetowards/vector'


...

MyObject.prototype.update = function(dt) {

    this.value = moveTowards(this.value, this.targetValue, dt * this.speed);
    
    this.angle = moveTowardsAngle(this.angle, this.targetAngle, dt * 100);
    
    this.entity.setLocalPosition(moveTowardsVector(this.entity.getLocalPosition(),
        this.targetPosition, dt * this.speed));
    
}
 

```

### Requirements

Requires PlayCanvas Engine to be running on the page.  Uses ES6/Babel/PlayCanvas template.
