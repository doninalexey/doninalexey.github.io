(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.urText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,2,0,3).p("A2LiaMAsXAAAIAAE1MgsXAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,2,1).p("AgCABIAAgDIAFAAIAAACAADABIAAACIgFAAIAAgBAADAAIAAAB");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ArqBkIAAhHIAIAAIAAALQAJgMAMAAQAKAAAIAIQAIAHAAANQAAANgIAHQgIAIgKAAQgMAAgJgLIAAAbgArcApQgGAGAAAJQAAAJAGAGQAFAGAIAAQAJAAAFgGQAFgFAAgKQAAgKgFgFQgGgGgIAAQgHAAgGAGgAyYBkIAAhHIAIAAIAAALQAJgMAMAAQAKAAAIAIQAIAHAAANQAAANgIAHQgIAIgKAAQgMAAgJgLIAAAbgAyKApQgGAGAAAJQAAAJAGAGQAFAGAIAAQAJAAAFgGQAFgFAAgKQAAgKgFgFQgGgGgIAAQgHAAgGAGgAE9BgIAAgNIgsAAIgBANIgHAAIAAgUIAGAAQAHgNAAgYIAAgKIAnAAIAAAvIAIAAIAAAGIAAgGIAEABIAEgBIADgDIADgHIACglIAmAAIAAA2IgIAAIAAgvIgXAAIAAAWIgDAOQgBAEgDAEIgFADIgFABIgGgBIgBANgAEeAsQAAAUgGAMIAdAAIAAgoIgXAAgAzuBgIAAgNIgsAAIgBANIgHAAIAAgUIAGAAQAHgNAAgYIAAgKIAnAAIAAAvIAIAAIgBAUgA0NAsQAAAUgGAMIAdAAIAAgoIgXAAgAUJBMQgIgIAAgOIABgRIACgHIAEgGQACgEADgBIAIgEIAegHIACAHIgdAHQgIACgEAFQgEAFAAAHQAHgLAPAAQALAAAIAIQAHAHAAAMQAAALgIAIQgHAIgMAAQgNAAgHgIgAUPAqQgFAGAAAJQAAAJAFAFQAGAGAIAAQAIAAAFgGQAGgFAAgJQAAgJgGgGQgFgGgIAAQgIAAgGAGgASuBMQgIgJAAgLQAAgLAIgJQAIgIAMAAQAMAAAJAKIgFAFQgHgIgKAAQgIAAgFAGQgGAHAAAIQAAAIAGAHQAGAGAIAAQAJAAAHgIIAGAFQgKAKgMAAQgMAAgIgIgARoBMQgIgJAAgLQAAgLAIgJQAIgIAMAAQAMAAAIAIQAIAJAAALQAAALgIAJQgIAIgMAAQgMAAgIgIgARuApQgGAHAAAIQAAAIAGAHQAGAGAIAAQAJAAAFgGQAGgFAAgKQAAgIgGgHQgGgGgIAAQgJAAgFAGgALiBMQgIgJAAgLQAAgLAIgJQAIgIAMAAQAMAAAIAIQAIAJAAALQAAALgIAJQgIAIgMAAQgMAAgIgIgALoApQgGAHAAAIQAAAIAGAHQAGAGAIAAQAJAAAFgGQAGgFAAgKQAAgIgGgHQgGgGgIAAQgJAAgFAGgAIkBMQgIgJAAgLQAAgLAIgJQAIgIAMAAQAMAAAIAIQAIAJAAALQAAALgIAJQgIAIgMAAQgMAAgIgIgAIqApQgGAHAAAIQAAAIAGAHQAGAGAIAAQAJAAAFgGQAGgFAAgKQAAgIgGgHQgGgGgIAAQgJAAgFAGgAlzBMQgIgIAAgMQAAgLAHgJQAIgIALAAQAMAAAGAIQAHAIAAANIAAACIgrAAQABAJAFAEQAFAFAIAAQAKAAAHgHIAFAEQgKAKgMAAQgMAAgHgIgAltAoQgFAFgBAIIAjAAQgBgIgEgFQgFgFgHAAQgHAAgFAFgAnuBQQgGgFAAgIQAAgIAGgFQAHgEAKAAQAJAAAIACIAAgCQAAgHgEgEQgEgDgIAAQgIAAgJADIgCgGQAKgFAKAAQAMAAAFAGQAGAGAAAKIAAAhIgIAAIAAgIQgIAJgMAAQgIAAgGgEgAnnA7QgFADAAAFQAAAFAEADQAEADAGAAQAHAAAGgEQAFgFAAgGIAAgFQgJgCgHAAQgHAAgEADgApjBMIAEgGQAJAHAJAAQAFAAAFgCQADgCAAgFQAAgFgDgCQgEgCgGAAIgHAAIAAgHIAHAAQAFAAAEgCQADgDAAgEQAAgDgDgDQgEgCgFAAQgJAAgHAFIgEgFQAIgHANAAQAKAAAEAEQAFAEAAAGQAAAJgIAEQAKAEAAAJQAAAHgGAFQgGAEgKAAQgMAAgKgIgAxNBMQgIgJAAgLQAAgLAIgJQAIgIAMAAQAMAAAIAIQAIAJAAALQAAALgIAJQgIAIgMAAQgMAAgIgIgAxHApQgGAHAAAIQAAAIAGAHQAGAGAIAAQAJAAAFgGQAGgFAAgKQAAgIgGgHQgGgGgIAAQgJAAgFAGgAzZBMQgIgJAAgLQAAgLAIgJQAIgIAMAAQAMAAAIAIQAIAJAAALQAAALgIAJQgIAIgMAAQgMAAgIgIgAzTApQgGAHAAAIQAAAIAGAHQAGAGAIAAQAJAAAFgGQAGgFAAgKQAAgIgGgHQgGgGgIAAQgJAAgFAGgA1RBMIAEgGQAJAHAJAAQAFAAAFgCQADgCAAgFQAAgFgDgCQgEgCgGAAIgHAAIAAgHIAHAAQAFAAAEgCQADgDAAgEQAAgDgDgDQgEgCgFAAQgJAAgH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AAgKAEIgCgGQALgFAJAAQAMAAAFAGQAGAGAAAKIAAAhIgIAAIAAgIQgIAJgMAAQgIAAgGgFgAGDgwQgFADAAAFQAAAFAEACQAEADAGAAQAIAAAFgEQAFgDAAgHIAAgFQgHgCgJAAQgHAAgEADgAEAgeQgHgIgBgKIgMAAIAAAYIgIAAIAAg2IAIAAIAAAXIAMAAQACgLAHgGQAHgHALAAQAMAAAHAIQAHAIAAAMQAAAMgHAIQgIAIgLAAQgMAAgHgHgAEFhCQgFAGAAAJQAAAIAFAHQAGAGAIAAQAIAAAFgGQAFgGAAgJQAAgKgFgFQgFgGgIAAQgIAAgGAGgACfgYIABgHIAEABIAEgBQAAAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBIADgHIACglIAmAAIAAA2IgIAAIAAgvIgXAAIAAAWIgDAOIgEAHQgCADgDABIgFABgAhqgfQgIgJAAgLQAAgMAHgIQAIgIALAAQAMAAAGAIQAHAIAAAMIAAADIgrAAQABAIAFAFQAGAFAHAAQAKAAAHgIIAFAFQgJAKgNAAQgMAAgHgIgAhkhDQgFAFgBAIIAjAAQgBgIgEgFQgFgGgHAAQgHAAgFAGgAkSgjIAFgGQAGAGAGACQAGACAHAAQAIAAAEgDQAEgDAAgGQAAgGgEgDQgEgDgLgCQgNgDgGgFQgFgEAAgJQAAgJAHgGQAHgFAKAAQAOAAALAJIgEAGQgKgIgLAAQgHAAgFADQgEAEAAAFQAAAGAEADQAEADAMACQANADAFAFQAGAFAAAIQAAAJgHAGQgIAGgKAAQgQAAgOgMgAlggiQgLgLAAgQQAAgQALgKQAKgLARAAQAQAAAKALQALAKAAAQQAAAQgLALQgKALgRAAQgQAAgKgLgAlahSQgIAJAAAMQAAAMAIAKQAJAIAMAAQAMAAAIgIQAIgJAAgNQAAgNgIgIQgIgJgNAAQgMAAgIAJgArtgcQgGgEAAgIQAAgJAGgEQAHgFAKAAQAIAAAJADIAAgCQAAgHgEgEQgFgEgHAAQgHAAgKAEIgCgGQALgFAJAAQAMAAAFAGQAGAGAAAKIAAAhIgIAAIAAgIQgIAJgMAAQgIAAgGgFgArmgwQgFADAAAFQAAAFAEACQAEADAGAAQAIAAAFgEQAFgDAAgHIAAgFQgHgCgJAAQgHAAgEADgAtYgfQgIgJAAgLQAAgLAIgJQAIgIAMAAQAMAAAJAJIgFAGQgHgIgKAAQgIAAgFAGQgGAGAAAJQAAAIAGAHQAGAGAIAAQAJAAAHgIIAGAFQgKAKgMAAQgMAAgIgIgAwqgfQgIgJAAgLQAAgMAIgIQAIgIAMAAQAMAAAIAIQAIAJAAALQAAALgIAJQgIAIgMAAQgMAAgIgIgAwkhCQgGAGAAAJQAAAIAGAHQAGAGAIAAQAJAAAFgGQAGgGAAgJQAAgIgGgHQgGgGgIAAQgJAAgFAGgAUDgYIAAgUIgPAAIgPAUIgKAAIARgVQgGgCgEgEQgEgEAAgGQAAgIAFgFQAGgEAJAAIAZAAIAAA2gATphEQgDACAAAFQAAAFADADQAEACAGAAIAQAAIAAgUIgRAAQgFAAgEADgAQsgYIAAgrIggArIgIAAIAAg2IAIAAIAAAqIAggqIAIAAIAAA2gAPvgYIgTgZIgMAMIAAANIgIAAIAAg2IAIAAIAAAfIAegfIAKAAIgXAXIAXAfgAOqgYIAAgrIggArIgIAAIAAg2IAIAAIAAAqIAggqIAIAAIAAA2gAMygYIAAgrIggArIgIAAIAAg2IAIAAIAAAqIAggqIAIAAIAAA2gAKJgYIAAg2IAIAAIAAA2gAFggYIAAgXIgIAEIgKABQgHAAgGgEQgEgEAAgIIAAgUIAIAAIAAATQAAAFADADQACACAFAAQALAAAGgFIAAgYIAIAAIAAA2gACTgYIgTgZIgMAMIAAANIgIAAIAAg2IAIAAIAAAfIAegfIAKAAIgXAXIAXAfgABOgYIAAgrIggArIgIAAIAAg2IAIAAIAAAqIAggqIAIAAIAAA2gAgVgYIAAg2IAZAAQAHAAAGADQAFAEAAAGQAAAJgJAEQAMADAAAKQAAAHgFAEQgHAEgIAAgAgNgfIARAAQAHAAACgDQAEgCAAgEQAAgEgEgCQgEgDgGAAIgQAAgAgNg3IAQAAQAFAAADgCQADgCAAgFQAAgDgDgCQgCgCgGAAIgQAAgAiEgYIAAgYIgfAAIAAAYIgIAAIAAg2IAIAAIAAAXIAfAAIAAgXIAIAAIAAA2gAnfgYIAAhJIAJAAIAABJgAoYgYIAAgUIgPAAIgPAUIgKAAIARgVQgGgCgEgEQgEgEAAgGQAAgIAFgFQAGgEAJAAIAZAAIAAA2gAoyhEQgDACAAAFQAAAFADADQAEACAGAAIAQAAIAAgUIgRAAQgFAAgEADgApQgYIAAgYIgfAAIAAAYIgIAAIAAg2IAIAAIAAAXIAfAAIAAgXIAIAAIAAA2gAqMgYIAAgYIgfAAIAAAYIgIAAIAAg2IAIAAIAAAXIAfAAIAAgXIAIAAIAAA2gAsUgYIAAgvIgTAAIAAgHIAvAAIAAAHIgUAAIAAAvgAt7gYIAAgrIggArIgIAAIAAg2IAIAAIAAAqIAggqIAIAAIAAA2gAxEgYIgTgZIgMAMIAAANIgIAAIAAg2IAIAAIAAAfIAegfIAKAAIgXAXIAXAfgAyJgYIAAgrIggArIgIAAIAAg2IAIAAIAAAqIAggqIAIAAIAAA2gAz/gYIAAhJIAfAAQANAAAGAGQAEAFAAAHQAAAMgLAFQAPAFAAANQAAAJgHAFQgHAGgMAAgAz3ggIAYAAQAJAAAEgDQAFgEAAgGQAAgGgFgDQgFgDgJAAIgXAAgAz3hBIAVAAQAIAAAFgDQAEgDAAgHQAAgGgEgDQgEgDgIAAIgWAAgAKIhaIAAgJIAKAAIAAAJg");
	this.shape_2.setTransform(-1.9,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-142.9,-16.4,286,32.9), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AINEHIAIgcIAYAAIgHAcgAFXEHIAyi+IBHAAQAcAAAQAMQAPAMAAAVQAAASgNAOQgOAOgVADQAiALAAAdQAAAZgVAPQgVAQgmAAgAFwD0IBAAAQAZAAAQgKQAPgLAAgRQAAgOgNgIQgMgHgTAAIg6AAgAGHCeIA2AAQAaAAAPgKQAPgLAAgRQAAgNgKgHQgKgHgSAAIg2AAgAClEHIAzi+IA7AAQAlAAARASQAOAOAAAVQAAAhgZASQgbATgqAAIgtAAIgSBDgADSCxIAoAAQAiAAASgNQATgNAAgXQAAgOgJgJQgMgMgaAAIgqAAgAgLEHIAyi+ICIAAIgGAUIhyAAIgRBBIBlAAIgFATIhmAAIgSBDIB0AAIgFATgAi9EHIAzi+IA8AAQAkAAASASQANAOAAAVQABAhgaASQgaATgqAAIgtAAIgSBDgAiQCxIApAAQAiAAASgNQASgNAAgXQAAgPgIgIQgMgMgaAAIgqAAgAluEHIAzi+ICIAAIgFAUIhzAAIgRBBIBmAAIgGATIhlAAIgSBDIB0AAIgGATgAm0EHIAtiqIhpAAIguCqIgVAAIAzi+ICUAAIgzC+gAivgbIALgqIiYAAIgNAqIgTAAIARg+IASAAQAogsAXhVIAMgpIB5AAIgtCqIAZAAIgUA+gAjqjKQgJAjgOAeQgOAegSASIBpAAIApiWIhQAAgAE/hKIANgRQAJAFAOAAQAWAAAXgcIgtiRIAYAAIAlB8IBch8IAaAAIhyCWQggArgiAAQgYAAgLgIgAoQhMQgSgIgKgQIAQgMQATAbAkAAQAWAAANgLQAOgLAAgPQAAgRgNgIQgMgJgUAAIgRAAIAFgSIATAAQAaAAAPgKQAQgLAAgRQAAgOgLgIQgMgJgQAAQgbAAgXATIgMgOQAbgYAkAAQAaAAARANQARANABAWQAAAUgPANQgPANgZAEQAOAEAMAMQAKALAAAPQAAAYgVAQQgVAQgfAAQgZAAgRgKgAN8hFIgJgyIhoAAIgjAyIgXAAICJi/IAUAAIAjC/gANviLIgRhhIhFBhIBWAAgAJ9hFIAtiqIhAAAIAGgUICVAAIgFAUIhAAAIgtCqgAD6hFIApiaIhgBmIgBAAIgqhmIgpCaIgVAAIAzi+IAUAAIApBoIBhhoIAXAAIgyC+gAAQhFIAqicIiaCcIgUAAIAyi+IAWAAIgqCcICaicIAUAAIgzC+gArVhFIAyi+ICIAAIgFAUIhzAAIgRBAIBnAAIgGAUIhmAAIgSBCIB0AAIgGAUgAuRhFIA0i+ICDAAIgEAUIhwAAIgPA6IA1AAQAdAAAQAMQAQANAAAWQABAggZAQQgaARgrAAgAt2hZIA0AAQAfAAARgLQARgMAAgVQABgOgLgIQgLgIgVAAIg3AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-91.3,-26.3,182.7,52.6), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-127.5,-28.4,255.1,56.9), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiMCMIgtgsIiUAAQgjAAgXgEQgfgIgQgRQgZgXAAgrIAAiBQABgJAFgDQAHgFAIAAICkAAQAkAAAXAFQAdAFARARQAZAYAAAtIAAB7IAkApQAFAEAAAIQAAAGgHAHQgHAGgHAAIgCAAQgGAAgEgGgAmlABQABAeANAOIAFAEQAQAMAfAAIClAAIAAhvQAAgdgPgRIgEgDQgPgMgiAAIijAAgAFwBeIAAACQgugCgVgOQgQgKgDgSIAAgDQgBgKAIgEQAEgEAIAAQAIAAAFADQAFAEABAGIADAFQAFAFALAFIAbAEIBZAAQAxAAANgJQAMgFAAgYIAAgBQAAgSgIgGQgKgJghAAIh3AAQgoAAgSgOQgQgPgBgiIAAgOQABgeAUgOQAbgPBDAAIA/AAQA2AAAWAMQARAKAEAVIAAADQAAAKgGADQgFAHgJAAQgIAAgFgFQgEgDgBgHIgDgCQgHgMgNgCQgMgDgdAAIhCAAQgpAAgNAHQgMAFAAAWIAAAHQgBAPAKAHQAKAHAbAAIBkAAQAzAAATAKQAdAQAAAsQAAAtgmAQQgWAIgwAAgAoyBcQgHgHAAgLIAAjIQAAgJAHgFQAEgFAJAAQAJAAAGAFQAFAFABAJIAADIQgBALgFAHQgGAEgJAAQgJAAgEgEgAAoBeQg7AAgdgPQgogWAAg5IAAgyQAAg6AogWQAdgPA7AAIA2AAQA7AAAeAPQAoAWAAA6IAAAyQAAA5goAWQgeAPg7AAgAgchlQgUAPAAAmIAAAuQAAAkAUAPQATAOAjAAIBQAAQAmAAASgOQAVgPAAgkIAAguQAAgmgVgPQgSgMgmAAIhQAAQgjAAgTAMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-57,-14.6,114,29.3), null);


