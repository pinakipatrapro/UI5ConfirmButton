sap.ui.define(
  ["sap/ui/core/Control",
  "sap/m/Text"
],
  function(Control,Text) {
    return Control.extend("pin.org.confirmButton.control.ConfirmButton",{
         metadata: {
              properties: {
                _confirmState: 	{type : "boolean", defaultValue : false},
                confirmText: 	{type : "string", defaultValue : ""}

              },
              aggregations: {
                primaryButton :  {type : "sap.m.Button", multiple: false},
                confirmButton :  {type : "sap.m.Button", multiple: false},
                rejectButton :  {type : "sap.m.Button", multiple: false}
              },
         },

         renderer: function (oRM, oControl) {
          let primaryButton = oControl.getAggregation('primaryButton');
          primaryButton.attachPress(function(e){
            this.setProperty('_confirmState',true);
          }.bind(oControl));
          primaryButton.setVisible(!oControl.getProperty('_confirmState'));

          let confirmButton = oControl.getAggregation('confirmButton');
          confirmButton.attachPress(function(e){
            this.setProperty('_confirmState',false);
          }.bind(oControl));
          confirmButton.setVisible(oControl.getProperty('_confirmState'));

          let rejectButton = oControl.getAggregation('rejectButton');
          rejectButton.attachPress(function(e){
            this.setProperty('_confirmState',false);
          }.bind(oControl));
          rejectButton.setVisible(oControl.getProperty('_confirmState'));

          let confirmText = new Text({
            text : oControl.getConfirmText(),
            visible : oControl.getProperty('_confirmState')
          });
          confirmText.addStyleClass('sapUiTinyMargin')

          oRM.write("<div");
          oRM.writeControlData(oControl);
          oRM.writeClasses();
          oRM.write(">");
          
          oRM.renderControl(primaryButton);
          oRM.renderControl(confirmText);
          oRM.renderControl(confirmButton);
          oRM.renderControl(rejectButton);

          oRM.write("</div>");

         },

         
    });
  }
);
