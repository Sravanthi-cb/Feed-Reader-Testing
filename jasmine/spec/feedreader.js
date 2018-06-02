/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

$(function() {
    /* This is first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('url defined', function() {
            allFeeds.forEach(function(item){
                expect(item.url).toBeDefined();
                expect(item.url.length).not.toBe(0);

            });            
            
        });


        /* test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name defined', function() {
            allFeeds.forEach(function(item){
                expect(item.name).toBeDefined();
                expect(item.name.length).not.toBe(0);

            });            
            
        });
    });


    /* test suite named "The menu" */         

    describe('The menu', function() {
        /* test that ensures the menu element is
         * hidden by default. 
         */
        it('menu element is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
        /* test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('menu changes visibility when the menu icon is clicked', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeFalsy();
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
      });


    /*test suite named "Initial Entries" */

        /* test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        describe('Initial Entries', function() {
            let item;
            beforeEach(function(done){
                loadFeed(0, function(){
                    item = $('.feed .entry').length;
                    done();
                });
            });
            it('has one entry', function(done){
                expect(item).not.toBe(0);
                done();
            });
        }); 

    /*test suite named "New Feed Selection" */

        /*test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */



        describe('New Feed Selection', function() {
        
          let oldFeed,
              newFeed;
              
          beforeEach(function(done){
            loadFeed(0, function(){
                oldFeed = document.querySelector('.feed').innerHTML;
                done();
            });
            
            loadFeed(1, function(){
                newFeed = document.querySelector('.feed').innerHTML;
                done();
            });
        
          });

          it('new feed is loaded when the content changes', function(done){
            expect(oldFeed).not.toEqual(newFeed);         
            done();
          });         
        
        });     
}());
