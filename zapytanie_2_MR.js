var mapFcn2 = function() {
	for (i = 0; i < this.credit.length; i++){
		emit(this.credit[i].currency, parseFloat(this.credit[i].balance));}};
var redFcn2 = function(curreny, balance) {
	balance = 0;
	for (i = 0; i < balance.length; i++){
		balance += balance[i];}
	return balance;}
db.people.mapReduce(
	mapFcn2,redFcn2,
	{out: "map_2",})

printjson(db.map_2.find().toArray())
