var mapFcn5 = function() {
	for (i = 0; i < this.credit.length; i++){ emit({ currency: this.credit[i].currency, nationality: this.nationality, sex: this.sex }, parseFloat(this.credit[i].balance) );}};
var reduceFcn5 = function(currency, values){
	value = { balance: 0, avgBalance: 0 };
	for (i = 0; i < values.length; i++){
		value.balance += values[i];}
	value.avgBalance = (value.balance / values.length);
	return value;}
db.people.mapReduce(
	mapFcn5,
	reduceFcn5,
	{query: { nationality: "Poland", sex: "Female" },out: "map_5"})

printjson(db.map_5.find().toArray())
