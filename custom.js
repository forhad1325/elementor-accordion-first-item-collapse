jQuery(document).ready(function($) {
	// Close Elementor default Accordion
	setTimeout(function() {
        var firstAccordionItemTitle = $('.elementor-accordion .elementor-accordion-item:first-child .elementor-tab-title');
        var firstAccordionItemContent = $('.elementor-accordion .elementor-accordion-item:first-child .elementor-tab-content');
        
        if (firstAccordionItemTitle.length && firstAccordionItemContent.length) {
            firstAccordionItemTitle.removeClass('elementor-active'); // Remove the active class from the tab
            firstAccordionItemContent.removeClass('elementor-active').hide(); // Hide the content and remove active class
            firstAccordionItemTitle.attr('aria-expanded', 'false');
            firstAccordionItemContent.attr('aria-hidden', 'true').css('display', 'none');
        }
    }, 1000);

});
