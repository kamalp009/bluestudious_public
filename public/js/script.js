$(function() {
  
    function renderMarkup() {
      var arrayObjects = [];
      var arrayDays = [];
      $('.live-stream-object').each(function() {
        var element = $(this);
        var obj = {
          title: element.find('.obj-title').text(),
          streamUrl:element.find('.obj-stream-url').text(),
          authorName: element.find('.obj-author-name').text(),
          authorAvatar: element.find('.obj-author-avatar').attr('src'),
          description: element.find('.obj-description').text(),
          date: new Date(element.find('.obj-date').text())
        }
        arrayObjects.push(obj);
        var dt = new Date(element.find('.obj-date').text());
        var dtpush = dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();
        arrayDays.push(dtpush)
      })
      //console.log(arrayDays)
      function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
      }
      
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      arrayDays = arrayDays.filter( onlyUnique );
      
      arrayDays.forEach(function(el){
        var ele = new Date(el);
        var year = ele.getFullYear();
        var month = ele.getMonth() + 1;
        var date = ele.getDate();
        var dayName = days[ele.getDay()];
        var dayHTML = '<div> <div class="date-slide" data-target="date-'+year+'-'+date+'-'+month+'"> <div class="date-slide-day"> <span>'+dayName.substr(0,1)+'</span> <span>'+dayName.substr(0,3)+'</span> </div><div class="date-slide-date">'+date+'</div></div></div>'
        $('.date-slider').append(dayHTML);
        $('.livestream-page__days').append('<div class="livestream-page__day date-'+year+'-'+date+'-'+month+'"><date class="livestream-page__day-date" datetime="'+ele+'">'+dayName+', '+monthNames[month-1]+' '+date+'</date><div class="livestream-page__day-table"></div></div>')
        arrayObjects.forEach(function(e){
          //console.log(String(ele))
          var dtcheck = e.date.getFullYear() + "/" + (e.date.getMonth() + 1) + "/" + e.date.getDate();
          //console.log(String(new Date(dtcheck)))
          if (String(new Date(dtcheck)) === String(ele)) {
            var rowHTML = '<div class="livestream-page__day-table-row" data-description="'+e.description+'"> <div> <date datetime="'+e.date+'">'+e.date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })+'</date> </div><div> <div class="livestream-info"> <div class="livestream-info__ava"> <img src="'+e.authorAvatar+'" alt="'+e.authorName+'"> </div><div class="livestream-info__content"> <h3>'+e.title+'</h3> <p>'+e.authorName+'</p></div></div></div><div> <div class="livestream--actions"> <a href="'+e.streamUrl+'" target="_blank" class="join-link">JOIN CLASS</a> <a href="" class="count-me">COUNT ME IN</a> </div></div></div>'
            $('.date-'+year+'-'+date+'-'+month).find('.livestream-page__day-table').append(rowHTML)
          }
        })
      })
    }
    renderMarkup()
    
    
    function scrollWindowScriptis() {
      var top;
      $(window).on('scroll', function() {
        top = $(this).scrollTop();
        if (top >= $('.header').innerHeight()) {
          $('.date-slider-wrapper').addClass('fixed')
        } else {
          $('.date-slider-wrapper').removeClass('fixed')
        }
        var currentSection = $('.livestream-page__day').eq(0);
        $('.livestream-page__day').each(function(){
          var sectionOffsetTop = $(this).offset().top - 120;
          if (top > sectionOffsetTop) {
            currentSection = $(this)
          }
        })
        var currentSliderDay = $('.date-slide[data-target="'+ currentSection.attr('class').substring(21) +'"]');
        $('.date-slide').removeClass('active-day')
        currentSliderDay.addClass('active-day')
        if (!currentSliderDay.parent().hasClass('slick-active')) {
          if (currentSliderDay.parent().next().hasClass('slick-active')) {
            $('.date-slider').slick("slickPrev");
          } else {
            $('.date-slider').slick("slickNext");
          }
        }
        
      })
    }
    
    function initApp() {
      // init date slider and add scripts on click for each day for scroll
      $('.date-slide').eq(0).addClass('active-day')
      $('.date-slide').on('click', function(){
        var target = $(this).data('target');
        if ($("." + target).length) $('html, body').animate({scrollTop: $("." + target).offset().top - 110}, 300);
      })
      $('.date-slider').slick({
        infinite: false,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5
            }
          }
        ]
      });
      
      // init scroll scripts for window
      scrollWindowScriptis()
      
      // open modal window on livestream action click 
      var modal = new tingle.modal({
          footer: true,
          stickyFooter: false,
          closeMethods: ['overlay', 'button', 'escape'],
          closeLabel: "Close",
          cssClass: ['custom-modal'],
          onOpen: function() {
          },
          onClose: function() {
          }
      });
      
      $('.count-me').on('click', function(e){
        e.preventDefault();
        var row = $(this).parents('.livestream-page__day-table-row');
        var src, authorAva, date, dateHTML, title, titleHTML, author, authorHTML,
        link, linkHTML;
        
        src= row.find('.livestream-info__ava img').attr('src');
        authorAvaHTML = '<div class="modal-author-ava"><img src="'+src+'"></div>';
  
        date = new Date(row.find('date').attr('datetime'));
        dateHTML = '<div class="modal-date">'+date.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })+'</div>';
        
        title = row.find('.livestream-info__content h3').text(); 
        titleHTML = '<h2 class="modal-title">'+title+'</h2>';
        
        author = row.find('.livestream-info__content p').text(); 
        authorHTML = '<h3 class="modal-author">'+author+'</h3>';
        
        description = row.data('description');
        descriptionHTML = '<div class="modal-description">'+description+'</div>';
        
        link = row.find('.livestream--actions .join-link').attr('href');
        linkHTML = '<a class="modal-link" href="'+link+'" target="_blank">Live Class Page</a>';
        
        calendarHTML = '<h3 class="add-calendar-title">Add to Calendar:<h3><div id="addToCalendar"></div>'
        
        var myCalendar = createCalendar({
          options: {
            class: 'add-calendar-custom-class'
          },
          data: {
            // Event title
            title: title,
            // Event start date
            start: new Date(date),
            // Event duration (IN MINUTES)
            duration: 120,
            // Event Address
            address: link,
            // Event Description
            description: description
          }
        });
        
        modal.setContent(authorAvaHTML + dateHTML + titleHTML + authorHTML + linkHTML + calendarHTML);
        document.querySelector('#addToCalendar').appendChild(myCalendar);
        
        modal.open();
      })
              
    }
    initApp()
    
  })