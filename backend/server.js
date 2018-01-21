const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const Item = require('./modules/Item.js');
const Armor = require('./modules/Armor.js');
const Boots = require('./modules/Boots.js');
const Gloves = require('./modules/Gloves.js');
const Helm = require('./modules/Helm.js');
const Pants = require('./modules/Pants.js');
const Pendant = require('./modules/Pendant.js');
const Ring = require('./modules/Ring.js');
const Shoulders = require('./modules/Shoulders.js');

//Adding to the Middleware
app.use(cors());
app.use(bodyParser.json());

app.get('/gethelms', async (req, res) => {
	const helms = await Helm.find({});
	res.send(helms)
});

app.get('/getarmors', async (req, res) => {
	const armors = await Armor.find({});
	res.send(armors);
});

app.get('/getboots', async (req, res) => {
	const boots = await Boots.find({});
	res.send(boots);
});

app.get('/getgloves', async (req, res) => {
	const gloves= await Gloves.find({});
	res.send(gloves);
});

app.get('/getpants', async (req, res) => {
	const pants = await Pants.find({});
	res.send(pants);
});

app.get('/getpendants', async (req, res) => {
	const pendants = await Pendant.find({});
	res.send(pendants);
});

app.get('/getrings', async (req, res) => {
	const rings = await Ring.find({});
	res.send(rings);
});

app.get('/getshoulders', async (req, res) => {
	const shoulders = await Shoulders.find({});
	res.send(shoulders);
});

app.post('/addnew', function(req, res)  {
	let item = undefined;
	const itemData = req.body;
	if(itemData.type === 'Armor') { item = new Armor(itemData) }
	if(itemData.type === 'Boots') { item = new Boots(itemData) }
	if(itemData.type === 'Gloves') { item = new Gloves(itemData) }
	if(itemData.type === 'Helm') { item = new Helm(itemData) }
	if(itemData.type === 'Pants') { item = new Pants(itemData) }
	if(itemData.type === 'Pendant') { item = new Pendant(itemData) }
	if(itemData.type === 'Ring') { item = new Ring(itemData) }
	if(itemData.type === 'Shoulders') { item = new Shoulders(itemData) }
	item.save((err, result) => {
		if (err) console.log(err);
		console.log('New item added');
		res.send(req.body);
	});

});

app.post('/remove', function(req, res)  {
	const item = req.body;
	switch (item.type) {
		case 'Helm': Helm.remove({_id: item._id},(err) => {
			if(err) console.log(err);
		}); break;
		case 'Armor': Armor.remove({_id: item._id},(err) => {
			if(err) console.log(err);
		}); break;
		case 'Boots': Boots.remove({_id: item._id},(err) => {
			if(err) console.log(err);
		}); break;
		case 'Gloves': Gloves.remove({_id: item._id},(err) => {
			if(err) console.log(err);
		}); break;
		case 'Pants': Pants.remove({_id: item._id},(err) => {
			if(err) console.log(err);
		}); break;
		case 'Pendant': Pendant.remove({_id: item._id},(err) => {
			if(err) console.log(err);
		}); break;
		case 'Ring': Ring.remove({_id: item._id},(err) => {
			if(err) console.log(err);
		}); break;
		case 'Shoulders': Shoulders.remove({_id: item._id},(err) => {
			if(err) console.log(err);
		}); break;
	}
	res.send(item);
});
mongoose.connect('mongodb://admin:admin@ds046047.mlab.com:46047/first').then(
		() => { console.log('Connected to mongo') },
		err => { console.log(err)}
);

app.listen(4000, () => {
	console.log('Listening on port: 4000');
});