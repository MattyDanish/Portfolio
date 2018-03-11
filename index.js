$(function() {
  
  
function scrollToAnchor(aid){
    var aTag = $("div[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}


$(".bio").click(function() {
   scrollToAnchor('AboutMe');
});

$(".resume").click(function() {
   scrollToAnchor('resume');
});

$(".projects").click(function() {
   scrollToAnchor('Projects');
});


$(".boxed").click(function() {
   scrollToProjects('boxed');
});

$('.resumeLink').click(function() {
  $('.modal').css("display","block")
});
$('.modal div a').click(function() {
    $('.modal').css("display","none")
});
});