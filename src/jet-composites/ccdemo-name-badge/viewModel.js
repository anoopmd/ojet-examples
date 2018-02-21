define(['ojs/ojcore', 'knockout', 'jquery'], function (oj, ko, $) {
    function CCDemoNameBadgeComponentModel(context) {
        var self = this;
        self.composite = context.element;
        //Example observable
        self.messageText = ko.observable('Hello from Example Component');

        context.props.then(function (propertyMap) {
            //Store a reference to the properties for any later use
            self.properties = propertyMap;
            if(self.properties.callback) {
                setTimeout(() => self.properties.callback(), 0)   
            }

            //Parse your component properties here 
            setTimeout(() => self.properties.badgeName = 'Euclid', 4000);
        });

        $(self.composite).on('badgeNameChanged',function(event){
            // console.log(event.detail.updatedFrom);
            if (event.detail.updatedFrom === 'external'){
                // console.log('Here');
            }
        });

        $(self.composite).on('click keypress',function(event){
            var eventParams = {
                'bubbles' : true,
                'cancelable' : false,
                'detail' : {
                    'nameOnBadge' : self.properties.badgeName
                }
            };
            //Raise the custom event
           self.composite.dispatchEvent(new CustomEvent('badgeSelected',
                                                        eventParams));
       });

      this.lastSetColor = 'white';
      self._setBackgroundColor = function (colorToSet) {
        var wasChanged = true;
        if (self.lastSetColor !== undefined && self.lastSetColor === colorToSet){
            wasChanged = false;
        }
        else {
            $(self.composite).children('.badge-face').css('background',colorToSet);
            self.lastSetColor = colorToSet;
        }
        return wasChanged;
      };
    };
    
    //Lifecycle methods - uncomment and implement if necessary 
    //CCDemoNameBadgeComponentModel.prototype.activated = function(context){
    //};

    //CCDemoNameBadgeComponentModel.prototype.attached = function(context){
    //};

    //CCDemoNameBadgeComponentModel.prototype.bindingsApplied = function(context){
    //};

    //CCDemoNameBadgeComponentModel.prototype.detached = function(context){
    //};

    return CCDemoNameBadgeComponentModel;
});