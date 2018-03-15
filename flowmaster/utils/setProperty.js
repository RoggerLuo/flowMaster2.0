export default ($scope) => {
    return function(property, shape) {
        var key = property.key;
        var newValue = property.value;
        var oldValue = shape.properties[key];


        if (newValue != oldValue) {
            var commandClass = ORYX.Core.Command.extend({
                construct: function() {
                    this.key = key;
                    this.oldValue = oldValue;
                    this.newValue = newValue;
                    this.shape = shape;
                    this.facade = $scope.editor;
                },
                execute: function() {
                    this.shape.setProperty(this.key, this.newValue);

                    this.facade.getCanvas().update();
                    this.facade.updateSelection();
                },
                rollback: function() {
                    this.shape.setProperty(this.key, this.oldValue);

                    this.facade.getCanvas().update();
                    this.facade.updateSelection();
                }
            });
            // Instantiate the class
            var command = new commandClass();

            // Execute the command
            $scope.editor.executeCommands([command]);


            $scope.editor.handleEvents({
                type: ORYX.CONFIG.EVENT_PROPWINDOW_PROP_CHANGED,
                elements: [shape],
                key: key
            });

            // Switch the property back to read mode, now the update is done
            property.mode = 'read';

            // Fire event to all who is interested
            // Fire event to all who want to know about this
            var event = {
                type: KISBPM.eventBus.EVENT_TYPE_PROPERTY_VALUE_CHANGED,
                property: property,
                oldValue: oldValue,
                newValue: newValue
            };
            KISBPM.eventBus.dispatch(event.type, event);
        } else {
            // Switch the property back to read mode, no update was needed
            property.mode = 'read';
        }
    }
}