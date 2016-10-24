import body from '../body.handlebars';
import backbone from 'backbone';
import mn from 'backbone.marionette';

var model = Backbone.Model.extend ();

var view = mn.View.extend ({
	el: 'body',
	className: 'rechner',
	template:  body,
	events: {
		"click .divide": "divide",
		"click .plus": "plus",
		"click .minus": "minus",
		"click .multi": "multi",
		"input #value1": "changeValue1",
		"input #value2": "changeValue2",
	},

	modelEvents: {
		'change:ergebnis': 'actOnChange',
		'change:value1': 'actOnChange',
		'change:value2': 'actOnChange',
		
	},


	actOnChange: function(value, model) {
		this.render();
	},

	changeValue1: function (e) {
		this.model.set({value1: parseInt(e.target.value)});
	},

	changeValue2: function (e) {		
		this.model.set({value2: parseInt(e.target.value)});
	},

	plus: function (e) {	
		this.model.set({ergebnis: this.model.get("value1") + this.model.get("value2")});
	},

	minus: function (e) {
		this.model.set({ergebnis: this.model.get("value1") - this.model.get("value2")});
	},

	multi: function (e) {
		this.model.set({ergebnis: this.model.get("value1") * this.model.get("value2")});
	},

	divide: function (e) {
		this.model.set({ergebnis: this.model.get("value1") / this.model.get("value2")});
	}
})

var view1 = new view({model: new model()});
view1.render();


