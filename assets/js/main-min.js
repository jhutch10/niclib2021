jQuery(document).ready(function($){$('dd').hide();$('dt').click(function(){$(this).next().slideToggle('slow');let icon=$(this).find('.expand-icon').children();if(icon.hasClass('fa-plus-circle')){icon.removeClass('fa-plus-circle').addClass('fa-minus-circle');}else{icon.removeClass('fa-minus-circle').addClass('fa-plus-circle');}}) $('.emailForm textarea').keypress(function(){if($('.emailForm #name').val()!=''&&$('.emailForm #email').val()!=''){$('.submit-button').prop('disabled',false);}}) $(window).resize(function(){if($(window).width()<992){$('.mobile-menu').addClass('navbar-collapse');}else{$('.mobile-menu').removeClass('navbar-collapse');}}) if($(window).width()<992){$('.mobile-menu').addClass('navbar-collapse');} $('.mobile-child-menu').hide();$('.mobile-menu-item').click(function(){$(this).children('.mobile-child-menu').slideToggle();let icon=$(this).find('.menu-expand-icon').children();if(icon.hasClass('fa-caret-down')){icon.removeClass('fa-caret-down').addClass('fa-caret-up');}else{icon.removeClass('fa-caret-up').addClass('fa-caret-down');}})})
