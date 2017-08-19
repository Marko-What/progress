tr = $('tr.default').clone(true);	
	
	$('td.toggleTrue').on('click', function(){
			$(this).toggleClass('False');
			if($(this).text() == 'True') {$(this).text('False');}
			if($(this).text() == 'False') {$(this).text('True');}
		});

		
		$('div#buttonNew.CreateTh').on('click', function(){	
			 $('div#inputTh').animate({'margin-top':'-500px'},350, function(){
				 $('div#wrapper').css('display', 'block');
				 $('div#inputTh').css('display', 'none');
			}); /* end of inputTh*/
			th =  $('div#inputTh input').val();
			th = "<th>" + th + "</th>";
			trTh = $('tr.th');
			trTh.append(th);
			trth = "<td><input type='text' name='id[]' class='id'></td>";
			tr.append(trth);
			/*tr.append(trth);*/
			/*tr =tr.append(trTh);*/
			tr.removeClass("default").appendTo('div#wrapper table');
				
	
		});





		$('div#buttonNew.add').on('click', function(){
			tr = $('tr').last().clone(true);
			tr.removeClass("default").appendTo('div#wrapper table');
		});
		
		$('div#buttonNew.remove').on('click', function(){
			trCount = $('tr').size();
			if(trCount > 3) {
			 out=confirm("Delete row?");
					if(out == true) { 
				$('div#wrapper table tr').last().remove();
			}
		  } else {
			confirm('no rows to delete');	
		}
					
		});


		$('div#buttonNew.CreateNewTableRow').on('click', function(){

			 $('div#wrapper').css('display', 'none');
			 $('div#inputTh').css('display', 'block');
			 $('div#inputTh').animate({'margin-top':'0px'},350);
		
		});
	
		
		$('div#buttonNew.RemoveNewTableRow').on('click', function(){
			$('tr.th').children('th').last('th').remove();
			$('tr').children('td').last('td').remove();
		});
