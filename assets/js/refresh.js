function refreshData(){
	var jsonData = JSON.parse(getData());
	console.log(jsonData);
	function getPeronalData(attr){
		return jsonData['personal'][attr];
	}
	function getUserinfo(attr){
		return getPeronalData('userinfo')[attr];
	}
	function refreshUserInfo(){
		//alert(jsonData['personal']['userinfo']['email']);
		
		var wrapperHtml=$('.wrapper').html();
		function myreplace(replacewith,replacewhat){
			replacewith = (RegExp(replacewith,"g"));
			wrapperHtml = wrapperHtml.replace(replacewith,replacewhat);
		}
		myreplace('{profileimage}',getUserinfo('image'));
		myreplace('{username}',getUserinfo('name'));
		myreplace('{userrole}',getUserinfo('role'));
		myreplace('{useremail}',getUserinfo('email'));
		myreplace('{userphno}',getUserinfo('phone'));
		myreplace('{userwebsite}',getUserinfo('website'));
		myreplace('{userlinkedin}',getUserinfo('linkedin'));
		myreplace('{usergithub}',getUserinfo('github'));
		
		$('.wrapper').html(wrapperHtml);
	}
	refreshUserInfo();
	function refreshEducation(){
		var elem = $(".education-container");
		var title=$('<h2 class="container-block-title">Education</h2>');
		var itemTemplate='<div class="item">'
					+'<h4 class="degree">{degree}</h4>'
					+'<h5 class="meta">{university}</h5>'
					+'<div class="time">{duration}</div>'
					+'</div>';
		var edData = jsonData['personal']['education'];
		elem.html('').append(title);
		$(edData).each(function(index,data){
			var item = itemTemplate;
			item = item.replace('{degree}',data['degree']);
			item = item.replace('{university}',data['university']+", "+data['place']);
			item = item.replace('{duration}',data['yearstart']+" - "+data['yearend']);
			elem.append($(item));
		});
	}
	refreshEducation();
	function refreshLanguages(){
		var elem = $(".languages-container");
		var title=$('<h2 class="container-block-title">Languages</h2>');
		var elemUl = $('<ul class="list-unstyled interests-list"></ul>');
		var itemTemplate=
			'<li>{name} <span class="lang-desc">({level})</span></li>';
			
		var edData = jsonData['personal']['languages'];
		$(edData).each(function(index,data){
			var item = itemTemplate;
			item = item.replace('{name}',data['name']);
			item = item.replace('{level}',data['level']);
			elemUl.append($(item));
		});
		elem.html('').append(title).append(elemUl);
	}
	refreshLanguages();
	function refreshInterests(){
		var elem = $(".interests-container");
		var title=$('<h2 class="container-block-title">Interests</h2>');
		var elemUl = $('<ul class="list-unstyled interests-list"></ul>');
		var itemTemplate=
			'<li>{name}</li>';
			
		var edData = jsonData['personal']['interests'];
		$(edData).each(function(index,data){
			var item = itemTemplate;
			item = item.replace('{name}',data);
			elemUl.append($(item));
		});
		elem.html('').append(title).append(elemUl);
	}
	refreshInterests();
	function refreshCareerProfile(){
		var elem = $(".summary-section");
		elem.html(elem.html().replace('{careerprofilecontent}',jsonData['careerprofile']['content']));
	}
	refreshCareerProfile();
	function refreshExperiences(){
		var elem = $(".experiences-section");
		var title=$('<h2 class="section-title"><i class="fa fa-briefcase"></i>Experiences</h2>');
		var itemTemplate='<div class="item">'
						+'<div class="meta">'
							+'<div class="upper-row">'
								+'<h3 class="job-title">{deisgnation}</h3>'
								+'<div class="time">{duration}</div>'
							+'</div>'
							+'<div class="company">{company}</div>'
						+'</div>'
						+'<div class="details">'
							+'<p>{description}</p>' 
						+'</div>'
					+'</div>';
		var expData = jsonData['experiences'];
		elem.html('').append(title);
		$(expData).each(function(index,data){
			var item = itemTemplate;
			item = item.replace('{deisgnation}',data['designation']);
			item = item.replace('{company}',data['company']+", "+data['place']);
			item = item.replace('{duration}',data['yearstart']+" - "+data['yearend']);
			item = item.replace('{description}',data['content']);
			elem.append($(item));
		});
	}
	refreshExperiences();
	function refreshProjects(){
		var elem = $(".projects-section");
		var title=$('<h2 class="section-title"><i class="fa fa-archive"></i>Projects</h2>');
		var intro =$('<div class="intro"><p>Below are the list of major projects I have been working during my career</p></div>');
		var itemTemplate='<div class="item">'
						+'<span class="project-title"><a href="#{link}">{name}</a></span> - <span class="project-tagline">{description}</span>'
					+'</div>';
		var projData = jsonData['projects'];
		elem.html('').append(title).append(intro);
		$(projData).each(function(index,data){
			var item = itemTemplate;
			item = item.replace('{link}',data['link']);
			item = item.replace('{name}',data['name']);
			item = item.replace('{description}',data['content']);
			elem.append($(item));
		});
	}
	refreshProjects();

	function refreshSkills(){
		var elem = $(".skills-section");
		var title=$('<h2 class="section-title"><i class="fa fa-rocket"></i>Skills &amp; Proficiency</h2>');
		var contentWrapper=$('<div class="skillset"></div>');
		var itemTemplate='<div class="item">'
						+'<h3 class="level-title">{name}</h3>'
						+'<div class="level-bar">'
							+'<div class="level-bar-inner" data-level="{percentage}%">'
							+'</div>'
						+'</div>'
					+'</div>';
		var skillsData = jsonData['skills'];
		$(skillsData).each(function(index,data){
			var item = itemTemplate;
			item = item.replace('{name}',data['name']);
			item = item.replace('{percentage}',data['percentage']);
			contentWrapper.append($(item));
		});
		elem.html('').append(title).append(contentWrapper);
	}
	refreshSkills();
	function refreshFooter(){
		var footerHtml = $('.footer').html();
		footerHtml = footerHtml.replace('{websightdesignedby}','Designed by');
		footerHtml = footerHtml.replace('{websightdesignedbylink}','http://www.meetilaiya.in');
		footerHtml = footerHtml.replace('{websightdesignedbyname}','Ilaiya');
		footerHtml = footerHtml.replace('{websightdesignedfor}',' for job seekers');
		$('.footer').html(footerHtml);
	}
	refreshFooter();
}