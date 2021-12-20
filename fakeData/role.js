const mongoose = require('mongoose');

const ROLE_SCHEMA = new mongoose.Schema({
	name : {
		type     : String,
		required : true,
	},
});

const ROLEMODEL = mongoose.model('rolemodels', ROLE_SCHEMA, 'rolemodels');

const data = [
	{
		_id  : '61c0251fb7ae1f8f80d7e568',
		name : 'SUPER_ADMIN',
	},
	{
		_id  : '61c02542b7ae1f8f80d7e569',
		name : 'ADMIN',
	},
	{
		_id  : '61c02563b7ae1f8f80d7e56a',
		name : 'STAFF',
	},
];

async function seed () {
	await mongoose.connect('mongodb://localhost:27017/ManagementTool');

	await ROLEMODEL.deleteMany({});
	await ROLEMODEL.insertMany(data);

	console.log(await ROLEMODEL.find({}));

	mongoose.disconnect();

	console.info('Done!');
}

seed();
