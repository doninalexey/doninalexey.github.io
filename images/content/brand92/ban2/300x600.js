(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,380);


(lib.shell = function() {
	this.initialize(img.shell);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,366,290);


(lib.shell_red = function() {
	this.initialize(img.shell_red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,366,284);// helper functions:

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


(lib.t2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvYBkIAAgkIhiAAIAAAkIgdAAIAAg/QAIABAHgHQAHgGADgKQAGgPAAgZIAAhGIBsAAIAACEIARAAIAAA/gAwagZQAAAdgFAOQgEAKgJAJIBBAAIAAhpIgvAAgADDAlIAVgUQAFANAMAGQALAFAMAAQAPAAAJgHQAHgHAAgKQAAgXgjAAIgOAAIAAgaIAOAAQAMgBAIgFQAHgGAAgJQAAgSgXgBQgUAAgMANIgRgVQAWgTAcAAQAYAAAOAMQAOALAAATQAAAWgTAMQAOADAIAMQAHAKAAAPQAAAXgSANQgRAOgcABQgqgBgTgegAuZAsQgYgYAAgjQAAglAYgYQAYgXAmAAQAmAAAXAXQAYAYAAAlQAAAjgYAYQgYAYglAAQgmAAgYgYgAuBg3QgPAPAAAZQAAAXAPAPQAPAQAXAAQAXAAAPgQQAPgPAAgXQAAgZgPgPQgPgPgXAAQgXAAgPAPgAPsBAIAAifIAoAAQAagBANALQAPAMAAAVQAAAVgSAKQANADAIAHQALALAAATQAAATgNANQgPANgaAAgAQMAnIANAAQANgBAIgEQAKgGAAgNQAAgMgLgFQgHgDgPAAIgLAAgAQMgdIAJAAQAYAAAAgUQAAgVgYAAIgJAAgANXBAIAAiEIgkAAIAAgbIBnAAIAAAbIgkAAIAACEgAMCBAIAAhqIhYBqIgWAAIAAifIAgAAIAABpIBXhpIAWAAIAACfgAJTBAIAAiEIhAAAIAACEIgfAAIAAifIB+AAIAACfgABcBAIgjg7IglA7IgkAAIA4hUIgvhLIAkAAIAcAxIAegxIAlAAIgxBLIA3BUgAhBBAIAAhqIhYBqIgWAAIAAifIAfAAIAABpIBYhpIAWAAIAACfgAmVBAIAAifIAfAAIAACEIAzAAIAAiEIAgAAIAACEIAzAAIAAiEIAfAAIAACfgAq2BAIAAifIAoAAQAagBANALQAPAMAAAVQAAAVgSAKQANADAIAHQALALAAATQAAATgNANQgPANgaAAgAqXAnIAOAAQANgBAIgEQAKgGAAgNQAAgMgMgFQgGgDgPAAIgMAAgAqXgdIAJAAQAZAAAAgUQAAgVgYAAIgKAAgAOrBAIAAifIAfAAIAACfgAHCBAIgPgiIhAAAIgOAiIgiAAIBFifIAYAAIBDCfgAGqAEIgWg4IgXA4IAtAAgAnHBAIgOgiIhBAAIgOAiIgiAAIBFifIAYAAIBDCfgAneAEIgXg4IgXA4IAuAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_2, new cjs.Rectangle(-111.2,-10,222.5,20), null);


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_1, new cjs.Rectangle(-114,-24.4,228.2,48.8), null);


(lib.t1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AOkDiIAAigIBVAAIAAAbIg1AAIAACFgANjDiIAAhHIhEAAIAABHIgfAAIAAigIAfAAIAAA+IBEAAIAAg+IAfAAIAACggAK/DiIAAigIAfAAIAACggAKEDiIg4hIIgFAEIAABEIgeAAIAAigIAeAAIAABEIA8hEIAnAAIhEBKIBIBWgAHnDiIAAhHIhEAAIAABHIgeAAIAAigIAeAAIAAA+IBEAAIAAg+IAfAAIAACggAFSDiIgNgiIhCAAIgNAiIgjAAIBGigIAYAAIBDCggAE7CnIgWg6IgYA6IAuAAgABkDiIAAigIBdAAIAAAbIg+AAIAAAlIAWAAQAaAAAOAMQAPAOAAAWQAAAQgJANQgOATggAAgACDDHIAPAAQAeAAAAgVQAAgWgdAAIgQAAgAgoDiIgPhjIgrBjIgLAAIgohjIgRBjIggAAIAfigIAWAAIAqBmIAthmIAWAAIAbCggAkyDiIAWgtIg8hzIAlAAIApBRIAihRIAiAAIhKCggAmHDiIAAigIAfAAIAACggAnADiIgPhjIgrBjIgLAAIgphjIgQBjIggAAIAeigIAXAAIArBmIAshmIAWAAIAbCggArKDiIAAigIBZAAIAAAbIg5AAIAAAkIA3AAIAAAaIg3AAIAAAsIA5AAIAAAbgAtIDiIAAigIAvAAQAcAAAOAMQARAPAAAYQAAAWgOAOQgOAOgaAAIgUAAIAAA7gAsoCMIAMAAQAOAAAGgFQAKgHgBgMQABgLgKgHQgGgFgPAAIgLAAgAuJDiIAAiFIhAAAIAACFIggAAIAAigIB/AAIAACggAAKCeIAAgbIA/AAIAAAbgAI7gZIAAgkIhiAAIAAAkIgdAAIAAg/QAQABAJgWQAGgPgBgbIAAhGIBsAAIAACFIARAAIAAA/gAH5iXQAAAegFAOQgEALgJAIIBBAAIAAhqIgvAAgAA0gZIAAgkIi5AAIAAigIAfAAIAACFIA0AAIAAiFIAeAAIAACFIAzAAIAAiFIAfAAIAACFIAUAAIAAA/gAEehRQgYgXAAglQAAglAYgXQAYgYAlAAQAnAAAXAYQAYAXAAAlQAAAlgYAXQgYAYgmAAQglAAgYgYgAE2i1QgPAQgBAYQABAYAPAQQAOAPAXAAQAYAAAPgPQAPgQAAgYQAAgYgPgQQgPgPgYAAQgXAAgOAPgAlohRQgYgXAAglQAAglAYgXQAXgYAmAAQAnAAAXAYQAYAXAAAlQAAAlgYAXQgYAYgmAAQglAAgYgYgAlRi1QgPAQAAAYQAAAYAPAQQAPAPAXAAQAYAAAPgPQAPgQAAgYQAAgYgPgQQgPgPgYAAQgXAAgPAPgAN8g9IAAhHIhEAAIAABHIgfAAIAAigIAfAAIAAA+IBEAAIAAg+IAfAAIAACggALXg9IAAhrIhXBrIgWAAIAAigIAfAAIAABqIBYhqIAWAAIAACggABkg9IAAigIBYAAIAAAbIg5AAIAAAkIA3AAIAAAaIg3AAIAAAsIA5AAIAAAbgAn2g9IAAigIAvAAQAOAAAJACQAKADAJAHQAQAOAAAZQAAAWgNAOQgPAOgaAAIgUAAIAAA7gAnXiTIANAAQANAAAIgFQAIgHAAgMQAAgLgJgHQgHgFgPAAIgLAAgAo4g9IAAiFIhAAAIAACFIgfAAIAAigIB/AAIAACggAsHg9Ig5hIIgDAEIAABEIggAAIAAigIAgAAIAABEIA6hEIAoAAIhEBKIBIBWgAukg9IAAg+IgGAAIgoA+IgmAAIAwhBQgKgBgIgGQgSgNAAgaQAAgXAQgOQAOgMAbAAIAuAAIAACggAvMisQAAAZAfAAIAJAAIAAgxIgJAAQgeAAgBAYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_2, new cjs.Rectangle(-101.7,-22.5,203.4,45.2), null);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGFEIIAZhAIAbADIgiA/gAueDWQgXgXAAgmQAAgkAXgXQAZgZAmAAQAVAAAQAIQASAJAMAUIgbAPQgGgMgNgGQgJgFgNgBQgWAAgPAPQgQAPAAAbQAAAaAQAOQANAOAWAAQATAAANgJQAMgLADgOIgqAAIAAgbIBKAAIAAACQAAArgYAXQgVAVgkABQgkAAgWgXgAFcDpIgjg7IglA7IglAAIA4hVIgvhLIAlAAIAcAxIAegxIAlAAIgxBLIA3BVgAC+DpIAAigIAfAAIAACggACEDpIgrhBIgDAAIAABBIggAAIAAigIAvAAQAaAAAPAMQAPANAAAXQAAAZgSAMQgIAFgKADIAyBDgABWCTIAJAAQAegBAAgYQAAgYgeAAIgJAAgAhGDpIAAigIAuAAQAPAAAJACQAJADAJAHQAQAPAAAXQAAAXgNANQgPAOgZABIgUAAIAAA7gAgnCTIANAAQANAAAHgGQAIgGAAgMQAAgLgIgIQgHgEgPAAIgLAAgAkaDpIAAigIAqAAQAmAAAVAPQAfAXAAAqQAAApggAYQgXAPgkAAgAj7DOIAKAAQAYAAAPgLQAUgPAAgbQAAgdgUgOQgPgLgYABIgKAAgAlSDpIhhhsIAABsIggAAIAAigIAWAAIBiBqIAAhqIAfAAIAACggAoEDpIgPgiIhAAAIgOAiIgiAAIBFigIAYAAIBDCggAocCuIgXg6IgWA6IAtAAgAqrDpIgrhBIgEAAIAABBIgfAAIAAigIAvAAQAZAAAPAMQAQANAAAXQAAAZgTAMQgIAGgJACIAyBDgAraCTIAJAAQAfgBAAgYQAAgYgeAAIgKAAgAnwgSIAAglIhiAAIAAAlIgdAAIAAg/QAQABAJgXQAGgOAAgcIAAhFIBsAAIAACFIARAAIAAA/gAoyiRQAAAfgFAOQgEALgJAIIBBAAIAAhqIgvAAgAMjhKQgYgXAAglQAAglAYgXQAYgYAmAAQAmAAAXAYQAYAXAAAlQAAAlgYAXQgYAXglABQgmgBgYgXgAM7iuQgPAPAAAZQAAAYAPAQQAPAPAXAAQAXAAAPgPQAPgQAAgYQAAgZgPgPQgPgQgXAAQgXAAgPAQgAKVg3IAAifIAvAAQAOAAAJACQALADAIAHQARAPAAAXQAAAXgOANQgPAOgZABIgUAAIAAA6gAK1iMIAMAAQAOAAAHgGQAIgGAAgMQAAgMgJgHQgHgEgPAAIgKAAgAJUg3IAAiEIhAAAIAACEIgfAAIAAifIB+AAIAACfgAFKg3IAAifIBZAAIAAAbIg5AAIAAAkIA3AAIAAAaIg3AAIAAAsIA5AAIAAAagAD2g3IAAiEIgkAAIAAgbIBnAAIAAAbIgkAAIAACEgAChg3IAAhrIhXBrIgWAAIAAifIAfAAIAABqIBYhqIAWAAIAACfgAACg3IgNghIhBAAIgOAhIgiAAIBFifIAYAAIBCCfgAgVhxIgWg6IgXA6IAtAAgAikg3IgOhiIgrBiIgLAAIgphiIgQBiIggAAIAeifIAWAAIArBmIAshmIAXAAIAbCfgAmug3IAXgsIg8hzIAlAAIAoBRIAjhRIAiAAIhLCfgAsKg3IAAifIBZAAIAAAbIg5AAIAAAkIA3AAIAAAaIg3AAIAAAsIA5AAIAAAagAtLg3IAAhHIhEAAIAABHIgfAAIAAifIAfAAIAAA9IBEAAIAAg9IAfAAIAACfgABPkBIAWgIQAFANAQAAQARAAAFgNIAVAIQgKAbghAAQghAAgKgbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(-95,-26.6,190.1,53.3), null);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AIrBYIAAgzIAGAAIAAAEQAEgFAHAAQAHAAAFAFQAEAFAAAHQAAAIgEAEQgEAGgIAAQgHAAgEgGIAAAXgAI0AsQgDAEAAAFQAAAGACADQADAEAFAAQAFAAADgEQADgDAAgGQABgFgEgEQgDgDgFAAQgEAAgDADgAF6BYIAAgzIAFAAIAAAEQAFgFAGAAQAIAAAFAFQADAFAAAHQAAAIgDAEQgFAGgHAAQgIAAgEgGIAAAXgAGDAsQgEAEAAAFQAAAGADADQADAEAFAAQAFAAADgEQADgDAAgGQAAgFgEgEQgDgDgEAAQgEAAgDADgAFCBYIALgVIgPgeIAGAAIAMAXIALgXIAGAAIgYAzgAAfBYIAAgzIAGAAIAAAEQAFgFAGAAQAIAAAEAFQAFAFAAAHQAAAIgFAEQgEAGgHAAQgHAAgFgGIAAAXgAAoAsQgDAEAAAFQAAAGADADQADAEAFAAQAFAAADgEQADgDAAgGQAAgFgDgEQgDgDgFAAQgFAAgDADgAqiBYIAAgzIAFAAIAAAEQAFgFAHAAQAIAAAEAFQAEAFAAAHQAAAIgEAEQgFAGgGAAQgIAAgFgGIAAAXgAqZAsQgDAEgBAFQAAAGAEADQADAEAEAAQAGAAACgEQAEgDAAgGQAAgFgEgEQgDgDgFAAQgEAAgDADgAgRBRIAAgLIgnAAIAAALIgFAAIAAgRQAFAAAEgHQACgFAAgJIAAgbIAgAAIAAAwIAGAAIAAARgAgsArQgBAKgCAFIgDAGIAaAAIAAgqIgUAAgAozBPIAAgJIgbAAIAAghIAGAAIAAAbIAOAAIAAgbIAHAAIAAAbIAFAAIAAAPgAEbAxIgEAVIgGAAIAIgkIANAbIAOgbIAIAkIgGAAIgEgVIgMAXgAljAeIAAAoIgGAAIAAg4IAlAqIAAgoIAGAAIAAA4gAmkAlIAFAAIAAAVIAXgYIAAAkIgGAAIAAgWIgWAYgAnLAlIAFAAIAAAVIAYgYIAAAkIgHAAIAAgWIgWAYgAoYAlIAGAAIAAAVIAWgYIAAAkIgGAAIAAgWIgWAYgAikBEIANgRIgGAAQgHAAgFgFQgEgFgBgHQAAgIAGgFQAFgGAHAAQAJAAAGAGQAEAGAAAHQAAAGgEAGIgSAZgAilAZQgDADAAAGQAAAFAEADQADAEAGAAQAFAAADgEQAEgDAAgFQAAgGgDgDQgEgEgGAAQgEAAgFAEgANHBFQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIACgBIADABIABADIgBACIgDACQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBgAKlBCQgGgFAAgIQABgIAEgFQAFgEAGAAQAHAAAFAFIAAgEIAGAAIAAAhIgGAAIAAgFQgFAGgHAAQgGAAgEgFgAKoAsQgCADAAAGQgBAGADADQADAEAFAAQAFAAAEgEQACgEAAgFQAAgGgDgDQgDgDgFAAQgFAAgDADgAJ7BDQgFgGAAgMQAAgUAKgHQADgCAIgCQAGgBABgDIAGAAQgCAHgJACQgIACgDACQgCACgDAEQgCAEAAAFQAFgGAIAAQAHAAAFAFQAFAFAAAHQAAAIgFAFQgFAFgIAAQgHAAgFgEgAKAAsQgEADAAAGQAAAGAEADQACAEAGAAQAEAAADgEQAEgDAAgGQAAgGgEgDQgDgDgEAAQgGAAgCADgAHwBCQgGgFAAgIQAAgHAGgFQAEgFAIAAQAGAAAEADIAAAHQgEgFgGAAQgFAAgDADQgEADABAGQgBAGAEADQADAEAFAAQAGAAAEgGIAAAHQgEAEgGAAQgIAAgEgFgAHNBCQgGgFAAgIQAAgHAGgFQAEgFAIAAQAGAAAEADIAAAHQgEgFgGAAQgEAAgDACQgDADgBAEIARAAIAAAFIgRAAQAAAFADADQAEADAEAAQAGAAAEgGIAAAHQgEAEgGAAQgIAAgEgFgAGnBDQgGgFAAgJQAAgHAEgFQAFgFAIAAQAIAAAEAGQADAFAAAHIgZAAQAAAFADAEQACADAFAAQAEAAADgDIADgEIAFACIgEAGQgFAEgGAAQgHAAgEgEgAG7AyQgBgEgCgDQgDgCgDAAQgEAAgDACQgDADAAAEIATAAIAAAAgADuBCQgFgFAAgIQAAgHAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAHQAAAIgFAFQgFAFgIAAQgHAAgFgFgADzAsQgEADAAAGQAAAGAEADQADAEAEAAQAGAAACgEQAEgDAAgGQAAgGgEgDQgCgDgGAAQgEAAgDADgAB8BCQgFgFAAgIQAAgIAEgFQAGgEAGAAQAHAAAFAFIAAgEIAFAAIAAAhIgFAAIAAgFQgFAGgHAAQgGAAgFgFgACAAsQgDADAAAGQAAAGADADQACAEAGAAQAFAAADgEQACgEABgFQgBgGgDgDQgDgDgEAAQgFAAgDADgAgDBDQgEgFAAgJQAAgHADgFQAEgFAHAAQAJAAAEAGQAEAFgBAHIgZAAQAAAFADAEQADADAEAAQAEAAACgDIAEgEIAFACIgEAGQgFAEgGAAQgHAAgEgEgAARAyQAAgEgDgDQgDgCgEAAQgDAAgDACQgCADgBAEIATAAIAAAAgAp1BCQgFgFAAgIQAAgIAFgFQAFgEAGAAQAHAAAEAFIAAgEIAGAAIAAAhIgGAAIAAgFQgEAGgHAAQgHAAgEgFgApxAsQgDADAAAGQAAAGACADQAEAEAFAAQAEAAAEgEQADgEgBgFQAAgGgDgDQgDgDgEAAQgFAAgDADgAreBCQgEgFgBgIQABgHAEgFQAFgFAIAAQAGAAAFADIAAAHQgFgFgGAAQgFAAgDADQgDADgBAGQABAGADADQADAEAFAAQAGAAAFgGIAAAHQgFAEgGAAQgIAAgFgFgAsBBCQgEgFAAgIQAAgHAEgFQAFgFAIAAQAGAAAFADIAAAHQgFgFgGAAQgEAAgDACQgEADgBAEIASAAIAAAFIgSAAQABAFAEADQADADAEAAQAGAAAFgGIAAAHQgFAEgGAAQgIAAgFgFgAsmBDQgFgFgBgJQAAgHAFgFQAEgFAHAAQAJAAAEAGQADAFAAAHIgaAAQAAAFADAEQAEADAEAAQAEAAADgDIADgEIAFACIgEAGQgEAEgHAAQgHAAgEgEgAsSAyQAAgEgDgDQgDgCgEAAQgDAAgDACQgCADgCAEIAUAAIAAAAgAMkBGIAAghIAMAAQAEAAADABQADADAAAEQAAAEgEACIAEADQADACAAAEQAAAFgEADQgDACgEAAgAMpBBIAHAAIAGgBQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQgCgBgEAAIgHAAgAMpAyIAGAAIAEgBQAAAAABgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBAAAAgBIgFAAIgFAAgAMTBGIAAghIAGAAIAAAhgAMGBGIgNgPIgCACIAAANIgGAAIAAghIAGAAIAAANIANgNIAHAAIgNAOIAPATgALhBGIAAgPIgQAAIAAAPIgGAAIAAghIAGAAIAAANIAQAAIAAgNIAFAAIAAAhgAJVBGIAAghIAGAAIAAAhgAIVBGIAAgcIgKAAIAAgFIAaAAIAAAFIgKAAIAAAcgADbBGIAAgPIgRAAIAAAPIgFAAIAAghIAFAAIAAANIARAAIAAgNIAFAAIAAAhgACjBGIAAghIAMAAQAFAAADABQACADAAAEQABAEgEACIAEADQADACAAAEQAAAFgEADQgDACgFAAgACoBBIAIAAIAFgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgCgBgEAAIgIAAgACoAyIAHAAIADgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBIgEAAIgGAAgABsBGIgMgOIgCABIAAANIgFAAIAAgNIgBgBIgMAOIgIAAIAQgSIgOgPIAGAAIANANIAAgNIAFAAIAAANIANgNIAHAAIgOAPIAPASgAhtBGIAAghIANAAQAEAAADABQADADAAAEQgBAEgDACIAEADQADACgBAEQABAFgEADQgDACgFAAgAhoBBIAIAAIAFgBQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgBgBgEAAIgIAAgAhoAyIAHAAIADgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBIgEAAIgGAAgAjCBGIAAgKIgbAAIAhgvIAAApIAGAAIAAAGIgGAAIAAAKgAjTA2IARAAIAAgXgAj3BGIAAgwIgJAAIADgGIAMAAIAAA2gAnbBGIAAgPIgQAAIAAAPIgGAAIAAghIAGAAIAAANIAQAAIAAgNIAFAAIAAAhgAopBGIAAghIAGAAIAAAhgAq4BGIAAgcIgLAAIAAgFIAbAAIAAAFIgKAAIAAAcgAtMBGIAAg2IAKAAQAIAAAFAEQAFAEAAAIQAAAGgEAEQgEAFgJAAIgFAAIAAAXgAtGApIAFAAQAFAAADgDQADgCAAgFQAAgJgMAAIgEAAgAk3A0IAAgGIAUAAIAAAGgAk1AkQgDgDAAgFQAAgFADgDQADgEAFAAQAFAAAEAEQADADAAAFQAAAFgDADQgEAEgFAAQgFAAgDgEgAkxAXQgCACAAADQAAADACACQAAABABAAQABABAAAAQABAAAAAAQABAAAAAAQAEAAACgCQACgCAAgDQAAgDgCgCQgCgCgEAAQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAABgAmdAcQgDgCgBgEIAFgCQABAFAFAAQAGAAABgFIAFACQgCAEgDACQgCACgFAAQgEAAgDgCgAoRAcQgDgCgBgEIAFgCQABAFAGAAQAFAAABgFIAFACQgBAEgEACQgDACgDAAQgFAAgDgCgAMTAbIgBgDIABgDQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAgAJVAbIgBgDIABgDQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAgAopAbIgBgDIABgDQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAgAJjgNIALgWIgQgeIAHAAIALAYIALgYIAHAAIgZA0gAHugNIAAg0IAFAAIAAAFQAFgGAHAAQAHAAAFAGQAEAFAAAHQAAAHgEAFQgEAFgIAAQgHAAgFgFIAAAXgAH3g5QgDADgBAGQAAAFADADQAEAEAEAAQAGAAACgEQADgDABgFQAAgGgEgDQgDgEgFAAQgEAAgDAEgAAygXIAAgJIgaAAIAAAJIgEAAIAAgOQADAAACgEQACgDAAgGIAAgPIAXAAIAAAcIAFAAIAAAOgAAggvQAAAHgDADIAQAAIAAgXIgNAAgAoxgXIAAgJIgbAAIAAghIAGAAIAAAcIAPAAIAAgcIAGAAIAAAcIAGAAIAAAOgAjQhIIAAAoIgFAAIAAg3IAlAqIAAgoIAGAAIAAA4gAhQgiIAMgRIgFABQgHAAgFgFQgFgFABgIQAAgIAEgFQAFgFAJAAQAIAAAFAGQAFAFAAAHQAAAGgFAGIgSAagAhQhNQgEAEAAAFQAAAGAEADQADAEAGAAQAFAAAEgEQADgEAAgFQAAgFgDgEQgEgEgFAAQgGAAgDAEgAh9giIAMgRIgFABQgHAAgFgFQgFgFABgIQAAgIAEgFQAFgFAJAAQAIAAAFAGQAFAFAAAHQAAAGgFAGIgSAagAh9hNQgEAEAAAFQAAAGAEADQADAEAGAAQAFAAAEgEQADgEAAgFQAAgFgDgEQgEgEgFAAQgGAAgDAEgAKJggQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBIACgBIADABIABADIgBADIgDABQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAgAIbgkQgFgFAAgHQAAgIAFgFQAFgFAIAAQAHAAAFAFQAFAFAAAIQAAAHgFAFQgFAFgHAAQgIAAgFgFgAIgg5QgEADAAAGQAAAGAEADQADADAFAAQAFAAADgDQADgDAAgGQAAgGgDgDQgDgEgFAAQgFAAgDAEgAFYgnQgFgIgBgLQABgMAFgIQAGgIAHAAQAJAAAGAIQAFAIAAAMQAAALgFAIQgGAIgJAAQgHAAgGgIgAFchLQgDAHAAAKQAAAKADAGQAEAGAFAAQAGAAAEgGQAEgGAAgKQAAgKgEgHQgEgGgGAAQgFAAgEAGgAEXggQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBIACgBIADABIABADIgBADIgDABQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAgADsgnQgFgIgBgLQABgMAFgIQAGgIAHAAQAJAAAGAIQAFAIAAAMQAAALgFAIQgGAIgJAAQgHAAgGgIgADwhLQgDAHAAAKQAAAKADAGQAEAGAFAAQAGAAAEgGQAEgGAAgKQAAgKgEgHQgEgGgGAAQgFAAgEAGgACrggQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBIACgBIADABIABADIgBADIgDABQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAgAnYgiQgDgCgBgDIAFgCQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAQACACADAAQAEAAACgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIgGgBIgCAAIAAgFIACAAIAFgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAIgBgDQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAAAABQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAgBABIgEgEQACgDACgBQAEgCAEAAQAFAAACADQADACAAAEQABAFgEACQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQADACAAAEQAAAFgFAEQgDACgGAAQgFAAgEgDgAojgjQgFgFAAgIQAAgIAEgFQAEgFAIAAQAJAAADAGQAEAFAAAIIgaAAQAAAFADADQADADAEAAQAEAAADgCIADgFIAGADIgFAFQgEAEgHAAQgGAAgFgEgAoPg0QAAgEgCgCQgEgDgDAAQgEAAgDADQgCACgBAEIATAAIAAAAgAqUggIAAgFIADAAQADAAACgCQACgCABgEIAAgIIAAggIAhAAIAAA1IgGAAIAAgwIgVAAIAAAdIgBAIQAAAGgDADQgEADgFAAIgEgBgAJWggIgNgOIgCABIAAANIgFAAIAAghIAFAAIAAAOIAOgOIAHAAIgPAPIARASgAG+ggIAAgwIgJAAIAEgFIALAAIAAA1gAGRggIAAgwIgJAAIAEgFIALAAIAAA1gAEmggIATgWIAGgIQADgEAAgEQAAgFgDgDQgDgDgEAAQgGAAgDAFQgBADgBADIgGAAQABgGAEgFQAEgFAIAAQAHAAAFAFQAEAEAAAHQAAAFgDAGIgIAJIgLANIAWAAIAAAFgADLggIAAgwIgJAAIAEgFIALAAIAAA1gAB7ggIATgWIAGgIQADgEAAgEQAAgFgDgDQgDgDgEAAQgGAAgDAFQgBADgBADIgGAAQABgGAEgFQAEgFAIAAQAHAAAFAFQAEAEAAAHQAAAFgDAGIgIAJIgLANIAWAAIAAAFgABfggIAAgwIgJAAIAEgFIALAAIAAA1gAAIggIAAghIAFAAIAAAhgAgZggIAAghIAMAAQAFAAADACQACACAAAEQABAFgEACIAEACQACADAAADQAAAFgDADQgDACgFAAgAgUglIAIAAIAFgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQgCgCgEAAIgIAAgAgUgzIAHAAIADgBQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgEgBIgGAAgAkNggIAGgPIgVgmIAIAAIARAfIANgfIAHAAIgZA1gAk/ggIAAg1IAaAAIAAAFIgUAAIAAARIAHAAQASAAABAPQgBAIgFAEQgEAEgIAAgAk5glIAGAAQAHAAAEgDQADgDAAgFQgBgGgEgCIgJgBIgGAAgAlSggIAAgaIgbAAIAAAaIgHAAIAAg1IAHAAIAAAWIAbAAIAAgWIAGAAIAAA1gAmYggIAAgNIgDAAIgKANIgHAAIAKgNQgDAAgDgDQgCgDgBgEQAAgEADgDQAEgDAGAAIAMAAIAAAhgAmjg7QAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAABAAQAAABAAAAIAGABIAFAAIAAgKIgFAAIgGABgAm4ggIAAghIAFAAIAAAhgAnrggIAAgOIgQAAIAAAOIgFAAIAAghIAFAAIAAAOIAQAAIAAgOIAGAAIAAAhgApcggIAAghIAFAAIAAAhgAijgyIAAgFIAUAAIAAAFgAihhBQgDgEgBgFQABgEADgEQADgDAFAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAQgFAAgDgDgAiehPQgBACAAADQAAAEABACQABAAABABQAAAAABAAQAAABABAAQAAAAABAAQADAAACgCQACgDAAgDQAAgCgCgDQgCgCgDAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABgBAAgAAIhLIgBgCIABgDQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBgAm4hLIgCgCIACgDQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBgApchLIgBgCIABgDQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape.setTransform(0.1,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.9,-6,209.9,24.5);


(lib.shell_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.shell();
	this.instance.parent = this;
	this.instance.setTransform(-182,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shell_1, new cjs.Rectangle(-182,-145,366,290), null);


(lib.logo_GrandPrix = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#737373").s().p("AoSAoQgTgPAAgZQAAgMAFgKQAFgLAKgHQAJgIAMgDQAMgFAOAAQAYAAAYAHIABAAIAAAYIgBAAQgJgEgNgDQgMgCgMAAQgQAAgLAKQgKAJAAAPQAAARAKAIQALAKATAAQAQAAAIgDIAAgWIgiAAIAFgLQACgFAFgBQADgCAJAAIAkAAIAAA5IAAABQgLADgQADQgPACgMAAQgfgBgSgQgAIHA3IgWgrIgYArIgdAAIAjg3Igjg1IAdAAIAYAqIAWgqIAfAAIgjA1IAjA3gAGQA3IAAhsIAcAAIAABsgAFhA3IgagpIgaAAIAIgOIADgDQADgBAFAAIAHAAIAIAAQAIgCADgEQACgDAAgHQABgLgNgCIgZgBIgQAAIAABZIgdAAIAAhsIBFAAQAUAAALAJQALAJAAAPQAAAKgFAIQgHAGgKADIAdAwgACTA3IAAhsIBEAAQAVAAAMAKQALAJgBAPQAAALgJAKQgKAKgMACQgLACgTAAIgPgBIADgIIAGgHQAAAAAAgBQABAAAAgBQABAAAAAAQABAAAAgBIAIAAIAGAAIAIgBQAHgBAEgEQACgDAAgHQABgKgNgDQgHgBgRAAIgRAAIAABYgAgUA3IAAhsIArAAQAeAAAVAOQAWAQAAAbQAAAWgQAPQgPAOgXAAgAAHAlIAXAAQASAAAKgKQALgJgBgPQABgQgMgJQgNgIgWAAIgPAAgAhDA3Ig2hOIAABOIgXAAIAAhsIAiAAIAyBKIAAhKIAYAAIAABsgAi1A3IgnhXIgUAsIAlAAQgFAMgFAEQgFADgIAAIgXAAIgLAYIgdAAIA0hsIAkAAIAzBsgAlFA3IgYgpIgbAAQACgFAGgJIAEgDIAHgBIAHAAIAIAAQAIgCADgEQADgDAAgHQAAgKgNgDQgGgBgSAAIgRAAIAABZIgcAAIAAhsIBEAAQAVAAALAKQALAIAAAPQAAALgHAHQgGAGgKADIAdAwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_GrandPrix, new cjs.Rectangle(-55,-5.6,110,11.3), null);


(lib.logo_CreditAgricole = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#737373").s().p("AElBgQgPgNAAgRQAAgTAPgMQAPgNAXAAQAXAAAPANQAPAMAAATQAAARgPANQgPANgXAAQgXAAgPgNgAEyAsQgJAJAAANQAAAMAJAJQAKAIAPAAQAPAAAKgIQAJgJAAgMQAAgNgJgJQgKgJgPAAQgPAAgKAJgADFBhQgRgMAAgUQAAgTARgNQAPgLAVAAQAKAAAJADQAKADAIAGIgIALQgHgFgGgCQgHgDgIAAQgPAAgKAIQgKAJAAAOQAAANAKAIQAKAIAPAAQAIABAIgDIANgHIAJAKQgJAGgKADQgKADgKABQgVAAgPgMgAhBBgQgPgMAAgTQAAgTAQgNQAPgLAWAAQAKAAAJADQAJADAIAGIgIALIgMgHQgHgDgIAAQgPAAgKAIQgKAJAAANQAAANAJAJQAKAIAPAAQAOAAAKgGIAAgQIgZAAIAAgNIAqAAIAAAjQgRAOgYAAQgYAAgOgNgAH7BrQgMAAgGgGQgGgGAAgMIAAg8IBLAAIAAAOIg6AAIAAAUIA1AAIAAANIg1AAIAAANQAAALALAAIAxAAIAAANgAGQBrIAAhUIASAAIAABHIA1AAIAAANgACOBrIAAhUIASAAIAABUgABlBrIgYgdIgXAAIAAAdIgSAAIAAhUIAuAAQAQABAKAGQAMAIAAAMQAAALgHAGQgHAGgLADIAbAfgAA2BBIAaAAQAKAAAFgEQAGgDAAgIQAAgGgFgEQgGgDgKAAIgaAAgAhqBrIgKgUIguAAIgKAUIgSAAIArhUIATAAIArBUgAibBKIAhAAIgRgigAosBrIAAgYIESAAIAAAYgAn5BCQgRgEgQgMQgLgIgHgSQgHgWAJgTQAQghAmgVQAOgHAPgFQAMgDAHAAQAFgBAEABQAEABAEAFQACACADALIADALIgEAAIgNABQgvAKgcAgQgMANgEAMQgDAMAGAFQALALAfgCQAagCAggKQATgFAygZIgTguIgRAlQgKAUgCACQgMAJgSADIgRACIA6hrIApAAIAcA/QAlgTAggTIAAAhQgSAMgcAQIgKAFIAcA7IgmAAIgEgBQgEgCgCgEIgOgiQggARgfAMQgkAOgeAAQgMAAgMgCgAirgKQgQgMAAgUQAAgTAQgNQAPgLAVAAQAKAAAJADQAKADAIAFIgIALQgHgEgGgCQgHgDgIAAQgPAAgKAIQgKAJAAANQAAANAKAJQAKAIAPAAQAJAAAHgCQAGgCAIgGIAIALQgIAGgLADQgKADgKAAQgVAAgPgLgAEsAAIAAhGIggAAIAAgOIBSAAIAAAOIggAAIAABGgADpAAIAAhUIASAAIAABUgAB6AAIAAhUIAmAAQAYAAAPAMQAPAMAAASQAAATgPALQgPAMgYAAgACMgNIAVAAQAPgBAKgHQAJgIAAgMQAAgNgJgJQgKgHgPAAIgVAAgAAwAAQgMAAgGgGQgGgHAAgLIAAg8IBLAAIAAAOIg5AAIAAAUIA1AAIAAANIg1AAIAAANQAAALAKAAIAxAAIAAANgAgNAAIgZgdIgWAAIAAAdIgSAAIAAhUIAtAAQARABAKAGQAKAHAAANQAAATgYAHIAbAfgAg8gqIAaAAQAJAAAGgEQAFgEAAgHQAAgGgFgEQgGgDgKAAIgZAAgAlJguIgEgKIgDgJIACAAIAGgBQAEgBAggRIAegQIAAAcIgWANQgZANgGADIgGABQgFAAgDgEgAA0hdIALgPIASAAIgOAPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_CreditAgricole, new cjs.Rectangle(-56,-10.8,112,21.7), null);


(lib.ligth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.light();
	this.instance.parent = this;
	this.instance.setTransform(-225,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ligth, new cjs.Rectangle(-225,-190,450,380), null);


(lib.cover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvgEgVQAssMAqgAAAMAAAhSfMgqgAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cover, new cjs.Rectangle(-150,-300,300,600), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E151D").s().p("AsvBoIAAgkIhiAAIAAAkIgdAAIAAg/QARABAJgWQAFgOAAgbIAAhGIBsAAIAACEIARAAIAAA/gAtwgVQAAAagGARQgEALgIAIIBAAAIAAhpIguAAgANTA5QgQgQAAgZQAAgXAQgQQAOgPAZAAQAaAAAOARQANAPAAAZIAAACIhOAAQAAAKAFAIQAHAKAOAAQAQgBAIgNIAbAEQgOAhglAAQgZAAgPgPgAOTADQgCgKgHgFQgHgGgJABQgIgBgHAGQgHAFgCAKIAxAAIAAAAgAEFA6QgTgRAAgkQAAguAQgXQAPgTAggGQAVgEADgLIAbAAQgFAdgdAJIgLADQgXAGgHAHQgKAKgBAQIAAAAQALgOAaAAQAXAAAPAPQAQAOAAAZQAAAagRAPQgQAPgZAAQgbAAgPgOgAEZgEQgIAIAAAMQAAANAIAIQAIAJANAAQANAAAIgJQAIgIAAgNQAAgMgIgIQgIgIgNAAQgNAAgIAIgAgBA5QgRgQAAgZQAAgYASgQQAOgOAXAAQAPAAANAGIAAAdQgKgJgOAAQgOAAgIAJQgIAHAAAMQAAANAJAIQAJAJANAAQANgBAKgIIAAAcQgNAHgOAAQgZAAgOgPgAh8A5QgRgPAAgaQAAgXAQgQQAPgPAYAAQAbAAAOARQAMAPAAAZIAAACIhOAAQAAAKAFAIQAIAKANAAQARgBAIgNIAaAEQgMAhgnAAQgZAAgOgPgAg8ADQgCgKgIgFQgGgGgJABQgJgBgGAGQgIAFgCAKIAyAAIAAAAgAngA3QgPgPAAgYQAAgXAPgPQAOgQAXAAQAXAAAKARIAAgNIAeAAIAABmIgeAAIAAgNQgLAQgVABQgXgBgPgQgAnIgEQgIAIAAAMQAAANAIAIQAIAJAMAAQANAAAIgJQAIgIAAgNQAAgMgIgIQgIgIgNAAQgMAAgIAIgArVA3IAOgSQAMAKAQABQATAAAAgMQAAgGgGgDQgDgCgJAAIgNAAIAAgVIAMAAQAIAAAEgCQADgCAAgFQAAgKgQAAQgMAAgLAIIgNgSQAQgNAXAAQASAAAKAHQAMAHAAAPQAAAMgPAJQAIACAGAGQAIAGAAANQAAAPgMAJQgNAIgVABQgcAAgRgRgAGoBEIAAgZIAFABQAHAAAFgFQADgEAAgKIAAg7IBUAAIAABmIgdAAIAAhOIgcAAIAAAmQAAAUgKAKQgLALgRAAIgJgBgAIqBEIAAhmIAdAAIAAAkIAXAAQATAAAJAKQAIAIAAAOQAAARgLAJQgJAJgPgBgAJHAtIAOAAQAIAAADgDQAEgDAAgFQAAgEgEgDQgDgDgHAAIgPAAgAkWBEIAAhAIgwBAIgdAAIAAhmIAdAAIAAA/IAwg/IAeAAIAABmgAKUBEIAAhmIAdAAIAABNIAhAAIAAhNIAeAAIAABNIAhAAIAAhNIAeAAIAABmgAF+BEIAAhmIAdAAIAABmgACKBEIAAgkIgEAAIgZAkIgiAAIAfgmQgMgEgFgFQgIgHAAgOQAAgPAMgLQALgJAWABIApAAIAABmgABzgJQgEAEAAAFQAAAFAEADQADACAHABIANAAIAAgXIgNAAQgHABgDACgAjPBEIAAhOIgcAAIAAgYIBXAAIAAAYIgdAAIAABOgAogBEIAAgqIgpAAIAAAqIgdAAIAAhmIAdAAIAAAjIApAAIAAgjIAdAAIAABmgAsEBEIAAhmIAdAAIAABmgAlVhNIATgKQACAHAFAEQAGAFAHAAQARgBAEgPIATAKQgJAYgfAAQgfAAgIgYgAGAhCQgFgGAAgGQAAgIAFgFQAFgFAHAAQAHAAAGAFQAFAFAAAIQAAAGgFAGQgGAFgHAAQgHAAgFgFgAsChCQgFgGAAgGQAAgIAFgFQAGgFAHAAQAHAAAFAFQAFAFAAAIQAAAGgFAGQgFAFgHAAQgHAAgGgFg");
	this.shape.setTransform(-0.3,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AvJDwQg6AAgpgpQgpgpAAg6IAAjHQAAg6ApgpQApgpA6AAIeTAAQA6AAApApQApApAAA6IAADHQAAA6gpApQgpApg6AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-111,-24,222,48), null);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.shell_red_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.shell_red();
	this.instance.parent = this;
	this.instance.setTransform(-182,-142);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(51));

	// Слой_2
	this.instance_1 = new lib.ligth();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-46.9,-35.9,0.8,0.8);
	this.instance_1.alpha = 0;
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-0.1,scaleX:0.9,scaleY:0.9,x:-49.4,y:-41,alpha:0.398},25).to({regY:0,scaleX:1,scaleY:1,x:-51.9,y:-46,alpha:0},25).wait(1));

	// Слой_5
	this.instance_2 = new lib.ligth();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-51.9,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-276.9,-236,461,380);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// leg
	this.instance = new lib.Symbol43("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.1,255.6,1.3,1.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(125).to({_off:false},0).to({alpha:1},10).wait(125).to({startPosition:0},0).to({alpha:0},10).wait(1));

	// btn
	this.instance_1 = new lib.btn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-132.9,0.02,0.02);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(210).to({_off:false},0).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(10).to({scaleX:0.96,scaleY:0.96,y:-132.8},2).to({scaleX:1,scaleY:1,y:-132.9},2).wait(2).to({scaleX:0.96,scaleY:0.96,y:-132.8},2).to({scaleX:1,scaleY:1,y:-132.9},2).wait(20).to({scaleX:0.02,scaleY:0.02},10,cjs.Ease.get(-1)).wait(1));

	// t2_2
	this.instance_2 = new lib.t2_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-4.2,-103.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(140).to({_off:false},0).to({alpha:1},10).wait(45).to({alpha:0},15).to({_off:true},1).wait(60));

	// t2_1
	this.instance_3 = new lib.t2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-1.5,-146.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(125).to({_off:false},0).to({alpha:1},10).wait(60).to({alpha:0},15).to({_off:true},1).wait(60));

	// t1_2
	this.instance_4 = new lib.t1_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-14.6,-102.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50).to({_off:false},0).to({alpha:1},10).wait(50).to({alpha:0},15).to({_off:true},1).wait(145));

	// t1_1
	this.instance_5 = new lib.t1_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-20.5,-160.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({alpha:1},10).wait(90).to({alpha:0},15).to({_off:true},1).wait(145));

	// logo_CreditAgricole
	this.instance_6 = new lib.logo_CreditAgricole();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-79.9,-272);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(271));

	// logo_GrandPrix
	this.instance_7 = new lib.logo_GrandPrix();
	this.instance_7.parent = this;
	this.instance_7.setTransform(81.1,-266.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(271));

	// cover
	this.instance_8 = new lib.cover();
	this.instance_8.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(271));

	// shell
	this.instance_9 = new lib.shell_red_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(334,119);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(105).to({_off:false},0).to({x:33},20,cjs.Ease.quadInOut).wait(125).to({x:-318},20,cjs.Ease.get(-1)).wait(1));

	// shell
	this.instance_10 = new lib.shell_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(334,119);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(70).to({_off:false},0).to({x:33},20,cjs.Ease.quadInOut).wait(15).to({x:-318},20,cjs.Ease.quadInOut).to({_off:true},1).wait(145));

	// shell
	this.instance_11 = new lib.shell_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(334,119);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(35).to({_off:false},0).to({x:33},20,cjs.Ease.quadInOut).wait(15).to({x:-318},20,cjs.Ease.quadInOut).to({_off:true},1).wait(180));

	// shell
	this.instance_12 = new lib.shell_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(334,119);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:33},20,cjs.Ease.get(1)).wait(15).to({x:-318},20,cjs.Ease.quadInOut).to({_off:true},1).wait(215));

	// bg
	this.instance_13 = new lib.bg_1();
	this.instance_13.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(271));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,668,600);


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
p.nominalBounds = new cjs.Rectangle(149,299,669,602);
// library properties:
lib.properties = {
	id: '49BB985389484CAB8A81378A916E78EB',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/light.png", id:"light"},
		{src:"images/shell.png", id:"shell"},
		{src:"images/shell_red.png", id:"shell_red"}
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
an.compositions['49BB985389484CAB8A81378A916E78EB'] = {
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