(lib.bgImg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E3B47D").ss(2,2,0,3).p("AgcgtIArAkAAUgFIAHAFIgHAHAAJAPIglAg");
	this.shape.setTransform(12,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3B47D").s().p("ACDAKIkQAAIAAgTIEWAAIAFAAIAAAEIAAAHIAAAEIAAAEg");
	this.shape_1.setTransform(-0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(-14.3,-6,30.5,12.1), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(46.6,0,1,1,0,0,0,0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:49},3,cjs.Ease.get(1)).to({x:46.6},2).wait(3).to({x:49},3,cjs.Ease.get(1)).to({x:46.6},2).wait(1));

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhiA/IAAgWIhPAAIAAhlIASAAIAABUIAwAAIAAhUIASAAIAABUIANAAIgDAngAmXAaIAKgMQAOANAUAAQAIAAAGgEQAGgEAAgHQAAgOgXAAIgMAAIAAgPIAMAAQAVAAAAgPQAAgHgGgDQgFgEgJAAQgQAAgMALIgKgMQAQgPAXAAQAQAAAKAIQAKAIAAALQAAARgRAHQAUAHAAARQAAAMgKAJQgLAIgRAAQgaAAgSgQgAGGApIAAhJIg0BJIgQAAIAAhlIARAAIAABKIA0hKIARAAIAABlgAD7ApIAAhVIghAAIAAgQIBTAAIAAAQIggAAIAABVgACyApIAAhJIgzBJIgRAAIAAhlIASAAIAABKIAzhKIARAAIAABlgAA9ApIAAgqIgxAAIAAAqIgRAAIAAhlIARAAIAAAqIAxAAIAAgqIASAAIAABlgAg8ApIAAhlIASAAIAABlgAjgApIgKgZIgwAAIgLAZIgSAAIAthmIAQAAIAtBmgAjxAAIgRgnIgSAnIAjAAg");
	this.shape.setTransform(-19.2,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15));

	// Слой_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AsKDDIAAmFIYVAAIAAGFg");
	this.shape_1.setTransform(0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.7,-19.5,155.8,39);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// urText
	this.instance = new lib.urText();
	this.instance.parent = this;
	this.instance.setTransform(0,275.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(101));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-253,1.009,1.009);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(101));

	// btn
	this.instance_2 = new lib.btn("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.7,210.5,1,1,0,0,0,-0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(69).to({mode:"synched",loop:false},0).wait(32));

	// t2
	this.instance_3 = new lib.t2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-184.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50).to({_off:false},0).to({alpha:1},10).wait(30).to({alpha:0},10).wait(1));

	// t1
	this.instance_4 = new lib.t1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-182);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},10).wait(30).to({alpha:0},10).to({_off:true},1).wait(50));

	// bgImg1
	this.instance_5 = new lib.bgImg1();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// banner
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,299,302,602);
// library properties:
lib.properties = {
	id: 'B12536D93F55493D883A9CFDBC1C5E1B',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg.jpg", id:"bgImg"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B12536D93F55493D883A9CFDBC1C5E1B'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;