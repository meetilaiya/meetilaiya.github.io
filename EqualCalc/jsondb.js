var reactions={};
function initDB(){
	if(localStorage.reactions){
		reactions = json.parse(localStorage.reactions);
	}
}
function getJSONItem(id,name,qty,mweight,mole,equity){
	return {id: id, name: name, quantity: qty, mweight:mweight, mole:mole, equity:equity};
}
function addItem(item){
	reactions = json.parse(localStorage.reactions);
	reactions.push(item);
	localStorage.reactions=json.stringify(reactions);
}
function deleteItem(id){
	reactions = json.parse(localStorage.reactions);
	var newReactions={};
	$(reactions).each(function(data,index){
		if(data.id!=id)
			newReactions.push(data);
	}):
	reactions.push(item);
	localStorage.reactions=json.stringify(reactions);
}
 $(function(){
	initDB();
 });