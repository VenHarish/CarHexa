/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5ea3476182f82d390e77c9df
*
* You will get 10% discount for each one of your friends
* 
*/
/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE Passenger.js PLEASE EDIT ../custom/PassengerCustom.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
const app = require('../../app.js');
const db_CarHexa_db = require('../../db/CarHexa_db_schema.js')
const properties = require('../../properties.js');
const handleError = require('../../security/util.js').handleError;
require('./custom/PassengerCustom.js');

/*
 * SCHEMA DB Passenger
 * 
	{
		Address: {
			type: 'String'
		},
		FirstName: {
			type: 'String'
		},
		LastName: {
			type: 'String'
		},
		PhoneNumber: {
			type: 'String'
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		_drivers: {
			type: Schema.ObjectId,
			ref : "Passenger"
		},
		_passenger: {
			type: Schema.ObjectId,
			ref : "Driver"
		},
		
	}
 * 
 */



//CRUD METHODS


/**
 * PassengerService.create
 *   @description CRUD ACTION create
 *
 */
app.post(properties.api + '/passenger', function (req, res) {
	obj = new db_CarHexa_db.Passenger(req.body);
	obj.save(function (err) {
		if (err) return handleError(err, res);
		res.send(obj);
	});
});

/**
 * PassengerService.delete
 *   @description CRUD ACTION delete
 *   @param ObjectId id Id
 *
 */
app['delete'](properties.api + '/passenger/:id', function (req, res) {
	db_CarHexa_db.Passenger.findByIdAndRemove(req.params.id, function (err) {
		  if (err) return handleError(err, res);
		  res.send(err);
	});
});

/**
 * PassengerService.findBy_drivers
 *   @description CRUD ACTION findBy_drivers
 *   @param Objectid key Id of model to search for
 *
 */
app.get(properties.api + '/passenger/findBy_drivers/:key', function (req, res) {

	db_CarHexa_db.Passenger.find({ '_drivers' : req.params.key}).exec(function (err, list) {
		if (err) return handleError(err, res);
		res.send(list);
	});
	
});

/**
 * PassengerService.get
 *   @description CRUD ACTION get
 *   @param ObjectId id Id resource
 *
 */
app.get(properties.api + '/passenger/:id', function (req, res) {
	db_CarHexa_db.Passenger.findOne({_id:req.params.id}).exec(function (err, obj) {
		if (err) return handleError(err, res);
		res.send(obj);
	});
});

/**
 * PassengerService.list
 *   @description CRUD ACTION list
 *
 */
app.get(properties.api + '/passenger', function (req, res) {
	db_CarHexa_db.Passenger.find().exec(function (err, list) {
		if (err) return handleError(err, res);
		res.send(list);
	});
});

/**
 * PassengerService.update
 *   @description CRUD ACTION update
 *   @param ObjectId id Id
 *
 */
app.post(properties.api + '/passenger/:id', function (req, res) {
	db_CarHexa_db.Passenger.findByIdAndUpdate(req.params.id, req.body, {'new': true}, function (err, obj) {
		if (err) return handleError(err, res);
		res.send(obj);
	});
});


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */

