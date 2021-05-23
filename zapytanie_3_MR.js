var mapFcn3 = function() {
	emit('job', this.job);}
var reduceFcn3 = function(job, values){
	var setjob = new Set();
	for( i = 0; i < values.length; i++){ setjob.add(values[i]);}
	var occupation = [];
	setjob.forEach(job => { occupation.push(job)});
	return occupation;}
db.people.mapReduce(
	mapFcn3,
	reduceFcn3,
	{out: "map_3"}
)

printjson(db.map_3.find().toArray())
