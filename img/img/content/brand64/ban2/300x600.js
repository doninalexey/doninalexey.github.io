(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bottle = function() {
	this.initialize(img.bottle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,370);


(lib.flowers = function() {
	this.initialize(img.flowers);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,583,593);// helper functions:

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


(lib.HW = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.HW, new cjs.Rectangle(-150,-300,300,600), null);


(lib.flowers_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flowers();
	this.instance.parent = this;
	this.instance.setTransform(-291.5,-296.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.flowers_1, new cjs.Rectangle(-291.5,-296.5,583,593), null);


(lib.bottle_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottle();
	this.instance.parent = this;
	this.instance.setTransform(-50,-185);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bottle_1, new cjs.Rectangle(-50,-185,101,370), null);


(lib.bg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E9BAC4","#FEFAF9"],[0.004,1],0,298.1,0,-298).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C49749","#D0AC6F","#DDC18E","#D6B57C","#C49749"],[0.004,0.145,0.451,0.839,1],-1.5,4.5,2.7,-4.6).s().p("AgiAhQgOgOAAgUQAAgTAOgNQAPgNAWAAQAPAAALAEIALAFIACAAIACgBIACABIgKATIgCgCIABgCIgBgBQgDgDgHgEQgLgEgLgBQgOABgJAIQgMAKAAAQQAAAQAMAKQAKAJARAAQAIAAAKgFQAHgEAEgEIAAgDIAAgBIACgCIAMARIgCABQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAAAgBAAIgBABQgRANgWAAQgXAAgPgOg");
	this.shape.setTransform(-75.1,26.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C49749","#D1AE72","#DDC18E","#D1AE72","#C49749"],[0,0.224,0.549,0.851,1],-2.9,5.6,3,-5.5).s().p("AAbAuIAAgCQABAAAAAAQABgBAAAAQAAgBABAAQAAgBAAgBIAAgkIg7AAIAAAkQAAABAAABQABAAAAABQAAAAABABQAAAAABAAIAAACIgUAAIAAgCQABAAABAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAAhPQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAgBAAIAAgCIAUAAIAAACQgBAAAAAAQgBABAAAAQAAABgBAAQAAABAAABIAAAhIA7AAIAAghQAAgBAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAIAAgCIAUAAIAAACQgBAAgBAAQAAABAAAAQgBABAAAAQAAABAAABIAABPQAAABAAABQAAAAABABQAAAAAAABQABAAABAAIAAACg");
	this.shape_1.setTransform(-56,26.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C49749","#CFAB76","#DCC4A1","#CFAC78","#C49749"],[0,0.231,0.569,0.835,1],-2,6.5,3.9,-2.5).s().p("AAdAuIAAgCQAAAAABAAQAAAAABgBQAAAAAAAAQAAgBAAAAIgIgVIgvAAIgFAPIgDAGQAAAAABABQAAAAAAAAQAAABABAAQAAAAAAAAIAAACIgTAAIAAgCIADgBIAEgHIAkhRIAOAAIAkBQQADAJADAAIAAACgAgSAKIAkAAIgSgpg");
	this.shape_2.setTransform(-37.6,26.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#C49749","#CFAC7D","#DCC4A1","#D6B891","#C49749"],[0.004,0.196,0.427,0.761,1],-5.3,4.5,5.3,-4.4).s().p("AAfAuIAAgCQAEAAAAgEIAAhFIgkBKIgjhKIAABFQAAABAAABQAAABABAAQAAABAAAAQABAAABAAIAAACIgSAAIAAgCQAAAAABAAQABAAAAgBQAAAAABgBQAAgBAAgBIAAhPQAAgBAAAAQgBgBAAgBQAAAAgBAAQgBgBAAAAIAAgCIAUAAIAfA+IAeg+IAWAAIAAACQgDAAAAAEIAABPQAAAEADAAIAAACg");
	this.shape_3.setTransform(-18.5,26);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#BD8F3F","#C49752","#DCC4A1","#C49641"],[0.004,0.271,0.427,0.69],-5.8,2.4,7,-1.4).s().p("AAAAjIgqAfIAQgyIgrgfIA1AAIAQgyIAQAyIA2AAIgsAfIARAyg");
	this.shape_4.setTransform(0.7,49.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#C49749","#D4B48B","#DCC4A1","#CEAA7B","#C49749"],[0,0.149,0.427,0.812,1],-3,-0.5,5.3,4.3).s().p("AAcAuIAAgCQABAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAIgDgGIgGgPIgvAAIgFAPIgCAGQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAIAAACIgUAAIABgCIACgBIADgHIAlhRIANAAIAkBQIAEAIQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABAAIAAACgAgSAKIAjAAIgRgpg");
	this.shape_5.setTransform(17.7,26.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#C49749","#D5B78E","#DCC4A1","#DCC4A1","#D6B991","#C49749"],[0,0.165,0.341,0.616,0.835,1],-4.3,0,4.4,0).s().p("AgrAuIAAgCQABAAABAAQAAgBABAAQAAgBAAAAQAAgBAAgBIAAhPQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAgBAAIAAgCIA0AAIAQABQATAFAAATQAAASgRAFQgGADgMAAIgiAAIAAAiQAAABAAABQAAAAAAABQABAAAAABQABAAAAAAIAAACgAgZgFIAkAAQARAAAAgPQAAgOgRAAIgkAAg");
	this.shape_6.setTransform(1.2,26.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#C49749","#D3B07D","#DCC4A1","#CFAC78","#C49749"],[0,0.118,0.569,0.902,1],-2.7,-3.9,4.1,3.7).s().p("AggAiQgPgNAAgVQAAgTAOgOQAOgNAVAAQARAAANAGIALAFIACAAIACABIgKAQIgCgBIAAgBQAAgEgJgFQgLgFgNgBQgQAAgKALQgJAJAAAPQAAAQAMAKQAJAJANAAQAVAAANgKIAAgOIgTAAQgGAAAAAEIgCAAIAAgRIACAAQAAACAGAAIAgAAIAAAeQgVARgXAAQgVAAgPgNg");
	this.shape_7.setTransform(35.3,26.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#C49749","#D3B177","#DDC18E","#D1AE72","#C49749"],[0.012,0.086,0.447,0.882,1],-3.1,-5.4,3.2,5.4).s().p("AAhAuIhAhNIAABHQAAAEAEAAIAAACIgTAAIAAgCQABAAABAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAAhPQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAgBAAIAAgCIAUAAIA5BEIABAAIAAg+QAAgBAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAIAAgCIASAAIAAACQgBAAgBAAQAAABAAAAQgBABAAAAQAAABAAABIAABVg");
	this.shape_8.setTransform(54.6,26.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#C49749","#D0AC6F","#DDC18E","#D6B57C","#C49749"],[0,0.145,0.424,0.839,1],-2.1,-5.3,1.8,5.5).s().p("AgoAuIAAgCQADAAAAgEIAAhPQAAgEgDAAIAAgCIBEAAIAJAAIAAAQIgCAAQAAgEgHAAIgzAAIAAAbIAhAAQAHAAAAgEIACAAIAAATIgCAAQAAgEgGAAIgiAAIAAAeIA3AAIAFgBQABAAAAAAQABAAAAgBQAAAAAAgBQAAgBAAAAIACAAIAAAPg");
	this.shape_9.setTransform(73.4,26);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#CFAC7D","#DCC4A1","#CEAB7C"],[0.125,0.4,0.78],-0.9,-1,2.4,1.4).s().p("AAIAZIAAgLIgdAAIAAgHIAcgfIAJAAIAAAfIAGAAIAAAHIgGAAIAAALgAgMAHIAUAAIAAgWg");
	this.shape_10.setTransform(53,-26.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#CFAC7D","#DCC4A1","#CEAB7C"],[0.125,0.4,0.78],-2.4,-1.6,1,0.4).s().p("AgMAZIAWgpIgeAAIAAgIIApAAIAAAFIgXAsg");
	this.shape_11.setTransform(47.1,-26.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#CFAC7D","#DCC4A1","#CEAB7C"],[0.125,0.4,0.78],-2,-1.6,2.1,1.6).s().p("AgUAKIAJAAQAAAIALAAQAMAAAAgJQAAgGgLAAIgHAAIAAgHIAGAAQALAAAAgHQAAgGgLAAQgLAAAAAGIgIAAQgBgFAEgDQAFgGALAAQAUAAAAAOQAAAHgGADQAHACAAAJQABAHgGAEQgGAFgKAAQgTAAgBgQg");
	this.shape_12.setTransform(59.5,-26.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#CFAA6C","#DCC4A1"],[0.055,0.804],-0.7,0,0.8,0).s().p("AgHAPQAAgIAHABQAIgBAAAIQAAAIgIAAQgHAAAAgIgAgGgBQAAgHAGAAQAGAAABAHQgBAFgGAAQgGAAAAgFgAgEgQQgBgGAFAAQAFAAABAGQgBAFgFAAQgFAAABgFg");
	this.shape_13.setTransform(0.7,-42.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#DCC4A1","#CFAB75"],[0.18,0.937],-4.3,0,4.4,0).s().p("AAdAkQgEgBgCgDQgBgEABgDQACgEADgBQADgCADABQAJAEgDAIQgBAEgEABIgDABIgDgBgAAcAOQgDgDAAgEQAAgDADgDQACgCAEAAQAFAAACACQADADgBADQABAEgDADQgCACgFAAQgEAAgCgCgAAVgFQgDgDAAgDQAAgEADgCQACgDADAAQAEAAADADQACACAAAEQAAAEgCACQgDADgEAAQgDAAgCgDgAAEgYQgBgIAJAAQAIAAAAAIQAAAIgIAAQgJAAABgIgAgMgdQAAgHAHAAQAGAAAAAHQAAAHgGAAQgHAAAAgHgAgdgeQABgGAGAAQAGAAAAAGQAAAGgGAAQgGAAgBgGgAgqgeQAAgFAEAAQAGAAAAAFQAAAFgGAAQgEAAAAgFg");
	this.shape_14.setTransform(7.1,-42.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#DDC18E","#DCC4A1","#CFAB75","#C49749"],[0.129,0.471,0.824,1],-3.9,0,3.9,0).s().p("AATArQgCgDAAgDQAAgJAIAAQAJAAAAAJQAAADgCADQgDACgEABQgDgBgDgCgAAWAVQgCgDAAgEQAAgKAJAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAAPgBQgCgDAAgDQAAgEACgDQADgDAEABQAEgBACADQADADAAAEQAAADgDADQgCABgEABQgEgBgDgBgAABgRQgCgDAAgEQAAgDACgDQACgCAEAAQADAAADACQACADAAADQAAAEgCADQgDACgDAAQgEAAgCgCgAgRgbQgCgCAAgEQAAgDACgCQADgCADgBQAIABAAAHQAAAJgIgBQgDAAgDgCgAgkggQgCgCAAgDQAAgDACgCQACgDADABQADgBADADQACACAAADQAAADgCACQgDACgDAAQgDAAgCgCg");
	this.shape_15.setTransform(15.3,-40.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#CFAC7D","#DCC4A1","#CEAB7C"],[0.125,0.4,0.78],-3,-1.2,3.1,1.2).s().p("AARAZIgggkIAAAkIgJAAIAAgxIAKAAIAfAjIAAgjIAJAAIAAAxg");
	this.shape_16.setTransform(32.2,-26.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#CFAC7D","#DCC4A1","#CEAB7C"],[0.125,0.4,0.78],-1.3,-0.9,1.9,0.7).s().p("AABAZIAAglIgJAAIAAgFQAIgCAEgFIAFAAIAAAxg");
	this.shape_17.setTransform(41.4,-26.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#CFAC7D","#DCC4A1","#CEAB7C"],[0.125,0.4,0.78],-2.6,-0.8,2.7,0.8).s().p("AgVAZIAAgxIAqAAIAAAIIghAAIAAAMIAcAAIAAAHIgcAAIAAANIAiAAIAAAJg");
	this.shape_18.setTransform(24.9,-26.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#CFAC7D","#DCC4A1","#CEAB7C"],[0.125,0.4,0.78],-2.8,1.1,2.6,-0.4).s().p("AgWAfIAAgwIAsAAIAAAIIgiAAIAAALIAdAAIAAAIIgdAAIAAANIAjAAIAAAIgAgHgUIAHgLIAJAAIgKALg");
	this.shape_19.setTransform(-23.3,-27.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#CFAC7D","#DCC4A1","#CEAB7C"],[0.125,0.4,0.78],-3.2,0.8,2.4,-1.2).s().p("AgZAZIAAgxIAYAAQAbAAAAAYQAAAZgbAAgAgPAQIAKAAQALAAAFgEQAFgDAAgJQAAgIgFgEQgFgEgLAAIgKAAg");
	this.shape_20.setTransform(-30.8,-26.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#C49749","#C49960","#DCC4A1","#DDC18E","#C49960","#C49749"],[0,0.231,0.482,0.659,0.906,1],-14.3,0,14.3,0).s().p("AiIAgQgGAAAAgFQAAgGAGAAIESAAQAFAAAAAGQAAAFgFAAgAiIgUQgGAAAAgFQAAgGAGAAIESAAQAFAAAAAGQAAAFgFAAg");
	this.shape_21.setTransform(0.7,-26.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#CFAA6C","#DCC4A1","#DCC4A1","#CFAB75"],[0.004,0.4,0.655,1],-16,0,16,0).s().p("ACUAfIABgDQADgKAAgKQAAgPgLgKQgLgKgPgCIgBAAQgBgGgCgCQAYACANAOQAUATgMAlIgBADQgCgFgFgCgAiaAjQgNglAUgTQAOgOAXgCQgDAEAAAEIAAAAQgQACgLAKQgLAKAAAPQAAAMADAIIABADQgFACgBAFg");
	this.shape_22.setTransform(0.7,-39.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#C49749","#CFAB75","#DCC4A1","#DDC18E"],[0.004,0.208,0.71,0.996],-3.9,0,3.9,0).s().p("AgfArQgCgDAAgDQAAgJAIAAQAJAAAAAJQAAADgCADQgDACgEABQgDgBgDgCgAgjAVQgDgDAAgEQAAgEADgDQACgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgCgDgAgbgBQgDgDAAgDQAAgEADgDQADgDADABQAJgBAAAKQAAAIgJAAQgDgBgDgBgAgMgRQgCgDAAgEQAAgDACgDQADgCADAAQAEAAACACQABADAAADQAAAEgBADQgCACgEAAQgDAAgDgCgAAEghQAAgHAIgBQAIABAAAHQAAAJgIgBQgIABAAgJgAAYglQAAgHAIAAQADgBACADQACACAAADQAAADgCACQgCACgDAAQgIABAAgIg");
	this.shape_23.setTransform(-13.9,-40.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#CFAA6C","#DCC4A1","#DCC4A1","#CFAB75"],[0.004,0.263,0.71,0.953],-8.4,0,8.4,0).s().p("ABFAfQgBgDAEgLQAIgRgIgLQgFgIgLgCQgGgCgMAAIgEAAQgMgBgEgCQAGASgGASQgEgBgFABQAJgRgLgcIAEAAIAGACQAIACAKAAIABAAQARABAGABQANAEAHAKQAJANgIAUQgEALAAAHQgCgCgFgDgAhPASQgIgTAJgOQAHgKAOgEQAFgBARgBIABAAQARAAAIgEIADAAQgKAdAIAQQgFgBgDABQgHgSAHgSQgEACgNABIgEAAQgMAAgGACQgLACgFAIQgHALAHARQADAHAAAHQgFADgCACQABgHgFgLg");
	this.shape_24.setTransform(0.7,-41.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#CFAA6C","#DCC4A1","#CFAB75"],[0.004,0.369,0.89],-4.3,0,4.4,0).s().p("AgiAkQgDgBgCgEQgCgIAHgEQAEgBADACQADABACAEQABADgBAEQgCADgEABIgDABIgDgBgAgoAOQgDgDAAgEQAAgDADgDQADgCADAAQAEAAADACQACADAAADQAAAEgCADQgDACgEAAQgDAAgDgCgAgggFQgCgDgBgDQABgEACgCQACgDAEAAQAEAAADADQACACAAAEQAAAEgCACQgDADgEAAQgEAAgCgDgAgTgYQAAgIAIAAQAEAAACACQACACABAEQAAAIgJAAQgIAAAAgIgAABgYQgBgCAAgDQAAgHAGAAQAHAAAAAHQAAAHgHAAQgDAAgCgCgAAQgeQABgGAGAAQAHAAgBAGQABAGgHAAQgGAAgBgGgAAhgeQAAgFAFAAQAFAAAAAFQAAAFgFAAQgFAAAAgFg");
	this.shape_25.setTransform(-5.7,-42.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#CFAC7D","#DCC4A1","#CEAB7C"],[0.125,0.4,0.78],-3.1,1.5,3.1,-1.5).s().p("AASAZIgigkIAAAkIgJAAIAAgxIAKAAIAgAjIAAgjIAKAAIAAAxg");
	this.shape_26.setTransform(-38.9,-26.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#CFAC7D","#DCC4A1","#CEAB7C"],[0.125,0.4,0.78],-2.5,1.5,2.6,-1.4).s().p("AgXARQgFgHgBgKQAAgKAHgHQAIgIAOAAQAPAAAIAIQAGAHABAKQAAAKgHAHQgHAJgQAAQgPAAgIgJgAgTAAQAAASATAAQAUAAAAgSQAAgRgUAAQgTAAAAARg");
	this.shape_27.setTransform(-47.1,-26.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#C49749","#CFAC7D","#DCC4A1","#CEAB7C"],[0,0.125,0.4,0.78],-3.2,1.1,2.1,-2.6).s().p("AgWAZIAAgxIAtAAIAAAIIgjAAIAAAMIAdAAIAAAHIgdAAIAAAWg");
	this.shape_28.setTransform(-54.5,-26.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#C49749","#DABD8C","#DDC18E","#C49752"],[0.098,0.451,0.549,0.851],-18,0,18.1,0).s().p("AiGCbIAAggIEOAAIAAAggAAkCFQgCADAAADQAAADACADQADADAEAAQADAAADgDQACgDAAgDQAAgDgCgDQgDgDgDABQgEgBgDADgAgwCFQgCADAAADQAAADACADQADADAEAAQADAAADgDQADgDAAgDQAAgDgDgDQgDgDgDABQgEgBgDADgAA/CLIARAIIAQgIIgQgIgAhfCLIARAIIAQgIIgQgIgABtCRIATAAIAAgMIgTAAgAgRCRIAjAAIAAgMIgjAAgAh+CRIASAAIAAgMIgSAAgAiJBmIgHgKQgPgCABgSIgLgLQgEgCgEAAIgDAAIACgCQADgEAEAAQAFABAGAFIAJAKIADgFQACgBAAgDQAAgEgCgCQAAAAAAAAQgBAAAAAAQAAAAABAAQAAgBABAAIACABQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQACADABADIACAAQADABACACQAEAEgBAHIAFAFQACAGgCAEQAAAAAAABQAAAAAAAAQgBAAAAAAQAAgBAAAAQgDgFgFAAQgHgBAAADQAAACAEADQAFAEAFAAQAHAAAEgFQADgGgBgDQgGAAgEgHQgDgJAFgEQADgBADACQADABACAEQAEAIgDAEIAEAEQAGAEAIgDQALgEgGgUQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgCADIgCAFQgDAGgCAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQgBgBAAgBIgCgGQgJgCACgLQgFgFABgEQAAgCAHABQAEABAGACQAAgEgBgBIgJgJQgEgGACgBQADgDAFABIAEgEIABAAQACgBADABQAEgDAEAAQADAAAAAHQABADgDAKIACAFIAFgKQAEgEADAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAABQACAEgBAEQAIAEgEAJIADAHQAAADgBACQgBADgJgFIgHgEIgEACIAFAIQAHAJAHAAQAJAAADgEQAFgDAAgFQgHgDgBgJQgBgLAIgBQADAAADADQAEADAAAEQACAJgGAEIADAFQAFAFAIAAQAIgBAGgFQAHgEAAgOQgDgCgCABIgHAHQgHAGgFgBQgBAAgBgFQgBgFABgDQgGgHAFgIIgBgFQgBgFACgCQABgCAHADIALAJQABgEgBgCQgFgHgBgFQgDgIAEAAQAEgCAGACQAEgCABAAQADAAAEACQAFgCAFACQADAAgDAIQgBAFgFAHIAAAGIAMgJQAGgDACACQACADgCAJQAFAIgHAHQABADgBAFQgBAFgBAAQgEABgHgGQgFgHgCAAIgGABIABAIQACAHAEADQAGAFAIABQAOABADgLQgGgEABgJQABgEADgDQADgDADAAQAJABgBALQgBAJgIADIABADQABADADACIADACQAEACAFAAQALgBAIgQQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAAAIgIAEQgIAFgCgDQgBgCABgDIACgHQgDgKAHgDQAAgEABgEQAAgBABgBQAAAAAAgBQABAAAAgBQAAAAABAAQADAAADAEQADADACAHIACgFIgCgNQABgHACAAQAEAAAEADIAGAAIAFAEQAEgBAEADQACACgFAFIgJAJIgBAFIAKgDQAHgBAAACQABAEgFAFQACALgJACIgBAGQgBABAAABQgBABAAAAQAAABgBAAQAAAAAAAAQgDAAgDgGIgDgIIgFAAIgBAKQAAAMAHACQAMAFAGgKIgBgDQgBgEADgFQABgEAEgBQADgCACABQAGAEgEAJQgEAHgGAAIAAADIADAGQADAFAIAAQAEAAAFgEQAEgDAAgCQAAgDgHABQgFAAgCAFQAAAAgBABQAAAAAAAAQAAAAAAAAQAAgBgBAAIgBgDQAAgDABgEIAFgFIAAgEQABgEACgDQADgDAFAAIACgGQADgEAEAAQAAAAAAABQABAAAAAAQAAAAAAAAQgBAAAAAAQgCACABAEQAAACABACIADAFIAKgKQAFgFAGgBQAGABACAFQgEgBgGADIgMALQACASgPADIgHAJgACMBOIADACIACACIgCAGIADAAIAGgEQADgDAAgLIgFAHIgCABQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAgAiaBMQACAGACACQAEAEAEAAQABAAgDgGIAFgEIgEgBIgEACIgCgCIgFgHgABNAvIgCABIAFACIADACIAAAFQAAAAAAABQAAABAAAAQABABAAAAQAAAAAAAAQACABAEgHIAEAAIAGACQgBgDgEgCIgDgCQABgBABgFIABgJIgBgEIgHAMIgCAEIgDAAIgCAAIgDABgAhZA2IACAEQABAAAAABQABAAAAABQABAAAAAAQABAAAAAAQABAAAAgIIADgCIAGgCQgDgCgEAAIgEABIgCgFQgBgEgDgFIgDgDIAAANIACAGIgDACQgBAAAAAAQgBAAAAABQAAAAgBABQAAAAAAABIgBACIAFgCIACAAIACAAgAgBAVIgCAJIAAAEIgEABQgDABgCABIgBACIAGABIAEABIABADQACAFAAAAQACgBACgHIAEgBIAHgBQgCgDgFgBIgEgBIAAgEIgCgJIgCgFIgBAFgAiTBPIAAAAgAgRg5QgIgHgCgJQAQgEALABQANgBAPAEQgCAJgIAHQgIAGgKAAQgJAAgIgGgAAGhWIAAgXQAJADAHAGQAGAIABAJQgMgDgLAAgAgUhkQAGgGAKgDIAAgSIgPAFIAAgUIAPAFIgFgRIATAAIgEARIAOgFIAAAUIgOgFIAAASIgKAAIAAAXIgYADQABgJAHgIg");
	this.shape_29.setTransform(0.7,-40.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1A171B").s().p("AOWBcQgbgfAAgrQAAgqAbgfQAbgeAmAAQAmAAAaAeQAbAfAAAqQAAArgbAfQgaAegmAAQgmAAgbgegAOwgsQgOAZAAAlQAAAnAOAYQAPAZAYAAQAYAAAOgZQAPgYAAgnQAAglgPgZQgOgYgYAAQgYAAgPAYgAvjBcQgagfAAgrQAAgqAagfQAbgeAmAAQAmAAAaAeQAbAfAAAqQAAArgbAfQgaAegmAAQgmAAgbgegAvIgsQgOAYAAAmQAAAnAOAYQAOAZAYAAQAYAAAOgZQAOgYAAgnQAAglgOgZQgOgYgYAAQgYAAgOAYgAiCBbQgZgdAAgsQAAgqAbgfQAbgfAmAAQAdAAAYATQAKgBAJgEQgEAMgUAqQgEgRgIgNQgOgUgWAAQgYAAgOAYQgOAYAAAmQAAAnAOAYQAOAYAYAAQAXAAANgUQALgQACgWQAQAGgCATQAAAUgRAOQgSAPgeAAQgnAAgagegATkB3IhkiWIAACCIAVASIhAAAIAVgSIAAihIgVgTIArAAQAHAAAEAGIBMBwIAAhjIgVgTIBAAAIgVATIAACzQAAADgEABIgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAgAJcB3IhkiWIAACCIAVASIhAAAIAVgSIAAihIgVgTIArAAQAHAAAEAGIBMBwIAAhjIgVgTIBAAAIgVATIAACzQAAADgEABIgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAgAlzBsQgPgNAAgUQAAgQANgOQAIgKANgHQgPgXAAgNQAAgRAPgLQAMgKAPAAQATAAALAKQAKAJAAALQAAAPgNAKQgHAFgOAGIgFgHQAQgLAAgRQAAgIgEgGQgFgHgJAAQgHAAgFAGQgFAGAAAIQAAAZBBBIQAIgIAAgNQAAgIgFgGQgEgHgIgCIAMgNQAFgGAFAFQAMAKAAASQAAAUgRATQALAMAGADQAKAGAPgBIgIAJIgoAAIgNgMQgSANgaAAQgXAAgPgMgAllBBQAAAPAIAKQAKANATAAQAKAAALgGQgHgHgQgUQgSgWgGgKQgLAKAAARgAKhB1IAVgSIAAihIgVgTIBMAAQATAAAMAEQAgAKATAdQARAbAAAgQAAAegQAZQgRAbgfAKQgNAEgVAAgALYg/IAACjIAaAAQAZAAAOgSQARgVAAgrQAAgogSgWQgPgTgYAAgAFrB1IATgSIgOgwIgdAIIgdgIIgOAwIAUASIhBAAIAVgSIA5i0IAgAAIA6C0IAVASgAE7AkIAwAAIgYhNgACWB1IAVgSIAAhNIhGAAIAABNIAVASIhMAAIAVgSIAAihIgVgTIBMAAIgVATIAABBIBGAAIAAhBIgVgTIBLAAIgUATIAAChIAUASgApIB1IAVgSIAAihIgkAAQgDAAgDACIgZAWIAIgmQABgFAGAAICKAAQAFAAABAFIAIAlIgZgVQgDgCgDAAIgjAAIAAChIAVASgAsmB1IAVgSIAAihIgVgTIB1AAQAGAAACAFIAMAjIgagTQgEgCgDAAIgwAAIAABCIApAAIAUgQIAAA0IgUgRIgpAAIAABMIAzAAQAFAAAEgCIAfgWIgMAmQgCAEgFAAgAxoB1IAVgTIgLiAIgyByQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBIg0hyIgLCBIAVASIhAAAIAVgSIAOihIgUgTIAuAAQAFAAADACQACACACAEIArBgIAqhgQADgIAIAAIAtAAIgUATIAOCgIAUATgArThhQgEgEAAgGQAAgFAEgFQAEgEAGAAQAGAAAEAEQAEAFAAAFQAAAGgEAEQgEAEgGAAQgGAAgEgEgAr+hhQgEgEAAgGQAAgFAEgFQAEgEAGAAQAGAAAFAEQAEAFAAAFQAAAGgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_30.setTransform(0,-3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg1
	this.instance = new lib.bg1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-150,-300,300,600), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flowers
	this.instance = new lib.flowers_1();
	this.instance.parent = this;
	this.instance.setTransform(-201.8,57.9,0.89,0.89,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-409.8},15,cjs.Ease.get(-1)).wait(1).to({x:-201.8},15,cjs.Ease.get(1)).wait(1).to({x:-409.8},15,cjs.Ease.get(-1)).wait(1).to({x:-201.8},15,cjs.Ease.get(1)).wait(1).to({x:-409.8},15,cjs.Ease.get(-1)).wait(85).to({x:-201.8},15,cjs.Ease.get(1)).wait(1));

	// flowers
	this.instance_1 = new lib.flowers_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(192.3,-26.6,0.907,0.907,0,0,180,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:416.3},15,cjs.Ease.get(-1)).wait(1).to({x:192.3},15,cjs.Ease.get(1)).wait(1).to({x:416.3},15,cjs.Ease.get(-1)).wait(1).to({x:192.3},15,cjs.Ease.get(1)).wait(1).to({x:416.3},15,cjs.Ease.get(-1)).wait(85).to({x:192.3},15,cjs.Ease.get(1)).wait(1));

	// flowers
	this.instance_2 = new lib.flowers_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-209.8,-215.2,1,1,28.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-431.9,y:-387.2},15,cjs.Ease.get(-1)).wait(1).to({x:-209.8,y:-215.2},15,cjs.Ease.get(1)).wait(1).to({x:-431.9,y:-387.2},15,cjs.Ease.get(-1)).wait(1).to({x:-209.8,y:-215.2},15,cjs.Ease.get(1)).wait(1).to({x:-431.9,y:-387.2},15,cjs.Ease.get(-1)).wait(85).to({x:-209.8,y:-215.2},15,cjs.Ease.get(1)).wait(1));

	// flowers
	this.instance_3 = new lib.flowers_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(248.3,254.4,1,1,28.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:418.4,y:400.2},15,cjs.Ease.get(-1)).wait(1).to({x:248.3,y:254.4},15,cjs.Ease.get(1)).wait(1).to({x:418.4,y:400.2},15,cjs.Ease.get(-1)).wait(1).to({x:248.3,y:254.4},15,cjs.Ease.get(1)).wait(1).to({x:418.4,y:400.2},15,cjs.Ease.get(-1)).wait(85).to({x:248.3,y:254.4},15,cjs.Ease.get(1)).wait(1));

	// flowers
	this.instance_4 = new lib.flowers_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(180.5,-350.6,1,1,-46.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:365.8,y:-486.6},15,cjs.Ease.get(-1)).wait(1).to({x:180.5,y:-350.6},15,cjs.Ease.get(1)).wait(1).to({x:365.8,y:-486.6},15,cjs.Ease.get(-1)).wait(1).to({x:180.5,y:-350.6},15,cjs.Ease.get(1)).wait(1).to({x:365.8,y:-486.6},15,cjs.Ease.get(-1)).wait(85).to({x:180.5,y:-350.6},15,cjs.Ease.get(1)).wait(1));

	// flowers
	this.instance_5 = new lib.flowers_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-208.5,307.6,1,1,-46.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-330.5,y:505.6},15,cjs.Ease.get(-1)).wait(1).to({x:-208.5,y:307.6},15,cjs.Ease.get(1)).wait(1).to({x:-330.5,y:505.6},15,cjs.Ease.get(-1)).wait(1).to({x:-208.5,y:307.6},15,cjs.Ease.get(1)).wait(1).to({x:-330.5,y:505.6},15,cjs.Ease.get(-1)).wait(85).to({x:-208.5,y:307.6},15,cjs.Ease.get(1)).wait(1));

	// Слой 12
	this.instance_6 = new lib.HW();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1.5,1.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(124).to({_off:false},0).wait(56));

	// logo
	this.instance_7 = new lib.logo();
	this.instance_7.parent = this;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(64).to({_off:false},0).to({_off:true},60).wait(56));

	// bottle
	this.instance_8 = new lib.bottle_1();
	this.instance_8.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},64).wait(116));

	// bg
	this.instance_9 = new lib.bg();
	this.instance_9.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(180));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-624.3,-766.2,1270.9,1489.4);


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
p.nominalBounds = new cjs.Rectangle(-324.3,-166.2,1270.9,1489.4);
// library properties:
lib.properties = {
	id: 'B4320019A9D44E30A34EBCB9653B8FAD',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bottle.png", id:"bottle"},
		{src:"images/flowers.png", id:"flowers"}
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
an.compositions['B4320019A9D44E30A34EBCB9653B8FAD'] = {
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