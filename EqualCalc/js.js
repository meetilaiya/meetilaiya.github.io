 var keyMaterialQty=0;
 var keyMaterialMW=0;
 var keyMaterialMole=0;
 var keyMaterialEquity=1;
 function getButton(type,id,name){
	 switch(type){
		 case "delete":
			return '<a id="'+id+'" href="#" class="clsBtnRowDelete ui-btn ui-btn-inline ui-icon-delete ui-btn-icon-left">'+name+'</a>';
			break;
		case "liquid":
			return '<a id="'+id+'" href="#" class="clsBtnRowLiquid ui-btn ui-btn-inline ui-icon-delete ui-btn-icon-left">'+name+'</a>';
			break;
		case "strength":
			return '<a id="'+id+'" href="#" class="clsBtnRowStrength ui-btn ui-btn-inline ui-icon-delete ui-btn-icon-left">'+name+'</a>';
			break;
		default:break;
	 }
 }
 function getEquity(mole){
	var res= (parseFloat(mole)/parseFloat(keyMaterialMole)).toFixed(2);
	return res;
 }
 function getMole(equity){
	var res= (parseFloat(keyMaterialMole)*parseFloat(equity)).toFixed(4);
	return res;
 }
 function getQuantity(mWeight,mole){
	 var res=mWeight*mole;
	return res.toFixed(2);
 }
 function clearAllTexts(){
	$("#idtxtQty").val("");
	$("#idTxtMWeight").val("");
	$("#idTxtMole").val("");
	$("#idtxtEquity").val("");
	$("#idtxtVolume").val("");
 }
 function addNewMaterial(){
	var materialCount = $("#idTblBody").find("tr").length;
	var qnty = $("#idtxtQty").val();
	var mWeight = $("#idTxtMWeight").val();
	var mole = $("#idTxtMole").val();
	var equity = $("#idtxtEquity").val();
	var volume = $("#idtxtVolume").val();
	
	if(mWeight=="" && (volume=="" || volume=="0")){
		alert("M.Weight cannot be empty");
		return false;
	}
	 
	if(materialCount<=0){
		volume="0";
		if(qnty==""){
		 alert("Quantity cannot be empty for the keyt material");
		 return false;
		}
		mole = (parseFloat(qnty)/parseFloat(mWeight)).toFixed(4);
		if(equity=="") equity=1;
		
		 keyMaterialQty=qnty;
		 keyMaterialMW=mWeight;
		 keyMaterialMole=mole;
		 keyMaterialEquity=equity;
	}else{
		if(volume=="" || volume=="0"){
			volume="0";
			if(mole!=""){
				equity = getEquity(mole);
			}else if(equity!=""){
				 mole = getMole(equity);			
			}else{
			 alert("At least one of Mole or Equity is needed");
			 return false;
			}
			qnty =getQuantity(mWeight,mole);
		}
	}
/* 	 if(mole!="" && isNaN(mole)){
		 alert("Mole should be anumber");
		 return false;
	 } */
	 
	 var name = prompt("Enter Name:");
	 if(materialCount==0){
		 keyMaterialQty=qnty;
		 keyMaterialMW=mWeight;
		 keyMaterialMole=mole;
		 keyMaterialEquity=equity;
	 }
	 //alert("keyMaterialMW="+keyMaterialMW);
	 
	 var changeLiquidButton = getButton("liquid",materialCount+1,"Change");
	 var changeStrengthButton = getButton("strength",materialCount+1,"Change");
	 if(materialCount<=0){
		 changeLiquidButton="";
		 changeStrengthButton="";
	 }
	 row="<tr>"
          +"<td class='clsColName'>"+name+"</td>"
          +"<td class='clsColQuantity'>"+qnty+"</td>"
          +"<td class='clsColMWeight'>"+mWeight+"</td>"
          +"<td class='clsColMole'>"+mole+"</td>"
          +"<td class='clsColEquity'>"+equity+"</td>"
          +"<td class='clsColVolume'>"+volume+"</td>"
          +"<td class='clsColChangeStrength'>"+changeStrengthButton+"</td>"
          +"<td class='clsColChangeLiquid'>"+changeLiquidButton+"</td>"
          +"<td class='clsColDelete'>"+getButton("delete",materialCount+1,"Delete")+"</td>"
        +"</tr>";
	if(volume!="0")
	 row="<tr>"
          +"<td class='clsColName'>"+name+"</td>"
          +"<td colspan='4'>"+(volume*keyMaterialQty)+"</td>"
          +"<td>"+volume+"</td>"
          +"<td class='clsColChange'></td>"
          +"<td class='clsColChange'></td>"
          +"<td>"+getButton("delete",materialCount+1,"Delete")+"</td>"
        +"</tr>";
	
	 $("#idTblBody").append(row);
	 clearAllTexts();
	 return false;
 }
 function deleteMaterial(elem){
	// alert($(elem).parent().html());
	$(elem).parent().parent().remove();
 }
 function changeToLiquid(elem){
	 
	var dencity=prompt("Enter dencity:");
	if(dencity==""){
		 alert("Dencity cannot be empty for liquid");
		 return false;
	}
	var solidQty = $(elem).parent().parent().find('.clsColQuantity').html();
	var liquidQty = (parseFloat(solidQty)/dencity).toFixed(2);
	//alert($(elem).parent().parent().find('.clsColQuantity').html());
	$(elem).parent().parent().find('.clsColQuantity').html(liquidQty);
	//$(elem).data('disabled',true);
	//alert($(elem).data('disabled'));
	$(elem).addClass('ui-disabled');
 }
 function changeToStrength(elem){
	 
	var strength=prompt("Enter Strength:");
	if(strength==""){
		 alert("Strength cannot be empty for liquid");
		 return false;
	}
	var thisMole = $(elem).parent().parent().find('.clsColMole').html();
	var thisQty = (parseFloat(thisMole)*1000/strength).toFixed(2);
	//alert($(elem).parent().parent().find('.clsColQuantity').html());
	$(elem).parent().parent().find('.clsColQuantity').html(thisQty);
	//$(elem).data('disabled',true);
	//alert($(elem).data('disabled'));
	$(elem).addClass('ui-disabled');
 }
 
 $(function(){
	$("#idBtnAddMaterial").click(function(e){
		addNewMaterial();
		e.preventDefault();
	});
	$("#idBtnClearAll").click(function(){
		if(confirm("Are you sure?"))
		$("#idTblBody").html("");
	});
	$("#idTblBody").on("click",".clsBtnRowDelete",function(){
	
		if(confirm("Are you sure?"))
		deleteMaterial(this);
	});
	$("#idTblBody").on("click",".clsBtnRowLiquid",function(){
		changeToLiquid(this);
	});
	$("#idTblBody").on("click",".clsBtnRowStrength",function(){
		changeToStrength(this);
	});
	
	
 });
 //http://demos.jquerymobile.com/1.4.5/button-markup/#&ui-state=dialog