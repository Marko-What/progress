$('td.toggleTrue').on('click', function(){
			$(this).toggleClass('False');
			if($(this).text() == 'True') {$(this).text('False');}
			if($(this).text() == 'False') {$(this).text('True');}
			
		});

		
		$('div#buttonNew.add').on('click', function(){
			tr = $('tr.default').clone(true);
			
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


		$('div#buttonNew.saveDatabase').on('click', function(){
			
			function save(){
			out=confirm('saving to database');
			  if(out == true) { 
			$('form').attr('action','saveDatabase.php');
			$('#submit_100').trigger('click');
			$('form').attr('action','excel.php');
			} /* end of if true saving */
			}  /* end of if true save */
			save();
		 
		});
