db.people.aggregate([
	{ $group: {
		_id: "$nationality",
		minBmi: { $min: { $divide: [ { $convert: { input: "$weight", to: "double"} }, { $pow: [ { $divide: [ { $convert: { input: "$height", to: "double" } }, 100 ] } , 2 ] } ]} },
		avgBmi: { $avg: { $divide: [ { $convert: { input: "$weight", to: "double"} }, { $pow: [ { $divide: [ { $convert: { input: "$height", to: "double" } }, 100 ] } , 2 ] } ]} },
		maxBmi: { $max: { $divide: [ { $convert: { input: "$weight", to: "double"} }, { $pow: [ { $divide: [ { $convert: { input: "$height", to: "double" } }, 100 ] } , 2 ] } ]} },
	}},
	{ $out: "agg4" }
])

printjson(db.agg4.find().toArray())
