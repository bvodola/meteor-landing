import { Meteor } from 'meteor/meteor';
import { Pages } from '../imports/models/pages.js';
import { Templates } from '../imports/models/templates.js';

Meteor.methods({
	'getTemplateComponent': function(template_id) {
		let template = Templates.findOne({'_id': template_id});
		return template.component_name;
	}
});

// ============
// Publications
// ============
Meteor.publish('pages', () => {
	return Pages.find({});
})

Meteor.publish('templates', () => {
	return Templates.find({});
})