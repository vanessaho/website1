$(document).ready(function() {
    var $window = $(window),
        $magic = $('.magic');
    
    $magic.each(function() {
        var $this = $(this);
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / 10);
            var coords = '50%' + yPos + 'px';

            $this.css({
                backgroundPosition: coords
            });
        });
    })
    
    var now = new Date(Date.now()),
        hour = now.getHours(),
        $greetings = $(".greeting");
    
    if (hour > 16) {
        $greetings.hide();
        $('.g3').css('display', 'block');
    } else if (hour > 12) {
        $greetings.hide();
        $('.g2').css('display', 'block');
    } else if (hour > 7) {
        $greetings.hide();
        $('.g1').css('display', 'block');
    } else {
        $greetings.hide();
        $('.g4').css('display', 'block');
    }
    
   var $skillbar = $(".skillbar");
    var current = $window.scrollTop(),
           target = $("#skillset").offset().top - 50;
    
    $(function() {
        function load() {
            $skillbar.each(function() {
                $(this).animate({
                    width: $(this).data("percent")
                });
            });
        };
        
        $(document).bind('scroll', function(ev) {
        var scrollOff = $(document).scrollTop();
        var containerOff = $("#skillset").offset().top +  50 - window.innerHeight;
        
        if (scrollOff > containerOff) {
                load();
                $(document).unbind('scroll');
            }
        });
    });
    
    
    
    var currentIndex = 0,
        $items = $('#slider .pdf'),
        $length = $items.length,
        $prev = $('#prev'),
        $next = $('#next');
    
    console.log($length);
    
    function showItem() {
        var $item = $('#slider .pdf').eq(currentIndex);
        $items.hide();
        $item.css('display', 'inline-block');
    }
    
    $next.click(function() {
       currentIndex += 1;
        if (currentIndex > $length - 1) {
            currentIndex = 0;
        }
        
        showItem();
    });
    
    $prev.click(function() {
       currentIndex -= 1;
        if (currentIndex < 0) {
            currentIndex = $length - 1;
        }
        showItem();
    });
    
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
  });
});
    
    
});