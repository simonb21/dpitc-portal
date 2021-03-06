var keystone = require('keystone');
var Types = keystone.Field.Types;

var Gallery = new keystone.List('Gallery', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Gallery.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
  description: { type: Types.Textarea, height: 100 },
	heroImage: { type: Types.CloudinaryImage },
	images: { type: Types.CloudinaryImages },
});

Gallery.register();
